"use client";
import FAQ from "@/sections/faq";
import LandingPage from "@/sections/landingPage";
import Offer from "@/sections/offer";
import OfferAnimation from "@/sections/offerAmin";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import VideoShowcase from "@/sections/videoShowcase";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";
import WhyKomosu from "@/sections/WhyKomosu";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import casestyles from "./case-study/casestudy.module.css";
import ContentMarketingServices from "./contentmarketing/contentmarketingservices/ContentMarketingServices";
// Import `cn` if you need it for conditional class names
// import cn from "classnames";

const Home = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Trigger animations once when in view

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and translate down
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and move up
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger animations
      },
    },
  };

  const words = `Why Content Marketing Matters for Dealerships?`;
  const challengesText = `In today’s digital landscape, Content marketing offers dealerships the opportunity to:`;
  const solutionsText = `What Makes`;
  const otherText = `Different?`

  return (
    <div className={styles.landingpagesection}>
      <Navbar />
      <section className={styles.landingPage}>
        <LandingPage />
      </section>
      <section className={styles.ServicesPage}>
        <Services />
        <section className={styles.Servisesflex}></section>
      </section>
      <section className={styles.VideoShowcasePage}>
        <div className={casestyles.thirdheadingsection}>
          <h2 className={`${casestyles.thirdsectionheader} ${"mt-6 text-[2.5rem] max-sm:text-[1.5rem] font-variable text-darkBlueText"}`}>
          {solutionsText}&nbsp;<span className="font-custom text-btn">komosu</span>&nbsp;{otherText}

          </h2>
          <p className={casestyles.solutionsParagraph}>
          At Komosu Network, we don’t just design websites, <br /> we craft digital experiences tailored to your dealership’s needs
          </p>
        </div>
        <ContentMarketingServices />
      </section>
      <section className={styles.OfferPage}>
        <Offer />
      </section>

      <section className={styles.OfferAnimationPage}>
        <OfferAnimation />
      </section>
      {/* <section className={styles.OfferAnimationPage}>
        <WhyKomosu />
      </section> */}
      <section className={styles.TestimonialPage}>
        <Testimonials />
      </section>
      <section className={`${styles.FAQPage} ${styles.page}`}>
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
