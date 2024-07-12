import dynamic from "next/dynamic";
import { Suspense } from "react";

const data = {
  title: "01. Chaos",
  description:
    "The concept of planned obsolescence, traditionally associated with industry, can intriguingly be extended to biology. In this context, life itself can be viewed as the planned obsolescence of genes, where biological processes are designed to phase out certain genetic materials over time. The pursuit of immortality thus becomes a complex interplay, akin to a tug-of-war, with perpetually evolving genes striving for longevity. This raises a profound question: does immortality pertain to the extended lifespan of individual organisms, or is it fundamentally about the perpetuation and continuous evolution of genetic information across generations? The answer to this query could redefine our understanding of life, longevity, and the ultimate goals of biological existence.",
  list: [
    { name: "Four People / ", src: "" },
    { name: "Web / ", src: "" },
    { name: "Bone", src: "" },
  ],
};

const Dog = dynamic(
  () => import("@/components/canvas/Models").then((mod) => mod.Dog),
  { ssr: false }
);

const View = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex w-screen h-full flex-col items-center justify-center">
        Loading...
      </div>
    ),
  }
);

const Common = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.Common),
  { ssr: false }
);

const Chaos = () => {
  return (
    <div className="h-screen w-screen flex flex-col px-16">
      <h1 className="mt-8 flex justify-center font-cardinal text-6xl italic">
        {data.title}
      </h1>
      <div className="flex flex-col items-center justify-center sm:flex-row-reverse w-full gap-8">
        {/* first row */}
        <div className="relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40">
          <ul className="flex gap-x-2 text-3xl font-medium font-cardinal mb-4">
            {data.list.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ul>
          <p>{data.description}</p>
        </div>
        <div className="relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40">
          <View orbit className="relative h-full sm:h-48 sm:w-full">
            <Suspense fallback={null}>
              <Dog
                scale={2}
                position={[0, -1.6, 0]}
                rotation={[0.0, -0.3, 0]}
              />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>
    </div>
  );
};

export default Chaos;
