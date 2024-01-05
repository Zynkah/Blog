"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselData } from "@/data/CarouselData";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { useState } from "react";


export default function HomeCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % CarouselData.length);
  };

  const handlePreviousClick = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + CarouselData.length) % CarouselData.length
    );
  };

  return (
    <div className="w-full max-w-5xl m-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: 4 }).map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 text-center"
              >
                <Link href={CarouselData[index]?.link}>
                  <div className="p-1">
                    <Card
                      className={`hover:underline decoration-sky-500 ${
                        isActive
                          ? "scale-100 bg-slate-700"
                          : "sm:scale-90 sm:blur-sm hover:blur-none"
                      }`}
                    >
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="h-[300px]">
                          <h2 className="text-lg">
                            {CarouselData[index]?.title}
                          </h2>
                          <p>{CarouselData[index]?.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div onClick={handlePreviousClick}>
          <CarouselPrevious />
        </div>
        <div onClick={handleNextClick}>
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
