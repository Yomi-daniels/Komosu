"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import styles from "./sections.module.css";
import { Shadows_Into_Light } from "next/font/google";
import { cn } from "@/lib/utils";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Services = () => {
  const sectionRef = useRef(null);
  const leftButtonsRef = useRef([]);
  const rightButtonsRef = useRef([]);

  useEffect(() => {
    // Animate section scale on scroll
    gsap.fromTo(
      sectionRef.current,
      {
        scale: 0.6,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          end: "bottom 0%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate left buttons from left to center
    leftButtonsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          x: "-250%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "bottom 0%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // Animate right buttons from right to center
    rightButtonsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          x: "250%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "bottom 0%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className={cn(styles.serviceSection, "relative top-2 pb-48")}>
      <div className={styles.ServicesTextContainer}>
        <div className={styles.servicesHeader}>
          <h2>
           Komosu Network builds dealership<br /> websites  that actually move metal. 
          </h2>
        </div>
      </div>

      {/* LEFT BUTTONS */}
      <div className="absolute left-0 top-0 space-y-6 md:block hidden">
        <div
          ref={(el) => (leftButtonsRef.current[0] = el)}
          className="bg-gray-100 px-4 py-2 rounded-full w-[130px] h-22 shadow-lg absolute top-[-1em] left-[1em] rotate-[-8deg] font-medium"
        >
          Web Design
        </div>
        <div
          ref={(el) => (leftButtonsRef.current[1] = el)}
          className="bg-gray-100 px-6 w-[150px] py-2 rounded-full shadow-lg absolute bottom-[-10em] left-[-1em] rotate-[-8deg] font-medium"
        >
          More Control
        </div>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="absolute right-2 top-20 space-y-6 md:block hidden">
        <div
          ref={(el) => (rightButtonsRef.current[0] = el)}
          className="bg-gray-100 px-4 py-2 rounded-full shadow-lg absolute top-[-7em] right-[3em] rotate-[8deg] font-medium"
        >
          Content
        </div>
        <div
          ref={(el) => (rightButtonsRef.current[1] = el)}
          className="bg-gray-100 px-4 py-2 rounded-full shadow-lg absolute bottom-[-4em] right-[1em] w-[130px] rotate-[8deg] font-medium"
        >
          Dealer Hub
        </div>
      </div>

      {/* MOBILE BUTTONS - All hidden */}
      <div className="md:hidden">{/* Empty or nothing will be rendered here */}</div>

      <div
        className={cn(
          styles.servicesLastContentText,
          "hover:scale-110 transition-all duration-150"
        )}
      >
        <Link href="/about">
          <p>Learn more about Komosu</p>
        </Link>
        <div className={styles.buttonImage}>
          <Image src="/View plan button (4).png" alt="vector" fill />
        </div>
      </div>
    </section>
  );
};

export default Services;
