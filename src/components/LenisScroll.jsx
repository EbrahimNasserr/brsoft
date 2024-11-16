"use client";
import Lenis from "lenis";
import { useEffect } from "react";

const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
};

export default LenisScroll;
