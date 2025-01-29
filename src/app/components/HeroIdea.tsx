"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("hero"); // Access translations for the 'hero' section

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!isLoading) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".cover",
        { x: "0%" },
        { x: "100%", duration: 1.5, ease: "power2.out" }
      )
        .fromTo(
          ".hero-content",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "-=1"
        )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          ".hero-button",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.7"
        );

      ScrollTrigger.create({
        animation: gsap.to(".hero-bg-inner", { y: "-20%" }),
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      });
    }
  }, [isLoading]);

  const handleImageLoad = () => {
    setIsLoading(false); // Trigger animations when the image is loaded
  };

  return (
    <div className="hero-section relative w-full h-screen overflow-hidden font-sans">
      {/* Background container */}
      <div className="hero-bg absolute top-0 left-0 w-full h-[120%] overflow-hidden">
        <div className="hero-bg-inner relative w-full h-full">
          <Image
            src="https://res.cloudinary.com/dwji0hjcg/image/upload/c_fill,w_1920,h_1080,f_auto,q_auto/Herotest_lp7yp4"
            alt="Car Painting Garage"
            fill
            priority
            quality={70}
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dwji0hjcg/image/upload/e_blur:2000,q_1,w_20/Herotest_lp7yp4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
            style={{
              transform: "scale(1.2)",
              willChange: "transform",
            }}
            onLoad={handleImageLoad}
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Loading cover */}
      <div className="cover absolute top-0 left-0 w-full h-full bg-gray-900 z-20" />

      {/* Content */}
      <div className="hero-content relative w-full h-full flex flex-col justify-end items-center text-center z-30 px-4 pb-20">
        <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 text-white opacity-0 max-w-4xl">
          {t("title")}
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-200 opacity-0 max-w-2xl">
          {t("subtitle")}
        </p>
        <Link href="#kontakt" passHref>
          <button className="hero-button bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 mt-4 sm:mt-0 mx-4 sm:mx-0 text-center">
            {t("button")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
