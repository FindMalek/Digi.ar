"use client";

import Navbar from "@/components/overall/Navbar";
import Footer from "@/components/overall/Footer";

import Herosection from "@/components/portfolio-page/Herosection";
import CaseStudies from "@/components/portfolio-page/CaseStudies";
import Testimonial from "@/components/portfolio-page/Testimonial";
import CloudLogos from "@/components/portfolio-page/CloudLogos";

export default function Home() {
  return (
    <>
      <Navbar />

      <Herosection />
      <CaseStudies />
      <Testimonial />
      <CloudLogos />

      <Footer />
    </>
  );
}
