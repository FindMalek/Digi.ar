"use client"

import Navbar from '@/components/overall/Navbar'
import Herosection from '@/components/home/Herosection'
import WeAreSection from '@/components/home/WeAreSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <WeAreSection />
    </>
  )
}
