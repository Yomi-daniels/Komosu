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
    "We’re here to change how dealerships grow online.";

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
          <TextGenerateEffect words={ visionText} />{" "}
         
        </h2>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
         <span className="font-bold">Our goal is simple:</span>
 Give dealerships their own digital engine — built to attract, engage, and convert customers without relying on third parties.
We help you build a brand, grow trust, and create real long-term value through a platform you own and control.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default OurvisionSection;
