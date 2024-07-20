import React from "react";
import { CarouselOrientation } from "./CarouselOrientation";
import Desc from "./Desc";

const data = {
  name: "exhibition",
  max: 11,
};

const Exhibition = () => {
  return (
    <div className="w-screen h-fit sm:h-screen sm:grid grid-cols-5 bg-black">
      <div className="col-span-2">
        <Desc />
      </div>
      <div className="hidden sm:block h-screen col-span-3">
        <CarouselOrientation name={data.name} max={data.max} />
      </div>
    </div>
  );
};

export default Exhibition;
