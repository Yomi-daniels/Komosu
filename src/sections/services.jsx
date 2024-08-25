"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import styles from "./sections.module.css";
import Servicesflex from "./servicesflex";
import { Shadows_Into_Light } from "next/font/google";

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Services = () => {
  const servicesTextContainerRef = useRef(null);

  useEffect(() => {
    // Initial opacity and scale for page load
    gsap.set(servicesTextContainerRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 50, // Start from below
    });

    // Intersection Observer to detect visibility and apply scale changes
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.inOut",
            y: 0,
          });
        } else {
          gsap.to(entry.target, {
            opacity: 0.2,
            scale: 0.5,
            duration: 0.5,
            ease: "power2.out",
            y: 50, // Start from below
          });
        }
      },
      {
        threshold: 0.5, // Adjust this value as needed
      }
    );

    // Observe the servicesTextContainer
    if (servicesTextContainerRef.current) {
      observer.observe(servicesTextContainerRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (servicesTextContainerRef.current) {
        observer.unobserve(servicesTextContainerRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.serviceSection}>
      <div
        className={styles.ServicesTextContainer}
        ref={servicesTextContainerRef}
      >
        <div className={styles.servicesSubTextContainer}>
          <div className={styles.blueBorder}></div>
          <p className={styles.servicesSubText}>WHY KOMOSU?</p>
        </div>
        <div className={styles.servicesHeader}>
          <h2>
            {" "}
            WE GIVE YOUR{" "}
            <span className={`${styles.servicesSpan} ${shadows.className}`}>
              BUSINESS
            </span>{" "}
            THE PUSH IT NEEDS
          </h2>
        </div>
        <p className={styles.subContent}>
          Komosu Network is committed to revolutionizing the automotive industry
          by providing innovative solutions. our dedicated team of experts
          focuses on building strong relationships with clients, ensuring that
          they have more time to concentrate on what truly matters to them.{" "}
        </p>
      </div>
      <Servicesflex />
      <div className={styles.servicesLastContentText}>
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
