"use client";
import Tickimg from "@/app/webdesign/components/Tickimg";
import casestyles from "../case-study/casestudy.module.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import pricingStyles from "../pricing/pricing.module.css";
import Image from "next/image";
import styles from "@/sections/sections.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { title } from "@/utils/siteMetaData";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const WebdesignHub = () => {
 
  const points = [
    {
      title: 'Instill Trust & Credibility',
      description: 'We provide you with a polished, professional design that signals reliability.',
    },
    {
      title: 'Increase Conversion',
      description: 'We guide visitors to schedule test drives, apply for financing, and contact sales reps with ease.',
    },
    {
      title: 'Stand Out From Competitors',
      description: 'We custom-built Dealer Hub offers features no standard template can match.',
    },
    {
      title: 'Future Proof Your Brand',
      description: 'Adapt to emerging trends like VR showrooms & AI chat tools.',
    },
  ];

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
      Why your 
`;
  const challengesText = ` Needs a high performing website Different?`;
  const solutionsText = `How We Elevate Your Digital Presence`;

  return (
    <section
      className={`${"h-full  container relative  mt-[5rem] mx-auto"}`}
      ref={sectionRef}
    >
    <div className="flex flex-col gap-6 items-center justify-center max-w-[736px] mx-auto max-md:px-[2rem] max-sm:px-[2rem]">
      <h1 className="font-bold text-darkBlueText  text-[40px] mx-auto  text-center leading-[120%] tracking-[-4%] max-md:text-[32px] max-sm:text-[27px] ">
        Why your <span className="font-custom text-btn">Dealership</span> Needs a high performing website Different?
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
            <div key={index} className=" p-4 flex flex-col gap-4 items-start">
              <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold text-darkBlueText text-[24px] ">{point.title}</h3>
                <p className="text-[18px]  text-darkBlueText font-medium
                ">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/carKeyImage.png"
            alt="Happy customer with car keys"
            className="rounded-lg"
            width={500}
            height={700}
          />
        </div>
      </div>

    </div>

      {/* <motion.div
        className={casestyles.headingsection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h5 variants={fadeInUp}>
          <TextGenerateEffect
            words={isInView ? words : ""}
            challengesText
            className="text-center max-sm:text-[1.5rem]"
          />
        </motion.h5>
      
        <motion.p variants={fadeInUp}></motion.p>
      </motion.div> */}

      {/* <motion.section className={`${casestyles.secondheadingsectionParent}`}>
        <motion.div
          className={casestyles.secondheadingsection}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h4 variants={fadeInUp} className="max-w-[40ch]">
            <TextGenerateEffect words={isInView ? challengesText : ""}
             />
          </motion.h4>
          <motion.div
            className={`${casestyles.challanges}${"max-w-[40ch]"}`}
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
      </motion.section> */}
{/* 
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
      </motion.div> */}
   
    </section>
  );
};

export default WebdesignHub;
