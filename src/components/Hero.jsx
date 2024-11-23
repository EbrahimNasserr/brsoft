"use client";
import { useEffect, useState } from "react";
import { TweenMax, Expo } from "gsap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiArrowDownDoubleFill } from "react-icons/ri";

import Header from "./Header/Header";

export default function Hero() {
  useEffect(() => {
    TweenMax.from(".left-col", 2, {
      width: "0%",
      ease: Expo.easeInOut,
    });

    TweenMax.from(".logo", 2, {
      delay: 2.5,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".buy", 2, {
      delay: 2.8,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".year", 2, {
      delay: 3.1,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".album-name", 2, {
      delay: 2.4,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".album-artist", 2, {
      delay: 2.6,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".about h1", 2, {
      delay: 3,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".album-name2", 2, {
      delay: 3.2,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".album-artist2", 2, {
      delay: 3.4,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".album-genre2", 2, {
      delay: 3.6,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".media p", 2, {
      delay: 3.6,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.staggerFrom(
      ".media ul li",
      2,
      {
        delay: 3.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      },
      0.1
    );

    TweenMax.from(".next", 2, {
      delay: 4.4,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".more", 2, {
      delay: 4.6,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <section className="max-w-screen-2xl relative mx-auto h-screen bg-black">
      <Header />
      <div>
        <div className="left-col">
          <div className="year">EST 1994</div>
          <div className="cover"></div>
          <div className="data">
            <div className="album-name">
              <p id="name">Kinda like it</p>
            </div>
            <div className="album-artist">
              <p id="artist">Freak like me</p>
            </div>
          </div>
          <div className="block-cover"></div>
          <a
            href="#counter"
            className="absolute flex justify-center items-center bottom-0 m-4 right-0 p-4 w-12 h-20 rounded-full border"
          >
            <RiArrowDownDoubleFill className="text-slate-50 scroll text-3xl" />
          </a>
        </div>

        <div className="right-col">
          <div className="upper max-w-screen-lg mx-auto">
            <div className="about">
              <h1>Software Solutions</h1>

              <div className="album-name2">
                <p>
                  <span>Agile Project Suite</span>
                </p>
              </div>

              <div className="album-artist2">
                <p>
                  <span>Team Collaboration Hub</span>
                </p>
              </div>

              <div className="album-genre2">
                <p>
                  <span>Productivity & Innovation</span>
                </p>
              </div>

              <div className="media">
                <p>Share Our Vision:</p>
                <ul className=" flex justify-center text-slate-600 items-center gap-10 text-3xl">
                  <li className=" cursor-pointer">
                    <FaFacebook />
                  </li>
                  <li className=" cursor-pointer">
                    <FaInstagram />
                  </li>
                  <li className=" cursor-pointer">
                    <FaTwitter />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="upper-block"></div>
          <div className="bottom">
            <div className="next"></div>
          </div>
          <div className="block-bottom"></div>
        </div>
      </div>
    </section>
  );
}
