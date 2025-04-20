import FAQ from "@/sections/faq";
import WebDesignDigital from "../webdesign/webdigitalpresence/WebDesignDigital";
import LeadGenDigital from "./leadgendigital/LeadGenDigital";
import leadStyles from "./leadgeneration.module.css";
import LeadGenHub from "./leadgenhub/LeadGenHub";
import LeadGenImg from "./leadgenimg/LeadGenImg";
import LeadgenLandingpage from "./leadgenlandingpage/LeadgenLandingpage";
import LeadGenServices from "./leadgenservices/leadGenServices";
const LeadGeneration = () => {
  return (
    <section className={leadStyles.LeadGenerationPage}>
      <LeadgenLandingpage />
      <LeadGenImg />
      <LeadGenHub />
      <LeadGenDigital />
      <FAQ />
    </section>
  );
};

export default LeadGeneration;
