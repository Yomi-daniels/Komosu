"use client";
import casestyles from "./casestudy.module.css";
import DigitalTransformationSection from "./digitalTransformation/DigitalTransformationSection";
import CaseStudyContactLink from "./casestudycontact/CaseStudyContactLink";
import CaseStudyHeader from "./caseStudyHeader/CaseStudyHeader";
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
