import React from 'react'
import styles from "../hero/styles.module.scss"

export default function HeroSection() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.pinto_container}>
            <h1>Pinto gadget</h1>
            <p>Cutting-edge technology, unbeatable prices</p>
            <button>Buy now</button>
        </div>
    </div>
  )
}
