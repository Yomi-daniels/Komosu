"use client";

import { useState } from "react";
import InputField from "../fields/InputField";
import styles from "./contactForm.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../supabaseClient";
import schema from "./validationSchema";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} disabled={isSubmitting}>
        {isSubmitting || isSubmitted ? <Modal /> : null}
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
            name="message"
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
