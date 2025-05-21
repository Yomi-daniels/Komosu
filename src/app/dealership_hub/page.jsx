import CaseStudyContactLink from "../case-study/casestudycontact/CaseStudyContactLink";
import DealershipHeader from "./DealershipHeader";
import DealershipHubSection from "./DealershipHubSection";
import casestyles from "../case-study/casestudy.module.css";
import FAQ from "@/sections/faq";
import DealerHubDigital from "./DealerHubDigital";
import DealershipBentoGrid from "./DealershipBentoGrid";
const Dealership_hub = () => {
  return (
    <section className={casestyles.CaseStudyPage}>
      <DealershipHeader />
      <DealershipHubSection />
      <DealerHubDigital />
      <CaseStudyContactLink />
      <FAQ />
    </section>
  );
};

export default Dealership_hub;
