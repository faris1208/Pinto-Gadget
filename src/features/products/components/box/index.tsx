"use client";
import React, { useState } from "react";
import styles from "../box/styles.module.scss";
import { box } from "@/app/components/data";
import { StarIcon } from "@/app/components/icons/icons";

export default function BoxComponent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        {box.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              hoveredIndex === index ? styles.active : ""
            }`}
            style={{
              backgroundImage: `url(${item.bg?.src})`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles.overlay}></div>
            <div className={styles.card_box}>
              <div className={styles.card_box_contents}>
                {/* <h4>{name}</h4> */}
                <h4>iPhone 15 Pro Max - 256GB</h4>
                <p>$1,099</p>
              </div>
              <div className={styles.check_box}>
                <StarIcon />
              </div>
              <div className={styles.location_container}>
                <div className={styles.amount}>
                  {/* <p>$<span>{amount.toLocaleString()}</span></p> */}
                  <p>
                    iPhone 15 Pro Max - 256GB, Fully package, laptop stander and
                    more, get to unravel these
                  </p>
                </div>
                <button>Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
