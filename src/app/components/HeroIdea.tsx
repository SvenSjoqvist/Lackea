"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("hero"); // Access the translations for the 'hero' section

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!isLoading) {
      // Batch animations for better performance
      const tl = gsap.timeline();
      
      tl.fromTo(".cover", 
        { x: "0%" }, 
        { x: "100%", duration: 1.5, ease: "power2.out" }
      )
      .fromTo(".hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
        "-=1"
      )
      .fromTo(".hero-title",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.7"
      )
      .fromTo(".hero-button",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.7"
      );

      // Parallax effect
      ScrollTrigger.create({
        animation: gsap.to(".hero-bg-inner", { y: "-20%" }),
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      });

      // Optimized sparkle effect with reduced properties
      gsap.to(".hero-title", {
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        textShadow: "0 0 10px rgba(255,255,255,0.8)",
      });
    }
  }, [isLoading]);

  const handleImageLoad = () => {
    setIsLoading(false); // Trigger the animations when image is loaded
  };

  return (
    <div className="hero-section relative w-full h-screen overflow-hidden">
      {/* Background container */}
      <div className="hero-bg absolute top-0 left-0 w-full h-[120%] overflow-hidden">
        <div className="hero-bg-inner relative w-full h-full">
          <Image
            src="https://res.cloudinary.com/dwji0hjcg/image/upload/f_auto,q_auto/Herotest_lp7yp4"
            alt="Car Painting Garage"
            fill
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJyEkMj84OC8xOi8rLCpCREJFNS01QlVCX2JfYFhtYHR7em9zdXL/2wBDARUXFx4aHR4eHXJCOEJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            sizes="100vw"
            className="object-cover object-center"
            style={{ 
              transform: 'scale(1.2)',
              willChange: 'transform'
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
          <button className="hero-button bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors opacity-0">
            {t('button')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;