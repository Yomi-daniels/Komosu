"use client";

import Tickimg from "@/app/webdesign/components/Tickimg";

import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

import styles from "@/sections/sections.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";
const LeadGenHub = () => {
  const points = [
    {
      title: "First-Party Data That Drives Smarter Follow-Ups",
      description:
        " See which cars buyers look at, what content they engage with, and how often they come back. Your team follows up with the right message at the right time.",
    },
    {
      title: "Content That Captures Intent",
      description:
        "  From service walkarounds to new arrivals, every video and article builds trust and moves buyers closer to action. More time on site = warmer, higher-quality leads.",
    },
    {
      title: "Smarter Lead Scoring with Real Behavior",
      description:
        "Know which visitors are just browsing — and which are ready to book a test drive. No more guessing. Your BDC team works smarter, not harder.",
    },
 
  ];

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

  const words = `Why should your`;
  const challengesText = ` performing website?`;
  const solutionsText = `How We Elevate Your Digital Presence`;

  // Image animation setup
  const images = [
    "/girlwithCarKey.png",
    "/girlwithclient.png",
    "/familyWithClient.png",
    "/happyCouple.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Define the animation variants
  const cardVariants = {
    enter: (custom) => ({
      x: 500,
      zIndex: 10 + custom,
      transition: { duration: 0.5, ease: "easeOut" },
    }),
    center: (custom) => ({
      x: custom * -20, // stack offset
      zIndex: 10 - custom,
      transition: { duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="h-full container relative mt-[7rem] mx-auto"
      ref={sectionRef}
    >
      <div className="flex flex-col gap-6 items-center justify-center max-w-[736px] mx-auto max-md:px-[2rem] max-sm:px-[1rem] max-sm:max-w-[686px]">
        <h1 className="font-bold text-darkBlueText text-[40px] mx-auto text-center leading-[120%] tracking-[-4%] max-md:text-[32px] max-sm:text-[24px]">
         With Komosu, your website becomes more than a landing page. It becomes a{" "}
          <span className="font-custom text-btn">data-driven sales engine.</span> 
        </h1>
        <p className="tracking-[-2%] text-darkBlueText font-medium text-[18px] text-center max-sm:text-[16px]">
          A high-performing website that turns visitors into buyers.
        </p>

        <Link href="/contact-us">
          <button className={styles.headerGetStarted}>Contact Us</button>
        </Link>
      </div>

      <div className="px-4 py-10 md:px-16 mt-[2rem] flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side: Text Points */}
          <div className="flex-1 space-y-2 max-w-[448px] relative">
            {points.map((point, index) => (
              <div key={index} className="p-4 flex flex-col gap-4 items-start">
                <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-darkBlueText text-[24px] max-sm:text-[18px]">
                    {point.title}
                  </h3>
                  <p className="text-[18px] text-darkBlueText font-medium max-sm:text-[14px]">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 flex justify-center items-center relative overflow-hidden w-[500px] h-[700px] max-sm:hidden rounded-lg">
            {images.slice(0, currentImage + 1).map((img, index) => (
              <motion.img
                key={index}
                src={img}
                custom={currentImage - index}
                variants={cardVariants}
                initial="enter"
                animate="center"
                className="absolute w-full h-full object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenHub;
