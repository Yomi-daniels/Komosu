"use client";
import Tickimg from "@/app/webdesign/components/Tickimg";

import styles from "./sections.module.css"
import casestyles from "../app/case-study/casestudy.module.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import pricingStyles from "../app/pricing/pricing.module.css";
import Image from "next/image";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
import { Montserrat } from "next/font/google";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

;

const WhyKomosu = () => {
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

  const words = `Why Komosu`;
  const challengesText = `At Komosu Network, we don’t just design websites—we craft digital experiences tailored to your dealership’s needs:
`;
  const solutionsText = `Why Your Dealership Needs a DealerHub`;

  const h4Texts = {
    DealerHub1: "Custom Solutions",
    DealerHub2: "Dealer Hub Integration",
    DealerHub3: "Expert Support",
    DealerHub4: "Trust and Credibility",
    DealerHub5: "Differentiation from Competitors",
  };

  return (
    <section 
      className={casestyles.DigitalTransformationSection}
      ref={sectionRef}
    >
      <motion.div
        className={`${casestyles.headingsection} ${"text-center"}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h5 variants={fadeInUp} className="flex items-center gap-1">
          <TextGenerateEffect words={isInView ? words : ""} />
          <span className={`${styles.offerSpan} ${"text-[2rem] mt-2"}`}>
          Network?{" "}
        </span>
        </motion.h5>
        <motion.p variants={fadeInUp}>
          At Komosu Network, we don’t just design websites, <br /> we craft digital
          experiences tailored to your dealership’s needs
        </motion.p>
        <motion.p variants={fadeInUp}></motion.p>
      </motion.div>


     
      <motion.div
        className={` ${casestyles.thirdheadingsection} ${casestyles.whhyKomosuSection} `}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}>
          <motion.div className="h-full mx-auto flex flex-wrap items-start justify-center gap-8 p-4">
            <div className="max-w-[370px] border border-gray border-opacity-25 hover:shadow-md p-6 ">
            <Image src="/customSolution.jpg" alt="image" width={380} height={380} objectFit="cover" />
            <motion.div className={`${casestyles.textconent} ${"max-sm:gap-0"}`} variants={fadeInUp}>
                <h4>
                  <TextGenerateEffect
                    words={isInView ? h4Texts.DealerHub1 : ""}
                    
                  />
                </h4>
                <p>
                   Our designs reflect your unique brand identity while integrating cutting-edge features.
                </p>
              </motion.div>
            </div>
            <div className="max-w-[370px] border border-gray border-opacity-25 hover:shadow-md p-6 ">
            <Image src="/DealerIntegration.jpg" alt="image" width={380} height={380} objectFit="cover" />
            <motion.div className={`${casestyles.textconent} ${"max-sm:gap-0"}`} variants={fadeInUp}>
                <h4>
                  <TextGenerateEffect
                    words={isInView ? h4Texts.DealerHub2 : ""}
                    
                  />
                </h4>
                <p>
                We build a social media hub into your website, offering unparalleled engagement opportunities.
                </p>
              </motion.div>
            </div>
            <div className="max-w-[370px] border border-gray border-opacity-25 hover:shadow-md p-6 ">
            <Image src="/ExpertSupport.jpg" alt="image" width={380} height={380} objectFit="cover" />
            <motion.div className={`${casestyles.textconent} ${"max-sm:gap-0"}`} variants={fadeInUp}>
                <h4>
                  <TextGenerateEffect
                    words={isInView ? h4Texts.DealerHub3 : ""}
                    
                  />
                </h4>
                <p>
                From content creation to advanced functionality, we ensure your site is both stunning and strategic.
                </p>
              </motion.div>
            </div>
            <div className="max-w-[370px] border border-gray border-opacity-25 hover:shadow-md p-6 ">
            <Image src="/TrustCredible.jpg" alt="image" width={380} height={380} objectFit="cover" />
            <motion.div className={`${casestyles.textconent} ${"max-sm:gap-0"}`} variants={fadeInUp}>
                <h4>
                  <TextGenerateEffect
                    words={isInView ? h4Texts.DealerHub4 : ""}
                    
                  />
                </h4>
                <p>
                Customer reviews and testimonials prominently displayed build trust. Secure, modern design features signal that customers’ data is protected.
                </p>
              </motion.div>
            </div>
            <div className="max-w-[370px] border border-gray border-opacity-25 hover:shadow-md p-6 ">
            <Image src="/DifferentiationCompetitor.jpg" alt="image" width={380} height={380} objectFit="cover" />
            <motion.div className={`${casestyles.textconent} ${"max-sm:gap-0"}`} variants={fadeInUp}>
                <h4>
                  <TextGenerateEffect
                    words={isInView ? h4Texts.DealerHub5 : ""}
                    
                  />
                </h4>
                <p>
                Unique design elements aligned with your brand identity help your dealership be memorable.
                A custom-built Dealer Hub integrated into your site gives you a competitive edge by offering features no standard template can match
                </p>
              </motion.div>
            </div>
          
          </motion.div>
        </motion.div>
    </section>
  );
};

export default WhyKomosu;
