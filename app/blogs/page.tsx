export const metadata = {
  title: "Blogs | Digital Army",
  description:
    "Here you can find all the blogs of Digital Army. We write about digital marketing, SEO, social media, and more. We hope you enjoy reading them.",
  author: "Mahmoud Beznaiguia",
  siteUrl: "https://digitalarmy.me",
  social: {
    twitter: "https://twitter.com/digitalarmy_me",
    linkedin: "https://www.linkedin.com/in/mahmoudbeznaiguia/",
    github: "",
    email: "mailto:mahmoudbeznaiguia.pro@gmail.com",
  },
};

import HeroSection from "@/components/blog-page/Herosection";
import BlogGrids from "@/components/blog-page/BlogGrids";
import Overview from "@/components/blog-page/Overview";

export default function Blogs() {
  return (
    <>
      <HeroSection />
      <BlogGrids />
      <Overview />
    </>
  );
}
