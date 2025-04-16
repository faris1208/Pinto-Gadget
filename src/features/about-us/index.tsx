import NavBar from '@/app/components/navbar'
import React from 'react'
import WhatWeOffer from './components/what-we-offer'
import OurStory from './components/our-story'
import AboustUsHeroSection from './components/hero-section'
import styles from "../about-us/styles.module.scss"

export default function AboutUs() {
  return (
    <div className={styles.wrapper}>
        <NavBar />
        <AboustUsHeroSection />
        <OurStory />
        <WhatWeOffer />
    </div>
  )
}
