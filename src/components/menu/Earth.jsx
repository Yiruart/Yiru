"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useRef } from "react";

const Earth = () => {
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/models/earth/color.jpg",
    "/models/earth/normal.png",
    "/models/earth/occlusion.jpg",
  ]);

  const scene = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  return (
    <Canvas ref={scene}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </Canvas>
  );
};

export default Earth;
