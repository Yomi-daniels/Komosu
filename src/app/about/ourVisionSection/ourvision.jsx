import aboutstyles from "../aboutSection.module.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const OurvisionSection = () => {
  const visionRef = useRef(null);
  const isInView = useInView(visionRef, { once: true }); // Trigger once when in view

  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Start position (down and invisible)
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // End position (normal and visible)
  };

  const visionText =
    "Our vision is to transform car dealerships into a thriving hub of customer engagement and operational excellence.";

  return (
    <section className={aboutstyles.OurvisionSection} ref={visionRef}>
      <motion.div
        className={aboutstyles.whoareweHeader}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate when in view
        variants={sectionVariants}
      >
        <h4>Our Vision</h4>
        <h2>
          <TextGenerateEffect words={isInView ? visionText : ""} />{" "}
          {/* Pass as a string only if in view */}
        </h2>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          Our goal is to build a powerful internal engine that dealerships can
          leverage and control—enabling them to engage customers, enhance brand
          presence, and drive growth from within. With our tailored web
          solutions, we empower dealerships to create meaningful digital
          experiences that drive trust, loyalty, and long-term success.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default OurvisionSection;
