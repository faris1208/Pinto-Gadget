import React from "react";
import {
  FacebookLogo,
  InstaLogo,
  LinkLogo,
  Logo,
  TwitterLogo,
} from "../icons/icons";
import styles from "../footer/styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <section className={styles.footer_first}>
        <div className={styles.footer_content}>
          <div className={styles.footer_logo_one}>
            <Logo />
          </div>
          <h2>Explore the future of smartphones with top-notch service.</h2>
          <p>
            Get the perfect gadget that fits your style and needs — trusted by
            thousands of happy customers.
          </p>
          <button>Buy now</button>
        </div>
      </section>
      <section className={styles.footer_last}>
        <div className={styles.footer_last_container}>
          <div className={styles.footer_logo_box}>
            <Logo />
            <div className={styles.footer_last_text}>
              <p>Featured products</p>
              <p>Products</p>
              <p>Top sellers</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className={styles.social_logo}>
            <TwitterLogo />
            <InstaLogo />
            <FacebookLogo />
            <LinkLogo />
          </div>
        </div>
        <div className={styles.footer_center}>
          <p>© 2025 [Platform Name]. All Rights Reserved.</p>
        </div>
      </section>
    </div>
  );
}
