"use client";
import { useState, useEffect } from "react";
import PcModel from "./PcModel";
import Heading from "./Heading";
import MobileModel from "./MobileModel";

const FirstScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width on mount and when window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-screen h-screen">
      {isMobile ? <MobileModel /> : <PcModel />}
      <Heading />
    </div>
  );
};

export default FirstScreen;
