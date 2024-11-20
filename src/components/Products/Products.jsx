"use client";
import Heading from "../utils/Heading";
import { projects } from "../../Data";
import Card from "./Card";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const Products = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <section ref={container} className=" py-24 px-4">
      <Heading h2={"Products"} />
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <d key={`${i}`}>
            <Card
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              href={`/products/${project.id}`}
            />
          </d>
        );
      })}
    </section>
  );
};

export default Products;
