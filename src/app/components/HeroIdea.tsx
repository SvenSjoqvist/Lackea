"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGsapRegistered, setIsGsapRegistered] = useState(false);

  useEffect(() => {
    // Register GSAP plugin only once on client side
    if (typeof window !== 'undefined' && !isGsapRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      setIsGsapRegistered(true);
    }

    const init = async () => {
      try {
        // Load image and set loading state
        const imagePromise = new Promise((resolve) => {
          const img = new window.Image();
          img.src = '/Herotest.webp';
          img.onload = resolve;
        });

        await imagePromise;
        setIsLoading(false);

        // Run animations after image is loaded
        if (isGsapRegistered) {
          const tl = gsap.timeline({
            defaults: { 
              duration: 0.8,
              ease: "power2.out"
            }
          });

          tl.fromTo(".cover", 
            { x: "0%" }, 
            { x: "100%" }
          ).fromTo(".hero-content", 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0 }, 
            "-=0.5"
          );

          ScrollTrigger.create({
            animation: gsap.to(".hero-bg-inner", { y: "-10%" }),
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          });
        }
      } catch (error) {
        console.error('Failed to initialize:', error);
        setIsLoading(false);
      }
    };

    init();

    return () => {
      if (isGsapRegistered) {
        ScrollTrigger.getAll().forEach(t => t.kill());
      }
    };
  }, [isGsapRegistered]);

  return (
    <section className="hero-section relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <div className="hero-bg absolute top-0 left-0 w-full h-[120%] overflow-hidden">
        <div className="hero-bg-inner relative w-full h-full">
          {/* Desktop Image */}
          <Image
            src="/Herotest.webp"
            alt="Car Painting Garage"
            fill
            priority
            quality={75}
            sizes="(min-width: 1024px) 100vw, (min-width: 768px) 100vw, 100vw"
            className="object-cover object-center hidden lg:block"
            style={{
              transform: 'scale(1.1)',
              willChange: 'transform',
            }}
          />
          
          {/* Tablet Image */}
          <Image
            src="/Hero-tablet.webp"
            alt="Car Painting Garage"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover object-center hidden md:block lg:hidden"
            style={{
              transform: 'scale(1.1)',
              willChange: 'transform',
            }}
          />
          
          {/* Mobile Image */}
          <Image
            src="/Hero-mobile.webp"
            alt="Car Painting Garage"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover object-center block md:hidden"
            style={{
              transform: 'scale(1.1)',
              willChange: 'transform',
            }}
          />
        </div>
      </div>

      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 z-10"
        style={{ willChange: 'opacity' }}
      />

      {/* Loading cover */}
      {isLoading && (
        <div className="cover absolute inset-0 bg-gray-900 z-20 transform" />
      )}

      {/* Content */}
      <div className="hero-content absolute inset-0 flex flex-col justify-center items-center text-center z-30 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white max-w-4xl">
          Transform Your Car
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
          Expert car painting and refinishing services to make your vehicle shine like new.
        </p>
        <button 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          style={{ touchAction: 'manipulation' }}
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default React.memo(Hero);
