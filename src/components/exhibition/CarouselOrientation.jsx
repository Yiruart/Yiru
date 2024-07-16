import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "lib/utils";
import Image from "next/image";

export function CarouselOrientation({ name, max }) {
  let imgArr = [];
  for (let i = 1; i <= max; i++) {
    imgArr.push(`/images/${name}/${i}-min.jpg`);
  }
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full relative"
    >
      <div className="absolute top-[51.5%] left-16">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <CarouselContent className="w-[90%] ml-auto -mt-1 h-screen">
        {imgArr.map((item, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent
                  className={cn(
                    "relative flex h-[50vh] items-center justify-center p-6"
                  )}
                >
                  <Image src={item} fill className="object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
