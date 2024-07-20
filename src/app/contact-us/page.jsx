import ContactForm from "../components/contactForm/contactForm";
import { supabase } from "../../lib/supabaseClient.js";
import styles from "./contact.module.css";
import { Shadows_Into_Light } from "next/font/google";

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const ContactPage = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.ContactText}>
        <div className={styles.contactHeader}>
          <h2>
            Get in{" "}
            <span className={`${styles.contactspan} ${shadows.className}`}>
              Touch{" "}
            </span>
            with us
          </h2>
          <p>Say hello to us - Let us know how we can be of help</p>
        </div>
        <div className={styles.contactLocations}>
          <div className={styles.phone}>
            <i className="ri-phone-line"></i>
            <a href="tel:+44-234-23-4568">+44-234-23-4568</a>
          </div>
          <div className={styles.mail}>
            <i className="ri-mail-line"></i>
            <a href="mailto:Komosunetwork@gmail.com">Komosunetwork@gmail.com</a>
          </div>
          <div className={styles.address}>
            <i className="ri-map-pin-line"></i>
            230 Pine View, Birmingham. UK
          </div>
        </div>
        <div className={styles.socialLink}>
          <a href="http://facebook.com">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="http://twitter.com">
            <i className="ri-twitter-x-line"></i>
          </a>
          <a href="http://youtube.com">
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
      </div>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
