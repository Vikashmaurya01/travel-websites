"use client";

import { HeroCarousel } from "./hero/hero-carousel";
import { Card, CardContent } from "./ui/card";

export const HeroSection = () => {
  return (
    <section className="flex flex-col">
      <div className="relative w-full h-[91vh]">
        <HeroCarousel />
      </div>
      <Card className="z-[1] px-40">
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-[3rem] font-bold">+250</h1>
            <h1 className="w-1/2">Attractive tours around Moliva</h1>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-[3rem] font-bold">+1.1M</h1>
            <h1 className="w-1/2">Clients from around the world </h1>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-[3rem] font-bold">4.9</h1>
            <div>
              <h1>{"⭐️".repeat(5)}</h1>
              <h1 className="w-1/2">Attractive tours around Moliva</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-[3rem] font-bold">+98%</h1>
            <h1 className="w-1/2">Our clients are satisfied</h1>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
