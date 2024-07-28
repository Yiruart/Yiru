"use client";

import Chaos from "@/components/chaos/Chaos";
import Heading from "@/components/home/Heading";
import Menu from "@/components/menu/Menu";

import ScheduledForAbolition from "@/components/scheduled_for_abolition/ScheduledForAbolition";
import CompanionSpecies from "@/components/companion species/CompanionSpecies";
import DayInNight from "@/components/day in night/DayInNight";
import OnTheNose from "@/components/on the nose/OnTheNose";
import WhoIAm from "@/components/who i am/WhoIAm";
import Logo from "@/components/Logo";
import About from "@/components/About";
import Exhibition from "@/components/exhibition/Exhibition";
import FirstScreen from "@/components/home/FirstScreen";

export default function Page() {
  return (
    <>
      <div className="w-screen font-proxima bg-black mb-[screen]">
        <FirstScreen />

        <div className="h-28 w-full sm:hidden"></div>

        <Menu />

        <Chaos />

        <ScheduledForAbolition />

        <OnTheNose />

        <CompanionSpecies />

        <DayInNight />

        <WhoIAm />
      </div>

      <About />
      <Logo />
      <Exhibition />
    </>
  );
}
