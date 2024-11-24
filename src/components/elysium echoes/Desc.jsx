"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const paragraph = `Elysium Echoes explores the complex relationship between environmental change and human survival in a post-humanist era. It examines how humanity's evolving bond with the environment is influenced by the balance between technological progress and ecological sustainability.
The dynamic balance of environment, productivity, and biological evolution in the post-human era.`;

const words = paragraph.split(" ");

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-0">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

const Desc = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.6"],
  });
  return (
    <div className="absolute inset-0 pointer-events-none sm:flex w-screen justify-center mt-[50vw] md:mt-[30vh] lg:mt-[50vh] p-8 pt-32 sm:py-16 sm:h-screen">
      <motion.p
        ref={container}
        className="hidden sm:block text-xl lg:text-2xl xl:text-3xl sm:font-light w-full xl:w-3/4"
        style={{ opacity: scrollYProgress }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </motion.p>
      <p className="sm:hidden text-lg font-light">{paragraph}</p>
    </div>
  );
};

export default Desc;
