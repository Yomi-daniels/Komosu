// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useInView } from "react-intersection-observer";
// import { supabase } from "../../../lib/supabaseClient";
// import { schema } from "./validationSchema";
// /** @ts-ignore */
// import InputField from "../Fields/InputField";
// import Modal from "../modal/modal";
// import styles from "./contactForm.module.css";

// const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);

//   // Intersection observer for animation when form comes into view
//   const { ref: formRef, inView: formInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: zodResolver(schema),
//   });
//   const onSubmit = async (formData) => {
//     console.log("Form submitted with data:", formData);
//     setIsSubmitting(true);
//     try {
//       const { firstName, lastName, workEmail, phoneNumber, message } = formData;

//       const { data, error } = await supabase.from("contact_form").insert([
//         {
//           first_name: firstName,
//           last_name: lastName,
//           email: workEmail,
//           phone_number: phoneNumber,
//           message,
//         },
//       ]);

//       if (error) {
//         console.error("Supabase insert error:", error.message, error.details);
//         throw error;
//       }

//       console.log("Supabase insert success:", data);
//       reset();
//       setSubmissionStatus("success");
//     } catch (error) {
//       console.error("Submission error:", error.message || error);
//       setSubmissionStatus("error");
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setSubmissionStatus(null), 2000);
//     }
//   };

//   return (
//     <div>
//       {isSubmitting || submissionStatus ? (
//         <Modal
//           isSubmitting={isSubmitting}
//           submissionStatus={submissionStatus}
//         />
//       ) : null}

//       <form
//         ref={formRef}
//         onSubmit={handleSubmit(onSubmit)}
//         className={`${styles.form} ${formInView ? styles.formInView : ""}`}
//       >
//         <div className={styles.fullname}>
//           <InputField
//             label="First Name *"
//             name="firstName"
//             register={register}
//             errors={errors}
//             placeholder="First Name"
//           />
//           <InputField
//             label="Last Name *"
//             name="lastName"
//             register={register}
//             errors={errors}
//             placeholder="Last Name"
//           />
//         </div>

//         <InputField
//           label="Email"
//           name="workEmail"
//           register={register}
//           errors={errors}
//           placeholder="Work Email"
//           type="email"
//         />

//         <InputField
//           label="Phone Number *"
//           name="phoneNumber"
//           register={register}
//           errors={errors}
//           placeholder="Phone Number"
//           type="tel"
//         />

//         <div className={styles.inputContainer}>
//           <label htmlFor="message">Message *</label>
//           <textarea
//             // name="message"
//             cols={30}
//             rows={10}
//             placeholder="Ask Your Question"
//             className={`${styles.textarea} ${errors.message ? styles.errorInput : ""}`}
//             {...register("message")}
//           ></textarea>
//           {errors.message && (
//             //@ts-ignore
//             <p className={styles.errorText}>{errors.message.message}</p>
//           )}
//         </div>

//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? "Sending..." : "Send message"}
//         </button>
//       </form>

//       {submissionStatus === "success" && <p>Form submitted successfully!</p>}
//       {submissionStatus === "error" && (
//         <p>There was an error submitting the form.</p>
//       )}
//     </div>
//   );
// };

// export default ContactForm;
