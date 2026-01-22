"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./sections.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion"; // Import Framer Motion

const shadows_Font = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const faqRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  // Framer Motion Hooks
  const faqSectionRef = useRef(null);
  const inView = useInView(faqSectionRef, { once: true, amount: 0.5 });
  const animationControls = useAnimation();

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Trigger animation when section is in view
  useEffect(() => {
    if (inView) {
      animationControls.start("visible");
    } else {
      animationControls.start("visible");
    }
  }, [inView, animationControls]);

  // Sticky scroll effect (Framer Motion for fade-in/out)
  const faqVariants = {
    hidden: { opacity: 0, y: "50vh" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const faqs = [
    {
      question: "What is Carmosu's mission?",
      answer:
        "CarMosu is licensed. Start with a short qualification call to confirm fit and availability in your metro area.",
    },
    {
      question: "How can I get started with Carmosu?",
      answer:
        " It starts with a quick call. We’ll review your current setup, show you what’s possible, and map out how to turn your site into a high-performing sales platform.",
    },
    {
      question: "What support does Carmosu offer?",
      answer:
        "System setup, activation, and ongoing performance monitoring CarMosu does not provide customization or website redesigns.",
    },
    {
      question: "What makes Carmosu different from other service providers?",
      answer:
        "CarMosu doesn’t compete with websites, agencies, or CRMs.Websites inform. Agencies optimize campaigns. CRMs manage leads. CarMosu controls the destination — shaping intent before a lead exists.",
    },
  ];

  return (
    <motion.section
      ref={faqSectionRef}
      className={`${styles.FAQSection}`}
      initial="hidden"
      animate={animationControls}
      variants={faqVariants}
      style={{ position: "sticky", top: "0", zIndex: "2" }} // Make FAQ section sticky
    >
      <div className={styles.FAQHeaderContents}>
        <div className={styles.servicesSubTextContainer}>
          <div className={styles.blueBorder}></div>
          <p className={styles.servicesSubText}>FAQs</p>
        </div>
        <h2 className={styles.FAQHeader}>
          Got{" "}
          <span className={`${styles.servicesSpan} ${shadows_Font.className}`}>
            Questions?
          </span>{" "}
          we have the answers right
          <span className={`${styles.servicesSpan} ${shadows_Font.className}`}>
            {" "}
            Here
          </span>
        </h2>
      </div>
      <div className={styles.FAQContainer}>
        <div className={styles.FAQline}>
          <Image
            src="/Group 2.png"
            alt="lines"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            className={`${styles.FAQContainerContents} ${styles.hidden}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }} // Animate FAQs as they come into view
          >
            <div
              className={styles.FAQContents}
              onClick={() => toggleFAQ(index)}
            >
              <h4>{faq.question}</h4>

              <div className={styles.dropdownImg}>
                <Image
                  src="/Frame 39.png"
                  alt="Faq image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div
              className={`${styles.FAQAnswer} ${
                expandedIndex === index ? styles.expanded : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        ))}
        <div className={styles.FAQline}>
          <Image
            src="/Group 3.png"
            alt="lines"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
