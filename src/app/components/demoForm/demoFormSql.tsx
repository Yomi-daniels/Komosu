"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../Fields/InputField";
import styles from "./demoForm.module.css";
import { schema } from "./validationSchema";
/** @ts-ignore */
import SelectField from "../Fields/SelectField";
import Modal from "../modal/modal";

const DemoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);

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

  const plans = ["Web Design", "AI Solutions", "Content Marketing"];

  return (
    <div>
      {isSubmitting || submissionStatus ? (
        <Modal
          isSubmitting={isSubmitting}
          submissionStatus={submissionStatus}
        />
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.fullname}>
          <InputField
            label="First Name"
            name="firstName"
            register={register}
            errors={errors}
            placeholder="First Name"
          />
          <InputField
            label="Last Name"
            name="lastName"
            register={register}
            errors={errors}
            placeholder="Last Name"
          />
        </div>
        <InputField
          label="Company Name"
          name="companyName"
          register={register}
          errors={errors}
          placeholder="e.g. Workstation Inc"
        />
        <InputField
          label="Number of Employees"
          name="numberOfEmployees"
          register={register}
          errors={errors}
          placeholder="e.g. 100"
        />
        <InputField
          label="Work Email"
          name="workEmail"
          register={register}
          errors={errors}
          placeholder="Work Email"
          type="email"
        />
        <InputField
          label="Phone Number"
          name="phoneNumber"
          register={register}
          errors={errors}
          placeholder="Phone Number"
          type="tel"
        />
        <SelectField
          label="What plan do you need?"
          name="plan"
          register={register}
          errors={errors}
          options={plans}
        />
        <InputField
          label="Additional Note"
          name="message"
          register={register}
          errors={errors}
          placeholder="Additional Note"
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default DemoForm;
