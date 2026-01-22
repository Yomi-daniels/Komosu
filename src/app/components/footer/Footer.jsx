"use client";

import { cn } from "@/lib/utils";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

import { useRequestAccess } from "@/app/context/RequestAccessContext";

const Footer = () => {
  // Same smooth scroll system as MainNavigation
  const handleSmoothScroll = (e, targetPath) => {
    if (targetPath.startsWith("#")) {
      e.preventDefault();
      const targetId = targetPath.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };
 const { openModal } = useRequestAccess();
  return (
    <section className={styles.FooterSection}>
      <div className={styles.footerHeaderContainer}>
        <div className={styles.footerHeader}>
          <h1>Ready to scale up your business growth?</h1>
          <div className={styles.footerBtn}>
           
         <button
  onClick={openModal}
  className={cn(
    styles.footerbtn1,
    "mx-auto max-sm:mx-auto max-sm:w-fit max-sm:px-6 max-sm:py-2 max-sm:text-sm"
  )}
>
  Request Access
</button>



          </div>
        </div>
      </div>

      <div className={styles.FooterContainer}>
        <div className={styles.footerContentContainer}>
          <h1 className="text-lg font-black">CARMOSU</h1>

          {/* NAV-LIKE FOOTER LINKS (SCROLL, NOT ROUTE) */}
          <div className={cn(styles.footerLinks, "group")}>
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className={styles.footerLink}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className={styles.footerLink}
            >
              About us
            </a>

            <a
              href="#what-we-offer"
              onClick={(e) => handleSmoothScroll(e, "#what-we-offer")}
              className={styles.footerLink}
            >
              Services
            </a>

            <a
              href="#contact-us"
              onClick={(e) => handleSmoothScroll(e, "#contact-us")}
              className={styles.footerLink}
            >
              Contact Us
            </a>

          
          </div>

          <div className={styles.TermsCondition}>
            <Link href="/content/terms">Terms & Condition</Link>
            <Link href="/content/privacy">Privacy Policy</Link>
          </div>

          <div className={styles.FooterSocialLink}>
            <p>Reach out on our Social handles</p>
            <div className={cn(styles.SocialLink, "cursor-pointer")}>
              <a
                href="https://www.instagram.com/komosunetwork?igsh=cnk4cWVnYTE0azZ5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href="https://x.com/KomosuNetwork?t=PG7p0gzDWjBq88o5k_Xe-w&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-twitter-x-line"></i>
              </a>

              <a
                href="https://www.tiktok.com/@komosunetwork0?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-tiktok-fill"></i>
              </a>
              
            </div>
              {/* Static Email (same style, no routing) */}
            <div
              className={`${styles.footerLink} flex  flex-colitems-center gap-3 select-text cursor-default`}
            >
              {/* <i className="ri-mail-line"></i> */}
          
              <a href="mailto:info@carmosu.com">info@carmosu.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
