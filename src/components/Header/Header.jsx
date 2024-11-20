"use client";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav/Nav";
import styles from "./style.module.scss";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Scroll Event Listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change `50` to control when the color changes
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`logo flex p-4 justify-between items-center transition-colors duration-300 ${
          isScrolled ? "bg-slate-200" : "bg-transparent"
        }`}
      >
        <div className={`${isScrolled ? "text-slate-800" : "text-slate-50"}`}>
          BRSOFT
        </div>
        <nav>
          <ul
            className={` gap-10 justify-between hidden md:flex items-center uppercase ${
              isScrolled ? "text-slate-800" : "text-slate-50"
            }`}
          >
            <li>
              <Link href="about">about us</Link>
            </li>
            <li>
              <Link href="services">services</Link>
            </li>
            <li>
              <Link href="contact">contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.header}>
        <motion.div
          className={styles.menu}
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
        </motion.div>
        <Button
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
    </>
  );
};

export default Header;
