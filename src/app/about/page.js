"use client";
import Navbar from "../components/navbar/Navbar";
import AboutUsLandingPage from "./aboutSections/aboutUsLandingPage";
import WhoareweSection from "./whoareWeSection/whoarewe.jsx";
import aboutstyles from "./aboutSection.module.css";
import OurvisionSection from "./ourVisionSection/ourvision";
import VideoShowcase from "../../sections/videoShowcase";
import OurSolutionSection from "./ourSolutionSection/ourSolution";
import ServicesFlex from "../../sections/servicesflex.jsx";
import MeetOurTeam from "./meetOurTeamSection/meetOurTeam";
import MainNavigation from "../components/navbar/component/MainNavigation.jsx";
// import DealershipGuru from "./dealershipguru/DealershipGuru";

const AboutPage = () => {
  return (
    <section className={aboutstyles.aboutUsLandingPage}>
      <MainNavigation />
      <AboutUsLandingPage />
      <WhoareweSection />
      <OurvisionSection />
      <VideoShowcase />
      <OurSolutionSection />
      {/* <DealershipGuru/> */}
      <ServicesFlex />
      {/* <MeetOurTeam /> */}
    </section>
  );
};

export default AboutPage;
