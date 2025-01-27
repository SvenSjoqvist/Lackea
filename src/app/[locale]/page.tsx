import AboutUsSection from "../components/about";
import BrandsSection from "../components/Brands";
import Contact from "../components/Contact";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Hero from "../components/HeroIdea";
import Navbar from "../components/Navbar";
import ProcessSection from "../components/Process";
import AutoSlider from "../components/Slider";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Hero />
      <AboutUsSection />
      <CTASection />
      <AutoSlider />
      <BrandsSection />
      <ProcessSection />
      <Contact />
      <Footer />
</div>
  )
}