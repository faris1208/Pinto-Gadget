"use client";
import React from "react";
import styles from "../card/styles.module.scss";
import { StarIcon } from "../icons/icons";

interface Props {
  id:number;
  name: string;
  amount: number | string;
  backgroundImage: string;
}

const Card: React.FC<Props> = ({id,name, amount, backgroundImage})  => {
  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className={styles.card_box}>
          <div key={id} className={styles.card_box_contents}>
            <h4>{name}</h4>
            <div className={styles.check_box}>
              <StarIcon />
            </div>
          </div>
          <div className={styles.location_container}>
            <div className={styles.amount}>
              <p>$<span>{amount.toLocaleString()}</span></p>
            </div>
              <button>Buy</button>
          </div>
        </div>
    </div>
  );
};

export default Card;
