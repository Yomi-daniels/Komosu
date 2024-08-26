"use client";
import Image from "next/image";
import styles from "./sections.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Servicesflex = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  // Set a minimum scale value using useTransform
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={styles.servicesContainer}
    >
      <div className={styles.servicesContainerContent}>
        <div className={styles.containerflex}>
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
              We revolutionize web design for dealerships. blending innovative
              techniques with strategic planning to elevate online presence and
              drive sales.
            </p>
          </div>
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
              We help eliminate paper-works and streamline processes with our
              chatbot, acting as financial managers helping simplify the
              financial journey.
            </p>
          </div>
        </div>
        <div className={styles.containerSubFlex}>
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

          <div className={styles.containerSubFlex1}>
            <div className={styles.flexImg}>
              <Image
                src="/Vector (4).png"
                alt="flexImage"
                fill
                objectFit="cover"
              />
            </div>
            <h5 className={styles.containerFlexh5}>Content that converts</h5>
            <p className={styles.containerFlexp}>
              Komosu Network transforms content marketing for dealership,
              merging innovative tactics with targeted campaigns to enhance car
              sales and optimize ad spending.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Servicesflex;
