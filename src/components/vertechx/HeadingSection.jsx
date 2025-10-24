"use client";
import React from "react";
import styles from "./HeadingSection.module.css";

const HeadingSection = () => {
  return (
    <section className={styles["heading-section"]}>
      <h1 className={styles["main-heading"]} data-text="VERTECHX 13.0">
        VERTECHX 13.0
      </h1>
    </section>
  );
};

export default HeadingSection;
