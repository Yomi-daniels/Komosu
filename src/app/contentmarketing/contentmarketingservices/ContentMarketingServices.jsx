"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    title: "Prioritizes a Small Set of Vehicles",
    description:
      "Focus buyers on the cars that matter most, instead of overwhelming them with endless options.",
    image: "/Custom Solution.png",
    pill: true,
  },
  {
    title: "Visual-First Presentation",
    description:
      "Use images, videos, and clean layouts to showcase vehicles clearly and drive engagement.",
    image: "/Integration.png",
    pill: true,
  },
  {
    title: "Limits Choices Intentionally",
    description:
      "Reduce friction and distractions so buyers can take the next step with confidence.",
    image: "/Support.png",
    pill: true,
  },
  {
    title: "Guides Buyers Toward Action",
    description:
      "Every element is designed to move visitors from browsing to booking a test drive or contacting sales.",
    image: "/Support.png",
    pillTop: true,
  },
];

const CategoryDefinitionSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".features-wrapper",
            start: "top 85%",
            end: "bottom 70%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".features-wrapper",
            start: "top 80%",
            end: "bottom 70%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-left">
      {/* Section Heading */}
      {/* <div className="text-center mb-12">
        <span className="uppercase tracking-[0.2em] text-sm text-btn font-medium">
          Section 4 — Category Definition
        </span>
        <h2 className="text-darkBlueText text-[36px] font-bold leading-[120%] mt-4 max-sm:text-[28px]">
          A Sales Surface, Not a Page
        </h2>
        <p className="mt-3 text-[#585859] text-[18px] max-w-[700px] mx-auto leading-[160%]">
          CarMosu sits between your ads and your showroom. It’s a fast, focused
          surface that prioritizes a small set of vehicles, uses visual-first
          presentation, limits choices intentionally, and guides buyers toward action.
        </p>
      </div> */}

      {/* Feature Grid */}
      <div className="features-wrapper flex flex-wrap justify-center relative gap-0">
        {features.map((feature, index) => {
          const isLast = index === features.length - 1;

          return (
            <div
              key={index}
              className={`group relative w-full md:w-1/2 lg:w-1/3 border border-[#E6E6FF] p-6 text-left flex flex-col items-start py-12 transition-all duration-300 ease-in-out md:hover:bg-[#f5f5f5] feature-card ${
                isLast ? "mx-auto" : ""
              }`}
            >
              {feature.pillTop && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-[#D9D9D9] rounded-bl-full rounded-br-full shadow-sm transition-colors duration-300 group-hover:bg-btn" />
              )}

              {feature.image && (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-10 h-10 mb-4 object-contain"
                />
              )}

              {feature.pill && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-[#D9D9D9] rounded-tl-full rounded-tr-full shadow-sm transition-colors duration-300 group-hover:bg-btn" />
              )}

              <h3 className="text-[24px] font-bold max-sm:text-[20px] text-[#28282B] mb-2 transition-all duration-300 md:group-hover:text-[24.5px] md:group-hover:scale-105">
                {feature.title}
              </h3>
              <p className="text-[#585859] font-medium text-[16px] transition-all duration-300 md:group-hover:text-[16.2px] md:group-hover:scale-105">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryDefinitionSection;
