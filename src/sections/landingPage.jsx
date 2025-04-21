"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import styles from "./sections.module.css";
import { Shadows_Into_Light } from "next/font/google";

const shadowFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const LandingPage = () => {
  const heroHeaderRef = useRef(null);
  const heroSubTextRef = useRef(null);
  const heroBtnRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      heroHeaderRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        heroSubTextRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.7"
      )
      .fromTo(
        heroBtnRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.7"
      )
      .fromTo(
        videoRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 },
        "-=0.9"
      );
  }, []);

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center overflow-x-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.HeroTextContainer}>
            <div className={styles.HeroText} ref={heroHeaderRef}>
              <h1 className={styles.heroHeader}>
                Transform your{" "}
                <span className={`${styles.heroSpan} ${shadowFont.className}`}>
                  dealership
                </span>{" "}
                with Komosu Network
              </h1>
            </div>
            <div className={styles.HeaderContent} ref={heroSubTextRef}>
              <p className={styles.heroSubText}>
                At Komosu Network, we are committed to revolutionizing the
                automotive industry by digitizing processes typically done in
                person.
              </p>
            </div>
            <div className={styles.landingBtns} ref={heroBtnRef}>
              <Link href="/request-demo">
                <button className={styles.headerGetStarted}>Book a Demo</button>
              </Link>
              <Link href="/about">
                <button className={styles.headerbtn}>
                  Learn More
                  <div className={styles.buttonImage}>
                    <Image src="/View plan button (4).png" alt="vector" fill />
                    {/* <Image alt='image' src="/top-right.png" alt="vector" fill className='' /> */}
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.heroImgBg} ref={videoRef}>
            <video loop autoPlay muted playsInline>
              <source src="/Hero video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
