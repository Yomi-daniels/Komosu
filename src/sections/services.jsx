import Image from "next/image";
import styles from "./sections.module.css";
import Servicesflex from "./servicesflex";
import Link from "next/link";
import { Shadows_Into_Light } from "next/font/google";

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});
const Services = () => {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.ServicesTextContainer}>
        <div className={styles.servicesSubTextContainer}>
          <div className={styles.blueBorder}></div>
          <p className={styles.servicesSubText}>WHY KOMOSU?</p>
        </div>
        <div className={styles.servicesHeader}>
          <h2>
            {" "}
            WE GIVE YOUR{" "}
            <span className={`${styles.servicesSpan} ${shadows.className}`}>
              BUSINESS
            </span>{" "}
            THE PUSH IT NEEDS
          </h2>
        </div>
        <p className={styles.subContent}>
          Komosu Network is committed to revolutionizing the automotive industry
          by providing innovative solutions. our dedicated team of experts
          focuses on building strong relationships with clients, ensuring that
          they have more time to concentrate on what truly matters to them.{" "}
        </p>
      </div>
      <Servicesflex />
      <div className={styles.servicesLastContentText}>
        <Link href="/about">
          <p>Learn more</p>
        </Link>

        <div className={styles.buttonImage}>
          <Image src="/View plan button (4).png" alt="vector" fill />
        </div>
      </div>
    </section>
  );
};

export default Services;
