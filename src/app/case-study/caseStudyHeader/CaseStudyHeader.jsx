import casestyles from "../casestudy.module.css"
import { Shadows_Into_Light } from "next/font/google";
const shadowFont = Shadows_Into_Light ({
  subsets: ['latin'],
  weight:['400']
})
const CaseStudyHeader = () => {
  return <section className={casestyles.CaseStudyHeader}>
    <h5>Case study</h5>
    <h1>Digital Transformation with  <span className={`${casestyles.casespan} ${shadowFont.className}`}>Komosu Network</span></h1>
  </section>;
};

export default CaseStudyHeader;
