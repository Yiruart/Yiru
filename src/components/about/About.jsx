"use client";
import styles from "./about.module.css";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import {
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
  floating6,
  floating7,
  floating8,
} from "./data";

export default function About() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.4}`,
      y: `+=${yForce * 0.4}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.main}
      id="who_i_am"
    >
      <div ref={plane1} className={styles.plane}>
        <Image
          src={floating1}
          alt="image"
          width={300}
          style={{ height: "auto" }}
        />
        <Image
          src={floating2}
          alt="image"
          width={300}
          style={{ height: "auto" }}
        />
        <Image
          src={floating7}
          alt="image"
          width={225}
          style={{ height: "auto" }}
        />
      </div>
      <div ref={plane2} className={styles.plane}>
        <Image
          src={floating4}
          alt="image"
          width={250}
          style={{ height: "auto" }}
        />
        <Image
          src={floating6}
          alt="image"
          width={200}
          style={{ height: "auto" }}
        />
        <Image
          src={floating8}
          alt="image"
          width={225}
          style={{ height: "auto" }}
        />
      </div>
      <div ref={plane3} className={styles.plane}>
        <Image
          src={floating3}
          alt="image"
          width={250}
          style={{ height: "auto" }}
        />
        <Image
          src={floating5}
          alt="image"
          width={200}
          style={{ height: "auto" }}
        />
      </div>
      <div className={styles.title}>
        <h1 className="font-cardinal text-4xl">WHO I AM</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
          urna id eros pharetra suscipit. Nunc tincidunt, nibh non scelerisque
          aliquam, lorem sapien vehicula dolor, eu aliquet sapien quam vel
          ligula. Fusce euismod, mi at posuere sagittis, odio arcu lacinia
          nulla, in bibendum massa turpis in justo. Aliquam erat volutpat.
          Aenean sit amet feugiat magna.
        </p>
      </div>
    </main>
  );
}
