"use client";
import styles from "./demoForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { schema } from "./validationSchema";
import InputField from "../Fields/InputField";
/** @ts-ignore */
import SelectField from "../Fields/SelectField";
import Modal from "../modal/modal";

const DemoForm = () => {
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
    } catch (error) {
      console.error("Error inserting data into table: ", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 2000);
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
