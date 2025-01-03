"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const paragraph =
  "Where are the boundaries of art? Yiru is committed to the deep integration of art and new technologies, exploring the infinite possibilities of the digital age. Through her unique approach, she trys to break the boundaries of traditional art and create engaging and thought-provoking works. Her works aim to inspire viewers to think deeply about the intersection of technology and the humanities, and to promote the concepts of innovation, communication and interdisciplinarity.";
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

const About = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.1"],
  });
  return (
    <div className="sm:flex w-screen justify-center mt-[100vw] sm:mt-[50vh] p-8 pt-32 sm:py-16 h-[110vh] sm:h-screen bg-black">
      <motion.p
        ref={container}
        className="hidden sm:block text-xl sm:text-3xl sm:font-light sm:w-2/3"
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

export default About;
