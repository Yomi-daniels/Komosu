"use client";

import Tickimg from "@/app/webdesign/components/Tickimg";
import casestyles from "../case-study/casestudy.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import pricingStyles from "../pricing/pricing.module.css";
import styles from "@/sections/sections.module.css";
import Link from "next/link";
import { title } from "@/utils/siteMetaData";

const WebdesignHub = () => {
  const points = [
    {
      title: "Select Priority Vehicles",
      description:
        "Choose up to 24 vehicles to feature, no clutter, just focused inventory built to convert.",
    },
    {
      title: "Send Paid Traffic to CarMosu",
      description:
        "Direct ads to a fast, focused sales surface instead of a traditional inventory website.",
    },
    {
      title: "Turn Interest Into Action",
      description:
        "Guide buyers toward booking showroom visits, test drives, and real conversations.",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    enter: (custom) => ({
      x: 500,
      zIndex: 10 + custom,
      transition: { duration: 0.5, ease: "easeOut" },
    }),
    center: (custom) => ({
      x: custom * -20,
      zIndex: 10 - custom,
      transition: { duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="h-full container relative mt-[5rem] mx-auto"
      ref={sectionRef}
    >
      <div className="flex flex-col gap-6 items-center justify-center max-w-[736px] mx-auto max-md:px-[2rem] max-sm:px-[1rem] max-sm:max-w-[686px]">
        <h1 className="font-bold text-darkBlueText text-[40px] mx-auto text-center leading-[120%] tracking-[-4%] max-md:text-[32px] max-sm:text-[24px]">
          How Dealers Use <span className="font-custom text-btn">CarMosu</span>
        </h1>
        <p className="tracking-[-2%] text-darkBlueText font-medium text-[18px] text-center max-sm:text-[16px]">
          A simple flow that turns paid traffic into real showroom visits.
        </p>

        {/* <Link href="/contact-us">
          <button className={styles.headerGetStarted}>Contact Us</button>
        </Link> */}
      </div>

      <div className="px-4 py-10 md:px-16 mt-[2rem] flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left Side: Animated Text Points */}
          <motion.div
            className="flex-1 space-y-2 max-w-[448px] relative"
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
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
          </motion.div>

          {/* Right Side: Animated Image Slideshow */}
          <motion.div
            className="flex-1 flex justify-center items-center relative overflow-hidden w-[500px] h-[700px] max-sm:hidden rounded-lg"
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebdesignHub;
