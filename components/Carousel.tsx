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
    <div className="w-full m-auto">
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
                className={`pl-1 md:basis-1/3 text-center ${isActive ? 'z-10' : 'z-0'} `}
              >
                <Link href={CarouselData[index]?.link}>
                  <div className="p-1">
                    <Card
                      className={`hover:bg-slate-300 hover:dark:bg-slate-600  border-slate-400 dark:border-slate-600 ${
                        isActive
                          ? "md:w-[400px] lg:w-[500px] xl:w-[600px] md:-ml-28"
                          : "md:scale-90 xl:scale-100 lg:mt-8 xl:mt-20 md:blur-sm hover:blur-none"
                      }`}
                    >
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="h-[400px]">
                          <h2 className="text-xl">
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
