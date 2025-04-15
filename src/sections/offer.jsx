"use client";

import styles from "./sections.module.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shadows_Into_Light } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const shadowFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Offer = () => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const offerSelectPropsRef = useRef(null);
  const offerheaderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { x: -300, opacity: 0 }, //start from left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );
    gsap.fromTo(
      cardRef.current,
      { x: 300, opacity: 0 }, //start from right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%", //start animation when top of the element is 80% from the top of the viewport
          once: true, //only animate once
        },
      }
    );

    if (offerheaderRef.current)
      gsap.fromTo(
        offerheaderRef.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: offerheaderRef.current,
            start: "top 100%", //start animation when top of the element is 100% from the top of the viewport
            once: true, //only animate once
          },
        }
      );

    if (offerSelectPropsRef.current)
      gsap.fromTo(
        offerSelectPropsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: offerSelectPropsRef.current,
            start: "top 100%", //start animation when top of the element is 100% from the top of the viewport
            once: true, //only animate once
          },
        }
      );
  }, []);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-2.5 1.55", "1 1"],
  });

  // Set a minimum scale value using useTransform
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const [activeSection, setActiveSection] = useState("webDesign");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionClick = (section) => {
    if (section !== activeSection) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSection(section);
        setIsTransitioning(false);
      }, 300); // duration of the transition
    }
  };

  const contentVariants1 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const cardVariants1 = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const contentVariants2 = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const cardVariants2 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const contentVariants3 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const cardVariants3 = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const contentVariants4 = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const cardVariants4 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  return (
    <section className={styles.OfferSection}>
      <h2 className={styles.offerHeader} ref={offerheaderRef}>
        What We Offer Our{" "}
        <span
          className={`${styles.offerSpan} ${shadowFont.className} ${"font-custom text-xl"}`}
        >
          {" "}
          Clients
        </span>
      </h2>
      <div className={styles.offerContainer}>
        <div className={styles.offerSelectProps} ref={offerSelectPropsRef}>
          <li
            className={activeSection === "webDesign" ? styles.active : ""}
            onClick={() => handleSectionClick("webDesign")}
          >
            Web Design
          </li>
          <li
            className={activeSection === "aiSolutions" ? styles.active : ""}
            onClick={() => handleSectionClick("aiSolutions")}
          >
            Dealers Hub
          </li>
          <li
            className={
              activeSection === "contentMarketing" ? styles.active : ""
            }
            onClick={() => handleSectionClick("contentMarketing")}
          >
            Content Solution
          </li>
          <li
            className={activeSection === "leadGeneration" ? styles.active : ""}
            onClick={() => handleSectionClick("leadGeneration")}
          >
            Lead Generation
          </li>
        </div>

        <div className={styles.OfferOfferContentContainer}>
          <div
            className={`${styles.section} ${activeSection === "webDesign" && !isTransitioning ? styles.active : ""} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
          >
            {activeSection === "webDesign" && (
              <div className={styles.webDesignContainer}>
                <motion.div
                  className={styles.webDesignContent}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants1}
                  ref={contentRef}
                >
                  <div className={styles.webDesignHeader}>
                    <div className={styles.webHeaderImgBg}>
                      <div className={styles.webHeaderImg}>
                        <Image src="/Vector (13).png" alt="offerImage" fill />
                      </div>
                    </div>
                    <h5>WEB DESIGN</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                    Drive your automotive company forward with innovative and
                    stunning web design
                  </h1>
                  <Link href="/webdesign">
                    <button className={styles.WebDesignBtn}>See More</button>
                  </Link>
                  <div className={styles.WebDesignFeatures}>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Seamless Navigation – Intuitive layouts that keep
                        visitors engaged and exploring.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        SEO-Optimized – Designed to rank higher and drive
                        organic traffic.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Future-Ready Features – AI chat, VR showrooms, and other
                        cutting-edge integrations.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        High-Conversion Structure – Built to turn visitors into
                        leads and sales.
                      </p>
                    </div>
                    {/* <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>Virtual showrooms to display your vehicle lineup.</p>
                    </div> */}
                  </div>
                </motion.div>
                <motion.div
                  className={`${styles.webDesignCardContainer} ${styles.webDesignCardContainer1}`}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants1}
                  ref={cardRef}
                >
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCardfirst}`}
                  >
                    <Image
                      src="/Frame 1618868652.png"
                      fill
                      objectFit="contain"
                    />
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          <div
            className={`${styles.section} ${activeSection === "aiSolutions" && !isTransitioning ? styles.active : ""} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
          >
            {activeSection === "aiSolutions" && (
              <div
                className={`${styles.webDesignContainer} ${styles.aiSolution}`}
              >
                <motion.div
                  className={styles.webDesignContent}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants2}
                >
                  <div className={styles.webDesignHeader}>
                    <div className={styles.webHeaderImgBg}>
                      <div className={styles.webHeaderImg}>
                        <Image
                          src="/dealerHubCarIcon.png"
                          alt="offerImage"
                          fill
                        />
                      </div>
                    </div>
                    <h5>DEALERS HUB</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                    Your Own Social Media Platform – Host and control content
                    reducing third-party reliance.
                  </h1>
                  <Link href="/dealership_hub">
                    <button className={styles.WebDesignBtn}>See More</button>
                  </Link>
                  <div className={styles.WebDesignFeatures}>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Customer Engagement – Built-in messaging, comments, and
                        interactive content.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Lead Capture & Nurturing – Collect emails, build
                        relationships, and drive conversions.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Integrated Sales Tools – Customers can browse inventory,
                        apply for financing, and buy online.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Data & Insights – Gain valuable customer behavior
                        insights to improve marketing.
                      </p>
                    </div>
                    {/* <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Provide real-time assistance on your dealership’s
                        website.
                      </p>
                    </div> */}
                  </div>
                </motion.div>
                <motion.div
                  className={`${styles.webDesignCardContainer} ${styles.AisolutionContainer}`}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants2}
                >
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCard1}`}
                  >
                    <Image src="/webdevimg (2).png" fill objectFit="contain" />
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          <div
            className={`${styles.section} ${activeSection === "contentMarketing" && !isTransitioning ? styles.active : ""} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
          >
            {activeSection === "contentMarketing" && (
              <div
                className={`${styles.webDesignContainer} ${styles.contentMarketing}`}
              >
                <motion.div
                  className={styles.webDesignContent}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants3}
                >
                  <div className={styles.webDesignHeader}>
                    <div className={styles.webHeaderImgBg}>
                      <div className={styles.webHeaderImg}>
                        <Image
                          src="/Vector (13).png"
                          alt="offerImage"
                          fill
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <h5>CONTENT SOLUTION</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                    Premium Video Production – High-quality content for
                    websites, ads, and social media.
                  </h1>
                  {/* <Link href="/contentmarketing">
                    <button className={styles.WebDesignBtn}>See More</button>
                  </Link> */}
                  <div className={styles.WebDesignFeatures}>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Ad Creative That Converts – Engaging assets optimized
                        for maximum ROI.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Consistent Brand Messaging – Professional storytelling
                        that builds trust and loyalty.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Organic Growth Strategy – Content designed to attract
                        and retain customers.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Seamless Dealer Hub Integration – Host and showcase
                        content directly on your platform.
                      </p>
                    </div>
                    {/* <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Utilize SEO best practices to ensure your content
                        reaches the right audience.
                      </p>
                    </div> */}
                  </div>
                </motion.div>
                <motion.div
                  className={`${styles.webDesignCardContainer} ${styles.contentMarketingContainer}`}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants3}
                >
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCard1}`}
                  >
                    <Image
                      src="/content marketing girl.png"
                      fill
                      objectFit="contain"
                    />
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          <div
            className={`${styles.section} ${activeSection === "leadGeneration" && !isTransitioning ? styles.active : ""} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
          >
            {activeSection === "leadGeneration" && (
              <div
                className={`${styles.webDesignContainer} ${styles.leadGeneration}`}
              >
                <motion.div
                  className={styles.webDesignContent}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants4}
                >
                  <div className={styles.webDesignHeader}>
                    <div className={styles.webHeaderImgBg}>
                      <div className={styles.webHeaderImg}>
                        <Image
                          src="/Vector (13).png"
                          alt="offerImage"
                          fill
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <h5>LEAD GENERATION</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                    Amplify your sales pipeline with effective lead generation
                    strategies
                  </h1>
                  <Link href="/leadgeneration">
                    <button className={styles.WebDesignBtn}>See More</button>
                  </Link>
                  <div className={styles.WebDesignFeatures}>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Drive Traffic from Ad Platforms – Use targeted ad
                        campaigns to send high-quality leads directly to your
                        social media website.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        High-Intent Lead Capture – Distinguish serious prospects
                        through platform sign-ups and engagement.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Community Building – Build a loyal community around your
                        brand, nurturing leads through authentic interactions.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Platform-Specific Insights – Track and analyze sign-ups
                        to identify and prioritize high-intent leads.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Seamless Lead Nurturing – Automate personalized
                        follow-ups to maintain engagement and boost conversions.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className={`${styles.webDesignCardContainer} ${styles.contentMarketingContainer}`}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants4}
                >
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCard3}`}
                  >
                    <Image src="/Frame 1618868694.png" fill objectFit="cover" />
                    <Image
                      src="/Frame 1618868694.png"
                      fill
                      objectFit="contain"
                    />
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
