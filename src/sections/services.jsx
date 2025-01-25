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
import { cn } from "@/lib/utils";

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
    <section className={cn(styles.serviceSection, "top-20 pb-48")}>
      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        className={styles.ServicesTextContainer}
        // ref={servicesTextContainerRef}
      >
        <div className={styles.servicesSubTextContainer}>
          <div className={styles.blueBorder}></div>
          <p className={styles.servicesSubText}>What is Dealer Hub?</p>
        </div>
        <div className={styles.servicesHeader}>
          <h2>
            {" "}
            Empowering your{" "}
            <span className={`${styles.servicesSpan} ${shadows.className}`}>
              Business
            </span>{" "}
            to thrive
          </h2>
        </div>
        <p className={cn(styles.subContent, "max-w-3xl mx-auto text-pretty")}>
          Komosu Network is committed to revolutionizing the automotive industry
          by providing innovative solutions. our dedicated team of experts
          focuses on building strong relationships with clients, ensuring that
          they have more time to concentrate on what truly matters to them.
        </p>
        {/* <p className={cn(styles.subContent, "max-w-3xl mx-auto text-pretty")}>
          A Dealer Hub is your all-in-one digital platform to engage and build
          trust with customers. It lets users explore inventory, check financing
          options, and connect with sales reps—all in one place. With
          interactive features like community comments on new stock, customers
          stay engaged, fostering loyalty and repeat visits that drive growth.
        </p> */}
      </motion.div>
      {/* <Servicesflex /> */}
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
