"use client";
import { useState } from "react";
import Titles from "./titles";
import Descriptions from "./descriptions";

const data = [
  {
    href: "#chaos",
    title: "Chaos",
    description:
      "A human being is shaped by an intricate web of relationships, continually constructing and reconstructing their identity through interactions.",
    speed: 0.5,
  },
  {
    href: "#scheduled_for_abolition",
    title: "Scheduled For Abolition",
    description:
      "Exploring planned obsolescence in biology, this concept questions whether immortality means individual longevity or the continuous evolution of genes.",
    speed: 0.5,
  },
  {
    href: "#on_the_nose",
    title: "On The Nose",
    description:
      "Using EEG, this project visualizes brain responses to scents, creating tactile 3D models that embody and depict olfactory sensations.",
    speed: 0.8,
  },
  {
    href: "#companion_species",
    title: "Companion Species",
    description:
      "This series envisions a post-human world where mushrooms symbolize resilience and ecological balance amid human remnants, highlighting symbiosis and regeneration.",
    speed: 0.67,
  },
  {
    href: "#day_in_night",
    title: "Day In Night",
    description:
      "At the world's edge, amid shifting day and night, I ponder time's essence.",
    speed: 0.8,
  },
  {
    href: "#who_i_am",
    title: "Who Am I",
    description:
      "Explores identity and familial bonds, highlighting the struggle between personal self-discovery and familial expectations through evocative visuals.",
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
