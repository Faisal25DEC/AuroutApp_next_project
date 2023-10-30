import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
export const metadata = {
  title: "Contact",
  description: "This is contact page",
};
const Contact = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}> </div>

      <div className={styles["content"]}>
        <div className={styles["imgContainer"]}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles["image"]}
          />
        </div>
        <form action="" className={styles["form"]}>
          <input type="text" placeholder="name" className={styles["input"]} />
          <input type="text" placeholder="email" className={styles["input"]} />
          <textarea
            rows="10"
            type="text"
            placeholder="Message"
            className={styles["textArea"]}
          />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
