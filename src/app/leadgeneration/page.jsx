import leadStyles from "./leadgeneration.module.css";
import LeadgenLandingpage from "./leadgenlandingpage/LeadgenLandingpage";
import LeadGenServices from "./leadgenservices/leadGenServices";
const LeadGeneration = () => {
  return (
    <section className={leadStyles.LeadGenerationPage}>
      <LeadgenLandingpage />
      <LeadGenServices />
    </section>
  );
};

export default LeadGeneration;
