import React from "react";
import styles from "../flash-sale-timer/styles.module.scss";
import { sales } from "@/app/components/data";
import Image from "next/image";
import { StarIcon } from "@/app/components/icons/icons";

export default function FlashSaleTimer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flash_container}>
        <div className={styles.sale_background}>
          <div className={styles.sale_overlay}>
            <h2>Flash Sale Timer</h2>
            <p>
              Grab the hottest deals before they&apos;re gone! Limited-time
              offers on top smartphones—huge savings, flash sales, and exclusive
              bundles. Don&apos;t miss out!
            </p>
          </div>
        </div>
        <div className={styles.second}>
          {sales.map((sale, index) => (
            <div className={styles.camera_contents} key={index}>
              <div className={styles.camera_box}>
                <Image
                  src={sale.image}
                  alt="camera"
                  width={200}
                  height={200}
                  className={styles.camera}
                />
              </div>
              <div className={styles.camera_text}>
                <div className={styles.phone_text}>
                  <p>{sale.phone}</p>
                  <StarIcon />
                </div>
                <p  className={styles.description}>{sale.description}</p>
                <p className={styles.amount}>
                  <strong>${sale.amount}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
