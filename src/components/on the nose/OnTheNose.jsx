"use client";

import { cn } from "lib/utils";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { data } from "./data";
import { Light } from "./Models";
import RightArrow from "@/components/ui/RightArrow";
import Link from "next/link";

const M1 = dynamic(() => import("./Models").then((mod) => mod.M1), {
  ssr: false,
});
const M2 = dynamic(() => import("./Models").then((mod) => mod.M2), {
  ssr: false,
});
const M3 = dynamic(() => import("./Models").then((mod) => mod.M3), {
  ssr: false,
});

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

const OnTheNose = () => {
  const [active, setActive] = useState(0);

  return (
    <div
      className="relative h-auto sm:h-screen w-screen flex flex-col sm:p-16 mt-24 sm:mt-0"
      id={data.slug}
    >
      <h1 className="flex justify-center font-light text-4xl sm:text-6xl mb-4 z-10">
        {data.title}
      </h1>

      <div className="sm:absolute sm:w-[40%] top-[30%] left-8 sm:left-16 z-10 p-8 sm:p-0">
        <ul className="flex gap-x-2 text-2xl sm:text-3xl font-medium mb-4">
          {data.list.map((item, index) => {
            return (
              <>
                {index !== 0 && index !== data.list.length && (
                  <span>/&nbsp;</span>
                )}
                <li
                  key={index}
                  className={cn(
                    "cursor-pointer transition-all duration-300 ease-linear",
                    index == active
                      ? "text-white underline underline-offset-8"
                      : "opacity-50"
                  )}
                  onClick={() => setActive(index)}
                >
                  {item.name}
                </li>
              </>
            );
          })}
        </ul>
        <p className="hidden sm:block w-full">{data.description}</p>
        <Link
          href={`/${data.slug}`}
          className="hidden sm:flex items-center text-lg px-0 text-white group mt-4"
        >
          View Rendering
          <RightArrow dark={false} />
        </Link>
      </div>

      <div className="block sm:absolute sm:top-0 sm:right-0 w-full h-[100vw] sm:w-[70%] sm:h-screen sm:ml-auto">
        <View orbit className="h-full w-full">
          <Suspense fallback={null}>
            <fog attach="fog" args={["black", 10, 20]} />
            {active == 0 && <M1 />}
            {active == 1 && <M2 />}
            {active == 2 && <M3 />}
            <Light position={[0, -1, -3]} rotation={[0, -0.2, 0]} />
          </Suspense>
        </View>
      </div>
      <div className="block sm:hidden mb-24 p-8">
        <p>{data.description}</p>
        <Link
          href={`/${data.slug}`}
          className="sm:hidden flex items-center text-lg px-0 text-white group mt-4"
        >
          View Rendering
          <RightArrow dark={false} />
        </Link>
      </div>
    </div>
  );
};

export default OnTheNose;
