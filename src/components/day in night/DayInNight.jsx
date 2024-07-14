import { ImageSlider } from "../ImageSlider";
import { data } from "./data";

const DayInNight = () => {
  return (
    <div
      className="relative h-auto w-screen flex flex-col p-8 sm:p-16"
      id={data.slug}
    >
      <h1 className="flex justify-center font-light text-4xl sm:text-6xl sm:mb-8 z-10">
        {data.title}
      </h1>
      <p>{data.description}</p>
      <ImageSlider name={data.images.name} max={data.images.max} />
    </div>
  );
};

export default DayInNight;
