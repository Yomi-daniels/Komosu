"use client";
import { useState } from "react";
import TestimonialData from "@/clientTestimonialData/testimonialData";
import styles from "./sections.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";

const shadows_Font = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300); // duration of the transition
  };

  const prevTestimonial = () => {
    const newIndex = currentIndex === 0 ? TestimonialData.length - 1 : currentIndex - 1;
    handleTransition(newIndex);
  };

  const nextTestimonial = () => {
    const newIndex = currentIndex === TestimonialData.length - 1 ? 0 : currentIndex + 1;
    handleTransition(newIndex);
  };

  const { avatar, company, data, username, role } = TestimonialData[currentIndex];

  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.offerHeader}>
        HEAR WHAT OUR{" "}
        <span className={`${styles.offerSpan} ${shadows_Font.className}`}>
          CLIENTS{" "}
        </span>
        SAY ABOUT US
      </h2>
      <div className={`${styles.testimonialContainer} ${isTransitioning ? styles.fade : ''}`}>
        <div className={styles.testimonialContents}>
          <div className={styles.avatar}>
            <Image src={avatar} alt={`${company} testimonial`} layout="fill" />
          </div>
          <div className={styles.testimonialTextContent}>
            <h2 className={styles.clientCompany}>{company}</h2>
            <p className={styles.feedbacks}>"{data}"</p>
            <p className={styles.testifierName}>{username}</p>
            <p className={styles.role}>{role}</p>
          </div>
        </div>
        <div className={styles.groupImg}>
          <Image src="/triangle.png" alt="decorative" layout="fill" />
        </div>
      </div>
      <div className={styles.testimonialButtonDirection}>
        <div className={styles.btnPrev} onClick={prevTestimonial}>
          <Image src="/View plan button.png" alt="Previous testimonial" layout="fill" />
        </div>
        <div className={styles.btnNext} onClick={nextTestimonial}>
          <Image src="/View plan button (1).png" alt="Next testimonial" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
