"use client";
import Tickimg from "@/app/webdesign/components/Tickimg";
import casestyles from "../case-study/casestudy.module.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

import pricingStyles from "../pricing/pricing.module.css";
import Image from "next/image";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
// import { Montserrat } from "next/font/google";
import Link from "next/link";
import StackedCards from "./StackedCard";
import StickyStack from "./StackedCard";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["700"],
// });

const DealershipHubSection = () => {
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

  const words = `Why Dealers Love Dealer Hub`;
  const challengesText = `Own Your Audience. Build Trust. \n Sell More Cars`;
  const solutionsText = `YOUR DEALERSHIP'S SOCIAL MEDIA WEBSITE`;

  const h4Texts = {
    DealerHub1: "Leverage the Creator Economy",
    DealerHub2: "Host Stunning Car Edits and Interactive Features",
    DealerHub3: "Retain Control of Customer Data",
    DealerHub4: "Reduce Ad Dependency",
    DealerHub5: "Foster Loyalty and Repeat Visits",
  };

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
          <TextGenerateEffect words={isInView ? words : ""} />
        </motion.h5>
        <motion.p variants={fadeInUp}>
          DealerHub is your all-in-one platform to <br /> engage customers and
          build trust.
        </motion.p>
        <motion.p variants={fadeInUp}></motion.p>
      </motion.div>

      <motion.section className={`${casestyles.secondheadingsectionParent}`}>
        <div className="max-w-[50ch]">
          <motion.div
            className={casestyles.secondheadingsection}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h4 variants={fadeInUp} className="max-w-[30ch]">
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
                  Your Own Social Media Website Post videos,customer
                  testimonials, and  promotions directly on your  platform—not just
                  social media.
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
                  Full Control Over Your Leads Customers sign up to comment and
                  interact, giving you direct access to their emails and contact
                  info.
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
                  Frictionless Buying Experience Shoppers can message your team,
                  apply for financing, and even purchase vehicles without leaving
                  your site.
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
                  More Visibility, Less Reliance on Third Parties Stop paying per
                  lead on Cars.com or AutoTrader. Drive traffic to your own
                  network and build customer relationships.
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
                  Works With Social Media, Not Against It Keep posting on
                  Facebook, Instagram & TikTok—but redirect traffic to your
                  website, where you control the experience.
                </p>
              </motion.div>
             
            </motion.div>
          </motion.div>
        </div>

        <Image
          src="/contenthub.png"
          alt="car"
          width={500}
          height={500}
          className={`${casestyles.imageSectionImg} ${"max-sm:mt-[3rem]"}`}
        />
      </motion.section>

    
      <StackedCards/>
    
      <div>
        <section className={pricingStyles.pricingLandingPage}>
          <div className={pricingStyles.pricingHeaderContent}>
            <h1 className={` ${"text-center sm:text-xs max-md:text-xs"}`}>
              Advantageous functionalities of a <br /> centralized dealer
              platform
            </h1>
          </div>
          <div className={pricingStyles.pricingLandingPageContainer}>
            <div className={pricingStyles.pricingLandingPageContainerContent}>
              <div className={pricingStyles.pricingContentWrapper}>
                <Link href="/webdesign">
                  <div className={pricingStyles.pricingContent}>
                    <div className={pricingStyles.pricingContentHeader}>
                      <div
                        className={`${pricingStyles.pricingContentImgBg} ${pricingStyles.pricingContentImgBgblue}`}
                      >
                        <div className={pricingStyles.pricingContentImg}>
                          <Image src="/contentImg.png" fill objectFit="contain" />
                        </div>
                      </div>
                      <div className={pricingStyles.arrowWrapper}>
                        <h4>POST ENGAGING CONTENTS</h4>
                        <div className={pricingStyles.arrowLeft}>
                          <Image src="/Arrow 1.svg" fill />
                        </div>
                      </div>
                    </div>
                    <h3>
                     Upload vehicle videos, promotions, and customer stories. Visitors watch, like, and comment—just like social media
                    </h3>
                  </div>
                </Link>
                <Link href="/aisolution">
                  <div
                    className={` ${pricingStyles.pricingContent} ${pricingStyles.pricingContent2} ${"h-full"}`}
                  >
                    <div className={pricingStyles.pricingContentHeader}>
                      <div className={pricingStyles.pricingContentImgBg}>
                        <div className={pricingStyles.pricingContentImg}>
                          <Image
                            src="/captureImg.png"
                            fill
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <div className={pricingStyles.arrowWrapper}>
                        <h4> CAPTURE LEAD EFFORTLESSLY</h4>
                      </div>
                    </div>
                    <h3>
                    Customers sign up with their email to comment or ask questions, building your pipeline of potential buyers
                    </h3>
                  </div>
                </Link>
              </div>
              <div
                className={`${pricingStyles.pricingContentWrapper} ${pricingStyles.pricingContentWrapper2}`}
              >
            
                <Link href="/contentmarketing">
                  <div
                    className={` ${pricingStyles.pricingContent} ${pricingStyles.pricingContent3} ${"h-full"}`}
                  >
                    <div className={pricingStyles.pricingContentHeader}>
                      <div className={pricingStyles.pricingContentImgBg}>
                        <div className={pricingStyles.pricingContentImg}>
                          <Image
                            src="/networkImg.png"
                            fill
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <div className={pricingStyles.arrowWrapper}>
                        <h4>CONNECT & CONVERT IN REAL TIME</h4>
                      </div>
                    </div>
                    <h3>
                    Your team can chat with interested buyers, answer financing questions, and schedule test drives directly on the platform
                    </h3>
                  </div>
                </Link>
                <Link href="/leadgeneration">
                  <div
                    className={` ${pricingStyles.pricingContent} ${pricingStyles.pricingContent2} ${"h-full"}`}
                  >
                    <div className={pricingStyles.pricingContentHeader}>
                      <div className={pricingStyles.pricingContentImgBg}>
                        <div className={pricingStyles.pricingContentImg}>
                          <Image
                            src="/closeDeals.png"
                            fill
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <div className={pricingStyles.arrowWrapper}>
                        <h4> CLOSE DEALS WITHOUT FRICTION</h4>
                      </div>
                    </div>
                    <h3>
                    Integrated financing tools let shoppers start the purchase process immediately—no unnecessary steps or third-party distractions
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <Testimonials /> */}
        </section>
      </div>
    </section>
  );
};

export default DealershipHubSection;
