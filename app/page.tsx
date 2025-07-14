import AboutSection from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
