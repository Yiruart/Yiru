import React from "react";
import { CarouselOrientation } from "./CarouselOrientation";
import { ImageSlider } from "../ImageSlider";
import Desc from "./Desc";

const data = {
  name: "exhibition",
  max: 12,
};

const Exhibition = () => {
  return (
    <div className="w-screen h-screen sm:grid grid-cols-5 bg-black">
      <div className="col-span-2">
        <Desc />
      </div>
      <div className="hidden sm:block h-screen col-span-3">
        <CarouselOrientation name={data.name} max={data.max} />
      </div>
      <div className="sm:hidden h-screen col-span-3">tbc</div>
    </div>
  );
};

export default Exhibition;
