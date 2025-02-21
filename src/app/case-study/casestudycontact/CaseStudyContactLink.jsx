"use client";
import casestyles from "../casestudy.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion"; // Import useInView from framer-motion
import gsap from "gsap";

const CaseStudyContactLink = () => {
  const contactLinkSectionRef = useRef(null);
  const isInView = useInView(contactLinkSectionRef, { once: true }); // Trigger animation only once when in view

  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
        contactLinkSectionRef.current,
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 1 }
      );
    }
  }, [isInView]); // Trigger animation when the section is in view

  return (
    <section
      className={casestyles.contactLinksection}
      ref={contactLinkSectionRef}
    >
      <Image
        src="/carDealership_img.jpg"
        alt="car image"
        fill
        className={casestyles.PhotoShoot}
      />
      <div className={casestyles.contactLinkContainer}>
        <div className={casestyles.topimgabsolute}>
          <Image src="/Group 2.png" fill alt="Top Image" />
        </div>
        <h4>
          Transform Your Sales with Our Proven Lead <br /> Generation Solutions
        </h4>
        <Link href="/request-demo">
          <button>Get Started</button>
        </Link>
        <div className={casestyles.bottomimgabsolute}>
          <Image src="/Group 2.png" fill alt="Bottom Image" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyContactLink;
