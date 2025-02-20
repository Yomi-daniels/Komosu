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
          At Komosu, we specialize in creating premium web solutions that
          empower dealerships to elevate their digital presence. Our bespoke
          online Dealer Hubs go beyond basic websites, offering dealerships a
          customized platform to enhance their brand, build customer trust, and
          ultimately increase the value of their digital assets. By centralizing
          essential content, dealer interactions, and customer engagement tools,
          we give dealerships more control and insight into their customer
          relationships. With our innovative approach, Komosu Network is
          committed to transforming how dealerships connect with customers
          online, positioning them for growth in a digital-first world.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default OurSolutionSection;
