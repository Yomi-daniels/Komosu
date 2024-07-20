// import aboutstyles from "./aboutSection.module.css";
// import aboutstyles from "@/app/about/aboutSections/aboutSection.module.css";
// import NavBarstyles from "@/app/components/navbar/navbar.module.css";
import { Shadows_Into_Light } from "next/font/google";
import aboutstyles from "../aboutSection.module.css";
const shadows = Shadows_Into_Light ({
  subsets: ['latin'],
  weight: ['400']
})
const AboutUsLandingPage = () => {
  return <section className={aboutstyles.aboutUsLandingSection}>
    <div className={aboutstyles.aboutPageHeader}>
    <h2>
            {" "}
            Get to know us{" "}
            <span className={`${aboutstyles.aboutUsSpan} ${shadows.className}`}>
             Better
            </span>{" "}
        
          </h2>
      <p>We give your business the push it needs</p>
    </div>
  </section>;
};

export default AboutUsLandingPage;
