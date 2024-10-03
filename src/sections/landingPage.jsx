"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import styles from "./sections.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Magnet from "@/Magnet";

const shadowFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const LandingPage = () => {
  const heroHeaderRef = useRef(null);
  const heroSubTextRef = useRef(null);
  const heroBtnRef = useRef(null);
  const videoRef = useRef(null);
  // const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    // GSAP animation for initial load
    gsap.fromTo(
      heroHeaderRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      heroSubTextRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      heroBtnRef.current,
      {x: "100%", opacity: 0},
      {x: '0', opacity: 1, duration:1, ease:"power2.out"}
    )

    gsap.fromTo(videoRef.current,
      {y:"100%", opacity:0 },
      {y: "0", opacity: 1,duration:2 ,ease:"power2.inOut"}
    )
  }, []);

  useEffect(() => {
    // Intersection Observer to detect visibility and apply opacity changes
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set opacity based on whether the element is in view
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out",
          });
        } else {
          gsap.to(entry.target, {
            opacity: 0,
            duration: 0.1,
            ease: "power2.out",
          });
        }
      },
      {
        threshold: 1, // Adjust this value as needed
      }
    );

    // Observe the elements
    if (heroHeaderRef.current) {
      observer.observe(heroHeaderRef.current);
    }

    if (heroSubTextRef.current) {
      observer.observe(heroSubTextRef.current);
    }

    if (heroBtnRef.current) {
      observer.observe(heroBtnRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (heroHeaderRef.current) {
        observer.unobserve(heroHeaderRef.current);
      }
      if (heroSubTextRef.current) {
        observer.unobserve(heroSubTextRef.current);
      }
      if (heroBtnRef.current) {
        observer.unobserve(heroBtnRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.HeroTextContainer}>
            <div className={styles.HeroText} ref={heroHeaderRef}>
              <h1 className={styles.heroHeader}>
                Transform your{" "}
                <span className={`${styles.heroSpan} ${shadowFont.className}`}>
                  {" "}
                  dealership{" "}
                </span>{" "}
                with Komosu Network
              </h1>
            </div>
            <div className={styles.HeaderContent} ref={heroSubTextRef}>
              <p className={styles.heroSubText}>
                Our team of experts will help provide long-lasting solutions for
                your business through web design, AI Solutions, and other
                high-quality impressions through content marketing and lead
                generation.
              </p>
            </div>
            <div className={styles.landingBtns} 
            ref={heroBtnRef}
            >
           
      <Link href="/request-demo">
        <button  className={styles.headerGetStarted}>Get Started</button>
      </Link>
   
                <Link href="/about">
                <button className={styles.headerbtn}>
                  Learn more
                  <div className={styles.buttonImage}>
                    <Image src="/View plan button (4).png" alt="vector" fill />
                  </div>
                </button>
              </Link>
            </div>
          </div>
   
       <div className={styles.heroImgBg}
       ref={videoRef}>
            <video loop autoPlay muted>
              <source src="/Hero video.mp4" type="video/mp4" />
            </video>
          </div>
  
        
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
