"use client";

import { supabase } from "@/app/components/supabaseClient";
import { useEffect, useState } from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

    // Validate field on change
    switch (e.target.name) {
      case "firstName":
        validateFirstName(e.target.value);
        break;
      case "lastName":
        validateLastName(e.target.value);
        break;
      case "email":
        validateEmail(e.target.value);
        break;
      case "phoneNumber":
        validatePhoneNumber(e.target.value);
        break;
      case "message":
        validateMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  const validateFirstName = (firstName) => {
    if (!firstName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First name is required.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
    }
  };

  const validateLastName = (lastName) => {
    if (!lastName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last name is required.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
    } else if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10,15}$/; // Adjust regex as per your requirements
    if (!phoneNumber) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number is required.",
      }));
    } else if (!phoneRegex.test(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Please enter a valid phone number.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
    }
  };

  const validateMessage = (message) => {
    if (!message) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message is required.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, message } = formState;

    // Validate all fields before submitting
    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmail(email);
    validatePhoneNumber(phoneNumber);
    validateMessage(message);

    if (Object.values(errors).some((error) => error)) {
      console.error(
        "Form is not valid. Please fill all required fields correctly."
      );
      return;
    }

    // Insert data into the Supabase database
    const { data, error } = await supabase.from("contact_form").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        message: message,
      },
    ]);

    if (error) {
      console.error("Error inserting data into table:", error);
    } else {
      console.log("Data inserted successfully");

      // Reset form state
    }
  };
  // useEffect(() => {
  //   setErrors({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phoneNumber: "",
  //     message: "",
  //   });
  // }, [formState]);
  return (
    <form className={styles.form}>
      <div className={styles.fullname}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formState.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && (
            <small className={styles.errorText}>{errors.firstName}</small>
          )}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formState.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && formState.lastName !== "" && (
            <small className={styles.errorText}>{errors.lastName}</small>
          )}
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <small className={styles.errorText}>{errors.email}</small>
          )}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            value={formState.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && (
            <small className={styles.errorText}>{errors.phoneNumber}</small>
          )}
        </div>
        <div className={styles.inputContainer}>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Ask your question"
            value={formState.message}
            className={styles.textarea}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && (
            <small className={styles.errorText}>{errors.message}</small>
          )}
        </div>
        <button type="submit">Send message</button>
      </div>
    </form>
  );
};

export default ContactForm;
