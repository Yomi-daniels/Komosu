"use client";
import webstyle from "../webdesign.module.css";
import Image from "next/image";
import LandingPageButtons from "../components/LandingPageButtons";
import { ScrollParallax } from "react-just-parallax";
import { Montserrat } from "next/font/google";
import { useEffect, useRef } from "react";
import Magnet from "@/Magnet";
import gsap from "gsap";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

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
  const message = `First Impressions Matter \n  Make Yours Count`;

  return (
    <section className={webstyle.webdesignLandingPage}>
      <div className={webstyle.vectorImagetop}>
        <Image alt="image" src="/webdesign vector.png" fill />
      </div>
      <div className={webstyle.webdesignLandingPageContainer}>
        <div
          className={`${webstyle.webdesignTextContainer} ${montserrat.className}`}
          ref={webdesignTextContainerRef}
        >
          <div className={webstyle.headerContent}>
            <div className={webstyle.headerimg}>
              <Image alt="image" src="/Vector (5).png" fill />
            </div>
            <h4>WEB DESIGN</h4>
          </div>
          {/* Using `message` instead of `words` */}
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
              <Image alt="image" src="/Frame 126.png" fill />
            </div>

            <div className={webstyle.webimage2}>
              <Image
                alt="image"
                src="/New Macbook Pro Mockup Front View.png"
                fill
              />
            </div>
          </div>
        </ScrollParallax>
      </div>
      <div className={webstyle.vectorImagebottom}>
        <Image alt="image" src="/webdesign vector.png" fill />
      </div>
    </section>
  );
};

export default WebDesignLandingpage;
