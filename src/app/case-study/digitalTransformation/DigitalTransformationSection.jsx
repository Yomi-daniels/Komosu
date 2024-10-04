import Tickimg from "@/app/webdesign/components/Tickimg";
import casestyles from "../casestudy.module.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const DigitalTransformationSection = () => {
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

  const words = `Digital Transformation with Komosu Network`;
  const challengesText = `"Marshall Group currently faces several challenges:"`;
  const solutionsText = `To address these challenges, Komosu Network would implement the following solutions:`;

  const h4Texts = {
    webDesign: "Web Design",
    aiChatbot: "AI Chatbot",
    contentMarketing: "Content Marketing",
    leadGen: "Lead Generation & CRM Integration",
  };

  return (
    <section
      className={casestyles.DigitalTransformationSection}
      ref={sectionRef}
    >
      <motion.div
        className={casestyles.headingsection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h5 variants={fadeInUp}>
          <TextGenerateEffect words={isInView ? words : ""} />
        </motion.h5>
        <motion.h2 variants={fadeInUp}>
          Envisioning the Full Digital Transformation: <br />A Comprehensive
          Look at Marshall Group
        </motion.h2>
        <motion.p variants={fadeInUp}>
          Marshall Group, a renowned automotive dealership, has begun their
          digital transformation journey but has yet to realize its full <br />
          potential. Here’s how Komosu Network can elevate their operations with
          a complete suite of digital solutions.
        </motion.p>
      </motion.div>

      <motion.div
        className={casestyles.secondheadingsection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h4 variants={fadeInUp}>
          <TextGenerateEffect words={isInView ? challengesText : ""} />
        </motion.h4>

        <motion.div
          className={casestyles.challanges}
          variants={staggerContainer}
        >
          <motion.div
            className={casestyles.challangescontent}
            variants={fadeInUp}
          >
            <div className={casestyles.TickImg}>
              <Tickimg />
            </div>
            <p>
              Outdated website design that does not cater to modern <br />
              user expectations.
            </p>
          </motion.div>
          <motion.div
            className={casestyles.challangescontent}
            variants={fadeInUp}
          >
            <div className={casestyles.TickImg}>
              <Tickimg />
            </div>
            <p>
              Inefficient customer service processes leading to lost <br />{" "}
              leads.
            </p>
          </motion.div>
          <motion.div
            className={casestyles.challangescontent}
            variants={fadeInUp}
          >
            <div className={casestyles.TickImg}>
              <Tickimg />
            </div>
            <p>
              Lack of integrated digital solutions for customer <br />{" "}
              engagement and transactions.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className={casestyles.thirdheadingsection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h4
          variants={fadeInUp}
          className={casestyles.thirdsectionheader}
        >
          <TextGenerateEffect words={isInView ? solutionsText : ""} />
        </motion.h4>

        <div className={casestyles.textWrapper}>
          <motion.div
            className={casestyles.textcontentflex}
            variants={staggerContainer}
          >
            <motion.div className={casestyles.textconent} variants={fadeInUp}>
              <h4>
                <TextGenerateEffect words={isInView ? h4Texts.webDesign : ""} />
              </h4>
              <p>
                Revamping Marshall Group’s website with a modern, responsive
                design that offers intuitive navigation and optimized user
                experience. This would result in a significant increase in
                online engagement and lead conversion.
              </p>
            </motion.div>

            <motion.div className={casestyles.textconent} variants={fadeInUp}>
              <h4>
                <TextGenerateEffect words={isInView ? h4Texts.aiChatbot : ""} />
              </h4>
              <p>
                Integrating AI-powered chatbots to provide 24/7 customer
                support, book appointments, and facilitate vehicle reservations
                with a fully refundable fee. This innovation would streamline
                customer service and ensure every lead is noticed.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className={casestyles.textcontentflex}
            variants={staggerContainer}
          >
            <motion.div className={casestyles.textconent} variants={fadeInUp}>
              <h4>
                <TextGenerateEffect
                  words={isInView ? h4Texts.contentMarketing : ""}
                />
              </h4>
              <p>
                Developing a robust content marketing strategy, including a
                virtual content creator that generates dynamic, self-marketing
                content, social media campaigns, and targeted advertisements to
                drive more traffic to their website and enhance their online
                visibility.
              </p>
            </motion.div>

            <motion.div className={casestyles.textconent} variants={fadeInUp}>
              <h4>
                <TextGenerateEffect words={isInView ? h4Texts.leadGen : ""} />
              </h4>
              <p>
                Implementing advanced lead generation tools and integrating them
                with their CRM system to manage and nurture leads more
                effectively.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.p
        className={casestyles.lastheadingtext}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        Through our comprehensive digital solutions, Marshall Group could fully
        realize their digital transformation, leading to increased sales and a
        stronger market presence. Let Komosu Network help you unlock your
        dealership’s full potential."
      </motion.p>
    </section>
  );
};

export default DigitalTransformationSection;
