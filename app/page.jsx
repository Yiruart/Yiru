"use client";

import Chaos from "@/components/chaos/Chaos";
import Header from "@/components/Header";
import About from "@/components/about/About";
import Heading from "@/components/home/Heading";
import Menu from "@/components/menu/Menu";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import ScheduledForAbolition from "@/components/scheduled_for_abolition/ScheduledForAbolition";
import CompanionSpecies from "@/components/companion species/CompanionSpecies";
import DayInNight from "@/components/day in night/DayInNight";
import OnTheNose from "@/components/on the nose/OnTheNose";

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
    <div className="w-screen font-proxima">
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

      <OnTheNose />

      <CompanionSpecies />

      <DayInNight />

      <About />
    </div>
  );
}
