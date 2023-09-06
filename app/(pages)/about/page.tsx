"use client";

import Navbar from "@/components/overall/Navbar";
import Footer from "@/components/overall/Footer";

import Herosection from "@/components/about-page/Herosection";
import Quotation from "@/components/about-page/Quotation";
import Timeline from "@/components/about-page/Timeline";
import OurMission from "@/components/about-page/OurMission";
import OurValues from "@/components/about-page/OurValues";
import LogoCloud from "@/components/about-page/LogoCloud";

export default function Home() {
  return (
    <>
      <Navbar />

      <Herosection />
      <Timeline />
      <OurMission />
      <Quotation />
      <OurValues />
      <LogoCloud />

      <Footer />
    </>
  );
}
