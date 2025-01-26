"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import Image from "next/image";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Simulate a loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Animation when loading is complete
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

      // Additional animations for a more dynamic effect
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

      // Background image parallax effect
      gsap.to(".hero-bg", {
        y: "-20%",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Sparkle effect for the title
      gsap.to(".hero-title", {
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
      });
    }
  }, [isLoading]);

  return (
        <>
          <div className="hero-section relative w-screen min-h-screen h-screen pt-20 overflow-hidden">
            {/* Background image with parallax effect using next/image */}
            <div className="hero-bg absolute top-0 left-0 w-full h-full z-0">
              <Image
                src="/hero.jpg" // Replace with your image path
                alt="Car Painting Garage"
                fill
                priority
                className="object-cover object-bottom" // Adjusted here
              />
            </div>

            {/* Overlay for better text visibility */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

            {/* Cover div that will slide out */}
            <div className="cover absolute top-0 left-0 w-full h-full bg-gray-900 z-20"></div>

            {/* Hero content */}
            <div className="hero-content relative w-full h-full flex flex-col justify-center items-center text-center z-30">
              <h1 className="hero-title text-6xl font-bold mb-6 text-white">
                Transform Your Car
              </h1>
              <p className="hero-subtitle text-2xl mb-8 text-gray-200">
                Expert car painting and refinishing services to make your vehicle shine like new.
              </p>
              <button className="hero-button bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </>
  );
};

export default Hero;