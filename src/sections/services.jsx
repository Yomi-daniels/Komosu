"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import styles from "./sections.module.css";
import { Shadows_Into_Light } from "next/font/google";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Services = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const leftButtonsRef = useRef([]);
  const rightButtonsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // 🌿 SECTION FADE + SCALE
    gsap.fromTo(
      sectionRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // ✨ TEXT STAGGER
    gsap.fromTo(
      textRef.current.children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // ⬅️ LEFT LABELS
    leftButtonsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { x: "-80%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    });

    // ➡️ RIGHT LABELS
    rightButtonsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { x: "80%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    });

    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(styles.serviceSection, "relative pb-48")}
    >
      {/* TEXT CONTENT */}
      <div ref={textRef} className={styles.ServicesTextContainer}>
        <div className={styles.servicesHeader}>
          <h2 className={shadows.className}>
          Not a website. Not a marketplace. 
            <br />
           A controlled sales surface.
          </h2>
        </div>
      </div>

      {/* LEFT FLOATING LABELS */}
      <div className="absolute left-0 top-0 md:block hidden">
        <div
          ref={(el) => (leftButtonsRef.current[0] = el)}
          className="bg-gray-100/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg 
                     absolute top-[-1em] left-[1em] rotate-[-8deg] 
                     font-medium whitespace-nowrap min-w-[160px] text-center"
        >
          Web Design
        </div>

        <div
          ref={(el) => (leftButtonsRef.current[1] = el)}
          className="bg-gray-100/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg 
                     absolute bottom-[-10em] left-[-1em] rotate-[-8deg] 
                     font-medium whitespace-nowrap min-w-[180px] text-center"
        >
          More Control
        </div>
      </div>

      {/* RIGHT FLOATING LABELS */}
      <div className="absolute right-2 top-20 md:block hidden">
        <div
          ref={(el) => (rightButtonsRef.current[0] = el)}
          className="bg-gray-100/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg 
                     absolute top-[-7em] right-[3em] rotate-[8deg] 
                     font-medium whitespace-nowrap min-w-[150px] text-center"
        >
          Content
        </div>

        <div
          ref={(el) => (rightButtonsRef.current[1] = el)}
          className="bg-gray-100/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg 
                     absolute bottom-[-4em] right-[1em] rotate-[8deg] 
                     font-medium whitespace-nowrap min-w-[180px] text-center"
        >
          Dealer Hub
        </div>
      </div>

      {/* CTA */}
      <div
        className={cn(
          styles.servicesLastContentText,
          "hover:scale-105 transition-transform duration-300"
        )}
      >
        {/* <Link href="/about">
          <p>Learn more about Komosu</p>
        </Link> */}

        {/* <div className={styles.buttonImage}>
          <Image src="/View plan button (4).png" alt="vector" fill />
        </div> */}
      </div>
    </section>
  );
};

export default Services;
