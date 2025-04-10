import React from 'react'
import HeroSection from './components/hero'
import NavBar from '@/app/components/navbar'
import TopSellingGadget from './components/top-selling-gadget'
import FlashSaleTimer from './components/flash-sale-timer'
import FeaturedProduct from './components/featured'

export default function LandingPage() {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <TopSellingGadget />
        <FlashSaleTimer />
        <FeaturedProduct />
    </div>
  )
}
