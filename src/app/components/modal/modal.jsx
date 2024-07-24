import React from "react";
import styles from "./modal.module.css";
import Loading from "@/app/loading";

const Modal = ({ isSubmitting, submissionStatus }) => {
  return (
    <div className={styles.modal}>
      {isSubmitting ? (
        <Loading className={styles.loading} />
      ) : (
        <div className={styles.message}>
          {submissionStatus === "success" && (
            <p>Your message has been sent successfully!</p>
          )}
          {submissionStatus === "error" && (
            <p>There was an error submitting the form. Please try again.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Modal;
