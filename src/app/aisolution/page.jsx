import Aistyles from "./Aisolution.module.css";
import AiLandingpage from "./aisolutionlandingpage/AiLandingpage";
import AisolutionServices from "./aisolutionservices/AisolutionServices";
import Aipricing from "./aisolutionpricing/Aipricing";

const Aisolution = () => {
  return (
    <section className={Aistyles.AiSolutionSection}>
      <AiLandingpage />
      <AisolutionServices />
      <Aipricing />
    </section>
  );
};

export default Aisolution;
