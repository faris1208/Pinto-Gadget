"use client";
import React from "react";
import styles from "../hero-section/styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboustUsHeroSection() {
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
        <div className={styles.driven}>
          <h3>Driven by Innovation. Powered by Passion.</h3>
          <p>
            We&apos;re not just selling gadgets—we&apos;re delivering
            future-ready technology that makes your life smarter, faster, and
            more connected.
          </p>
        </div>
      </div>
      <motion.img
        src="/assets/images/iphone13.svg"
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
