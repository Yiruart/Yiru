"use client";

import { useGLTF, Environment, Gltf } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useState } from "react";
import { Line, useCursor, MeshDistortMaterial } from "@react-three/drei";
import { useRouter } from "next/navigation";
import { easing } from "maath";

export const Blob = ({ route = "/", ...props }) => {
  const router = useRouter();
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        roughness={0.5}
        color={hovered ? "hotpink" : "#1fb2f5"}
      />
    </mesh>
  );
};

export const Chaos = ({ ...props }) => {
  const group = useRef();
  const light = useRef();

  // useFrame((state, delta) => {
  //   easing.dampE(
  //     group.current.rotation,
  //     [0, -state.pointer.x * (Math.PI / 10), 0],
  //     1.5,
  //     delta
  //   );
  //   easing.damp3(
  //     group.current.position,
  //     [0, 0, 1 - Math.abs(state.pointer.x)],
  //     1,
  //     delta
  //   );
  //   easing.damp3(
  //     light.current.position,
  //     [state.pointer.x * 8, 0, 8 + state.pointer.y * 2],
  //     0.2,
  //     delta
  //   );
  // });

  return (
    <group ref={group} {...props}>
      <Environment preset="night" />
      <Gltf
        src="/models/chaos/1c_env.glb"
        position={[-4, -2.7, -1]}
        scale={[0.009, 0.009, 0.009]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <Gltf
        src="/models/chaos/1c.glb"
        // position={[0, 1, 0]}
        position={[0, 5, 0]}
        scale={[0.05, 0.05, 0.05]}
        rotation={[0, Math.PI * 0.78, 0]}
      />
      <spotLight
        angle={0.5}
        penumbra={0.5}
        ref={light}
        castShadow
        intensity={10}
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

export function Duck(props) {
  const { scene } = useGLTF("/duck.glb");

  useFrame((state, delta) => (scene.rotation.y += delta));

  return <primitive object={scene} {...props} />;
}
export function Dog(props) {
  const { scene } = useGLTF("/dog.glb");

  return <primitive object={scene} {...props} />;
}
