"use client";

import Header from "@/components/Header";
import Heading from "@/components/home/Heading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Chaos = dynamic(
  () => import("@/components/canvas/Examples").then((mod) => mod.Chaos),
  { ssr: false }
);
const Dog = dynamic(
  () => import("@/components/canvas/Examples").then((mod) => mod.Dog),
  { ssr: false }
);
const Duck = dynamic(
  () => import("@/components/canvas/Examples").then((mod) => mod.Duck),
  { ssr: false }
);
const View = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex w-screen flex-col items-center justify-center">
        Loading...
      </div>
    ),
  }
);

const Common = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.Common),
  { ssr: false }
);

export default function Page() {
  return (
    <div className="w-screen">
      <Header />
      {/* first screen */}
      <div className="relative w-full h-screen bg-black">
        <Heading />
        <View className="h-full w-full">
          <Suspense fallback={null}>
            <Chaos position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
          </Suspense>
        </View>
      </div>

      <h1 className=" text-5xl">Ⅰ. Chaos</h1>

      <div className="mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5">
        {/* first row */}
        <div className="relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40">
          <h2 className="mb-3 text-3xl font-bold leading-none text-gray-800">
            Events are propagated
          </h2>
          <p className="mb-8 text-gray-600">
            Drag, scroll, pinch, and rotate the canvas to explore the 3D scene.
          </p>
        </div>
        <div className="relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40">
          <View orbit className="relative h-full  sm:h-48 sm:w-full">
            <Suspense fallback={null}>
              <Dog
                scale={2}
                position={[0, -1.6, 0]}
                rotation={[0.0, -0.3, 0]}
              />
              <Common color={"lightpink"} />
            </Suspense>
          </View>
        </div>
        {/* second row */}
        <div className="relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40">
          <View
            orbit
            className="relative h-full animate-bounce sm:h-48 sm:w-full"
          >
            <Suspense fallback={null}>
              <Duck route="/blob" scale={2} position={[0, -1.6, 0]} />
              <Common color={"lightblue"} />
            </Suspense>
          </View>
        </div>
        <div className="w-full p-6 sm:w-1/2">
          <h2 className="mb-3 text-3xl font-bold leading-none text-gray-800">
            Dom and 3D are synchronized
          </h2>
          <p className="mb-8 text-gray-600">
            3D Divs are renderer through the View component. It uses gl.scissor
            to cut the viewport into segments. You tie a view to a tracking div
            which then controls the position and bounds of the viewport. This
            allows you to have multiple views with a single, performant canvas.
            These views will follow their tracking elements, scroll along,
            resize, etc.
          </p>
        </div>
      </div>
    </div>
  );
}
