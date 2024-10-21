import FAQ from "@/sections/faq";
import LandingPage from "@/sections/landingPage";
import Offer from "@/sections/offer";
import OfferAnimation from "@/sections/offerAmin";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import VideoShowcase from "@/sections/videoShowcase";
import styles from "./page.module.css";
import Navbar from "./components/navbar/Navbar";
import { cn } from "@/lib/utils";
const Home = () => {
  return (
    <div className={styles.landingpagesection}>
      <Navbar />
      <section className={cn(styles.landingPage, "h-[100vh]")}>
        <LandingPage />
      </section>
      <section className={cn(styles.ServicesPage, "")}>
        <Services />
        <section className={cn(styles.Servisesflex, "")}></section>
      </section>
      <section className={cn(styles.VideoShowcasePage, "mt-20")}>
        <VideoShowcase />
      </section>
      <section className={cn(styles.OfferPage, "")}>
        <Offer />
      </section>
      <section className={cn(styles.OfferAnimationPage, " h-[80vh]")}>
        <OfferAnimation />
      </section>
      <section className={cn(styles.TestimonialPage, "")}>
        <Testimonials />
      </section>
      <section className={cn(styles.FAQPage, styles.page)}>
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
