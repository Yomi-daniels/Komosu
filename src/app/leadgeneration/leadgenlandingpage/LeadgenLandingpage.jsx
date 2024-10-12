"use client";
import leadStyles from "../leadgeneration.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
import { Montserrat } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});
const LeadgenLandingpage = () => {
  const leadGenTextContainerRef = useRef(null);
  const leadGenaImageContainerRef = useRef(null);

  useEffect(() => {
    if (leadGenTextContainerRef.current)
      gsap.fromTo(
        leadGenTextContainerRef.current,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    if (leadGenaImageContainerRef.current)
      gsap.fromTo(
        leadGenaImageContainerRef.current,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
      );
  }, []);
  const leadGenHeaderText = `  Drive more leads and transform your dealership growth with our
            expert solutions`;
  return (
    <section className={leadStyles.LeadingGenSection}>
      <div className={leadStyles.LeadGenContainer}>
        {/* <div className={leadStyles.vectortopImg}>
        <Image src="/yellow vector.png" fill/>
      </div> */}
        <div
          className={`${leadStyles.leadGenTextContainer} ${montserrat.className}`}
          ref={leadGenTextContainerRef}
        >
          <div className={leadStyles.leadtextheader}>
            <div className={leadStyles.textheaderimg}>
              <Image src="/Vector (5).png" fill />
            </div>
            <h4>LEAD GENERATION</h4>
          </div>
          <h1>
            <TextGenerateEffect
              words={leadGenHeaderText}
              messageClass="text-[32px] max-sm:text-[32px]"
            />
          </h1>
          <LandingPageButtons />
        </div>
        <div
          className={leadStyles.leadGenaImageContainer}
          ref={leadGenaImageContainerRef}
        >
          <ScrollParallax isAbsolutelyPositioned>
            <div className={leadStyles.leadimgstat}>
              <Image src="/Stat (4).png" fill objectFit="contain" />
            </div>
          </ScrollParallax>
          <div className={leadStyles.leadmanImg}>
            <Image src="/leadgen man.png" fill objectFit="contain" />
          </div>
          <ScrollParallax isAbsolutelyPositioned>
            <div className={leadStyles.leadimgstat2}>
              <Image src="/Stat (3).png" fill objectFit="contain" />
            </div>
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
};

export default LeadgenLandingpage;
