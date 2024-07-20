import Pricing from "./pricinglandingpage/pricing";
import pricingStyles from "./pricing.module.css"
const PricingPage = () => {
  return (
    <section className={pricingStyles.pricingSection}>
      <Pricing />
    </section>
  );
};

export default PricingPage;
