import { ImageSlider } from "../ImageSlider";
import { data } from "./data";

const No60 = () => {
  return (
    <div
      className="relative h-auto w-screen flex flex-col p-8 sm:p-16 mt-24"
      id={data.slug}
    >
      <h1 className="flex justify-center font-light text-4xl sm:text-6xl mb-10 z-10">
        {data.title}
      </h1>
      {data.description.map((p) => (
        <div className="sm:px-10">
          <p>{p}</p>
          <div className="h-2"></div>
        </div>
      ))}
      <ImageSlider name={data.images.name} max={data.images.max} />
    </div>
  );
};

export default No60;
