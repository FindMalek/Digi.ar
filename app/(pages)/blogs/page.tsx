"use client";

import Navbar from "@/components/overall/Navbar";
import Footer from "@/components/overall/Footer";

import HeroSection from "@/components/blog-page/Herosection";
import BlogGrids from "@/components/blog-page/BlogGrids";
import Overview from "@/components/blog-page/Overview";

export default function Blogs() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <BlogGrids />
      <Overview />

      <Footer />
    </>
  );
}
