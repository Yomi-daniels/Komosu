"use client";

import Aistyles from "../Aisolution.module.css";
import Image from "next/image";
import { ScrollParallax } from "react-just-parallax";
import { useEffect, useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import gsap from "gsap";

const AiLandingpage = () => {
  const containerTextRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

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
      );

    gsap.fromTo(
      imageRef.current,
      { y: 300, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  const headertext = `Who CarMosu Is For`;
  const subheading = `CarMosu is built for dealerships that:`;

  const features = [
    { text: "run paid ads" },
    { text: "want faster test-drive bookings" },
    { text: "are willing to prioritise inventory" },
    { text: "value focus over flexibility" },
    {
      text: "If you're looking for a website redesign, CarMosu is not for you.",
      isNegative: true,
    },
  ];

  return (
    <section className={Aistyles.AiLandingPage}>
      <div className={Aistyles.vectorImgtop}>
        <Image src="/yellow vector.png" fill alt="decorative top vector" />
      </div>

      {/* Responsive Container */}
      <div
        className={`${Aistyles.ailandingpageContainer} flex flex-col lg:flex-row items-center gap-12 lg:gap-0`}
      >
        {/* Text Side */}
        <div
          className={`${Aistyles.ailandingpageContainerTextContent} w-full lg:w-1/2 text-center lg:text-left`}
          ref={containerTextRef}
        >
          <div>
            <h2 ref={headingRef}>
              <TextGenerateEffect
                words={headertext}
                messageClass="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] leading-tight"
              />
            </h2>
          </div>

          <p
            ref={subheadingRef}
            className="mt-4 text-sm sm:text-base"
          >
            {subheading}
          </p>

          {/* Feature List */}
          <div className="flex flex-col gap-4 mt-6 max-w-md mx-auto lg:mx-0">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full border-2 ${
                    feature.isNegative
                      ? "border-red-400 text-red-400"
                      : "border-yellow-400 text-yellow-400"
                  } flex items-center justify-center font-bold`}
                >
                  {index + 1}
                </div>

                <p className="text-gray-800 font-medium flex-1 pt-0.5 text-sm sm:text-base">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div
          className={`${Aistyles.ailandingpageImage} w-full lg:w-1/2 flex justify-center`}
          ref={imageRef}
        >
          <div
            className={`${Aistyles.aigirlImg} relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-full`}
          >
            <Image
              src="/Ai girl.png"
              fill
              className="object-contain"
              alt="AI Assistant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiLandingpage;
