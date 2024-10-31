import { cn } from "@/lib/utils";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.footerHeaderContainer}>
        <div className={styles.footerHeader}>
          <h1>Ready to scale up your business growth?</h1>
          <div className={styles.footerBtn}>
            <Link href="/request-demo">
              <button className={styles.footerbtn1}>Book a Demo</button>
            </Link>
            <Link href="/about">
              <button className={styles.footerbtn2}>
                Learn more
                <div className={styles.buttonImage}>
                  <Image
                    src="/View plan button (4).png"
                    alt="vector"
                    fill
                    objectFit="contain"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.FooterContainer}>
        <div className={styles.footerContentContainer}>
          <h1 className="text-lg">KOMOSU NETWORK</h1>
          <div className={cn(styles.footerLinks, "cursor-pointer group ")}>
            <Link href="/about" className={styles.footerLink}>
              About us
            </Link>
            <Link href="/case-study" className={styles.footerLink}>
              Case Study
            </Link>
            {/* <Link href="/servicesLink">Services</Link> */}
            {/* <Link href="/pricing">Pricing</Link> */}
            <Link href="/contact-us" className={styles.footerLink}>
              Contact Us
            </Link>
            <Link href="/request-demo" className={styles.footerLink}>
              Book a Demo
            </Link>
          </div>
          <div className={styles.TermsCondition}>
            <p>Terms & Conditions</p>
            <Link href="/privacy">Privacy Policy</Link>
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
              {/* <a
                href="http://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-youtube-fill"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
