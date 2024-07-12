"use client";
import { useState } from "react";
import Titles from "./titles";
import Descriptions from "./descriptions";

const data = [
  {
    href: "#chaos",
    title: "Chaos",
    description:
      "Working on the Next-Generation HMI Experience without no driving experience.",
    speed: 0.5,
  },
  {
    href: "#scheduled_for_abolition",
    title: "Scheduled For Abolition",
    description:
      "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
    speed: 0.5,
  },
  {
    href: "#on_the_nose",
    title: "On The Nose",
    description:
      "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
    speed: 0.8,
  },
  {
    href: "#companion_species",
    title: "Companion Species",
    description:
      "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
    speed: 0.67,
  },
  {
    href: "#day_in_night",
    title: "Day In Night",
    description:
      "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
    speed: 0.8,
  },
  {
    href: "#who_i_am",
    title: "Who Am I",
    description:
      "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
    speed: 0.8,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="absolute z-[1] w-full">
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}
