import { Gltf, PerspectiveCamera } from "@react-three/drei";
import { data } from "./data";
import { Suspense, useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

// export function M1(props) {
//   const { scene } = useGLTF("/duck.glb");

//   useFrame((state, delta) => (scene.rotation.y += delta));

//   return <primitive object={scene} {...props} />;
// }

export function M1(props) {
  const { src, position, scale } = data.list[0].model;
  return <Gltf src={src} position={position} scale={scale} {...props} />;
}
export function M2(props) {
  const { src, position, scale } = data.list[1].model;
  return <Gltf src={src} position={position} scale={scale} {...props} />;
}
export function M3(props) {
  const { src, position, scale } = data.list[2].model;
  return <Gltf src={src} position={position} scale={scale} {...props} />;
}

export function Light({ ...props }) {
  const light = useRef();

  useFrame((state, delta) => {
    // easing.dampE(
    //   group.current.rotation,
    //   [0, -state.pointer.x * (Math.PI / 10), 0],
    //   1.5,
    //   delta
    // );
    // easing.damp3(
    //   group.current.position,
    //   [0, 0, 1 - Math.abs(state.pointer.x)],
    //   1,
    //   delta
    // );
    easing.damp3(
      light.current.position,
      [state.pointer.x * 8, 0, 8 + state.pointer.y * 2],
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
        intensity={10}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </spotLight>
      <pointLight position={[20, 30, 10]} intensity={0.03} decay={0.2} />
      <pointLight position={[-10, 10, -10]} decay={0.9} />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 10]} />
    </Suspense>
  );
}
