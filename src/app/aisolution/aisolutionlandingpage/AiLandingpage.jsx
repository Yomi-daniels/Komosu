"use client";

import Aistyles from "../Aisolution.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
import { ScrollParallax } from "react-just-parallax";
import { useEffect, useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import gsap from "gsap";

const AiLandingpage = () => {
  const containerTextRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: "power3.out" } });

    tl.fromTo(
      containerTextRef.current,
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1 }
    )
      .fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=1"
      )
      .fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=1"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1 },
        "-=0.8"
      );

    gsap.fromTo(
      imageRef.current,
      { y: 300, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  const headertext = `Drive More Leads, \n Close More Sales`;
  const subheading = `Komosu Network blends AI and automation to supercharge your dealership — engage better, respond faster, and sell smarter.`;

  return (
    <section className={Aistyles.AiLandingPage}>
      <div className={Aistyles.vectorImgtop}>
        <Image src="/yellow vector.png" fill alt="decorative top vector" />
      </div>
      <div className={Aistyles.ailandingpageContainer}>
        <div
          className={Aistyles.ailandingpageContainerTextContent}
          ref={containerTextRef}
        >
          <div className={Aistyles.AiLandingPageHeader}>
            <div className={Aistyles.aiheaderImg}>
              <Image src="/ai vector.png" fill alt="AI badge" />
            </div>
            <h4>AI SOLUTIONS</h4>
          </div>
<div>
  
            <h2 className="text-sm" ref={headingRef}>
              <TextGenerateEffect
                words={headertext}
                messageClass="text-[48px] max-sm:text-[35px]"
              />
        

            </h2>
</div>

          <p ref={subheadingRef}>{subheading}</p>

          <div ref={buttonRef}>
            <LandingPageButtons />
          </div>
        </div>

        <div className={Aistyles.ailandingpageImage} ref={imageRef}>
          <ScrollParallax isAbsolutelyPositioned>
            <div className={Aistyles.ailandingpageImagetop}>
              <Image src="/Bot.png" fill objectFit="contain" alt="AI Bot" />
            </div>
          </ScrollParallax>

          <div className={Aistyles.aigirlImg}>
            <Image src="/Ai girl.png" fill objectFit="contain" alt="AI Assistant" />
          </div>

          <ScrollParallax isAbsolutelyPositioned>
            <div className={Aistyles.ailandingpageImagebottom}>
              <Image src="/Frame 126 (1).png" fill objectFit="contain" alt="abstract design" />
            </div>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
};

export default AiLandingpage;
