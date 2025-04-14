import React from "react";
import styles from "../our-story/styles.module.scss";


export default function OurStory() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textArea}>
          <p className={styles.from}>From a small startup to a <br /> trusted tech destination.</p>
          <h2>Our Story</h2>
          <p>
            Founded in [Year], [Company Name] was born out of a simple mission:
            make the latest smartphones and gadgets accessible to everyone at
            unbeatable prices. What started as a small tech hub has now become a
            go-to online store for thousands of customers across [Your
            Region/Worldwide].
          </p>
          <p className={styles.passionate}>
            We&apos;re a team of passionate tech lovers, curators, and
            innovators — always ahead of the trend, always customer-focused.{" "}
          </p>
        </div>
        <div className={styles.background}></div>
      </div>
    </section>
  );
}
