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
            <h5 className={styles.containerFlexh5}>Sell Smarter</h5>
            <p className={styles.containerFlexp}>
              Get a site that looks sharp and drives leads — 24/7, like your best BDC rep.
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
            <h5 className={styles.containerFlexh5}>Content That Converts</h5>
            <p className={styles.containerFlexp}>
             Skip the generic ads. Use videos and visuals that build trust and drive test drives.
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
            <h5 className={styles.containerFlexh5}>Keep Buyers Close</h5>
            <p className={styles.containerFlexp}>
             Turn your site into a social hub — where customers follow, engage, and return.
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
            <h5 className={styles.containerFlexh5}>Own the Journey
</h5>
            <p className={styles.containerFlexp}>
           No more middlemen. Control your content, capture real data, and grow on your terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesflex;
