"use client";
import Tickimg from "@/app/webdesign/components/Tickimg";

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

  const words = `Why Komosu Network?`;
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
        <motion.h5 variants={fadeInUp}>
          <TextGenerateEffect words={isInView ? words : ""} />
        </motion.h5>
        <motion.p variants={fadeInUp}>
          At Komosu Network, we don’t just design websites, <br /> we craft digital
          experiences tailored to your dealership’s needs
        </motion.p>
        <motion.p variants={fadeInUp}></motion.p>
      </motion.div>
{/* 
      <motion.section className={`${casestyles.secondheadingsectionParent}`}>
        <motion.div
          className={`${casestyles.secondheadingsection} `}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h4 variants={fadeInUp} className="max-w-[40ch] ">
            <TextGenerateEffect words={isInView ? challengesText : ""} />
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
                <span className="font-bold">Custom Solutions:</span> Our designs
                reflect your unique brand identity while <br /> integrating
                cutting-edge features.
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
                <span className="font-bold">Dealer Hub Integration:</span>{" "}
                We build a social media hub into your website, offering <br /> unparalleled engagement opportunities.
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
                <span className="font-bold">Expert Support:</span>{" "}
                From content creation to advanced functionality, we ensure <br />your site is both stunning and strategic.
              </p>
            </motion.div>
         
          
         
          </motion.div>
          
        
         <div className={casestyles.WhyKomosuImgContainer}>
           <Image
            src="/whykomosuImg1.jpg"
            alt="car"
                   fill
            className={casestyles.WhyKomosuImg1}
                   />
         </div>
        </motion.div>

      </motion.section> */}

      <motion.div
        className={` ${casestyles.thirdheadingsection} ${casestyles.whhyKomosuSection}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* <motion.h4
          variants={fadeInUp}
          className={casestyles.thirdsectionheader}
        >
          <TextGenerateEffect words={isInView ? solutionsText : ""} />
        </motion.h4> */}

        <div className={casestyles.textWrapper}>
          <motion.div
            className={casestyles.textcontentflex}
            variants={staggerContainer}
          >
            <motion.div className={casestyles.textconent} variants={fadeInUp}>
              <h4>
                <TextGenerateEffect
                  words={isInView ? h4Texts.DealerHub1 : ""}
                />
              </h4>
              <p>
                 Our designs reflect your unique brand identity while integrating cutting-edge features.
              </p>
            </motion.div>

            <motion.div className={casestyles.textconent} variants={fadeInUp}>
              <h4>
                <TextGenerateEffect
                  words={isInView ? h4Texts.DealerHub2 : ""}
                />
              </h4>
              <p>
         We build a social media hub into your website, offering unparalleled engagement opportunities.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className={casestyles.textcontentflex}
            variants={staggerContainer}
          >
            <motion.div className={casestyles.textconent} variants={fadeInUp}>
              <h4>
                <TextGenerateEffect
                  words={isInView ? h4Texts.DealerHub3 : ""}
                />
              </h4>
              <p>
                From content creation to advanced functionality, we ensure your site is both stunning and strategic.
              </p>
            </motion.div>

            <motion.div className={casestyles.textconent} variants={fadeInUp}>
              <h4>
                <TextGenerateEffect
                  words={isInView ? h4Texts.DealerHub4 : ""}
                />
              </h4>
              <p>
             Customer reviews and testimonials prominently displayed build trust. Secure, modern design features signal that customers’ data is protected.

              </p>
            </motion.div>
          </motion.div>
          <motion.div className={casestyles.textconent} variants={fadeInUp}>
            <h4>
              <TextGenerateEffect words={isInView ? h4Texts.DealerHub5 : ""} />
            </h4>
            <p>
             Unique design elements aligned with your brand identity help your dealership be memorable.
              A custom-built Dealer Hub integrated into your site gives you a competitive edge by offering features no standard template can match

            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* <motion.p
        className={casestyles.lastheadingtext}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        Through our comprehensive digital solutions, Marshall Group could fully
        realize their digital transformation, leading to increased sales and a
        stronger market presence. Let Komosu Network help you unlock your
        dealership’s full potential."
      </motion.p> */}
      <div>
        {/* <section className={pricingStyles.pricingLandingPage}>
          <div className={pricingStyles.pricingHeaderContent}>
            <h1
              className={`${montserrat.className} ${"text-center sm:text-xs"}`}
            >
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
                          <Image src="/Vector.svg" fill objectFit="contain" />
                        </div>
                      </div>
                      <div className={pricingStyles.arrowWrapper}>
                        <h4>HIGHER CONVERSIONS</h4>
                        <div className={pricingStyles.arrowLeft}>
                          <Image src="/Arrow 1.svg" fill />
                        </div>
                      </div>
                    </div>
                    <h3>
                      Keep potential buyers engaged with cutting-edge features
                      that address their needs at every stage of the sales
                      funnel.
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
                            src="/vector Ai big.png"
                            fill
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <div className={pricingStyles.arrowWrapper}>
                        <h4>STRONGER BRAND IDENTITY</h4>
                      </div>
                    </div>
                    <h3>
                      Position your dealership as a forward-thinking,
                      customer-first brand.
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
                            src="/Vector (4).png"
                            fill
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <div className={pricingStyles.arrowWrapper}>
                        <h4>COST SAVINGS</h4>
                      </div>
                    </div>
                    <h3>
                      Generate leads organically, reducing reliance on paid
                      advertisements
                    </h3>
                  </div>
                </Link>
                <Link href="/leadgeneration">
                  <div
                    className={` ${pricingStyles.pricingContent} ${pricingStyles.pricingContent2}`}
                  >
                    <div className={pricingStyles.pricingContentHeader}>
                      <div className={pricingStyles.pricingContentImgBg}>
                        <div className={pricingStyles.pricingContentImg}>
                          <Image
                            src="/Vector (2).png"
                            fill
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <div className={pricingStyles.arrowWrapper}>
                        <h4>ENHANCED EFFICIENCY</h4>
                      </div>
                    </div>
                    <h3>
                      Streamline operations with an all-in-one platform that
                      seamlessly integrates content, inventory, and customer
                      engagement tools
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
         
        </section> */}
      </div>
    </section>
  );
};

export default WhyKomosu;
