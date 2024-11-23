"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { useTransform, useScroll, motion } from "framer-motion";
import dynamic from "next/dynamic";

const Column = dynamic(() => import("./Column"), { ssr: false });

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export default function Smooth() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  // Calculate transforms dynamically
  const y = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3.3]);
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * 1.25]
  );
  const y4 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const resize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", resize);
      resize(); // Initialize dimensions

      return () => {
        window.removeEventListener("resize", resize);
      };
    }
  }, []);

  return (
    <main className=" max-w-[95%] mx-auto rounded-lg pb-24 px-4">
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}
