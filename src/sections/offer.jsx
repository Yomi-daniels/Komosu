"use client";

import styles from "./sections.module.css";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shadows_Into_Light } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const shadowFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Offer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

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

  const contentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className={styles.OfferSection}
      ref={ref}
      style={{ scale, opacity }}
    >
      <h2 className={styles.offerHeader}>
        WHAT WE OFFER OUR{" "}
        <span className={`${styles.servicesSpan} ${shadowFont.className}`}>
          CLIENTS
        </span>
      </h2>
      <div className={styles.offerContainer}>
        <div className={styles.offerSelectProps}>
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
            AI Solutions
          </li>
          <li
            className={
              activeSection === "contentMarketing" ? styles.active : ""
            }
            onClick={() => handleSectionClick("contentMarketing")}
          >
            Content Marketing
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
                  variants={contentVariants}
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
                        Tailored website designs that reflect your brand's
                        identity and values.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Secure and efficient online booking and purchasing
                        systems.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Comprehensive SEO strategies to improve search engine
                        rankings.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Integration with CRM systems for better customer
                        relationship management.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>Virtual showrooms to display your vehicle lineup.</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className={`${styles.webDesignCardContainer} ${styles.webDesignCardContainer1}`}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCard1}`}
                  >
                    <Image
                      src="/New Macbook Pro Mockup Front View.png"
                      fill
                      objectFit="contain"
                    />
                  </div>
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCard2}`}
                  >
                    <Image
                      src="/Pixel 8 Pro Mockup Obsidian.png"
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
                  variants={contentVariants}
                >
                  <div className={styles.webDesignHeader}>
                    <div className={styles.webHeaderImgBg}>
                      <div className={styles.webHeaderImg}>
                        <Image src="/ai vector.png" alt="offerImage" fill />
                      </div>
                    </div>
                    <h5>AI SOLUTIONS</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                    Accelerate your business with auto-pilot efficiency
                    sponsored by our AI-powered Chatbot
                  </h1>
                  <Link href="/aisolution">
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
                        24/7 Customer Support. Provide immediate answers to
                        customer queries, improving satisfaction and engagement.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Automatically qualify leads by asking pre-set questions
                        and directing them to the appropriate sales
                        representatives.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Facilitate easy scheduling of maintenance and service
                        appointments.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Inform customers about ongoing promotions, discounts,
                        and special events.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Provide real-time assistance on your dealership’s
                        website.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className={`${styles.webDesignCardContainer} ${styles.AisolutionContainer}`}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div
                    className={`${styles.webDesignCard} ${styles.webDesignCard1}`}
                  >
                    <Image
                      src="/Frame 1618868477.png"
                      fill
                      objectFit="contain"
                    />
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
                  variants={contentVariants}
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
                    <h5>CONTENT MARKETING</h5>
                  </div>
                  <h1 className={styles.webDesignh1}>
                    Expand your business reach through dynamic and engaging
                    content
                  </h1>
                  <Link href="/contentmarketing">
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
                        Create high-quality blog posts, articles, and
                        newsletters that captivate your audience.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Develop engaging social media content that promotes
                        interaction and brand loyalty.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Produce video content that showcases your products and
                        services.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Implement email marketing campaigns that nurture leads
                        and drive conversions.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Utilize SEO best practices to ensure your content
                        reaches the right audience.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className={`${styles.webDesignCardContainer} ${styles.contentMarketingContainer}`}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
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
                  variants={contentVariants}
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
                        Capture and nurture leads with targeted campaigns and
                        personalized messaging.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Utilize advanced analytics to track and optimize lead
                        generation efforts.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Implement CRM systems for seamless lead management and
                        follow-up.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Engage prospects through automated email marketing
                        campaigns.
                      </p>
                    </div>
                    <div className={styles.WebDesignFeaturesContent}>
                      <div className={styles.webFeaturesImgShadow}>
                        <div className={styles.webFeaturesImg}>
                          <Image src="/Vector (6).png" alt="offerImage" fill />
                        </div>
                      </div>
                      <p>
                        Drive traffic and leads through effective social media
                        strategies.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className={`${styles.webDesignCardContainer} ${styles.contentMarketingContainer}`}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
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
    </motion.section>
  );
};

export default Offer;
