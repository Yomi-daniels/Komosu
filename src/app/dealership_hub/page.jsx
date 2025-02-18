import CaseStudyContactLink from "../case-study/casestudycontact/CaseStudyContactLink";
import DealershipHeader from "./DealershipHeader";
import DealershipHubSection from "./DealershipHubSection";
import casestyles from "../case-study/casestudy.module.css";
const Dealership_hub = () => {
  return (
    <section className={casestyles.CaseStudyPage}>
      <DealershipHeader />
      <DealershipHubSection />
      <CaseStudyContactLink />
    </section>
  );
};

export default Dealership_hub;
