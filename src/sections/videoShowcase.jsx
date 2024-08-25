"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./sections.module.css";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const VideoShowcase = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.section
      className={styles.videoSection}
      ref={ref}
      style={{ scale, opacity }}
    >
      <div className={styles.videoContainer}>
        <video className={styles.video} controls>
          <source src="/Video.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.buttonContainer}>
          <div className={styles.resetContainer}>
            <button className={styles.resetButton}>
              <Image src="/pause-large-fill.svg" alt="Pause" fill />
            </button>
          </div>
        </div>
      </div>
      <p className={styles.videoContent}>
        Enjoy cutting edge advertising solution for the growth of your brand
      </p>
    </motion.section>
  );
};

export default VideoShowcase;
