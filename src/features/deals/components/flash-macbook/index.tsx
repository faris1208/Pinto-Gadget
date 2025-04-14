import React from "react";
import styles from "../flash-macbook/styles.module.scss";
import Card from "@/app/components/card";
import { flashMacbookProducts } from "@/app/components/data";
import AvailableTimer from "../untouchable/available-timer";

export default function FlashMacbook() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.untouchable}>
        <div className={styles.overlay}>
          <div className={styles.flash}>
            <h1>Flash Sale Timer (Mac books)</h1>
            <p>
              Grab the hottest deals before they&apos;re gone! Limited-time
              offers on top smartphones—huge savings, flash sales, and exclusive
              bundles. Don&apos;t miss out! Get notified.
            </p>

            <div>
              <AvailableTimer />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card_container}>
        {flashMacbookProducts.length > 0 ? (
          flashMacbookProducts.map((product) => (
            <div
              key={product.id}
              className={styles.card_box}
              style={{ cursor: "pointer" }}
            >
              <Card
                id={product.id}
                name={product.name}
                amount={
                  product.amount
                    ? Number(product.amount).toLocaleString()
                    : "N/A"
                }
                backgroundImage={String(product.backgroundImage)}
              />
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No listings available.</p>
        )}
      </div>
    </div>
  );
}
