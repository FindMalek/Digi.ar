export const metadata = {
  title: "About | Digital Army",
  description:
    "Online portfolio of Mahmoud Beznaiguia, a digital marketer skilled in SEO, social media, email marketing, and more. View examples of his work and contact him to help your business succeed online.",
};

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
      <Herosection />
      <Timeline />
      <OurMission />
      <Quotation />
      <OurValues />
      <ContentSection />
      <AProposNous />
      <LogoCloud />
    </>
  );
}
