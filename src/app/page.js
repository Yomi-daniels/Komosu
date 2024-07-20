import FAQ from "@/sections/faq";
import LandingPage from "@/sections/landingPage";
import Offer from "@/sections/offer";
import OfferAnimation from "@/sections/offerAmin";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import VideoShowcase from "@/sections/videoShowcase";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className={styles.landingPage}>
        <LandingPage />
      </section>
      <section className={styles.ServicesPage}>
        <Services />
        <section className={styles.Servisesflex}></section>
      </section>
      <section className={styles.VideoShowcasePage}>
        <VideoShowcase />
      </section>
      <section className={styles.OfferPage}>
        <Offer />
      </section>
      <section className={styles.OfferAnimationPage}>
        <OfferAnimation />
      </section>
      <section className={styles.TestimonialPage}>
        <Testimonials />
      </section>
      <section className={styles.FAQPage}>
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
