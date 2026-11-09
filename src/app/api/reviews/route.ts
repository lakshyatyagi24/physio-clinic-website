import { NextResponse } from "next/server";

// Don't prerender at build time: a failed build-time fetch would get cached
// and served as an empty list. Successful responses are cached at the CDN instead.
export const dynamic = "force-dynamic";

const SUCCESS_CACHE = "public, s-maxage=3600, stale-while-revalidate=86400";
const FAILURE_CACHE = "no-store";

// Clinic location (used to bias the place search)
const LAT = 28.6207863;
const LNG = 77.4342724;
const SEARCH_QUERY = "HealRight Physiotherapy";

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
  profilePhotoUrl?: string;
}

interface ReviewsResult {
  reviews: Review[];
  rating?: number;
  totalReviews?: number;
}

function initials(name: string): string {
  return (name || "G")
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function finalize(
  items: (Review & { timestamp: number })[]
): Review[] {
  return items
    .filter((r) => r.text && r.text.trim().length > 0)
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(({ timestamp: _ts, ...rest }) => rest)
    .slice(0, 6);
}

/**
 * Places API (New) — https://places.googleapis.com/v1
 * Requires "Places API (New)" enabled on the key's GCP project.
 */
async function fetchFromPlacesNew(apiKey: string): Promise<ReviewsResult> {
  let placeId = process.env.GOOGLE_PLACE_ID;

  if (!placeId) {
    const searchRes = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "places.id",
        },
        body: JSON.stringify({
          textQuery: SEARCH_QUERY,
          locationBias: {
            circle: { center: { latitude: LAT, longitude: LNG }, radius: 500 },
          },
          maxResultCount: 1,
        }),
        next: { revalidate: 3600 },
      }
    );
    const searchData = await searchRes.json();
    if (!searchRes.ok) {
      throw new Error(
        `searchText ${searchRes.status}: ${searchData?.error?.message ?? "unknown"}`
      );
    }
    placeId = searchData?.places?.[0]?.id;
    if (!placeId) throw new Error("searchText: no place found");
  }

  const detailsRes = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: 3600 },
    }
  );
  const details = await detailsRes.json();
  if (!detailsRes.ok) {
    throw new Error(
      `place details ${detailsRes.status}: ${details?.error?.message ?? "unknown"}`
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reviews = finalize(
    (details.reviews || []).map((r: any) => {
      const name = r.authorAttribution?.displayName || "Google user";
      return {
        name,
        rating: r.rating ?? 5,
        text: r.text?.text || r.originalText?.text || "",
        date:
          r.relativePublishTimeDescription ||
          formatDate(Date.parse(r.publishTime) / 1000),
        timestamp: Date.parse(r.publishTime) || 0,
        avatar: initials(name),
        profilePhotoUrl: r.authorAttribution?.photoUri,
      };
    })
  );

  return {
    reviews,
    rating: details.rating,
    totalReviews: details.userRatingCount,
  };
}

/**
 * Legacy Places API — kept as a fallback for keys that only have it enabled.
 */
async function fetchFromPlacesLegacy(apiKey: string): Promise<ReviewsResult> {
  let placeId = process.env.GOOGLE_PLACE_ID;

  if (!placeId) {
    const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
      SEARCH_QUERY
    )}&inputtype=textquery&locationbias=circle:500@${LAT},${LNG}&fields=place_id&key=${apiKey}`;
    const searchRes = await fetch(searchUrl, { next: { revalidate: 3600 } });
    const searchData = await searchRes.json();
    if (searchData.status !== "OK") {
      throw new Error(
        `findplace ${searchData.status}: ${searchData.error_message ?? ""}`
      );
    }
    placeId = searchData.candidates?.[0]?.place_id;
    if (!placeId) throw new Error("findplace: no place found");
  }

  const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&reviews_sort=newest&key=${apiKey}`;
  const detailsRes = await fetch(detailsUrl, { next: { revalidate: 3600 } });
  const data = await detailsRes.json();
  if (data.status !== "OK") {
    throw new Error(`details ${data.status}: ${data.error_message ?? ""}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reviews = finalize(
    (data.result.reviews || []).map((r: any) => ({
      name: r.author_name,
      rating: r.rating,
      text: r.text,
      date: formatDate(r.time),
      timestamp: r.time,
      avatar: initials(r.author_name),
      profilePhotoUrl: r.profile_photo_url,
    }))
  );

  return {
    reviews,
    rating: data.result.rating,
    totalReviews: data.result.user_ratings_total,
  };
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey || apiKey.startsWith("your_")) {
    console.warn("GOOGLE_PLACES_API_KEY not set. Using fallback reviews.");
    return NextResponse.json(
      { reviews: [], fallback: true, reason: "GOOGLE_PLACES_API_KEY not set" },
      { headers: { "Cache-Control": FAILURE_CACHE } }
    );
  }

  const errors: string[] = [];

  for (const source of [fetchFromPlacesNew, fetchFromPlacesLegacy]) {
    try {
      const result = await source(apiKey);
      if (result.reviews.length > 0) {
        return NextResponse.json(
          { ...result, fallback: false },
          { headers: { "Cache-Control": SUCCESS_CACHE } }
        );
      }
      errors.push(`${source.name}: no reviews returned`);
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      console.error(`Reviews ${source.name} failed:`, msg);
      errors.push(`${source.name}: ${msg}`);
    }
  }

  return NextResponse.json(
    { reviews: [], fallback: true, reason: errors.join(" | ") },
    { headers: { "Cache-Control": FAILURE_CACHE } }
  );
}

function formatDate(timestamp: number): string {
  if (!timestamp || Number.isNaN(timestamp)) return "";
  const date = new Date(timestamp * 1000);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}
