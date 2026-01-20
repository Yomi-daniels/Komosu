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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4">
      {isSubmitting || submissionStatus ? (
        <Modal
          isSubmitting={isSubmitting}
          submissionStatus={submissionStatus}
        />
      ) : null}
      
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-btn border border-darkBlueText rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-white">Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-darkBlueText mb-4">
            Request a Demo
          </h2>
          <p className="text-lg text-slate-600">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-200">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="First Name"
                name="firstName"
                register={register}
                errors={errors}
                placeholder="John"
              />
              <InputField
                label="Last Name"
                name="lastName"
                register={register}
                errors={errors}
                placeholder="Doe"
              />
            </div>

            {/* Company Info */}
            <div className="space-y-6">
              <InputField
                label="Company Name"
                name="companyName"
                register={register}
                errors={errors}
                placeholder="Acme Corporation"
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Number of Employees"
                  name="numberOfEmployees"
                  register={register}
                  errors={errors}
                  placeholder="50"
                />
                <SelectField
                  label="What plan do you need?"
                  name="plan"
                  register={register}
                  errors={errors}
                  options={plans}
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Work Email"
                name="workEmail"
                register={register}
                errors={errors}
                placeholder="john@company.com"
                type="email"
              />
              <InputField
                label="Phone Number"
                name="phoneNumber"
                register={register}
                errors={errors}
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>

            {/* Message */}
            <InputField
              label="Additional Notes (Optional)"
              name="message"
              register={register}
              errors={errors}
              placeholder="Tell us about your needs..."
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-darkBlueText from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            {/* Trust Indicators */}
            <p className="text-center text-sm text-slate-500 mt-4">
              🔒 Your information is secure and will never be shared
            </p>
          </form>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 text-slate-600">
          <p>Have questions? Email us at <a href="mailto:info@carmosu.com" className="text-yellow-600 hover:text-yellow-700 font-medium">info@carmosu.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;