import Image from "next/image";
import styles from "./page.module.css";

const Loading = ({ className }) => {
  return (
    <div className={`${styles.loading} ${className || ""}`}>
    <div className={styles.loader}>
  {[...Array(4)].map((_, index) => (
    <div key={index} className={styles.tyre}>
      <Image
        src="/mdi--tyre.svg" // make sure this file exists in /public
        alt="Loading Tyre"
        width={140}
        height={140}
        className={styles.tyreIcon}
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default Loading;
