"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    id: "top",
    title: "Prioritizes a Small Set of Vehicles",
    description:
      "Focus buyers on the cars that matter most, instead of overwhelming them with endless options.",
    image: "/Custom Solution.png",
  },
  {
    id: "left",
    title: "Visual-First Presentation",
    description:
      "Use images, videos, and clean layouts to showcase vehicles clearly and drive engagement.",
    image: "/Integration.png",
  },
  {
    id: "center",
    isCenter: true,
    logo: "/CarMosu_logo.png",
  },
  {
    id: "right",
    title: "Limits Choices Intentionally",
    description:
      "Reduce friction and distractions so buyers can take the next step with confidence.",
    image: "/Support.png",
  },
  {
    id: "bottom",
    title: "Guides Buyers Toward Action",
    description:
      "Every element is designed to move visitors from browsing to booking a test drive or contacting sales.",
    image: "/Support.png",
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
     <div className="features-wrapper grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-0 relative">
{features.map((feature) => {
  if (feature.isCenter) {
    return (
      <div
  key="center"
  className="feature-card relative flex items-center justify-center
             border border-[#E6E6FF] bg-white p-12
             md:col-start-2 md:row-start-2"
>
  {/* Glow */}
  <div className="absolute inset-0 rounded-full bg-btn opacity-20 blur-3xl" />

  <img
    src="/CarMosu_logo.png"
    alt="Carmosu logo"
    className="relative w-34 h-34 object-contain z-10"
  />
</div>

    );
  }

  const positionMap = {
    top: "md:col-start-2 md:row-start-1",
    left: "md:col-start-1 md:row-start-2",
    right: "md:col-start-3 md:row-start-2",
    bottom: "md:col-start-2 md:row-start-3",
  };

  return (
    <div
  key={feature.id}
  className={`feature-card group relative border border-[#E6E6FF] p-6 py-12
              flex flex-col items-start bg-white
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:shadow-xl
              ${positionMap[feature.id]}`}
>
  {/* Top pill */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 
                  bg-[#D9D9FF] rounded-b-full
                  transition-colors duration-300 group-hover:bg-btn" />

  <img
    src={feature.image}
    alt={feature.title}
    className="w-10 h-10 mb-4 object-contain"
  />

  <h3 className="text-[24px] font-bold text-[#28282B] mb-2
                 transition-transform duration-300 group-hover:scale-[1.01]">
    {feature.title}
  </h3>

  <p className="text-[#585859] font-medium text-[16px]
                transition-opacity duration-300 group-hover:opacity-90">
    {feature.description}
  </p>

  {/* Bottom pill */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-3
                  bg-[#D9D9FF] rounded-t-full
                  transition-colors duration-300 group-hover:bg-btn" />
</div>

  );
})}

      </div>
    </section>
  );
};

export default CategoryDefinitionSection;
