import AboutSection from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import TourType from "@/components/TourType";
import WhyChoose from "@/components/WhyChooses";

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
