import Image from "next/image";
import AboutImage1 from "@/public/img/logos/trip-best.png";
import AboutImage2 from "@/public/img/about/a1.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export function WhyChoose() {
  return (
    <div className="bg-[#f7f9fc] relative py-20 px-6 md:px-80 flex flex-col md:flex-row gap-20">
      {/* Left Side */}
      <div className="relative w-full">
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={AboutImage2}
            alt="Beautiful Destination"
            className="rounded-xl object-cover w-[700px] h-[600px]"
          />

          {/* Tripadvisor Badge */}
        </div>
        <div className="absolute top-1/5 left-[650px] bg-white rounded-lg shadow-lg flex flex-col items-center w-32">
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
        <div className="absolute bg-[#6cb015] left-[-100px] top-[55%] p-8 rounded-4xl">
          <span className="text-white font-bold text-6xl">+30</span><br/>
          <span className="text-white text-3xl"> YEARS OF <br/> EXPERIENCE </span>
        </div>
      </div>

      {/* Right Side */}
      <div className="space-y-6">
        <h6 className="text-[#6cb015] uppercase text-3xl tracking-wide font-semibold">
         Great experience
        </h6>
        <h2 className="text-5xl font-bold text-gray-800 leading-tight">
          Why choose us
        </h2>
        <p className="text-gray-600">
          We are a leading travel agency in Moliva with many years of experience, highly rated and appreciated by tourists.
        </p>

        {/* Features */}
        <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Leading travel agency in Moliva</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
             Top-rated agency in Moliva is renowned for exceptional service and unforgettable travel experiences.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

        {/* Button */}
        <button className="bg-[#6cb015] hover:bg-[#5aa012] text-white font-semibold px-6 py-3 rounded-full mt-4 transition-all duration-300">
          READ MORE →
        </button>
      </div>
    </div>
  );
}

export default WhyChoose;
