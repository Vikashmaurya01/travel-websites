import AboutSection from "@/components/AboutSection";
import TourType from "@/components/TourType";
import WhyChoose from "@/components/WhyChooses";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* <Image src="/img/hero/h1.jpg" alt="Homepage Image" fill className="" /> */}
      <AboutSection />
      <TourType />
      <WhyChoose />
    </div>
  );
}
