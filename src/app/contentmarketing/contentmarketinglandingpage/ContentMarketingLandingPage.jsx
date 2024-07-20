"use client";
import contentStyles from "../contentmarketing.module.css";
import Image from "next/image";
import LandingPageButtons from "@/app/webdesign/components/LandingPageButtons";
import { Montserrat } from "next/font/google";
import { ScrollParallax } from "react-just-parallax";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const ContentMarketingLandingPage = () => {
  return (
    <section className={contentStyles.contentSection}>
      {/* <div className={contentStyles.vectorbottom}>
        <Image src="/triangle.png" layout="fill" alt="Triangle"/>
      </div> */}
      <div className={contentStyles.contentContainer}>
        <div className={`${contentStyles.contentText} ${montserrat.className}`}>
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
          <h2>Next-Gen Content Marketing Solutions</h2>

          <p>
            Transform your dealership&apos;s online presence with Komosu
            Network&apos;s next-generation content marketing services
          </p>
          <LandingPageButtons />
        </div>
        <div className={contentStyles.contentImages}>
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
