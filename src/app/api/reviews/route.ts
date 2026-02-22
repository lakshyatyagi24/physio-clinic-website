import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!apiKey) {
      console.warn(
        "GOOGLE_PLACES_API_KEY not set. Using fallback reviews."
      );
      return NextResponse.json({ reviews: [], fallback: true });
    }

    // Use Nearby Search with coordinates instead of Place ID
    const lat = 28.6207863;
    const lng = 77.4342724;
    const radius = 50; // 50 meters

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&name=HealRight&key=${apiKey}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("Google Places API error:", response.status);
      return NextResponse.json({ reviews: [], fallback: true });
    }

    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Google Places API status:", data.status);
      return NextResponse.json({ reviews: [], fallback: true });
    }

    if (!data.results || data.results.length === 0) {
      console.warn("No results found in nearby search");
      return NextResponse.json({ reviews: [], fallback: true });
    }

    // Get the first result (most relevant match)
    const placeId = data.results[0].place_id;
    const businessRating = data.results[0].rating;
    const businessReviewCount = data.results[0].user_ratings_total;

    // Now fetch detailed reviews using the found Place ID
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

    const detailsResponse = await fetch(detailsUrl, {
      next: { revalidate: 3600 },
    });

    if (!detailsResponse.ok) {
      console.error("Google Places Details API error:", detailsResponse.status);
      return NextResponse.json({ reviews: [], fallback: true });
    }

    const detailsData = await detailsResponse.json();

    if (detailsData.status !== "OK") {
      console.error("Google Places Details API status:", detailsData.status);
      return NextResponse.json({ reviews: [], fallback: true });
    }

    // Transform Google reviews to our format and sort by date descending (newest first)
    const reviews = (detailsData.result.reviews || [])
      .map((review: any) => ({
        name: review.author_name,
        rating: review.rating,
        text: review.text,
        date: formatDate(review.time),
        timestamp: review.time, // Keep original timestamp for sorting
        avatar: review.author_name
          .split(" ")
          .map((n: string) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2),
        profilePhotoUrl: review.profile_photo_url,
      }))
      .sort((a: any, b: any) => b.timestamp - a.timestamp) // Sort by timestamp descending
      .map(({ timestamp, ...rest }: any) => rest) // Remove timestamp from final output
      .slice(0, 6); // Get top 6 reviews

    return NextResponse.json({
      reviews,
      fallback: false,
      rating: detailsData.result.rating || businessRating,
      totalReviews: detailsData.result.user_ratings_total || businessReviewCount,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json({
      reviews: [],
      fallback: true,
      error: "Failed to fetch reviews",
    });
  }
}

function formatDate(timestamp: number): string {
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
