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
import { cn } from "lib/utils";

export function ImageSlider({ name, max, ratio, basis }) {
  let imgArr = [];
  for (let i = 1; i <= max; i++) {
    imgArr.push(`/images/${name}/${i}-min.jpg`);
  }
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full px-4 sm:px-16 mt-8"
    >
      <CarouselContent>
        {imgArr.map((item, index) => (
          <CarouselItem
            key={index}
            className={cn("md:basis-1/2 lg:basis-1/3", basis && "lg:basis-1/4")}
          >
            <div className="p-1">
              <Card>
                <CardContent
                  className={cn(
                    "relative flex aspect-square items-center justify-center p-6",
                    ratio && "aspect-[3/4]"
                  )}
                >
                  <Image src={item} fill className="object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
