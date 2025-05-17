"use client";
import webstyle from "../webdesign.module.css";
import Image from "next/image";
import LandingPageButtons from "../components/LandingPageButtons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/sections/sections.module.css";
import Link from "next/link";

const WebDesignLandingpage = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animation for heading, paragraph, and button
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );
    }
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, []);

  // The message for the heading
  const message = `First Impression Matters, Make Your Website Count!`;

  return (
    <section
      className={`${webstyle.webdesignLandingPage} dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] overflow-x-hidden flex flex-col mt-[3rem]`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="max-w-[928px] min-h-[338px] text-center flex flex-col justify-center items-center gap-6 z-10 px-4">
        {/* Heading with animation */}
        <h1
          ref={headingRef}
          className="w-full font-bold leading-tight tracking-tight text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] max-w-[928px] mx-auto"
        >
          {message}
        </h1>

        {/* Description with animation */}
        <p
          ref={paragraphRef}
          className="max-w-[733px] font-medium text-darkBlueText text-[14px] sm:text-[16px] md:text-[18px] text-center md:w-[60ch]"
        >
          Your website is the digital storefront of your dealership. A sleek,
          modern, and user-friendly design isn’t just about aesthetics—it’s
          about building trust, engaging customers, and driving sales.
        </p>

        {/* Button with animation */}
        <Link href="/request-demo">
          <button ref={buttonRef} className={styles.headerGetStarted}>
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WebDesignLandingpage;
