import NavBar from '@/app/components/navbar'
import React from 'react'
import WhatWeOffer from './components/what-we-offer'
import OurStory from './components/our-story'
import AboustUsHeroSection from './components/hero-section'

export default function AboutUs() {
  return (
    <div>
        <NavBar />
        <AboustUsHeroSection />
        <OurStory />
        <WhatWeOffer />
    </div>
  )
}
