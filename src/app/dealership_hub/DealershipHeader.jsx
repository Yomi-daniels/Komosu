"use client";
import React from "react";
import { useEffect, useRef } from "react";
// import casestyles from "../casestudy.module.css";
import casestyles from "../case-study/casestudy.module.css";
import { Shadows_Into_Light } from "next/font/google";
import gsap from "gsap";
import Image from "next/image";
const shadowFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const DealershipHeader = () => {
  const caseStudyHeaderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      caseStudyHeaderRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section className={casestyles.CaseStudyHeader} ref={caseStudyHeaderRef}>
      <div className="flex items-center gap-4">
        <h5>Dealership Hub</h5>
        <Image
          src="/car_icon.png"
          width={30}
          height={30}
          className="max-sm:w-[20px]"
          alt="car-icon"
        />
      </div>
      <div className="flex justify-between items-center max-sm:flex-col max-sm:w-[250px] max-sm:gap-8">
        <h1>
          Your {""}
          <span className={`${casestyles.casespan} ${shadowFont.className}`}>
            Dealership’s {""}
          </span>
          Social <br /> Media Website
        </h1>
        {/* <Image
          src="/dealership_car.png"
          width={300}
          height={300}
          alt="dealership img"
          objectFit="contain"
        /> */}
      </div>
    </section>
  );
};

export default DealershipHeader;
