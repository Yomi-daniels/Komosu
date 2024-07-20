// InputField.js
import React from "react";
import styles from "./field.module.css";

const InputField = ({ label, name, register, errors, ...rest }) => (
  <div className={styles.formGroup}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      {...register(name)}
      {...rest}
      className={errors[name] ? styles.errorInput : ""}
    />
    {errors[name] && <p className={styles.errorText}>{errors[name].message}</p>}
  </div>
);

export default InputField;
