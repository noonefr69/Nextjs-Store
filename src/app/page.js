import Clients from "@/components/Clients";
import Featured from "@/components/Featured";
import FeaturedIn from "@/components/FeaturedIn";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Loved from "@/components/Loved";
import MiddleSection from "@/components/MiddleSection";
import Samples from "@/components/Samples";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Samples />
      <Featured />
      <MiddleSection />
      <Loved />
      <div id="cursor" className="w-full h-[5rem] mt-30 hidden md:block"></div>
      <Clients />
      <FeaturedIn />
    </div>
  );
}
