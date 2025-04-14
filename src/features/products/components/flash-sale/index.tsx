import React from "react";
import styles from "../flash-sale/styles.module.scss";

export default function FlashSale() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}>
        <div className={styles.flash}>
          <h1>Flash Sale Timer</h1>
          <p>
            Grab the hottest deals before they&apos;re gone! Limited-time offers
            on top smartphones—huge savings, flash sales, and exclusive bundles.
            Don&apos;t miss out! Get notified.
          </p>
          <button>Get notified</button>
        </div>
      </div>
    </div>
  );
}
