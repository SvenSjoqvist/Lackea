import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Import the Navbar and Hero statically as you don't want them to be lazy-loaded
import Navbar from "../components/Navbar";
import Hero from "../components/HeroIdea";

// Dynamically import the other components
const AboutUsSection = dynamic(() => import("../components/about"));
const BrandsSection = dynamic(() => import("../components/Brands"));
const Contact = dynamic(() => import("../components/Contact"));
const CTASection = dynamic(() => import("../components/CTASection"));
const Footer = dynamic(() => import("../components/Footer"));
const ProcessSection = dynamic(() => import("../components/Process"));
const AutoSlider = dynamic(() => import("../components/Slider"));

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Hero />
      
      {/* Dynamically load the remaining sections */}
      <Suspense fallback={<div>Loading...</div>}>
        <AboutUsSection />
        <CTASection />
        <AutoSlider />
        <BrandsSection />
        <ProcessSection />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
