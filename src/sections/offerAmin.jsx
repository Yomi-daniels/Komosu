import styles from "./sections.module.css";
import Image from "next/image";
import Link from "next/link";
const OfferAnimation = () => {
  return (
    <section className={styles.OfferAnimationSection}>
      <div className={styles.offerAnimHeaderContent}>
        <h2 className={styles.offerAnimHeaderh2}>
       What CarMosu Controls
        </h2>
        {/* <Link href="/request-demo">
          <button className={styles.OfferHeaderButton}>Book a Demo</button>
        </Link> */}
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
              <h6 className="font-black text-[18px] uppercase">The Destination
Headline</h6>
            </div>
            <h3>
           A destination built for paid traffic

            </h3>
          </div>
          <div className={styles.offerAnimationFeatures}>
            {/* <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadow}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (6).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>Stop sending traffic away, host your best content on your own platform, not someone else’s.</p>
            </div> */}
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadow}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (6).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
CarMosu replaces cluttered landing paths with a single sales surface designed to move buyers from ad click to test-drive booking without browsing, comparison, or distraction.</p>
            </div>
          </div>
          <div className={styles.OfferAnimationImageBoxContainer}>
            <div className={styles.OfferAnimationImageBoxContent}>
              <div className={styles.ImageBox}>
                <Image
                  src="/Rectangle 9 (5).png"
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
              <h6 className="font-black text-[18px] uppercase">
              Focus + Proof
              </h6>
            </div>
            <h3>
           Focus creates action. Proof sustains it.
            </h3>
          </div>
          <div className={styles.offerAnimationFeatures}>
            {/* <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadows}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (8).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
                Make sharper decisions, backed by real numbers.
See which models drive the most interest, what content brings buyers in, and how your site turns traffic into real leads.

              </p>
            </div> */}
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadows}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (8).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
             Instead of showing everything, CarMosu surfaces a curated batch of priority vehicles and keeps sold inventory visible creating momentum, urgency, and clear proof that buyers are acting.
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
