"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after content loads or after max 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 1800);

    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500">
      {/* Logo */}
      <div className="relative mb-6 animate-pulse">
        <Image
          src="/logo.png"
          alt="HealRight Physiotherapy"
          width={80}
          height={80}
          className="rounded-xl"
        />
      </div>

      {/* Spinner */}
      <div className="relative w-12 h-12 mb-6">
        <div className="absolute inset-0 border-4 border-slate-200 rounded-full" />
        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>

      {/* Text */}
      <p className="text-primary font-semibold text-lg tracking-wide">
        HealRight Physiotherapy
      </p>
      <p className="text-slate-400 text-sm mt-1">
        Restore Motion, Reclaim Life
      </p>
    </div>
  );
}
