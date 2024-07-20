"use client";
import Aistyles from "../Aisolution.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
import { Montserrat } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});
const AiLandingpage = () => {
  return (
    <section className={Aistyles.AiLandingPage}>
      <div className={Aistyles.vectorImgtop}>
        <Image src="/yellow vector.png" fill />
      </div>
      <div
        className={`${Aistyles.ailandingpageContainer} ${montserrat.className}`}
      >
        <div className={Aistyles.ailandingpageContainerTextContent}>
          <div className={Aistyles.AiLandingPageHeader}>
            <div className={Aistyles.aiheaderImg}>
              <Image src="/ai vector.png" fill />
            </div>
            <h4>AI SOLUTIONS</h4>
          </div>
          <h2>Revolutionize Your Dealership's Success</h2>
          <p>At Komosu Network, we're combining the power of AI and lead generation to transform your dealership's performance. Our innovative solutions ensure your dealership stands out, engages customers, and drives sales like never before</p>
          <LandingPageButtons />
        </div>
        <div className={Aistyles.ailandingpageImage}>
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
