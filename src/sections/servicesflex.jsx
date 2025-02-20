"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./sections.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Servicesflex = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    // GSAP animation
    gsap.fromTo(
      element,
      { scale: 0.8, opacity: 0.4 }, // Initial state
      {
        scale: 1, // Final scale
        opacity: 1, // Final opacity
        scrollTrigger: {
          trigger: element,
          start: "top center", // Start animation when the top of the element hits the center of the viewport
          end: "center center", // End when the element's center aligns with the viewport center
          scrub: true, // Smooth scrubbing effect
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className={styles.servicesContainer}>
      <div className={styles.servicesContainerContent}>
        <div className={styles.containerflex}>
          {/* Service 1 */}
          <div className={styles.containerFlex1}>
            <div className={styles.flexImg}>
              <Image
                src="/Vector (1).png"
                alt="flexImage"
                fill
                objectFit="cover"
              />
            </div>
            <h5 className={styles.containerFlexh5}>Web Design</h5>
            <p className={styles.containerFlexp}>
              Elevate your dealership with sleek, modern web design that
              enhances user experience, builds trust, and showcases your
              inventory to drive sales and engagement
            </p>
          </div>
          {/* Service 2 */}
          <div className={styles.containerFlex1}>
            <div className={styles.flexImg}>
              <Image
                src="/Vector (2).png"
                alt="flexImage"
                fill
                objectFit="cover"
              />
            </div>
            <h5 className={styles.containerFlexh5}>Content</h5>
            <p className={styles.containerFlexp}>
              Create high-quality, authentic content that boosts customer
              engagement, reduces reliance on ads, and strengthens your
              dealership’s brand through unique storytelling
            </p>
          </div>
        </div>
        <div className={styles.containerSubFlex}>
          {/* Service 3 */}
          <div className={styles.containerSubFlex1}>
            <div className={styles.flexImg}>
              <Image
                src="/Vector (3).png"
                alt="flexImage"
                fill
                objectFit="cover"
              />
            </div>
            <h5 className={styles.containerFlexh5}>Dealer Hub</h5>
            <p className={styles.containerFlexp}>
              Revolutionize your dealership’s website with an integrated Dealer
              Hub—a social media hub that retains customer attention and
              nurtures leads directly on your site
            </p>
          </div>
          {/* Service 4 */}
          <div className={styles.containerSubFlex1}>
            <div className={styles.flexImg}>
              <Image
                src="/Vector (4).png"
                alt="flexImage"
                fill
                objectFit="cover"
              />
            </div>
            <h5 className={styles.containerFlexh5}>More Control</h5>
            <p className={styles.containerFlexp}>
              Gain autonomy with a platform that centralizes your content,
              captures valuable data, and reduces dependency on third-party
              tools for sustained, cost-effective growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesflex;
