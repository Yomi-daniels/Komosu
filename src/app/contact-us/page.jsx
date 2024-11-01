"use client";
import ContactForm from "../components/contactForm/contactForm";
import { supabase } from "../../lib/supabaseClient.js";
import styles from "./contact.module.css";
import { Shadows_Into_Light } from "next/font/google";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const ContactPage = () => {
  const contactTextRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    if (contactTextRef.current) {
      gsap.fromTo(
        contactTextRef.current,
        { x: -300, opacity: 0 }, // Start from right with opacity 0
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" } // End at normal position with opacity 1
      );
    }

    if (contactFormRef.current) {
      gsap.fromTo(
        contactFormRef.current,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3Out" }
      );
    }
  }, []);

  return (
    <section className={styles.contactSection}>
      <div className={styles.ContactText} ref={contactTextRef}>
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
          {/* <a href="https://www.instagram.com/komosunetwork?igsh=cnk4cWVnYTE0azZ5">
            <i className="ri-facebook-fill"></i>
          </a> */}
          <a
            href="https://x.com/KomosuNetwork?t=PG7p0gzDWjBq88o5k_Xe-w&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-twitter-x-line"></i>
          </a>
          <a
            href="https://www.instagram.com/komosunetwork?igsh=cnk4cWVnYTE0azZ5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://www.tiktok.com/@komosunetwork0?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-tiktok-fill"></i>
          </a>
        </div>
      </div>
      <div className={styles.contactForm} ref={contactFormRef}>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
