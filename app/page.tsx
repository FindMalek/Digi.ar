"use client"

import Navbar from '@/components/overall/Navbar'
import Herosection from '@/components/home/Herosection'
import WeAreSection from '@/components/home/WeAreSection'
import TrustUsSection from '@/components/home/TrustUsSection'
import ServicesSection from '@/components/home/ServicesSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <WeAreSection />
      <TrustUsSection />
      <ServicesSection />
    </>
  )
}
