import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
const Button = ({ text, url }) => {
  return (
    <Link className={styles.container} href={url}>
      <p>{text}</p>
    </Link>
  );
};

export default Button;
