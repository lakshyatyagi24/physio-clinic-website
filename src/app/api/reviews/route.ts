import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const placeId = "ChIJD8w_3QYWDTkRWrxnCqQpDXs"; // HealRight Physiotherapy Clinic place ID
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!apiKey) {
      console.warn(
        "GOOGLE_PLACES_API_KEY not set. Using fallback reviews."
      );
      return NextResponse.json({ reviews: [], fallback: true });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

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

    // Transform Google reviews to our format and sort by date descending (newest first)
    const reviews = (data.result.reviews || [])
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
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
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
