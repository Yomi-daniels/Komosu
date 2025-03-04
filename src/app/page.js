import FAQ from "@/sections/faq";
import LandingPage from "@/sections/landingPage";
import Offer from "@/sections/offer";
import OfferAnimation from "@/sections/offerAmin";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import VideoShowcase from "@/sections/videoShowcase";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";
import WhyKomosu from "@/sections/WhyKomosu";
import StackedCard from "./dealership_hub/StackedCard";
// Import `cn` if you need it for conditional class names
// import cn from "classnames";

const Home = () => {
  return (
    <div className={styles.landingpagesection}>
      <Navbar />
      <section className={styles.landingPage}>
        <LandingPage />
      </section>
      <section className={styles.ServicesPage}>
        <Services />
        <section className={styles.Servisesflex}></section>
      </section>
      <section className={styles.VideoShowcasePage}>
        <StackedCard />
      </section>
      <section className={styles.OfferPage}>
        <Offer />
      </section>

      <section className={styles.OfferAnimationPage}>
        <OfferAnimation />
      </section>
      <section className={styles.OfferAnimationPage}>
        <WhyKomosu />
      </section>
      <section className={styles.TestimonialPage}>
        <Testimonials />
      </section>
      <section className={`${styles.FAQPage} ${styles.page}`}>
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
