import webstyle from "../webdesign.module.css";
const AnnualLink = () => {
  return (
    <div className={webstyle.AnnualPricingContainer}>
      <p className={webstyle.annualtextcontent}>
        Annual Pricing <span className={webstyle.annualspan}>(20% Off)</span>
      </p>
      <p className={webstyle.monthlybg}> Monthly</p>
    </div>
  );
};

export default AnnualLink;
