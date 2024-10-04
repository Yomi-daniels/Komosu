import { useEffect, useRef } from "react";
import casestyles from "../casestudy.module.css";
import { Shadows_Into_Light } from "next/font/google";
import gsap from "gsap";
const shadowFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const CaseStudyHeader = () => {
  const caseStudyHeaderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      caseStudyHeaderRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section className={casestyles.CaseStudyHeader} ref={caseStudyHeaderRef}>
      <h5>Case study</h5>
      <h1>
        Digital Transformation with{" "}
        <span className={`${casestyles.casespan} ${shadowFont.className}`}>
          Komosu Network
        </span>
      </h1>
    </section>
  );
};

export default CaseStudyHeader;
