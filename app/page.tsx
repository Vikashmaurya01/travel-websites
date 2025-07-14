import AboutSection from "@/components/AboutSection";
import TourType from "@/components/TourType";
import WhyChoose from "@/components/WhyChooses";

import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <HeroSection />
      <AboutSection />
      <TourType />
      <WhyChoose />
    </div>
  );
}
