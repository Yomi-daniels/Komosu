"use client";
import casestyles from "./casestudy.module.css";
import CaseStudyHeader from "./caseStudyHeader/CaseStudyHeader";
import DigitalTransformationSection from "./digitalTransformation/DigitalTransformationSection";
import CaseStudyContactLink from "./casestudycontact/CaseStudyContactLink";
const CaseStudyPage = () => {
  return (
    <section className={casestyles.CaseStudyPage}>
      <CaseStudyHeader />
      <DigitalTransformationSection />
      <CaseStudyContactLink />
    </section>
  );
};

export default CaseStudyPage;
