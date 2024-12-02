"use client";
import Link from "next/link";
import Button from "./Button";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav/Nav";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation"; // Import usePathname
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import { LanguageContext } from "@/context/LanguageContext";

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
  const context = useContext(LanguageContext);
  const { translations } = context;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname(); // Get the current route

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

  // Check if the current route is 'about', 'services', or 'contact'
  const isSpecialPage =
    pathname === "/about" ||
    pathname === "/services" ||
    pathname === "/contact" ||
    pathname === "/work";

  return (
    <>
      <header
        className={`logo flex p-4 justify-between items-center transition-colors duration-300 ${
          isScrolled ? "bg-slate-200" : "bg-transparent"
        }`}
      >
        <Link href="/" className={`flex gap-2`}>
          <Image
            src="/colorful_logo_svgweb.svg"
            width={20}
            height={20}
            alt="logo"
            loading="lazy"
          />
          <span
            className={`${
              isScrolled || isSpecialPage ? "text-slate-800" : "text-slate-50"
            }`}
          >
            BRSOFT
          </span>
        </Link>
        <nav>
          <ul
            className={`gap-10 justify-between hidden md:flex items-center uppercase ${
              isSpecialPage || isScrolled ? "text-slate-800" : "text-slate-50"
            }`}
          >
            <li>
              <Link href="/">{translations.home}</Link>
            </li>
            <li>
              <Link href="/about">{translations.about}</Link>
            </li>
            <li>
              <Link href="/services">{translations.services}</Link>
            </li>
            <li>
              <Link href="/contact">{translations.contact}</Link>
            </li>
            <li>
              <Link href="/work">{translations.products}</Link>
            </li>
          </ul>
        </nav>
        <div>
          <LanguageSwitcher
            isSpecialPage={isSpecialPage}
            isScrolled={isScrolled}
          />
        </div>
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
