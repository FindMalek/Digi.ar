"use client";

import Navbar from "@/components/overall/Navbar";
import Herosection from "@/components/about-page/Herosection";
import WeAreSection from "@/components/home/WeAreSection";
import TrustUsSection from "@/components/home/TrustUsSection";
import ServicesSection from "@/components/home/ServicesSection";
import Statistics from "@/components/home/Statistics";
import Reviews from "@/components/home/Reviews";
import Partnership from "@/components/home/Partnership";
import Footer from "@/components/overall/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <WeAreSection />
      <TrustUsSection />
      <ServicesSection />
      <Statistics />
      <Reviews />
      <Partnership />
      <Footer />
    </>
  );
}
