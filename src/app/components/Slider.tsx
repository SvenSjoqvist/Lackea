"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";

// Type definition for review items
interface Review {
  text: string;
  name: string;
  stars: number;
}

// AutoSlider Component
const AutoSlider = () => {
  const t = useTranslations("autoSlider");
  const [currentReview, setCurrentReview] = useState(0);

  // Type the reviews array
  const reviews: Review[] = t.raw("reviews");

  useEffect(() => {
    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    // GSAP animation for sliding reviews
    gsap.fromTo(
      ".review-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, [currentReview]);

  return (
    <div className="auto-slider relative w-full h-[500px] overflow-hidden bg-gray-900">
      {/* Review content */}
      <div className="review-content absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-8">
        <div className="max-w-2xl mx-auto">
          {/* Title for Reviews */}
          <h2 className="text-3xl font-bold text-white mb-6">
            {t("kundrecensioner")}
          </h2>
          <p className="text-xl text-gray-200 mb-6">{reviews[currentReview].text}</p>
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(reviews[currentReview].stars)].map((_, i: number) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
          </div>
          <p className="text-lg text-gray-300 font-semibold">
            – {reviews[currentReview].name}
          </p>
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {reviews.map((_, i: number) => (
          <button
            key={i}
            onClick={() => setCurrentReview(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentReview ? "bg-blue-600" : "bg-gray-700"
            }`}
            aria-label={`Go to slide ${i + 1}`} // Accessible name for screen readers
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
