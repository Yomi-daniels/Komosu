// SelectField.js
import React from "react";
import styles from "./field.module.css";

const SelectField = ({ label, name, register, errors, options }) => (
  <div className={styles.formGroup}>
    <label htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      {...register(name)}
      className={errors[name] ? styles.errorInput : ""}
    >
      <option value="">Select a Plan</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {errors[name] && <p className={styles.errorText}>{errors[name].message}</p>}
  </div>
);

export default SelectField;
