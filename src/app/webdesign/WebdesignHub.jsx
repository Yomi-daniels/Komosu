"use client";
import Tickimg from "@/app/webdesign/components/Tickimg";
import casestyles from "../case-study/casestudy.module.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import pricingStyles from "../pricing/pricing.module.css";
import Image from "next/image";

import { Montserrat } from "next/font/google";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const WebdesignHub = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Trigger animations once when in view

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and translate down
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and move up
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger animations
      },
    },
  };

  const words = `
WHY YOUR DEALERSHIP NEEDS A HIGH \n PERFORMING WEBSITES
`;
  const challengesText = ` A high-performing website that turns visitors into buyers.`;
  const solutionsText = `How We Elevate Your Digital Presence`;

  return (
    <section
      className={casestyles.DigitalTransformationSection}
      ref={sectionRef}
    >
      <motion.div
        className={casestyles.headingsection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h5 variants={fadeInUp}>
          <TextGenerateEffect
            words={isInView ? words : ""}
            className="text-center"
          />
        </motion.h5>
        {/* <motion.p variants={fadeInUp}>
          DealerHub is your all-in-one platform to <br /> engage customers and build trust.
          </motion.p> */}
        <motion.p variants={fadeInUp}></motion.p>
      </motion.div>

      <motion.section className={`${casestyles.secondheadingsectionParent}`}>
        <motion.div
          className={casestyles.secondheadingsection}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h4 variants={fadeInUp} className="w-[40ch]">
            <TextGenerateEffect words={isInView ? challengesText : ""} />
          </motion.h4>
          <motion.div
            className={`${casestyles.challanges}${"w-[40ch]"}`}
            variants={staggerContainer}
          >
            <motion.div
              className={casestyles.challangescontent}
              variants={fadeInUp}
            >
              <div className={casestyles.TickImg}>
                <Tickimg />
              </div>
              <p>
                <span className="font-bold">Instill Trust & Credibility:</span>{" "}
                A polished, professional design signals reliability.{" "}
              </p>
            </motion.div>
            <motion.div
              className={casestyles.challangescontent}
              variants={fadeInUp}
            >
              <div className={casestyles.TickImg}>
                <Tickimg />
              </div>
              <p>
                <span className="font-bold">Increase Conversions: </span> Guide
                visitors to schedule test drives, apply for financing, <br /> and
                contact sales reps with ease
              </p>
            </motion.div>
            <motion.div
              className={casestyles.challangescontent}
              variants={fadeInUp}
            >
              <div className={casestyles.TickImg}>
                <Tickimg />
              </div>
              <p>
                <span className="font-bold">Stand Out from Competitors: </span> A custom-built Dealer Hub offers features no standard <br /> template can match.
              </p>
            </motion.div>
            <motion.div
              className={casestyles.challangescontent}
              variants={fadeInUp}
            >
              <div className={casestyles.TickImg}>
                <Tickimg />
              </div>
              <p>
                <span className="font-bold">Future-Proof Your Brand:</span> Adapt to emerging trends like VR showrooms & AI chat tools.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <Image
          src="/webdesignImg.png"
          alt="car"
          width={500}
          height={500}
          className={casestyles.imageSectionImg}
        />
      </motion.section>

      <motion.div
        className={casestyles.thirdheadingsection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h4
          variants={fadeInUp}
          className={casestyles.thirdsectionheader}
        >
          <TextGenerateEffect words={isInView ? solutionsText : ""} />
        </motion.h4>
      </motion.div>
      <div></div>
    </section>
  );
};

export default WebdesignHub;
