"use client";
import webstyle from "../webdesign.module.css";
import Image from "next/image";
import LandingPageButtons from "../components/LandingPageButtons";
import { ScrollParallax } from "react-just-parallax";
// import { Montserrat } from "next/font/google";
import { useEffect, useRef } from "react";
import Magnet from "@/Magnet";
import gsap from "gsap";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import styles from "@/sections/sections.module.css";
import Link from "next/link";
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["700"],
// });

const WebDesignLandingpage = () => {
  const webdesignTextContainerRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    if (webdesignTextContainerRef.current)
      gsap.fromTo(
        webdesignTextContainerRef.current,
        {
          x: -300,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    if (parallaxRef.current)
      gsap.fromTo(
        parallaxRef.current,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
      );
  }, []);

  // Renaming `words` to `message`
  const message = `    First Impression Matters, Make Your Website Count!`;

  return (
    <section
      className={`${webstyle.webdesignLandingPage}${" dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] overflow-x-hidden flex flex-col mt-[3rem]"}`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

     <div className="max-w-[928px] min-h-[338px] text-center flex flex-col justify-center items-center gap-6 z-10 px-4">
  <h1 className="w-full">
    <TextGenerateEffect
      words={message}
      messageClass="font-bold leading-tight tracking-tight
        text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px]
        max-w-[928px] mx-auto"
    />
  </h1>

  <p className="max-w-[733px] font-medium text-darkBlueText text-[14px] sm:text-[16px] md:text-[18px] text-center md:w-[40ch]">
    Your website is the digital storefront of your dealership. A sleek,
    modern, and user-friendly design isn’t just about aesthetics—it’s
    about building trust, engaging customers, and driving sales.
  </p>

  <Link href="/request-demo">
    <button className={styles.headerGetStarted}>Get Started</button>
  </Link>
</div>


      {/* <div className={webstyle.vectorImagetop}>
        <Image src="/webdesign vector.png" fill />
      </div>
      <div className={webstyle.webdesignLandingPageContainer}>
        <div
          className={`${webstyle.webdesignTextContainer} ${montserrat.className}`}
          ref={webdesignTextContainerRef}
        >
          <div className={webstyle.headerContent}>
            <div className={webstyle.headerimg}>
              <Image src="/Vector (5).png" fill />
            </div>
            <h4>WEB DESIGN</h4>
          </div>
      
          <h1 className="text-sm">
            <TextGenerateEffect
              words={message}
              messageClass="font-[32px] max-sm:text-[30px]"
            />
          </h1>
          <p>
            Your website is the digital storefront of your dealership. A sleek,
            modern, and user-friendly design isn’t just about aesthetics—it’s
            about building trust, engaging customers, and driving sales.
          </p>
          <LandingPageButtons />
        </div>

        <ScrollParallax isAbsolutelyPositioned>
          <div className={webstyle.webdesignImageContainer} ref={parallaxRef}>
            <div className={webstyle.webimage}>
              <Image src="/Frame 126.png" fill />
            </div>

            <div className={webstyle.webimage2}>
              <Image src="/New Macbook Pro Mockup Front View.png" fill />
            </div>
          </div>
        </ScrollParallax>
      </div>
      <div className={webstyle.vectorImagebottom}>
        <Image src="/webdesign vector.png" fill />
      </div> */}
    </section>
  );
};

export default WebDesignLandingpage;
