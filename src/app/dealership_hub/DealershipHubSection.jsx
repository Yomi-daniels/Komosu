"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useRef, useState, useEffect } from "react";

import styles from "@/sections/sections.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";

import { useInView } from "framer-motion";
import DealershipBentoGrid from "./DealershipBentoGrid";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["700"],
// });

const DealershipHubSection = () => {
 
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const words = `Why Having A`;
  const challengesText = ` is right for your business?`;
  const solutionsText = `How We Elevate Your Digital Presence`;


  return (
    <section
      className="h-full container relative mt-[7rem] mx-auto"
      ref={sectionRef}
    >
      <div className="flex flex-col gap-6 items-center justify-center max-w-[736px] mx-auto max-md:px-[2rem] max-sm:px-[1rem] max-sm:max-w-[686px]">
        <h1 className="font-bold text-darkBlueText text-[40px] mx-auto text-center leading-[120%] tracking-[-4%] max-md:text-[32px] max-sm:text-[24px]">
          Why Having A <span className="font-custom text-btn">Dealership</span>{" "}
          is right for your business
        </h1>
        <p className="tracking-[-2%] text-darkBlueText font-medium text-[18px] text-center max-sm:text-[16px]">
          DealerHub is your all-in-one platform to engage customers and build
          trust.
        </p>

        <Link href="/contact-us">
          <button className={styles.headerGetStarted}>Contact Us</button>
        </Link>
      </div>
      <div className="mx-auto flex  items-center justify-center mt-[4rem]"><DealershipBentoGrid/></div>
    </section>
  );
};
export default DealershipHubSection;
