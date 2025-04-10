"use client";
import React, { useState } from "react";
import styles from "../featured/styles.module.scss";
import { ArrowIcon } from "@/app/components/icons/icons";

const items = [
  { name: "Apple laptops", bg: "/assets/images/laptop.jpeg" },
  { name: "iPhone 11", bg: "/assets/images/big_camera.svg" },
  { name: "Oppo phones", bg: "/assets/images/oppo.jpeg" },
  { name: "vivo Y200 phones", bg: "/assets/images/vivo.jpeg" },
  { name: "Samsung phones", bg: "/assets/images/samsung.jpeg" },
  { name: "HP laptops", bg: "/assets/images/hp.jpeg" },
  { name: "Tablets", bg: "/assets/images/tablet.jpeg" },
];

export default function FeaturedProduct() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.feature}>
          <h2>Featured product</h2>
          <p>
            Check out numerous product of you desire in different <br /> colors
            of your choices.
          </p>
        </div>
        <div className={styles.background}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                hoveredIndex === index ? styles.active : ""
              }`}
              style={{
                backgroundImage: `url(${item.bg})`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <p className={styles.label}>{item.name}</p>
                <ArrowIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
