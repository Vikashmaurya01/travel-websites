import { UsersRound } from "lucide-react";
import Link from "next/link";

export function TourType() {
  return (
    <div className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Flexible Tours */}
        <div className="bg-[#6cb015] text-white rounded-3xl p-6 flex flex-col justify-between shadow-md">
          <div>
           
            <h6 className="mt-6 text-[33px] text-white">Flexible tours</h6>
            <h2 className="text-6xl font-bold mt-4">Explore your way</h2>
            <p className="mt-4 text-3xl">
              Explore Moliva your way with incredible trips and captivating experiences.
            </p>
          </div>
          <p className="mt-6 text-2xl">
            You need{" "}
            <Link href="/">
              <span className="underline underline-offset-4 hover:text-green-100">advice?</span>
            </Link>
          </p>
        </div>

        {/* Group Tours */}
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between shadow-md">
          <div>
            <div className="bg-[#6cb015] rounded-full p-3 w-fit">
              <UsersRound className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mt-4">Group tours</h2>
            <h6 className="mt-6 text-[33px] text-gray-600">
              Join our group tours to explore stunning destinations with like-minded travelers. Fun and camaraderie.
            </h6>
          </div>
          <p className="mt-6 text-3xl font-medium text-[#6cb015]">
            <Link href="/">View Tour →</Link>
          </p>
        </div>

        {/* Private Tours */}
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between shadow-md">
          <div>
            <div className="bg-[#6cb015] h-15 w-fit rounded-full p-3">
              <UsersRound className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mt-4">Private tours</h2>
          <h6 className="mt-6 text-[33px] text-gray-600">
              Enjoy personalized experiences with our private tours. Perfect for families, couples, or friends seeking exclusivity.
            </h6>
          </div>
          <p className="mt-6 text-3xl font-medium text-[#6cb015]">
            <Link href="/">View Tour →</Link>
          </p>
        </div>

        {/* Tailor-Made Tours */}
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between shadow-md">
          <div>
            <div className="bg-[#6cb015] rounded-full p-3 w-fit">
              <UsersRound className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mt-4">Tailor-Made tours</h2>
            <h6 className="mt-6 text-[33px] text-gray-600">
              Customize your dream vacation with our tailor-made tours. Create unique itineraries that suit your interests and schedule.
            </h6>
          </div>
          <p className="mt-6 text-3xl font-medium text-[#6cb015]">
            <Link href="/">Contact Us →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TourType;
