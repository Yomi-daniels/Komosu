"use client";
import FAQ from "@/sections/faq";
import LandingPage from "@/sections/landingPage";
import Offer from "@/sections/offer";
import OfferAnimation from "@/sections/offerAmin";
// import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import VideoShowcase from "@/sections/videoShowcase";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";
import WhyKomosu from "@/sections/WhyKomosu";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import casestyles from "./case-study/casestudy.module.css";
import ContentMarketingServices from "./contentmarketing/contentmarketingservices/ContentMarketingServices";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "@/sections/services";
import MainNavigation from "./components/navbar/component/MainNavigation.jsx";
import Loading from "./loading";
import RequestAccessModal from "./components/requestAccessModal/RequestAccessModal";
import DealershipHubSection from "./dealership_hub/DealershipHubSection";
// import SecondSection from "@/sections/secondSection";
import SecondSection from "@/sections/secondSection";
import CaseStudyContactLink from "./case-study/casestudycontact/CaseStudyContactLink";
import WebdesignHub from "./webdesign/WebdesignHub";
import Constrains from "@/sections/constrainsSections";
import AiSolution from "./servicesLink/ServicesSubLink/AiSolution/pages";
import Aisolution from "./aisolution/page";
import DealershipHeader from "./dealership_hub/DealershipHeader";
import DealerHubDigital from "./dealership_hub/DealerHubDigital";

const Home = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true }); // Trigger animations once when in view
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const otherText = `Different?`;
  // Loading timeout
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);
  // Register ScrollTrigger plugin with GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the thirdheadingsection
    if (document.querySelector(".thirdheadingsection")) {
      gsap.fromTo(
        ".thirdheadingsection",
        {
          opacity: 0,
          y: 50, // Start the animation with a downward translation
        },
        {
          opacity: 1,
          y: 0, // End the animation by bringing it back to its original position
          duration: 1.2, // Adjusted timing for a slower animation
          scrollTrigger: {
            trigger: ".thirdheadingsection",
            start: "top 80%", // Trigger when 80% of the section is in view
            end: "top 30%",
            scrub: true, // Smooth animation that is tied to scroll position
          },
        }
      );
    }
  }, []);

  return (
    <div className={styles.landingpagesection}>
      {isLoading && <Loading />}
      <div style={{ display: isLoading ? "none" : "block" }}>
        <MainNavigation onRequestAccessClick={() => setIsModalOpen(true)} />
        <section className={styles.landingPage} id="home">
          <LandingPage />
        </section>
        <section className={styles.ServicesPage} id="about">
          <Services />
         
        </section>
        {/* <section>
          <SecondSection />
        </section> */}
        <section>
          <CaseStudyContactLink/>
        </section>
        <section className={styles.VideoShowcasePage} id="what-we-offer">
          <div className={casestyles.thirdheadingsection}>
            <h2
              className={`${casestyles.thirdsectionheader} mt-6 text-[2.5rem] font-bold max-sm:text-[1.5rem] font-variable text-darkBlueText`}
            >
            A Sales <span className="font-custom text-btn">Surface</span>{" "}
              , Not a Page

            </h2>
            <p className={casestyles.solutionsParagraph}>
         CarMosu sits between your ads and your showroom.

            </p>
          </div>
          <ContentMarketingServices />
        </section>
         <section >
          <WebdesignHub />
        </section>
           <section >
          <Constrains />
        </section>
           <section >
          <Aisolution />
        </section>
     
         <DealershipHeader onRequestAccessClick={() => setIsModalOpen(true)} />

      {/* Request Access modal */}
      <RequestAccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
        {/* <section className={styles.OfferPage}>
          <Offer />
        </section> */}

        <section className={styles.OfferAnimationPage}>
          <OfferAnimation />
        </section>
        {/* <section className={styles.OfferAnimationPage}>
          <WhyKomosu />
        </section> */}
        {/* <section className={styles.TestimonialPage} id="testimonials">
          <Testimonials />
        </section> */}
        <section className={`${styles.FAQPage} ${styles.page}`} id="faq">
          <FAQ />
        </section>
        <section id="contact-us">
          {/* Contact section content */}
        </section>
      </div>
    </div>
  );
};

export default Home;
