import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Play } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const items: {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}[] = [
  {
    src: "/img/hero/h1.jpg",
    alt: "Travel Image 1",
    title: "Enjoy the beautiful and romantic nature",
    subtitle: "Explore Moliva",
  },
  {
    src: "/img/hero/h2.jpg",
    alt: "Travel Image 3",
    title: "Explore majestic mountain ranges",
    subtitle: "Explore Moliva",
  },
  {
    src: "/img/hero/h3.jpg",
    alt: "Travel Image 2",
    title: "Adventure AwaitsExperience the unique local culture",
    subtitle: "Explore Moliva",
  },
];

export function HeroCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
        Fade(),
      ]}
      // orientation="vertical"
      className="absolute z-0 w-full text-white  ">
      <CarouselContent className="">
        {items.map((item, index) => (
          <CarouselItem key={index} className="flex flex-col items-center ">
            <Card className="w-full h-[92vh] relative p-0">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
              />
              <CardContent className="absolute px-80 pt-40 bg-black/30 w-full h-full text-white">
                <h1 className="text-xl">{item.subtitle}</h1>
                <h1 className="text-[4rem] font-bold max-w-[800px]">
                  {item.title}
                </h1>
                <div className="flex items-center gap-8">
                  <Button variant="outline">
                    <span className="leading-4"> EXPLORE </span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="relative flex items-center justify-center">
                    <Button
                      size={"icon"}
                      className="p-8 rounded-full bg-green-700 z-1 hover:bg-green-700/50">
                      <Play className="h-8 w-8" />
                    </Button>
                    <div className="size-12 absolute inline-flex bg-green-400 animate-ping rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-40 left-1/5 transform -translate-x-1/2 flex gap-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
