import Image from "next/image";
import AboutImage1 from '@/public/img/logos/trip-best.png';
import AboutImage2 from '@/public/img/about/a2.jpg';

export function AboutSection() {
  return (
    <div className="bg-[#f7f9fc] py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Left Side */}
      <div className="relative w-full md:w-1/2">
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <Image
            src={AboutImage2}
            alt="Beautiful Destination"
            className="rounded-xl object-cover w-full h-auto"
          />
          
          {/* Tripadvisor Badge */}
          <div className="absolute top-8 right-8 bg-white rounded-lg shadow-lg p-3 flex flex-col items-center w-32">
            <Image
              src={AboutImage1}
              alt="Tripadvisor Award"
              className="w-20 mb-2"
            />
            <p className="bg-[#0a3e59] text-white text-xs left-20 font-medium px-2 py-1 rounded">
              Tripadvisor
            </p>
          </div>
        </div>

        {/* Vertical Text */}
        <div className="absolute left-[-150px] top-[50%] -translate-y-1/2 rotate-[-90deg] text-gray-400 tracking-wide text-sm font-medium">
          <span className="text-[#6cb015] font-bold">SINE 1993</span> - <span className="font-bold">31 YEARS</span> OF EXPERIENCE
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 space-y-6">
        <h6 className="text-[#6cb015] text-sm uppercase tracking-wide font-semibold">About Us</h6>
        <h2 className="text-3xl font-bold text-gray-800 leading-tight">Moliva Travel Agency</h2>
        <p className="text-gray-600">
          Moliva Travel Agency offers unique and memorable tours, providing rich experiences
          in the beautiful country of Moliva. With a professional and dedicated team, we are
          committed to bringing you wonderful, safe, and exciting journeys, helping you explore
          the beauty of the world.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-[#6cb015]">✔</span>
            <span><strong>Great travel experiences</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#6cb015]">💰</span>
            <span><strong>Competitive pricing offers</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#6cb015]">📅</span>
            <span><strong>Flexible itinerary options</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#6cb015]">🏆</span>
            <span><strong>Leading industry reputation</strong></span>
          </div>
        </div>

        {/* Button */}
        <button className="bg-[#6cb015] hover:bg-[#5aa012] text-white font-semibold text-sm px-6 py-3 rounded-full mt-4 transition-all duration-300">
          READ MORE →
        </button>
      </div>
    </div>
  );
}

export default AboutSection;
