import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Button from "@/ui/Button";
import Image from "next/image";
import PartnerShowcase from "@/components/home/PartnerShowcase";
import PartnerNumber from "@/components/home/PartnerNumber";
import PathToSuccess from "@/components/home/PathToSuccess";
import DigitalSolutions from "@/components/home/DigitalSolutions";
import ComponentPage from "@/components/home/ComponentPage";
import SmoothScrolling from "@/components/shared/SmoothScrolling";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
     <Header/>
     <SmoothScrolling>
<HeroSection/>
      {/* <ComponentPage/> */}
    <DigitalSolutions/>
    <PathToSuccess/>
    <PartnerNumber/>
    <PartnerShowcase/>
    {/* <InfiniteMovingCardsDemo/> */}
    </SmoothScrolling>
    <Footer/>
    
    </>
  );
}
