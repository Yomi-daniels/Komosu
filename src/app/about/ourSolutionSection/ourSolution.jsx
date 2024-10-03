import aboutstyles from "../aboutSection.module.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const OurSolutionSection = () => {
  const solutionRef = useRef(null);
  const isInView = useInView(solutionRef, { once: true }); // Trigger once when in view

  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Start position (down and invisible)
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // End position (normal and visible)
  };

  const solutionText =
    "At Komosu, we offer a wide range of services that are targeted to leverage your company’s performance.";

  return (
    <section className={aboutstyles.OurSolutionSection} ref={solutionRef}>
      <motion.div
        className={aboutstyles.whoareweHeader}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate when in view
        variants={sectionVariants}
      >
        <h4>Our Solution</h4>
        <h2>
          <TextGenerateEffect words={isInView ? solutionText : ""} />{" "}
          {/* Pass as a string only if in view */}
        </h2>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          Komosu Network innovates lead generation for dealerships, combining
          content marketing and chatbots to boost sales and conversions. We
          enhance your online presence with content marketing, in-depth analysis
          of marketing trends, all in a bid to keep you ahead.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default OurSolutionSection;
