"use client";
import { useState, useRef } from "react";
import styles from "./sections.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";

const shadow_Font = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Komosu's mission?",
      answer:
        "Komosu aims to revolutionize digital services by offering innovative and tailored solutions to businesses of all sizes.",
    },
    {
      question: "How can I get started with Komosu?",
      answer:
        "Getting started is easy! Just sign up on our website, choose a plan that suits your needs, and start exploring our services.",
    },
    {
      question: "What support does Komosu offer?",
      answer:
        "Komosu provides 24/7 customer support, with dedicated teams available to help you with any issues or questions you may have.",
    },
    {
      question: "What makes Komosu different from other service providers?",
      answer:
        "Komosu stands out by offering personalized services, advanced technology integration, and a customer-centric approach that ensures satisfaction.",
    },
  ];

  return (
    <section
      className={styles.FAQSection}
      style={{
        position: "sticky",
        top: "0",
        zIndex: "2",
        backgroundColor: "#fff",
      }}
    >
      <div
        className={styles.FAQHeaderContents}
        // Sticky Header
      >
        <div className={styles.servicesSubTextContainer}>
          <div className={styles.blueBorder}></div>
          <p className={styles.servicesSubText}>FAQs</p>
        </div>
        <h2 className={styles.FAQHeader}>
          Got{" "}
          <span className={`${styles.servicesSpan} ${shadow_Font.className}`}>
            Questions?
          </span>{" "}``
          we have the answers right
          <span className={`${styles.servicesSpan} ${shadow_Font.className}`}>
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
          <div
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            className={`${styles.FAQContainerContents}`}
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
          </div>
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
    </section>
  );
};

export default FAQ;
