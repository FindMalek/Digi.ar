"use client";

import Navbar from "@/components/overall/Navbar";
import Footer from "@/components/overall/Footer";

import Herosection from "@/components/about-page/Herosection";
import Quotation from "@/components/about-page/Quotation";
import Timeline from "@/components/about-page/Timeline";
import OurMission from "@/components/about-page/OurMission";
import OurValues from "@/components/about-page/OurValues";
import LogoCloud from "@/components/about-page/LogoCloud";
import ContentSection from "@/components/about-page/ContentSection";
import AProposNous from "@/components/about-page/APropposNous";

export default function Home() {
  return (
    <>
      <Navbar />

      <Herosection />
      <Timeline />
      <OurMission />
      <Quotation />
      <OurValues />
      <ContentSection />
      <AProposNous />
      <LogoCloud />

      <Footer />
    </>
  );
}
