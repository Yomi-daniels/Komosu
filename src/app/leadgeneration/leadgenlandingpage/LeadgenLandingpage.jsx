"use client";
import leadStyles from "../leadgeneration.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
import { ScrollParallax } from "react-just-parallax";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import styles from "@/sections/sections.module.css";

const LeadgenLandingpage = () => {
  const webdesignTextContainerRef = useRef(null);
  const parallaxRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Header and text animation (fade-in and slide-up)
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

    // Parallax Effect for images
    if (parallaxRef.current) {
      gsap.fromTo(
        parallaxRef.current,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section
      className={`${leadStyles.LeadingGenSection} dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] overflow-x-hidden flex flex-col mt-[3rem] max-sm:mt-[1rem] relative`}
      style={{
        position: "relative", // Ensure parent is positioned correctly
      }}
    >
     

      <div className="w-[1236px] min-h-[338px] text-center flex flex-col justify-center items-center gap-6 z-10 relative mb-8 px-4 ">
        <h1
          ref={headingRef}
          className="w-full capitalize text-center font-bold leading-[120%] tracking-[-2.56px] text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] mx-auto"
        >
          Drive more leads and grow your <br /> dealership with our expert solutions
        </h1>

        <p
          ref={paragraphRef}
          className="max-w-[733px] font-medium text-darkBlueText text-[14px] sm:text-[16px] md:text-[18px] text-center md:w-[60ch]"
        >
          Your website is the digital storefront of your dealership. A sleek,
          modern, and user-friendly design isn’t just about aesthetics—it’s
          about building trust, engaging customers, and driving sales.
        </p>

        <Link href="/request-demo">
          <button ref={buttonRef} className={styles.headerGetStarted}>
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LeadgenLandingpage;
