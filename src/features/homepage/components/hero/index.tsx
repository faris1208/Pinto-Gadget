"use client";
import React from "react";
import styles from "../hero/styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Scroll values: image starts big, blurry, and higher
  const y = useTransform(scrollY, [0, 300], [0, 100]); // Move down
  const scale = useTransform(scrollY, [0, 300], [1.2, 0.7]); // Shrink
  const blur = useTransform(scrollY, [0, 300], [10, 0]); // Blur to clear
  const blurValue = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <div className={styles.wrapper}>
      <div className={styles.pinto_container}>
        <h1>Pinto gadget</h1>
        <p>Cutting-edge technology, unbeatable prices</p>
        <button>Buy now</button>
      </div>
      <motion.img
        src="/assets/images/14promax_front.svg"
        alt="Pinto Gadget"
        style={{
          y,
          scale,
          filter: blurValue,
        }}
        className={styles.heroImage}
      />
    </div>
  );
}
