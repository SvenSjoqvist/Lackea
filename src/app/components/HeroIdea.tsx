"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!isLoading) {
      // Initial animations
      gsap.fromTo(
        ".cover",
        { x: "0%" },
        { x: "100%", duration: 1.5, ease: "power2.out", delay: 0.5 }
      );

      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 1 }
      );

      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1.5 }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1.8 }
      );

      gsap.fromTo(
        ".hero-button",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 2.1 }
      );

      // Fixed parallax effect
      gsap.to(".hero-bg-inner", {
        y: "-20%",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Sparkle effect
      gsap.to(".hero-title", {
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
      });
    }
  }, [isLoading]);

  const handleImageLoad = () => {
    setIsLoading(false); // Trigger the animations when image is loaded
  };

  return (
    <div className="hero-section relative w-full h-screen overflow-hidden">
      {/* Background container with fixed height and overflow hidden */}
      <div className="hero-bg absolute top-0 left-0 w-full h-[120%] overflow-hidden">
        {/* Inner container for parallax movement */}
        <div className="hero-bg-inner relative w-full h-full">
          <Image
            src="/Hero.webp"
            alt="Car Painting Garage"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center"
            style={{ transform: 'scale(1.2)' }} // Slightly larger to prevent edges showing
            loading="lazy"
            onLoad={handleImageLoad} // Trigger animations after image load
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* Loading cover */}
      <div className="cover absolute top-0 left-0 w-full h-full bg-gray-900 z-20" />

      {/* Content */}
      <div className="hero-content relative w-full h-full flex flex-col justify-center items-center text-center z-30 px-4">
        <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 text-white opacity-0 max-w-4xl">
          Transform Your Car
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-200 opacity-0 max-w-2xl">
          Expert car painting and refinishing services to make your vehicle shine like new.
        </p>
        <button className="hero-button bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors opacity-0">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
