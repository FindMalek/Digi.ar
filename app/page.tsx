import Herosection from "@/components/home/Herosection";
import WeAreSection from "@/components/home/WeAreSection";
import TrustUsSection from "@/components/home/TrustUsSection";
import ServicesSection from "@/components/home/ServicesSection";
import Statistics from "@/components/home/Statistics";
import Reviews from "@/components/home/Reviews";
import LogoCloud from "@/components/home/LogoCloud";

export default function Home() {
  return (
    <>
      <Herosection />
      <WeAreSection />
      <TrustUsSection />
      <ServicesSection />
      <Statistics />
      <Reviews />
      <LogoCloud />
    </>
  );
}
