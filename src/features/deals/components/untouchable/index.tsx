"use client"
import React, { useState } from "react";
import styles from "../untouchable/styles.module.scss";
import { FilterIcon } from "@/app/components/icons/icons";
import AvailableTimer from "./available-timer";
import Card from "@/app/components/card";
import { untouchableProducts } from "@/app/components/data";

const categories = [
  "All",
  "New collections",
  "Top selling gadgets",
  "Flash sales",
];

export default function Untouchable() {
  const [active, setActive] = useState("All");
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.categories}>
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setActive(cat)}
              className={`${styles.category} ${
                active === cat ? styles.activeCategory : ""
              }`}
            >
              {cat}
            </div>
          ))}
        </div>

        <button className={styles.filterButton}>
          <FilterIcon />
          Filter by price
        </button>
      </div>

      <div className={styles.untouchable}>
      <div className={styles.overlay}>
        <div className={styles.flash}>
          <h1>Unbeatable Deals on Top Smartphones & Gadgets!</h1>
          <p>
            Grab the hottest deals before they&apos;re gone! Limited-time offers
            on top smartphones—huge savings, flash sales, and exclusive bundles.
            Don&apos;t miss out! Get notified.
          </p>

          <div>
            <AvailableTimer />
          </div>
        </div>
      </div>
    </div>

    <div className={styles.card_container}>
        {untouchableProducts.length > 0 ? (
          untouchableProducts.map((product) => (
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
