import Image from "next/image";
import AboutImage1 from "@/public/img/logos/trip-best.png";
import AboutImage2 from "@/public/img/about/a2.jpg";

export function AboutSection() {
  return (
    <div className="bg-[#f7f9fc] relative py-20 px-6 md:px-80 flex flex-col md:flex-row gap-20">
      {/* Left Side */}
      <div className="relative w-full">
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={AboutImage2}
            alt="Beautiful Destination"
            className="rounded-xl object-cover "
          />

          {/* Tripadvisor Badge */}
        </div>
        <div className="absolute top-1/5 left-[350px] bg-white rounded-lg shadow-lg flex flex-col items-center w-32">
          <Image
            src={AboutImage1}
            alt="Tripadvisor Award"
            className="w-20 mb-2 pt-4"
          />
          <p className="bg-[#0a3e59] text-white left-20 font-medium px-2 py-1 rounded-b-lg w-full flex items-center justify-center">
            Tripadvisor
          </p>
        </div>

        {/* Vertical Text */}
        <div className="absolute left-[-200px] top-[50%] -translate-y-1/2 rotate-[-90deg] text-gray-400 tracking-wide font-medium">
          <span className="text-[#6cb015] font-bold">SINE 1993</span> -{" "}
          <span className="font-bold">31 YEARS</span> OF EXPERIENCE
        </div>
      </div>

      {/* Right Side */}
      <div className="space-y-6 px-20">
        <h6 className="text-[#6cb015] text-3xl uppercase tracking-wide font-semibold">
          About Us
        </h6>
        <h2 className="text-5xl font-bold text-gray-800 leading-tight">
          Moliva Travel Agency
        </h2>
        <p className="text-gray-600 text-xl">
          Moliva Travel Agency offers unique and memorable tours, providing rich
          experiences in the beautiful country of Moliva. With a professional
          and dedicated team, we are committed to bringing you wonderful, safe,
          and exciting journeys, helping you explore the beauty of the world.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
          <div className="flex items-center gap-2 text-2xl" >
            <span className="text-[#6cb015]">✔</span>
            <span>
              <strong>Great travel experiences</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <span className="text-[#6cb015]">💰</span>
            <span>
              <strong>Competitive pricing offers</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <span className="text-[#6cb015]">📅</span>
            <span>
              <strong>Flexible itinerary options</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <span className="text-[#6cb015]">🏆</span>
            <span>
              <strong>Leading industry reputation</strong>
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="bg-[#6cb015] hover:bg-[#5aa012] text-white font-semibold px-6 py-3 rounded-full mt-4 transition-all duration-300">
          READ MORE →
        </button>
      </div>
    </div>
  );
}

export default AboutSection;
