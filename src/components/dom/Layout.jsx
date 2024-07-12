"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Header from "../Header";
const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
});

const Layout = ({ children }) => {
  const ref = useRef();

  return (
    <div
      ref={ref}
      className="overflow-x-hidden text-white"
      style={{
        position: "relative",
        width: "100vw",
        height: "auto",
        touchAction: "auto",
      }}
    >
      <Header />
      {children}
      <Scene
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
        eventSource={ref}
        eventPrefix="client"
      />
    </div>
  );
};

export { Layout };
