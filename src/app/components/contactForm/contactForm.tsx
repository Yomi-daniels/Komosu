"use client";

import styles from "./contactForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validationSchema";
import { supabase } from "../../../lib/supabaseClient";
import InputField from "../fields/InputField";

// Define the modal component (assuming it exists)
const Modal = () => <div>Submitting...</div>;

const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { error } = await supabase.from("contacts").insert([{ ...data }]);

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      setSubmissionStatus("success");
      reset();
    } catch (error) {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
