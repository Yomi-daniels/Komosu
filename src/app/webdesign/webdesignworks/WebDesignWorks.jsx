"use client";
import webstyle from "../webdesign.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";
import WebDesignPricingPlans from "../webdesignpricing/WebDesignPricingPlans";
import GetStarted from "../components/GetStarted";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const shadowsFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const WebDesignWorks = () => {
  const textContent2Ref = useRef(null);
  const textcontentRightRef = useRef(null);
  const textContentRef = useRef(null);
  const webdesignImg1Ref = useRef(null);
  const webdesignImg2Ref = useRef(null);
  const webdesignImg3Ref = useRef(null);

  useEffect(() => {
    // Animate webdesignTextContent2 from the right
    gsap.fromTo(
      textContent2Ref.current,
      { x: 300, opacity: 0 }, // Start from the right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textContent2Ref.current,
          start: "top 80%", // Start animation when top of the element is 80% from the top of the viewport
          once: true, // Only animate once
        },
      }
    );

    // Animate textcontentRightRef from the right
    gsap.fromTo(
      textcontentRightRef.current,
      { x: 300, opacity: 0 }, // Start from the right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textcontentRightRef.current,
          start: "top 80%", // Start animation when top of the element is 80% from the top of the viewport
          once: true, // Only animate once
        },
      }
    );

    // Animate webdesignTextContent from the left
    gsap.fromTo(
      textContentRef.current,
      { x: -300, opacity: 0 }, // Start from the left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top 80%", // Start animation when top of the element is 80% from the top of the viewport
          once: true, // Only animate once
        },
      }
    );

    // Animate webdesignImg1Ref from the left
    gsap.fromTo(
      webdesignImg1Ref.current,
      { x: -300, opacity: 0 }, // Start from the left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: webdesignImg1Ref.current,
          start: "top 80%", // Start animation when top of the element is 80% from the top of the viewport
          once: true, // Only animate once
        },
      }
    );
    // Animate webdesignImg2Ref from the right
    gsap.fromTo(
      webdesignImg2Ref.current,
      { x: 300, opacity: 0 }, // Start from the right
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: webdesignImg2Ref.current,
          start: "top 80%", // Start animation when top of the element is 80% from the top of the viewport
          once: true, // Only animate once
        },
      }
    );
    // Animate webdesignImg3Ref from the left
    gsap.fromTo(
      webdesignImg3Ref.current,
      { x: -300, opacity: 0 }, // Start from the left
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: webdesignImg3Ref.current,
          start: "top 80%", // Start animation when top of the element is 80% from the top of the viewport
          once: true, // Only animate once
        },
      }
    );
  }, []);

  return (
    <section className={webstyle.webWorksSection}>
      <div className={webstyle.webdesignContentsContainer}>
        <div className={webstyle.webdesignContent2}>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg} ref={webdesignImg1Ref}>
              <Image src="/Frame 1618868702.png" fill objectFit="contain" />
            </div>
          </div>
          <div
            className={webstyle.webdesignTextContent2}
            ref={textcontentRightRef}
          >
            <h2> Integrated Dealer Hub</h2>
            <p>A built-in social media hub that boosts customer interaction.</p>
            <GetStarted />
          </div>
        </div>
        <div className={webstyle.webdesignContents1}>
          <div className={webstyle.webdesignTextContent} ref={textContentRef}>
            <h2>Seamless Navigation</h2>
            <p>
              Intuitive layouts that keep visitors engaged and exploring your
              inventory.
            </p>
            <GetStarted />
          </div>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg} ref={webdesignImg2Ref}>
              <Image src="/card.png" fill />
            </div>
          </div>
        </div>
        <div className={webstyle.webdesignContent2}>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg} ref={webdesignImg3Ref}>
              <Image src="/Frame 1618868705.png" fill />
            </div>
          </div>
          <div className={webstyle.webdesignTextContent2}>
            <h2> Custom Web Design</h2>
            <p>
              Tailored to your dealership’s brand, ensuring a unique, memorable
              experience.
            </p>
            <GetStarted />
          </div>
        </div>
        {/* <div className={webstyle.webdesignContents1}>
          <div className={webstyle.webdesignTextContent} ref={textContentRef}>
            <h2>SEO-Optimized Structure</h2>
            <p>
              Designed to rank higher on Google and attract organic traffic.
            </p>
            <GetStarted />
          </div>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg} ref={webdesignImg2Ref}>
              <Image src="/webdevimg (1).png" fill />
            </div>
          </div>
        </div> */}
      </div>
      <WebDesignPricingPlans />
    </section>
  );
};

export default WebDesignWorks;
