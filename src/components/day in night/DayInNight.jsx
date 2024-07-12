import { data } from "./data";

const DayInNight = () => {
  return (
    <div className="relative h-auto w-screen flex flex-col p-8 sm:p-16">
      <h1 className="flex justify-center font-cardinal text-4xl sm:text-6xl italic mb-4 sm:mb-8 z-10">
        {data.title}
      </h1>
      <p>{data.description}</p>
    </div>
  );
};

export default DayInNight;
