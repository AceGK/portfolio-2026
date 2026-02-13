"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface AnimatedTextSliderProps {
  texts: string[];
  interval?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedTextSlider({
  texts,
  interval = 3000,
  speed = 0.7,
  className = "",
  style,
}: AnimatedTextSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const prev = (index - 1 + texts.length) % texts.length;

  return (
    <div className={`${styles.slider} ${className}`} style={style}>
      {texts.map((text, i) => (
        <span
          key={text}
          className={styles.slide}
          data-state={i === index ? "current" : i === prev ? "prev" : "idle"}
          style={{ transitionDuration: `${speed}s` }}
        >
          {text}
        </span>
      ))}
    </div>
  );
}
