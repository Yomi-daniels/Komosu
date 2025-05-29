"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./validationSchema";

import InputField from "../Fields/InputField";
import Modal from "../modal/modal";
import styles from "./contactForm.module.css";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (formData) => {
    console.log("Form submitted with Data: ", formData);
    setIsSubmitting(true);

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Submission success:", result);
      reset();
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Submission error:", error.message || error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmissionStatus(null), 2000);
    }
  };

  return (
    <div>
      {isSubmitting || submissionStatus ? (
        <Modal
          isSubmitting={isSubmitting}
          submissionStatus={submissionStatus}
        />
      ) : null}

      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.form} ${formInView ? styles.formInView : ""}`}
      >
        <div className={styles.fullname}>
          <InputField
            label="First Name *"
            name="firstName"
            register={register}
            errors={errors}
            placeholder="First Name"
          />
          <InputField
            label="Last Name *"
            name="lastName"
            register={register}
            errors={errors}
            placeholder="Last Name"
          />
        </div>

        <InputField
          label="Email"
          name="workEmail"
          register={register}
          errors={errors}
          placeholder="Work Email"
          type="email"
        />

        <InputField
          label="Phone Number *"
          name="phoneNumber"
          register={register}
          errors={errors}
          placeholder="Phone Number"
          type="tel"
        />

        <div className={styles.inputContainer}>
          <label htmlFor="message">Message *</label>
          <textarea
            // name="message"
            cols={30}
            rows={10}
            placeholder="Ask Your Question"
            className={`${styles.textarea} ${errors.message ? styles.errorInput : ""}`}
            {...register("message")}
          ></textarea>
          {errors.message && (
            //@ts-ignore
            <p className={styles.errorText}>{errors.message.message}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </form>

      {submissionStatus === "success" && <p>Form submitted successfully!</p>}
      {submissionStatus === "error" && (
        <p>There was an error submitting the form.</p>
      )}
    </div>
  );
};

export default ContactForm;
