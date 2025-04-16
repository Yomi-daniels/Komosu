"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const WebDesignDigital = () => {
  const elevationFeatures = [
    {
      title: "Seamless Navigation",
      description:
        "Our Designs Reflect Your Unique Brand Identity While Integrating Cutting-Edge Features.",
      image: "/Custom Solution.png",
      pill: true,
    },
    {
      title: "Dealer Hub Integration",
      description:
        "We Build A Social Media Hub Into Your Website, Offering Unparalleled Engagement Opportunities.",
      image: "/Integration.png",
      pill: true,
    },
    {
      title: "Custom Web Design",
      description:
        "From Content Creation To Advanced Functionality, We Ensure Your Site Is Both Stunning And Strategic.",
      image: "/Support.png",
      pill: true,
    },
    {
      title: "Mobile Optimization",
      description:
        "Your Website Will Look Amazing On Any Device, Boosting User Experience & SEO.",
      image: "/All-in-one.png",
      pill: true,
    },
    {
      title: "Conversion Tracking",
      description:
        "We Help You Monitor Leads And Sales With Integrated Analytics & Goal Tracking.",
      image: "/Data.png",
      pill: true,
    },
    {
      title: "Digital Marketing Ready",
      description:
        "Built-In SEO & Marketing Tools To Help Drive Traffic From Day One.",
      image: "/Trust.png",
      pill: true,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 3;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleNext = () => {
    if (isMobile) {
      setCurrentIndex((prev) =>
        prev === elevationFeatures.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentIndex((prev) =>
        prev + itemsPerPage >= elevationFeatures.length
          ? 0
          : prev + itemsPerPage
      );
    }
  };

  const handlePrev = () => {
    if (isMobile) {
      setCurrentIndex((prev) =>
        prev === 0 ? elevationFeatures.length - 1 : prev - 1
      );
    } else {
      setCurrentIndex((prev) =>
        prev === 0
          ? elevationFeatures.length - itemsPerPage
          : prev - itemsPerPage
      );
    }
  };

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-center relative h-full w-full">
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A1A1A] mb-2">
        How We Elevate Your Digital Presence
      </h2>
      <p className="text-[18px] text-[#555] mb-10">
        At Komosu, We Help You Turn Online Interactions Into Real World Sales
      </p>

      {/* Desktop Grid */}
      <div className="hidden md:flex flex-wrap justify-between gap-6 relative">
        {elevationFeatures
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((feature, index) => (
            <div
              key={index}
              className="group w-[30%] border border-[#E6E6FF] p-6 text-left flex flex-col items-start py-12 transition-all duration-300 ease-in-out hover:bg-[#f5f5f5]"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={48}
                height={48}
                className="mb-4"
              />
              {feature.pill && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-[#D9D9D9] rounded-tl-full rounded-tr-full shadow-sm transition-colors duration-300 group-hover:bg-btn" />
              )}
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#28282B] mb-2 transition-all duration-300 group-hover:text-[20.1px] group-hover:scale-105 text-left">
                {feature.title}
              </h3>
              <p className="text-[#585859] font-medium text-[16px] md:text-[17px] text-left transition-all duration-300 group-hover:text-[16.1px] group-hover:scale-105">
                {feature.description}
              </p>
            </div>
          ))}
      </div>

      {/* Bottom Left Text + Buttons */}
      <div className="hidden md:flex items-center justify-between mt-12 px-4">
        <h1 className="text-[32px] md:text-[40px] text-darkBlueText font-black max-w-[546px] text-center mx-auto flex-grow leading-[120%] tracking-[-1%]">
          Take a look at what you can get from us
        </h1>

        <div className="flex gap-4">
          <button onClick={handlePrev} className="w-10 h-10">
            <Image
              src="/prevBtn.png"
              alt="Prev"
              width={64}
              height={64}
              objectFit="contain"
            />
          </button>
          <button onClick={handleNext} className="w-10 h-10">
            <Image
              src="/nextBtn.png"
              alt="Next"
              width={64}
              height={64}
              objectFit="contain"
            />
          </button>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative">
        <div className="group relative border border-[#E6E6FF] p-6 text-left flex flex-col items-center py-12 transition-all duration-300 ease-in-out hover:bg-[#f5f5f5]">
          <Image
            src={elevationFeatures[currentIndex].image}
            alt={elevationFeatures[currentIndex].title}
            width={48}
            height={48}
            className="mb-4"
          />

          {elevationFeatures[currentIndex].pill && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-[#D9D9D9] rounded-tl-full rounded-tr-full shadow-sm transition-colors duration-300 group-hover:bg-btn" />
          )}

          <h3 className="text-[20px] md:text-[22px] font-bold text-[#28282B] mb-2 transition-all duration-300 group-hover:text-[20.1px] group-hover:scale-100 text-center">
            {elevationFeatures[currentIndex].title}
          </h3>
          <p className="text-[#585859] font-medium text-[16px] md:text-[17px] text-center transition-all duration-300 group-hover:text-[16.1px] group-hover:scale-105">
            {elevationFeatures[currentIndex].description}
          </p>
        </div>

        {/* Mobile Carousel Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button onClick={handlePrev}>
            <Image
              src="/prevBtn.png"
              alt="Prev"
              width={40}
              height={40}
              objectFit="contain"
            />
          </button>
          <button onClick={handleNext}>
            <Image
              src="/nextBtn.png"
              alt="Next"
              width={40}
              height={40}
              objectFit="contain"
            />
          </button>
        </div>
      </div>
      <div className="mt-[5rem] relative ">
      <Image src="/MF Product Image2 1.png" alt="different cars image"
        width={1512}
        height={925}
      />
      </div>
    </section>
  );
};

export default WebDesignDigital;
