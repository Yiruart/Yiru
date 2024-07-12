"use client";

import ScheduledForAbolition from "@/components/ScheduledForAbolition";
import Chaos from "@/components/chaos/Chaos";
import Header from "@/components/Header";
import About from "@/components/about/About";
import Heading from "@/components/home/Heading";
import Menu from "@/components/menu/Menu";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ChaosModel = dynamic(
  () => import("@/components/canvas/Models").then((mod) => mod.Chaos),
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

export default function Page() {
  return (
    <div className="w-screen">
      <Header />

      {/* Homepage Model */}
      <div className="relative w-screen h-screen">
        <View className="h-full w-full">
          <Suspense fallback={null}>
            <ChaosModel position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
            <Common />
          </Suspense>
        </View>
        <Heading />
      </div>

      <Menu />

      <Chaos />

      <ScheduledForAbolition />

      <About />
    </div>
  );
}
