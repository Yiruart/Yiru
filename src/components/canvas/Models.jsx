"use client";

import { Gltf, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";

import { easing } from "maath";

// chaos
export const Chaos = ({ ...props }) => {
  const group = useRef();
  const light = useRef();

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [0, -state.pointer.x * (Math.PI / 10), 0],
      1.5,
      delta
    );
    easing.damp3(
      group.current.position,
      [0, 0, 1 - Math.abs(state.pointer.x)],
      1,
      delta
    );
    easing.damp3(
      light.current.position,
      [state.pointer.x * 8, 0, 8 + state.pointer.y * 2],
      0.2,
      delta
    );
  });

  return (
    <group ref={group} {...props}>
      <Gltf
        src="/models/chaos/1c_env.glb"
        position={[-4, -2.7, -1]}
        scale={[0.009, 0.009, 0.009]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <Gltf
        src="/models/chaos/1c.glb"
        position={[0, 1, 0]}
        scale={[0.06, 0.06, 0.06]}
        rotation={[0, Math.PI * 0.78, 0]}
      />
      <spotLight
        angle={0.5}
        penumbra={0.5}
        ref={light}
        castShadow
        intensity={15}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </spotLight>
    </group>
  );
};

export const ChaosForPhone = ({ ...props }) => {
  return (
    <group {...props}>
      <Gltf
        src="/models/chaos/1c_env.glb"
        position={[-4, -2.7, -1]}
        scale={[0.009, 0.009, 0.009]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <Gltf
        src="/models/chaos/1cc.glb"
        position={[0, 1.2, 0]}
        scale={[0.06, 0.06, 0.06]}
        rotation={[0, Math.PI * 0.78, 0]}
      />
    </group>
  );
};

export function Light() {
  const light = useRef();

  useFrame((state, delta) => {
    easing.damp3(
      light.current.position,
      [state.pointer.x * 8, 0, 12 + state.pointer.y * 2],
      0.2,
      delta
    );
  });
  return (
    <Suspense fallback={null}>
      <spotLight
        angle={0.5}
        penumbra={0.5}
        ref={light}
        castShadow
        intensity={30}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </spotLight>
      <pointLight position={[20, 30, 10]} intensity={0.1} decay={0.2} />
      <pointLight position={[-10, 10, -10]} decay={0.9} />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 10]} />
    </Suspense>
  );
}
