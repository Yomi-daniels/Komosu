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
  const message = `Driving Dealership Success Through \n Digital Evolution`;

  return (
    <section className={webstyle.webdesignLandingPage}>
      <div className={webstyle.vectorImagetop}>
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
          {/* Using `message` instead of `words` */}
          <h1 className="text-sm">
            <TextGenerateEffect
              words={message}
              messageClass="font-[32px] max-sm:text-[30px]"
            />
          </h1>
          <p>
            At Komosu Network, we don’t just create websites—we craft digital
            experiences that embody your brand’s identity and propel your
            dealership into the future. Our designs are tailored to align
            seamlessly with your unique brand image, ensuring your online
            presence resonates with your audience. By integrating cutting-edge
            technology, intuitive navigation, and visually stunning aesthetics,
            we elevate your dealership’s digital footprint and set you apart in
            the competitive automotive space.
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
      </div>
    </section>
  );
};

export default WebDesignLandingpage;
