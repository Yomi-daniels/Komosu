import aboutstyles from "../aboutSection.module.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import Image from "next/image";
// import Tickimg from "@/app/webdesign/components/Tickimg";

const OurSolutionSection = () => {
  const solutionRef = useRef(null);
  const isInView = useInView(solutionRef, { once: true }); // Trigger once when in view

  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Start position (down and invisible)
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // End position (normal and visible)
  };

  const solutionText =
    "As we continue to grow and innovate, we invite you to join us on our journey toward a more efficient, digital-first automotive industry";

  return (
    <section className={aboutstyles.OurSolutionSection} ref={solutionRef}>
      <motion.div
        className={aboutstyles.whoareweHeader}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate when in view
        variants={sectionVariants}
      >
        <h4>JOIN US ON OUR JOURNEY</h4>
        <h2>
          <TextGenerateEffect words={isInView ? solutionText : ""} />{" "}
          {/* Pass as a string only if in view */}
        </h2>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          Partner with Komosu Network and experience the future of <br />
          dealership operations today.
        </motion.p>

        {/* <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="flex justify-between items-center max-w-[1200px] gap-12 mt-7 max-md:flex-col max-md:justify-center"
        >
      
      <Image
        src="/aboutdesignImg.jpg" width={600} height={500} alt="image" 
          className="rounded-md"
        /> 
        <div>
          <div className="flex items-center gap-2">
          <div >
            <Tickimg />
          </div>
          <p><b>Dealer Hub Websites:</b> Custom-built platforms that go beyond basic websites</p> 
          </div>
          <div className="flex items-center gap-2">
          <div>
            <Tickimg />
          </div>
          <p><b>Stronger Brand Authority:</b> Custom-built platforms that go beyond basic websites</p> 
          </div>
          <div className="flex items-center gap-2">
          <div>
            <Tickimg />
          </div>
          <p><b>Content Solutions:</b> Custom-built platforms that go beyond basic websites</p> 
          </div>
          <div className="flex items-center gap-2">
          <div>
            <Tickimg />
          </div>
          <p><b> Ad Creative & Video Production:</b> Custom-built platforms that go beyond basic websites</p> 
          </div>
          <div className="flex items-center gap-2">
          <div >
            <Tickimg />
          </div>
          <p><b>Customer Relationship Tools:</b> Custom-built platforms that go beyond basic websites</p> 
          </div>
          <div className="flex items-center gap-2">
          <div >
            <Tickimg />
          </div>
          <p><b>Growth-Driven Innovation:</b> Custom-built platforms that go beyond basic websites</p> 
          </div>
        </div> 
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default OurSolutionSection;
