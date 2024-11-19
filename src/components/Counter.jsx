"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { targetValue: 10000, label: "TXs per sec" },
  { targetValue: 200, label: "Networks we support" },
  { targetValue: 22000000, label: "Raised" },
  { targetValue: 100, label: "Validators" },
];

const Counter = () => {
  const [counters, setCounters] = useState(
    stats.map((stat) => ({ value: 0, label: stat.label }))
  );

  useEffect(() => {
    stats.forEach((stat, index) => {
      const interval = setInterval(() => {
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          if (newCounters[index].value < stat.targetValue) {
            newCounters[index].value += Math.ceil(stat.targetValue / 200); // Smaller increments
          } else {
            clearInterval(interval);
          }
          return newCounters;
        });
      }, 50); // Shorter interval for smoother effect
    });
  }, []);

  return (
    <section className="" id="counter">
      <div className="flex flex-wrap max-w-screen-xl mt-12 mx-auto border-image-top justify-center gap-8 p-6">
        {counters.map((counter, index) => (
          <div key={index} className="text-center">
            <p className="text-4xl font-bold text-slate-800 mb-2">
              {counter.value.toLocaleString()}
            </p>
            <p className="text-lg text-slate-600">{counter.label}</p>
          </div>
        ))}
        <div className="border-image-bottom w-full"></div>
      </div>
    </section>
  );
};

export default Counter;
