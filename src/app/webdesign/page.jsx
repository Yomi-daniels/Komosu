import WebDesignLandingpage from "./webdesignlandingpage/WebDesignLandingpage";
import webstyle from "./webdesign.module.css";
import WebDesignWorks from "./webdesignworks/WebDesignWorks";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
const webdesign = () => {
  return (
    <section className={webstyle.webdesignSection}>
      <WebDesignLandingpage />
      <WebDesignWorks />
      <Testimonials />
      <FAQ />
    </section>
  );
};

export default webdesign;
