import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <section className={styles.FooterSection} >
      <div className={styles.footerHeaderContainer}>
        <div className={styles.footerHeader}>
          <h1>Ready to scale up your business growth?</h1>
          <div className={styles.footerBtn}>
            <Link href="/request-demo">
              <button className={styles.footerbtn1}>Get Demo</button>
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
          <h1>KOMOSU NETWORK</h1>
          <div className={styles.footerLinks}>
            <Link href="/about">About us</Link>
            <Link href="/case-study">Case Study</Link>
            {/* <Link href="/servicesLink">Services</Link> */}
            {/* <Link href="/pricing">Pricing</Link> */}
            <Link href="/contact-us">Contact</Link>
            <Link href="/request-demo">Get Demo</Link>
          </div>
          <div className={styles.TermsCondition}>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className={styles.FooterSocialLink}>
            <p>Reach out on our Social handles</p>
            <div className={styles.SocialLink}>
              <i className="ri-instagram-line">
                <a href="http://instagram.com"></a>
              </i>
              <i className="ri-twitter-x-line">
                <a href="http://twitter.com"></a>
              </i>
              <i className="ri-tiktok-fill">
                <a href="http://tiktok.com"></a>
              </i>
              <i className="ri-youtube-fill">
                <a href="http://youtube.com"></a>
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
