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
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

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
        <CarouselContent className="-ml-1 max-w-5xl">
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
                          ? "bg-slate-700"
                          : "sm:scale-90 sm:blur-sm hover:blur-none"
                      }`}
                    >
                      <Image
                        src={CarouselData[index].image}
                        width={700}
                        height={100}
                        alt="Picture of the author"
                        className="overflow-hidden rounded"
                      />
                      <CardContent className="flex aspect-square items-center justify-center">
                        <div className="h-[300px]">
                          <h2 className="text-2xl mt-2 font-bold">
                            {CarouselData[index]?.title}
                          </h2>
                          <ScrollArea className="h-4/5 w-full p-4">
                            <p>{CarouselData[index]?.description}</p>
                          </ScrollArea>
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
