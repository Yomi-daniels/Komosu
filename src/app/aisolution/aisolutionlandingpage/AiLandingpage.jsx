"use client";
import Aistyles from "../Aisolution.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
// import { Montserrat } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";
import { useEffect, useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import gsap from "gsap";
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["700"],
// });

const AiLandingpage = () => {
  const ailandingpageContainerTextContentRef = useRef(null);
  const ailandingpageImageRef = useRef(null);
  useEffect(() => {
    if (ailandingpageContainerTextContentRef.current)
      gsap.fromTo(
        ailandingpageContainerTextContentRef.current,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    if (ailandingpageImageRef.current)
      gsap.fromTo(
        ailandingpageImageRef.current,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
  }, []);

  const headertext = `Revolutionize Your \n Dealership's Success`;

  return (
    <section className={Aistyles.AiLandingPage}>
      <div className={Aistyles.vectorImgtop}>
        <Image src="/yellow vector.png" fill />
      </div>
      <div className={`${Aistyles.ailandingpageContainer} `}>
        <div
          className={Aistyles.ailandingpageContainerTextContent}
          ref={ailandingpageContainerTextContentRef}
        >
          <div className={Aistyles.AiLandingPageHeader}>
            <div className={Aistyles.aiheaderImg}>
              <Image src="/ai vector.png" fill />
            </div>
            <h4>AI SOLUTIONS</h4>
          </div>
          <h2 className="text-sm">
            <TextGenerateEffect
              words={headertext}
              messageClass="text-[48px] max-sm:text-[35px]"
            />
          </h2>
          <p>
            At Komosu Network, we're combining the power of AI and lead
            generation to transform your dealership's performance. Our
            innovative solutions ensure your dealership stands out, engages
            customers, and drives sales like never before
          </p>
          <LandingPageButtons />
        </div>
        <div
          className={Aistyles.ailandingpageImage}
          ref={ailandingpageImageRef}
        >
          <ScrollParallax isAbsolutelyPositioned>
            <div className={Aistyles.ailandingpageImagetop}>
              <Image src="/Bot.png" fill objectFit="contain" />
            </div>
          </ScrollParallax>

          <div className={Aistyles.aigirlImg}>
            <Image src="/Ai girl.png" fill objectFit="contain" />
          </div>

          <ScrollParallax isAbsolutelyPositioned>
            <div className={Aistyles.ailandingpageImagebottom}>
              <Image src="/Frame 126 (1).png" fill objectFit="contain" />
            </div>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
};

export default AiLandingpage;
