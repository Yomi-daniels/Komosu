"use client";
import styles from "./request-demo.module.css";
import Image from "next/image";
import { Shadows_Into_Light, Montserrat } from "next/font/google";
import TickImg from "../webdesign/components/Tickimg";
import DemoForm from "../components/demoForm/demoForm";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800", "600"],
});
const shadowsFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const RequestDemoPages = () => {
  const plans = ["Web Design", "AI Solutions", "Content Marketing"];

  return (
    <section className={styles.requestDemosection}>
      <div className={styles.requestDemocontainer}>
        <div className={styles.demoTextwrapper}>
          <div className={styles.textheader}>
            <div className={styles.headerimgbg}>
              <div className={styles.headerimg}>
                <Image src="/Vector (5).png" fill alt="Header Image" />
              </div>
            </div>
            <h4>REQUEST DEMO</h4>
          </div>
          <div className={styles.requestDemoTextcontainer}>
            <h1 className={montserrat.className}>
              Discover how{" "}
              <span className={`${styles.demospan} ${shadowsFont.className}`}>
                Komosu
              </span>{" "}
              can accelerate your business
            </h1>
            <div className={styles.demoFeaturesContainer}>
              {[
                "Tailored website designs that reflect your brand’s identity and values.",
                "Comprehensive SEO strategies to improve search engine rankings.",
                "Secure and efficient online booking and purchasing systems.",
              ].map((feature, index) => (
                <div className={styles.demoFeatures} key={index}>
                  <div className={styles.TickImg}>
                    <TickImg />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.demoForm}>
          <DemoForm />
        </div>
      </div>
    </section>
  );
};

export default RequestDemoPages;
