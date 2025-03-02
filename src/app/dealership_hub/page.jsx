import CaseStudyContactLink from "../case-study/casestudycontact/CaseStudyContactLink";
import DealershipHeader from "./DealershipHeader";
import DealershipHubSection from "./DealershipHubSection";
import casestyles from "../case-study/casestudy.module.css";
import FAQ from "@/sections/faq";

const Dealership_hub = () => {
  return (
    <section className={casestyles.CaseStudyPage}>
      <DealershipHeader />
      <DealershipHubSection />
      <CaseStudyContactLink />

      <FAQ />
    </section>
  );
};

export default Dealership_hub;
