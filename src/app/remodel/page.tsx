import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MapEmbed } from "@/components/MapEmbed";
import { MobileTopBar } from "@/components/MobileTopBar";
import { WhyEMSTabs } from "@/components/WhyEMSTabs";
import { Bathroom } from "@/app/remodel/_components/Bathroom";
import { FaqSection } from "@/app/remodel/_components/FaqSection";
import { FinalCta } from "@/app/remodel/_components/FinalCta";
import { Gallery } from "@/app/remodel/_components/Gallery";
import { Hero } from "@/app/remodel/_components/Hero";
import { Kitchen } from "@/app/remodel/_components/Kitchen";
import { Overview } from "@/app/remodel/_components/Overview";
import { RestorationTieIn } from "@/app/remodel/_components/RestorationTieIn";
import { RoomAdditions } from "@/app/remodel/_components/RoomAdditions";
import { Testimonials } from "@/app/remodel/_components/Testimonials";

export default function Remodel() {
  return (
    <>
      <MobileTopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Overview />
        <WhyEMSTabs />
        <Gallery />
        <Kitchen />
        <Bathroom />
        <RoomAdditions />
        <Testimonials />
        <FaqSection />
        <RestorationTieIn />
        <FinalCta />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
