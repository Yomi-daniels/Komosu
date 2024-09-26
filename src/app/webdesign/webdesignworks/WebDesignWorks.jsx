import webstyle from "../webdesign.module.css";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";
import WebDesignPricingPlans from "../webdesignpricing/WebDesignPricingPlans";
// import Link from "next/link";
import GetStarted from "../components/GetStarted";

const shadowsFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const WebDesignWorks = () => {
  return (
    <section className={webstyle.webWorksSection}>
      {/* <h2 className={webstyle.WebHeader}>
        Our{" "}
        <span className={`${webstyle.headerSpan} ${shadowsFont.className}`}>
          Past
        </span>{" "}
        Works
      </h2>
      <div className={webstyle.webWorksContainer}>
        <div className={webstyle.webWorksShowcase}>
          <div className={webstyle.webworkDesign1}>
            <Image src="/Rectangle 61.png" fill />
          </div>
          <div className={webstyle.webworkDesign2}>
            <Image src="/Rectangle 62.png" fill />
          </div>
        </div>
      </div>
      <div className={webstyle.webWorksShowcase2}>
        <div className={webstyle.webworkDesign3}>
          <Image src="/Rectangle 30.png" fill />
        </div>
        <div className={webstyle.webworkDesign4}>
          <Image src="/Rectangle 29.png" fill />
        </div>
        <div className={webstyle.webworkDesign5}>
          <Image src="/Rectangle 30.png" fill />
        </div>
      </div> */}
      <div className={webstyle.webdesignContentsContainer}>
        <div className={webstyle.webdesignContent2}>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg}>
              <Image src="/Frame 1618868702.png" fill objectFit="contain" />
            </div>
          </div>
          <div className={webstyle.webdesignTextContent2}>
            <h2>Digital Interaction Enhancements</h2>
            <p>
              Redefine customer interactions with innovative digital solutions.
              From virtual showrooms to online vehicle reservations with
              refundable fees, we empower your customers while reducing reliance
              on physical contact.
            </p>
            <GetStarted />
          </div>
        </div>
        <div className={webstyle.webdesignContents1}>
          <div className={webstyle.webdesignTextContent}>
            <h2>Integrated Payment Solutions</h2>

            <p>
              Seamlessly integrate secure payment gateways into your
              dealership's website. Enable customers to make online purchases,
              deposits, or reservations, transforming the transaction
              experience.
            </p>
            <GetStarted />
          </div>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg}>
              <Image src="/card.png" fill />
            </div>
          </div>
        </div>
        <div className={webstyle.webdesignContent2}>
          <div className={webstyle.webdesignimgContent}>
            <div className={webstyle.webdesignImg}>
              <Image src="/Frame 1618868705.png" fill />
            </div>
          </div>
          <div className={webstyle.webdesignTextContent2}>
            <h2>Customized User Experience</h2>
            <p>
              Tailor-made web interfaces designed for intuitive navigation and
              engagement. Whether browsing inventory, scheduling services, or
              seeking information, our designs prioritize user-friendliness.
            </p>
            <GetStarted />
          </div>
        </div>
      </div>
      <WebDesignPricingPlans />
    </section>
  );
};

export default WebDesignWorks;
