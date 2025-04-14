"use client";
import Card from "@/app/components/card";
import React, { useState } from "react";
import styles from "../products/styles.module.scss";
import { products } from "@/app/components/data";
import { FilterIcon } from "@/app/components/icons/icons";

const categories = [
  "All",
  "New collections",
  "Top selling gadgets",
  "Flash sales",
];

export default function ProductBox() {
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
      <div className={styles.card_container}>
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className={styles.card_box}
              style={{ cursor: "pointer" }}
            >
              {/* <Link href={`/product/${product.id}`}> */}
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
              {/* </Link> */}
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No listings available.</p>
        )}
      </div>
    </div>
  );
}
