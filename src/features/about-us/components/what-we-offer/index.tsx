import React from "react";
import styles from "../what-we-offer/styles.module.scss";
import Image from "next/image";
import phone from "../../../../../public/assets/images/phone.svg";
// import { text } from "stream/consumers";

export default function WhatWeOffer() {
  const gadgets = [
    {
      id: 1,
      name: "Unbeatable Prices",
      text: "Regular deals and seasonal discounts",
      price: "$1,199",
      img: phone,
      bgClass: styles.bgBlueBlue,
    },
    {
      id: 2,
      name: "Google Pixel 8 Pro",
      text: "Regular deals and seasonal discounts",
      price: "$999",
      img: phone,
      bgClass: styles.bgBlueBlue,
    },
    {
      id: 3,
      name: "iPhone 15 Pro Max - 256GB",
      text: "Regular deals and seasonal discounts",
      price: "$1,099",
      img: phone,
      bgClass: styles.bgBlueBlue,
    },
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra",
      text: "Regular deals and seasonal discounts",
      price: "$1,199",
      img: phone,
      bgClass: styles.bgBlueBlue,
    },
    
  ];

  return (
    <section className={styles.wrapper}>
      <div  className={styles.container}>
        <div className={styles.textArea}>
          <h2>
          What We Offer
          </h2>
          <p>
            Upgrade your experience with the latest smartphones.
            <br />
            Powerful performance, stunning designs, and unbeatable deals—
            <br />
            shop now before they sell out!
          </p>
        </div>
        <div className={styles.scrollContainer}>
          {gadgets.map((gadget) => (
            <div key={gadget.id} className={`${styles.card} ${gadget.bgClass}`}>
              <Image
                src={gadget.img}
                alt={gadget.name}
                width={220}
                height={220}
                className={styles.image}
              />
              <p className={styles.name}>{gadget.name}</p>
              <p className={styles.price}>{gadget.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
