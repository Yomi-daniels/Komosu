"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import styles from "./sections.module.css";
import Servicesflex from "./servicesflex";
import { Shadows_Into_Light } from "next/font/google";
import { motion } from "framer-motion";

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Services = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  // Set a minimum scale value using useTransform
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className={styles.serviceSection}>
      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        className={styles.ServicesTextContainer}
        // ref={servicesTextContainerRef}
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
      </motion.div>
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
