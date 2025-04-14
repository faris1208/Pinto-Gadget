import React from "react";
import styles from "../products/styles.module.scss";
import ProductBox from "./components/products";
import FlashSale from "./components/flash-sale";
import BoxComponent from "./components/box";
import ProductNavBar from "./components/product-navbar";

export default function Product() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <ProductNavBar />
      <ProductBox />
      <FlashSale />
      <BoxComponent />
      </div>
    </div>
  );
}
