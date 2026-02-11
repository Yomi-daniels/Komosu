import styles from "./sections.module.css";
import Image from "next/image";
import Link from "next/link";
const OfferAnimation = () => {
  return (
    <section className={styles.OfferAnimationSection}>
      <div className={styles.offerAnimHeaderContent}>
        <h2 className={styles.offerAnimHeaderh2}>
      What Carmosu Controls
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
              <h6 className="font-black text-[18px] uppercase"> Operational Effects</h6>
            </div>
            <h3>
        Less Wasted Sales Time


            </h3>
          </div>
          <div className={styles.offerAnimationFeatures}>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadow}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (6).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>Fewer appointments that never happen</p>
            </div>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadow}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (6).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
Less follow-up chasing uncommitted buyers</p>
            </div>
              <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadow}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (6).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
More time spent with people who actually arrive</p>
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
           Lower Internal Friction

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
                Fewer arguments about lead quality

              </p>
            </div>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadows}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (8).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
           Clearer boundaries between marketing and sales
              </p>
            </div>
            <div className={styles.offerFeaturesContent}>
              <div className={styles.offerFeaturesImgShadows}>
                <div className={styles.offerFeaturesImg}>
                  <Image src="/Vector (8).png" alt="offerAnimImg" fill />
                </div>
              </div>
              <p>
           Less day-to-day firefighting by managers

              </p>
            </div>
          </div>
          <div className={styles.OfferAnimationImageBoxContainer}>
            <div
              className={`${styles.OfferAnimationImageBoxContent} ${styles.OfferAnimationImageBoxContent2}`}
            >
              <div className={`${styles.ImageBox1} ${styles.ImageBoxsec}`}>
                <Image src="/MAYF Hero section 1.png" alt="offerAnimImg" fill />
              </div>
            </div>
            {/* <div
              className={`${styles.OfferAnimationImageBoxContent} ${styles.OfferAnimationImageBoxContent2}`}
            >
              <div className={`${styles.ImageBox2} ${styles.ImageBoxsec2}`}>
                <Image src="/Group 6323.png" alt="offerAnimImg" fill />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferAnimation;
