"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./sections.module.css";
import Image from "next/image";

const VideoShowcase = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleReset = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <section className={styles.videoSection}>
      <div className={styles.videoContainer}>
        <video ref={videoRef} className={styles.video} controls>
          <source src="/Video.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.buttonContainer}>
          {!isPlaying ? (
            <div className={styles.playContainer}>
              <button onClick={handlePlay} className={styles.playButton}>
                <Image src="/play-large-fill.svg" alt="Play" fill />
              </button>
            </div>
          ) : (
            <div className={styles.resetContainer}>
              <button onClick={handleReset} className={styles.resetButton}>
                <Image src="/pause-large-fill.svg" alt="Pause" fill />
              </button>
            </div>
          )}
        </div>
      </div>
      <p className={styles.videoContent}>
        Enjoy cutting edge advertising solution for the growth of your brand
      </p>
    </section>
  );
};

export default VideoShowcase;
