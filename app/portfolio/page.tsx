export const metadata = {
  title: "Portfolio | Digital Army",
  description:
    "Online portfolio of Mahmoud Beznaiguia, a digital marketer skilled in SEO, social media, email marketing, and more. View examples of his work and contact him to help your business succeed online.",
};

import Herosection from "@/components/portfolio-page/Herosection";
import CaseStudies from "@/components/portfolio-page/CaseStudies";
import Testimonial from "@/components/portfolio-page/Testimonial";
import CloudLogos from "@/components/portfolio-page/CloudLogos";

export default function Home() {
  return (
    <>
      <Herosection />
      <CaseStudies />
      <Testimonial />
      <CloudLogos />
    </>
  );
}
