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
              We revolutionize web design for dealerships. Blending innovative
              techniques with strategic planning to elevate online presence and
              drive sales.
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
            <h5 className={styles.containerFlexh5}>Virtual Finance Managers</h5>
            <p className={styles.containerFlexp}>
              We help eliminate paperwork and streamline processes with our
              chatbot, acting as financial managers to simplify the financial
              journey.
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
            <h5 className={styles.containerFlexh5}>
              Sales & Appointment Assistants
            </h5>
            <p className={styles.containerFlexp}>
              Komosu Network innovates lead generation for dealerships,
              combining content marketing and chatbot to boost sales and
              conversions.
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
            <h5 className={styles.containerFlexh5}>Content that Converts</h5>
            <p className={styles.containerFlexp}>
              Komosu Network transforms content marketing for dealerships,
              merging innovative tactics with targeted campaigns to enhance car
              sales and optimize ad spending.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesflex;
