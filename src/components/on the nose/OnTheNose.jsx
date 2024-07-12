import { ImageSlider } from "../ImageSlider";
import { data } from "./data";

const OnTheNose = () => {
  return (
    <div className="relative h-auto w-screen flex flex-col p-8 sm:p-16">
      <h1 className="flex justify-center font-cardinal text-4xl sm:text-6xl italic mb-4 sm:mb-8 z-10">
        {data.title}
      </h1>
      <p>{data.description}</p>
      <ImageSlider name={data.images.name} max={data.images.max} />
    </div>
  );
};

export default OnTheNose;
