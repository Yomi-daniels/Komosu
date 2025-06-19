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
          className="font-custom text-[40px] max-sm:text-[25px] text-accentDark italic leading-[120%] tracking-[1.8px]"
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
           Sales Websites
          </li>
          <li
            className={activeSection === "aiSolutions" ? styles.active : ""}
            onClick={() => handleSectionClick("aiSolutions")}
          >
            Engagement Hub
          </li>
          <li
            className={
              activeSection === "contentMarketing" ? styles.active : ""
            }
            onClick={() => handleSectionClick("contentMarketing")}
          >
            Content Engine
          </li>
          <li
            className={activeSection === "leadGeneration" ? styles.active : ""}
            onClick={() => handleSectionClick("leadGeneration")}
          >
           Lead System
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
                    <h5> SALES WEBSITES</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                    Turn your site into a full-time sales rep, <br /> not just a digital brochure.
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
                        Easy Navigation – Designed to guide visitors to the vehicles they want.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                       Search-Ready – SEO baked in to bring more traffic with less ad spend.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                       Future-Proof Tech – AI chat, virtual showrooms, and tools built for 2025.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Built to Convert – Layouts designed to turn views into test drives.
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
                  className=" w-[800px] h-[600px] max-sm:h-[400px] relative max-sm:w-[500px]"
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants1}
                  ref={cardRef}
                >
                  <div
                    className="absolute top-[-5%] right-[-25%] w-[500px] scale-[1.3] max-sm:scale-1 h-[500px] max-sm:right-[10%]  max-sm:w-[300px] max-sm:h-[300px] max-sm:top-3 "
                  >
                    <Image
                      src="/Frame 1618868652.png"
                      fill
                      objectFit="cover"
                      alt="image"
                      
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
                          src="/vector Ai big.png"
                          alt="offerImage"
                          fill
                        />
                      </div>
                    </div>
                    <h5>ENGAGEMENT HUB</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                 The heartbeat of your platform — where leads connect and communities grow.
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
                      Your Own Platform – Host your content. Own your audience.

                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                  Built-In Messaging – Answer questions in real time, right on your site.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                       Capture + Nurture – Sign-ups become leads. Engagement builds trust.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                      Buy Online Ready – Inventory browsing, financing, and deals — all in one place.

                      </p>
                    </div>
                     <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                Real-Time Data – Understand buyer behavior and follow up smarter.

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
                    <Image src="/Frame 1618868493.png" fill objectFit="contain" />
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
                    <h5> CONTENT ENGINE</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                   Content that sells, builds trust, and keeps your brand top-of-mind.
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
                        Premium Video – Professional shoots made for websites, ads, and social.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                     Ad Creative That Works – Designed for clicks, calls, and conversions.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Consistent Voice – Storytelling that builds loyalty and brand equity.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                       Organic Growth Plan – Attract real interest with the right content strategy.
                      </p>
                    </div>
                      <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                  Hub-Ready – All content lives on your platform — not lost in the feed.
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
                        alt="image"
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
                    <h5>LEAD SYSTEM</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
               Generate, qualify, and convert — with less spend and more accuracy.
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
                        Ad-Driven Traffic – Send high-intent users straight to your platform.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                       Smart Lead Capture – Platform sign-ups that show real buying signals.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Community-Led Growth – Warm leads through trust and interaction.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                      Insight-Powered Sales – See who's ready, and when.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Automated Follow-Up – Keep leads engaged with personal, timely responses.
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
                    <Image src="/Frame 1618868694.png" fill 
                      alt="image"
                    objectFit="cover" />
                    <Image
                      src="/Frame 1618868694.png"
                        alt="image"
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
