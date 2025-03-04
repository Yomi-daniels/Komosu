"use client";
import contentStyles from "../contentmarketing.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
import { Montserrat } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const ContentMarketingLandingPage = () => {
  const contentTextRef = useRef(null);
  const contentImagesRef = useRef(null);

  useEffect(() => {
    if (contentTextRef.current)
      gsap.fromTo(
        contentTextRef.current,
        {
          x: -300,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    if (contentImagesRef.current)
      gsap.fromTo(
        contentImagesRef.current,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
      );
  }, []);
  const contentHeaderText = `Engage. Convert. Sell.`;
  const solutionsText = `Why Your Dealership Needs a DealerHub`;
  return (
    <section className={contentStyles.contentSection}>
      {/* <div className={contentStyles.vectorbottom}>
        <Image src="/triangle.png" layout="fill" alt="Triangle"/>
      </div> */}
      <div className={contentStyles.contentContainer}>
        <div
          className={`${contentStyles.contentText} ${montserrat.className}`}
          ref={contentTextRef}
        >
          <div className={contentStyles.contentheader}>
            <div className={contentStyles.contentheaderImg}>
              <Image
                src="/Vector (5).png"
                layout="fill"
                objectFit="contain"
                alt="Vector"
              />
            </div>
            <h4>CONTENT MARKETING</h4>
          </div>
          <h2>
            {" "}
            <TextGenerateEffect
              words={contentHeaderText}
              messageClass="text-[48px] max-sm:text-[35px]"
            />
          </h2>

          <p>
            In today’s digital world, dealerships can’t rely on ads alone.
            Customers trust brands that provide valuable, engaging content—and
            that’s where content marketing comes in.
          </p>
          <LandingPageButtons />
        </div>
        <div className={contentStyles.contentImages} ref={contentImagesRef}>
          <Image
            src="/content marketing girl.png"
            layout="fill"
            objectFit="contain"
            alt="Content Marketing Girl"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentMarketingLandingPage;
