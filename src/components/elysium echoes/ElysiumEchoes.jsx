import React from "react";
import Video from "./Video";
import Desc from "./Desc";
import { ImageSlider } from "../ImageSlider";

const data = {
  name: "elysium_echoes",
  max: 7,
};

const ElysiumEchoes = () => {
  return (
    <>
      <section
        className="mt-36 sm:mt-40 relative flex justify-center"
        id="elysium_echoes"
      >
        <Desc />
        <Video />
      </section>
      <div className="px-8 sm:px-16 sm:mb-20 -mt-24 lg:mt-24">
        <ImageSlider name={data.name} max={data.max} />
      </div>
    </>
  );
};

export default ElysiumEchoes;
