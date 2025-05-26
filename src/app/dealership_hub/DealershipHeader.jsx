"use client";

import styles from "@/sections/sections.module.css";
import casestyles from "../case-study/casestudy.module.css";
import Link from "next/link";
import DealerHubHeaderDesign from "./DealerHubHeaderDesign";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const DealershipHeader = () => {
  const message = `Your Dealership Social Media \n Website`;

  return (
    <section
      className={`${casestyles.CaseStudyHeader}${"dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col mt-[3rem] max-sm:mt-0 max-sm:h-full "}`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="w-full max-w-[928px] min-h-[338px] text-center flex flex-col justify-center items-center gap-6 z-10 relative px-4 mx-auto">
        <h1 className="text-[64px] font-bold text-black leading-[120%] tracking-[-4%] max-sm:text-[56px] ">
          <TextGenerateEffect
            words={message}
            messageClass="font-bold leading-[120%] tracking-[-4%]
        text-[64px]\ md:text-[52px] 
        max-w-full mx-auto max-sm:text-[36px]"
          />
        </h1>
        <p className="max-w-[733px] font-medium text-darkBlueText text-[14px] sm:text-[16px] md:text-[18px] text-center md:w-[50ch] ">
        Your all-in-one Platform to provide your potential clients all the information they need to get their dream car
        </p>
        <Link href="/request-demo">
          <button className={styles.headerGetStarted}>Get Started</button>
        </Link>
      </div>
      <DealerHubHeaderDesign />
    </section>
  );
};

export default DealershipHeader;
