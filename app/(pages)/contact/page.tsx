"use client";

import { Toaster } from "@/components/ui/Toaster";

import Navbar from "@/components/overall/Navbar";
import Footer from "@/components/overall/Footer";
import ContactForm from "@/components/contact-page/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Toaster />
      <Footer />
    </>
  );
}
