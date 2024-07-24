import styles from "./page.module.css";

const Loading = ({ className }) => {
  return (
    <div className={`${styles.loading} ${className || ""}`}>
      <div className={styles.loader}>
        <div className={styles.circle}>
          <div className={styles.dot}></div>
          <div className={styles.outline}></div>
        </div>
        <div className={styles.circle}>
          <div className={styles.dot}></div>
          <div className={styles.outline}></div>
        </div>
        <div className={styles.circle}>
          <div className={styles.dot}></div>
          <div className={styles.outline}></div>
        </div>
        <div className={styles.circle}>
          <div className={styles.dot}></div>
          <div className={styles.outline}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
