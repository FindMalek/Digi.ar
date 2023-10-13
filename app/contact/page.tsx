export const metadata = {
  title: "Contact | Digital Army",
  description:
    "Online portfolio of Mahmoud Beznaiguia, a digital marketer skilled in SEO, social media, email marketing, and more. View examples of his work and contact him to help your business succeed online.",
};

import { Toaster } from "@/components/ui/Toaster";
import ContactForm from "@/components/contact-page/ContactForm";

export default function Home() {
  return (
    <>
      <ContactForm />
      <Toaster />
    </>
  );
}
