"use client";
import { useEffect } from "react";
import { TweenMax, Expo } from "gsap";
import Link from "next/link";

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
    <section className="max-w-screen-2xl mx-auto h-screen">
      <div>
        <div className="left-col">
          <header className="logo flex p-4 justify-between items-center">
            <div>BRSOFT</div>
            <nav>
              <ul className="text-white flex gap-10 justify-between items-center uppercase">
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
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="upper-block"></div>
          <div className="bottom">
            <div className="next"></div>
            <div className="more">
              <p id="more">More like this</p>
            </div>
          </div>
          <div className="block-bottom"></div>
        </div>
      </div>
    </section>
  );
}
