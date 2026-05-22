import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { FireSmoke } from "@/components/FireSmoke";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { MapEmbed } from "@/components/MapEmbed";
import { MobileTopBar } from "@/components/MobileTopBar";
import { MoldRemediation } from "@/components/MoldRemediation";
import { MoreServicesGrid } from "@/components/MoreServicesGrid";
import { Overview } from "@/components/Overview";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { WhyEMSTabs } from "@/components/WhyEMSTabs";

export default function Home() {
  return (
    <>
      <MobileTopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <VideoSection />
        <Overview />
        <WhyEMSTabs />
        <Gallery />
        <MoldRemediation />
        <FireSmoke />
        <Process />
        <Testimonials />
        <FaqSection />
        <MoreServicesGrid />
        <FinalCta />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
