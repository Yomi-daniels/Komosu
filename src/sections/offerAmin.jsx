import styles from "./sections.module.css";
import Image from "next/image";
import Link from "next/link";
const OfferAnimation = () => {
  return (
    <section className={styles.OfferAnimationSection}>
      <div className={styles.offerAnimHeaderContent}>
        <h2 className={styles.offerAnimHeaderh2}>
        Fuel your dealership’s growth with a high-converting website that sells — even when your showroom’s closed
        </h2>
        <Link href="/request-demo">
          <button className={styles.OfferHeaderButton}>Book a Demo</button>
        </Link>
        <div className={styles.LineContainer}>
          <div className={styles.lineImg}>
            <Image src="/Rectangle 3.png" alt="offerAnimImg" fill />
          </div>
          <div className={styles.lineImg2}>
            <Image src="/Rectangle 4.png" alt="offerAnimImg" fill />
          </div>
        </div>
      </div>
      <div className={styles.OfferAnimationContainer}>
        <div className={styles.OfferAnimationContainerContent}>
          <div className={styles.offerAnimTextContent}>
            <div className={styles.OfferAnimationContainerContentHeader}>
              <div className={styles.OfferAnimationContainerContentSmallImage}>
                <Image src="/Vector (5).png" alt="offerAnimImg" fill />
              </div>
              <h6 className="font-black text-[18px]">PROMOTIONAL VIDEOS</h6>
            </div>
            <h3>
              Grab attention fast with scroll-stopping visuals and content that keeps buyers engaged.
            </h3>
          </div>
          <div className={styles.offerAnimationFeatures}>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadow}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (6).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>Stop sending traffic away, host your best content on your own platform, not someone else’s.</p>
            </div>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadow}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (6).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>Create a loyal audience, not just one-time buyers, build trust that keeps them coming back.</p>
            </div>
          </div>
          <div className={styles.OfferAnimationImageBoxContainer}>
            <div className={styles.OfferAnimationImageBoxContent}>
              <div className={styles.ImageBox}>
                <Image
                  src="/Group 6324.png"
                  alt="offerAnimImg"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.OfferAnimationContainerContent}>
          <div className={styles.offerAnimTextContent}>
            <div className={styles.OfferAnimationContainerContentHeader}>
              <div className={styles.OfferAnimationContainerContentSmallImage}>
                <Image src="/Vector (7).png" alt="offerAnimImg" fill />
              </div>
              <h6 className="font-black text-[18px]">
                BUSINESS ANALYTICS
              </h6>
            </div>
            <h3>
             Your next sale is hiding in your data. We help you find it, and act on it.
            </h3>
          </div>
          <div className={styles.offerAnimationFeatures}>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadows}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (8).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
                Make sharper decisions, backed by real numbers.
See which models drive the most interest, what content brings buyers in, and how your site turns traffic into real leads.

              </p>
            </div>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadows}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (8).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
               Turn every sale into a long-term customer.
With the right data, you know when to offer service reminders, extended warranties, or that perfect trade-in pitch.

              </p>
            </div>
          </div>
          <div className={styles.OfferAnimationImageBoxContainer}>
            <div
              className={`${styles.OfferAnimationImageBoxContent} ${styles.OfferAnimationImageBoxContent2}`}
            >
              <div className={`${styles.ImageBox1} ${styles.ImageBoxsec}`}>
                <Image src="/Group 6322.png" alt="offerAnimImg" fill />
              </div>
            </div>
            <div
              className={`${styles.OfferAnimationImageBoxContent} ${styles.OfferAnimationImageBoxContent2}`}
            >
              <div className={`${styles.ImageBox2} ${styles.ImageBoxsec2}`}>
                <Image src="/Group 6323.png" alt="offerAnimImg" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferAnimation;
