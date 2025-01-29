import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

// Dynamically load only the components below the fold
const Hero = dynamic(() => import("../components/HeroIdea"), { ssr: true });
const AboutUs = dynamic(() => import("../components/about"), { ssr: true });
const CTA = dynamic(() => import("../components/CTASection"), { ssr: true });
const AutoSlider = dynamic(() => import("../components/Slider"), { ssr: true });
const Brands = dynamic(() => import("../components/Brands"), { ssr: true });
const Process = dynamic(() => import("../components/Process"), { ssr: true });
const Contact = dynamic(() => import("../components/Contact"), { ssr: true });
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });

export default function Home() {
  return (
    <div className="w-screen h-screen">
      {/* Load Navbar and Hero synchronously */}
      <Navbar />
      <Hero />

      {/* Dynamically load the rest of the components */}
      <Suspense fallback={<div>Loading About Us...</div>}>
        <AboutUs />
      </Suspense>

      <Suspense fallback={<div>Loading CTA...</div>}>
        <CTA />
      </Suspense>

      <Suspense fallback={<div>Loading Slider...</div>}>
        <AutoSlider />
      </Suspense>

      <Suspense fallback={<div>Loading Brands...</div>}>
        <Brands />
      </Suspense>

      <Suspense fallback={<div>Loading Process...</div>}>
        <Process />
      </Suspense>

      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
