"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Fallback reviews in case API fails
const fallbackTestimonials = [
  {
    name: "Patient from Google",
    rating: 5,
    date: "Loading...",
    text: "Loading live reviews from Google. Please check back in a moment.",
    avatar: "G",
  },
];

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
  profilePhotoUrl?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-slate-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [testimonials, setTestimonials] = useState<Review[]>(fallbackTestimonials);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(5.0);

  // Fetch live reviews from Google
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();

        if (data.reviews && data.reviews.length > 0) {
          setTestimonials(data.reviews);
          if (data.rating) setRating(data.rating);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () =>
    goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((currentIndex + 1) % testimonials.length);

  // Show 1 card on mobile, 2 on md, 3 on lg
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return cards;
  };

  return (
    <section id="testimonials" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          {/* Dr. Anchal Photo */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <Image
                src="/anchal_photo.png"
                alt="Dr. Anchal Tyagi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            Patient Reviews
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            What Our Patients Say
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We&apos;re proud of the trust our patients place in us. Here&apos;s
            what they have to say about their experience.
          </p>

          {/* Google Rating Badge */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="https://g.page/r/CeJbUKqgcXFtEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <svg
                className="w-7 h-7"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  fill="#FFC107"
                />
                <path
                  d="M5.3 14.7l7.4 5.4C14.5 16 18.9 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 6.1 29.6 4 24 4 15.4 4 8.1 8.5 5.3 14.7z"
                  fill="#FF3D00"
                />
                <path
                  d="M24 44c5.4 0 10.2-1.8 14-5l-6.7-5.5c-2 1.5-4.6 2.5-7.3 2.5-6 0-11.1-4-12.9-9.5l-7.3 5.6C6.9 38.5 14.8 44 24 44z"
                  fill="#4CAF50"
                />
                <path
                  d="M44.5 20H24v8.5h11.8c-1 3-3.1 5.5-5.8 7l6.7 5.5C40.5 37.5 46 31 46 24c0-1.3-.2-2.7-.5-4z"
                  fill="#1976D2"
                />
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-slate-900">
                    {rating.toFixed(1)}
                  </span>
                  <div className="flex gap-0.5 ml-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-500">Google Reviews</p>
              </div>
            </a>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleCards().map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 min-h-[240px] flex flex-col ${
                  idx === 0 ? "" : idx === 1 ? "hidden md:block" : "hidden lg:block"
                }`}
              >
                {/* Google icon */}
                <div className="flex items-center justify-between mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.3 14.7l7.4 5.4C14.5 16 18.9 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 6.1 29.6 4 24 4 15.4 4 8.1 8.5 5.3 14.7z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M24 44c5.4 0 10.2-1.8 14-5l-6.7-5.5c-2 1.5-4.6 2.5-7.3 2.5-6 0-11.1-4-12.9-9.5l-7.3 5.6C6.9 38.5 14.8 44 24 44z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M44.5 20H24v8.5h11.8c-1 3-3.1 5.5-5.8 7l6.7 5.5C40.5 37.5 46 31 46 24c0-1.3-.2-2.7-.5-4z"
                      fill="#1976D2"
                    />
                  </svg>
                  <span className="text-xs text-slate-400">{t.date}</span>
                </div>

                {/* Name & Avatar */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {t.name}
                    </p>
                    <StarRating rating={t.rating} />
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  &quot;{t.text}&quot;
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Previous review"
            >
              <span className="material-icons text-lg">chevron_left</span>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-primary w-6"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Next review"
            >
              <span className="material-icons text-lg">chevron_right</span>
            </button>
          </div>
        </div>

        {/* CTA to Google Reviews */}
        <div className="text-center mt-10">
          <a
            href="https://g.page/r/CeJbUKqgcXFtEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <span className="material-icons text-lg">rate_review</span>
            Leave us a review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
