import { Gltf, PerspectiveCamera } from "@react-three/drei";
import { data } from "./data";
import { Suspense, useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

export function M1(props) {
  const { src, position, scale, rotation } = data.list[0].model;
  return (
    <Gltf
      src={src}
      position={position}
      scale={scale}
      rotation={rotation}
      {...props}
    />
  );
}
export function M2(props) {
  const { src, position, scale, rotation } = data.list[1].model;
  return (
    <Gltf
      src={src}
      position={position}
      scale={scale}
      rotation={rotation}
      {...props}
    />
  );
}
export function M3(props) {
  const { src, position, scale, rotation } = data.list[2].model;
  return (
    <Gltf
      src={src}
      position={position}
      scale={scale}
      rotation={rotation}
      {...props}
    />
  );
}

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
        angle={0.4}
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
