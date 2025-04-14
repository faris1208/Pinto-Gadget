import React from 'react'
import styles from "../deals/styles.module.scss"
import ProductNavBar from '../products/components/product-navbar'
import Untouchable from './components/untouchable'
import FlashMacbook from './components/flash-macbook'

export default function DealsPage() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
        <ProductNavBar />
        <Untouchable />
        <FlashMacbook />
        </div>
    </div>
  )
}
