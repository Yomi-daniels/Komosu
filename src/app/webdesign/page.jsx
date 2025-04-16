import WebDesignLandingpage from "./webdesignlandingpage/WebDesignLandingpage";
import webstyle from "./webdesign.module.css";
import WebDesignWorks from "./webdesignworks/WebDesignWorks";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
import WebdesignHub from "./WebdesignHub";
import WebDesignImg from "./webdesignimg/WebDesignImg";
import WebDesignDigital from "./webdigitalpresence/WebDesignDigital";
const webdesign = () => {
  return (
    <section className={webstyle.webdesignSection}>
      <WebDesignLandingpage />
      <WebDesignImg />
      <WebdesignHub />
      <WebDesignDigital />
      {/* <WebDesignWorks /> */}
      <Testimonials />
      <FAQ />
    </section>
  );
};

export default webdesign;
