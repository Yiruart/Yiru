import React from "react";
import styles from "./style.module.css";

export default function index({ data, selectedProject }) {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className={styles.descriptions}>
      {data.map((project, i) => {
        const { title, description, href } = project;
        return (
          <a
            key={i}
            className={styles.description}
            style={{
              clipPath:
                selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%",
            }}
            href={href}
          >
            <p>{crop(title, 9)}</p>
            <p className="text-black text-xs sm:text-lg line-clamp-1 sm:line-clamp-2">
              {description}
            </p>
          </a>
        );
      })}
    </div>
  );
}
