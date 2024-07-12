import dynamic from "next/dynamic";
import { Suspense } from "react";

const data = {
  title: "01. CHAOS",
  description:
    "A human being can be seen as the sum total of their relationships, existing within a complex web of interactions that constantly influence and shape their identity. This intricate system of relationships impacts us continuously, and we reciprocate these effects in various ways. Through the dynamics of loving and being loved, drawing close and pushing away, inflicting harm and offering care, we continuously construct and reconstruct ourselves. This ongoing process of building and renewing our sense of self is a fundamental aspect of social existence. Ultimately, the navigation of these relational dynamics is an enduring challenge and essential feature of life within any society.",
  list: [
    { name: "Four People", src: "" },
    { name: "Web", src: "" },
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
      <div className="flex flex-col items-center justify-center sm:flex-row w-full gap-8">
        {/* first row */}
        <div className="relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40">
          <ul className="flex gap-x-2 text-3xl font-medium font-cardinal mb-4">
            <li>Four People /</li>
            <li>Web /</li>
            <li>Bone</li>
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
