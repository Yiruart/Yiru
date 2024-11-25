"use client";

import Chaos from "@/components/chaos/Chaos";
import Heading from "@/components/home/Heading";
import Menu from "@/components/menu/Menu";

import ScheduledForAbolition from "@/components/scheduled_for_abolition/ScheduledForAbolition";
import CompanionSpecies from "@/components/companion species/CompanionSpecies";
import DayInNight from "@/components/day in night/DayInNight";
import OnTheNose from "@/components/on the nose/OnTheNose";
import No60 from "@/components/No.60/No60";
import Logo from "@/components/Logo";
import About from "@/components/About";
import Exhibition from "@/components/exhibition/Exhibition";
import FirstScreen from "@/components/home/FirstScreen";
import ElysiumEchoes from "@/components/elysium echoes/ElysiumEchoes";

export default function Page() {
  return (
    <>
      <div className="w-screen font-proxima bg-black mb-[screen]">
        <FirstScreen />

        <div className="h-28 w-full sm:hidden"></div>

        <Menu />

        <ElysiumEchoes />

        <Chaos />

        <ScheduledForAbolition />

        <OnTheNose />

        <CompanionSpecies />

        <No60 />

        <DayInNight />
      </div>

      <About />
      <Logo />
      <Exhibition />
    </>
  );
}
