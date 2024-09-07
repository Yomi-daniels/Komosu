import Link from "next/link";
import styles from "./tag.module.css";
import React from "react";

const Tag = ({ link = "#", name, size = "small", className = "" }) => {
  const sizeClass = "medium" ? styles.tagMedium : styles.tagSmall;
  return (
    <Link
      href={link}
      className={`${styles.tag} ${sizeClass} ${className}`} // Combine the CSS classes
    >
      {name}
    </Link>
  );
};

export default Tag;
