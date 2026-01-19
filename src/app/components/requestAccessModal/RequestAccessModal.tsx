"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { schema } from "../demoForm/validationSchema";
import InputField from "../Fields/InputField";
import SelectField from "../Fields/SelectField";
import Modal from "../modal/modal";
import styles from "./requestAccessModal.module.css";

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestAccessModal = ({ isOpen, onClose }: RequestAccessModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const {
        firstName,
        lastName,
        companyName,
        workEmail,
        phoneNumber,
        numberOfEmployees,
        plan,
        message,
      } = formData;

      const { data, error } = await supabase.from("demo_form").insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: workEmail,
          company_name: companyName,
          phone_number: phoneNumber,
          num_employees: numberOfEmployees,
          plan_choice: plan,
          message: message,
        },
      ]);

      if (error) throw error;
      console.log("Data inserted successfully: ", data);
      reset();
      setSubmissionStatus("success");
      setTimeout(() => {
        onClose();
        setSubmissionStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Error inserting data into table: ", error);
      setSubmissionStatus("error");
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const plans = ["Web Design", "AI Solutions", "Content Marketing"];

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {isSubmitting || submissionStatus ? (
          <Modal
            isSubmitting={isSubmitting}
            submissionStatus={submissionStatus}
          />
        ) : null}

        <div className={styles.modalHeader}>
          <h2>Request Access</h2>
          <button
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

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
            placeholder="Company Name"
          />

          <InputField
            label="Work Email"
            name="workEmail"
            register={register}
            errors={errors}
            placeholder="you@company.com"
            type="email"
          />

          <InputField
            label="Phone Number"
            name="phoneNumber"
            register={register}
            errors={errors}
            placeholder="+1 (555) 000-0000"
          />

          <SelectField
            label="Number of Employees"
            name="numberOfEmployees"
            register={register}
            errors={errors}
            options={[
              "1-10",
              "11-50",
              "51-200",
              "201-500",
              "501-1000",
              "1000+",
            ]}
          />

          <SelectField
            label="What are you interested in?"
            name="plan"
            register={register}
            errors={errors}
            options={plans}
          />

          <InputField
            label="Message (Optional)"
            name="message"
            register={register}
            errors={errors}
            placeholder="Tell us more about your needs..."
            isTextarea
          />

          <div className={styles.formActions}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              {isSubmitting ? "Submitting..." : "Request Access"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelBtn}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestAccessModal;
