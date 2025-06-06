import aboutstyles from "../aboutSection.module.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import Image from "next/image";
// import Image from "next/image";
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
    "Build a brand, grow your pipeline, and control your digital future — all in one place.";

  return (
    <section className={aboutstyles.OurSolutionSection} ref={solutionRef}>
      <motion.div
        className={aboutstyles.whoareweHeader}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate when in view
        variants={sectionVariants}
      >
        <h4>DRIVE WITH KOMOSU</h4>
        <h2>
          <TextGenerateEffect words={solutionText} />{" "}
        
        </h2>
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          Partner with Komosu Network and experience the future of <br />
          dealership operations today.
        </motion.p>
  <div className="w-[500px] h-full relative group max-sm:mt-[3rem]">
  {/* Background div that animates when image is hovered */}
  <div className="w-[500px] h-[420px] bg-deepBlue rounded-lg transition-all duration-300 ease-in-out group-hover:-translate-y-[2px] group-hover:translate-x-[-4px] max-sm:w-[350px] max-sm:h-[300px]"></div>

  {/* Image triggers the hover, but no need for group class here */}
  <div className="absolute w-[500px] h-[420px] max-sm:w-[350px] max-sm:h-[300px] rounded-lg mt-10 top-[-48px] left-[-12px]">
    <Image
      src="/komosu network 1 copy 2.png"
      alt="image"
      fill
      objectFit="cover"
      objectPosition="bottom"
      className="rounded-lg"
    />
  </div>
</div>



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
