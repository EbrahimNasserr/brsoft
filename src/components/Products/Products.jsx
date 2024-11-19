"use client";
import Image from "next/image";
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
      {/* <div className="max-w-screen-lg mx-auto">
        <Heading h2={"Products"} />
        <div className="w-full bg-slate-100 text-center rounded-3xl grid grid-cols-1 md:grid-cols-3 p-12 gap-20 md:gap-12 items-center mt-24">
          <div className="flex flex-col gap-3">
            <div className=" flex justify-center items-center">
              <h3 className=" relative w-fit capitalize text-3xl font-semibold text-slate-900">
                any data
                <Image
                  src="/services1.webp"
                  width={110}
                  height={110}
                  alt="services1"
                  loading="lazy"
                  className=" absolute -top-12 -left-12"
                />
              </h3>
            </div>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              libero!
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" flex justify-center items-center">
              <h3 className=" relative w-fit capitalize text-3xl font-semibold text-slate-900">
                any data
                <Image
                  src="/services2.webp"
                  width={110}
                  height={110}
                  alt="services1"
                  loading="lazy"
                  className=" absolute -top-12 -left-12"
                />
              </h3>
            </div>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              libero!
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" flex justify-center items-center">
              <h3 className=" relative w-fit capitalize text-3xl font-semibold text-slate-900">
                any data
                <Image
                  src="/services3.png"
                  width={110}
                  height={110}
                  alt="services1"
                  loading="lazy"
                  className=" absolute -top-12 -left-12"
                />
              </h3>
            </div>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              libero!
            </p>
          </div>
        </div>
      </div> */}
      <Heading h2={"Products"} />
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default Products;
