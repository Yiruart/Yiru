"use client";

import { forwardRef, Suspense, useImperativeHandle, useRef } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  View as ViewImpl,
} from "@react-three/drei";
import { Three } from "@/helpers/components/Three";

export const Common = () => (
  <Suspense fallback={null}>
    <pointLight position={[20, 30, 10]} intensity={0.03} decay={0.2} />
    <pointLight position={[-10, 10, -10]} decay={0.9} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 10]} />
  </Suspense>
);

const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && (
            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={(2.8 * Math.PI) / 4}
              minAzimuthAngle={-Math.PI / 6}
              maxAzimuthAngle={Math.PI / 6}
            />
          )}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = "View";

export { View };
