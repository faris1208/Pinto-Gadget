import React from "react";
import styles from "../top-selling-gadget/styles.module.scss";
import Image from "next/image";
import phone from "../../../../../public/assets/images/phone.svg";

export default function TopSellingGadget() {
  const gadgets = [
    {
      id: 1,
      name: "iPhone 15 Pro Max - 256GB",
      price: "$1,099",
      img: phone,
      bgClass: styles.bgBluePurple,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: "$1,199",
      img: phone,
      bgClass: styles.bgOrange,
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      price: "$999",
      img: phone,
      bgClass: styles.bgTeal,
    },
    {
      id: 4,
      name: "iPhone 15 Pro Max - 256GB",
      price: "$1,099",
      img: phone,
      bgClass: styles.bgOrange,
    },
    {
      id: 5,
      name: "Samsung Galaxy S24 Ultra",
      price: "$1,199",
      img: phone,
      bgClass: styles.bgTeal,
    },
    {
      id: 6,
      name: "Google Pixel 8 Pro",
      price: "$999",
      img: phone,
      bgClass: styles.bgBluePurple,
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div  className={styles.container}>
        <div className={styles.textArea}>
          <h2>
            Top selling gadget
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
              <p className={styles.price}>{gadget.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
