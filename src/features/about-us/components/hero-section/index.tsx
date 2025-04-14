import React from "react";
import styles from "../hero-section/styles.module.scss";

export default function AboustUsHeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pinto_container}>
        <h1>Pinto gadget</h1>
        <div className={styles.driven}>
          <h3>Driven by Innovation. Powered by Passion.</h3>
          <p>
            We&apos;re not just selling gadgets—we&apos;re delivering
            future-ready technology that makes your life smarter, faster, and
            more connected.
          </p>
        </div>
      </div>
    </div>
  );
}
