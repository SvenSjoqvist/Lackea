"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Customer reviews data
const reviews = [
  {
    name: "Razan",
    text: "Lämnade min Tesla model 3 för lackering av bagageluckan. Tyckte att de gjorde ett jättefint jobb. De justerade även bagageluckan så att den inte slår igen på samma sätt. De tvättade även bilen in och utvändigt. +Bra service, bra kommunikation, snabba, gjorde det lilla extra.",
    stars: 5,
  },
  {
    name: "Jessica",
    text: "Lämnade in min lilla bil för att ta bort två relativt stora repor i lacken. Fick bra kontakt med personalen, han gick igenom bilen, ställde frågor, gav oss alternativ och sedan ett pris som lät rimligt. Olika betalningsalternativ finns. Hämtade bilen efter ca 1.5 veckor och den var i nyskick, så bra utförande! Rekommenderar absolut denna firma för lackering :)",
    stars: 5,
  },
  {
    name: "Amin",
    text: "Lämna in min bil med en skada på hela vänster sida, fick tillbaka bilen ny. Rekommenderar verkligen denna verkstaden och mycket bra service.",
    stars: 5,
  },
  {
    name: "Elias",
    text: "Väldigt nöjd kund här! Duktiga, snabba och samtidigt professionella i deras område. Rekommenderar starkt!",
    stars: 5,
  },
  {
    name: "Loren",
    text: "3e bilen jag lämnar in till dom. Mitt försäkringsbolag samarbetade tyvärr inte med dem. Jag fick ringa mitt försäkringsbolag för att göra ett undantag då jag vägrar lämna bilen i någon annans händer än lackea. Söker ni snabb, proffsig och sjukt bra resultat så ska ni vända er hit! Tack återigen och ser fram emot nästa besök!",
    stars: 5,
  },
  {
    name: "Kent",
    text: "Bra service till ett bra pris",
    stars: 5,
  },
  {
    name: "Tony",
    text: "Mycket trevliga o kanon jobb.",
    stars: 5,
  },
  {
    name: "Thomas",
    text: "Superbra, riktigt nöjd med resultatet",
    stars: 5,
  },
];

// AutoSlider Component
const AutoSlider = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // GSAP animation for sliding reviews
    gsap.fromTo(
      ".review-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Parallax effect for the background
    gsap.to(".slider-bg", {
      y: "-10%",
      scrollTrigger: {
        trigger: ".auto-slider",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [currentReview]);

  return (
    <div className="auto-slider relative w-full h-[500px] overflow-hidden bg-gray-900">
      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-10"></div>

      {/* Review content */}
      <div className="review-content absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-20 px-8">
        <div className="max-w-2xl mx-auto">
          {/* Swedish Title for Reviews */}
          <h2 className="text-3xl font-bold text-white mb-6">
            Kundrecensioner
          </h2>
          <p className="text-xl text-gray-200 mb-6">{reviews[currentReview].text}</p>
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(reviews[currentReview].stars)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
          </div>
          <p className="text-lg text-gray-300 font-semibold">
            – {reviews[currentReview].name}
          </p>
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentReview(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentReview ? "bg-blue-600" : "bg-gray-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;