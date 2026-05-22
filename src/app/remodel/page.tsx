import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MapEmbed } from "@/components/MapEmbed";
import { MobileTopBar } from "@/components/MobileTopBar";
import { WhyEMSTabs } from "@/app/remodel/_components/WhyEMSTabs";
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
import { VideoSection } from "@/app/remodel/_components/VideoSection";
import type { NavLink } from "@/types/content";

export const metadata: Metadata = {
  title: "EMS Restoration — San Diego Remodeling | Kitchens, Bathrooms & ADUs | Licensed CA #1081134",
  description:
    "San Diego's trusted remodeling contractor for kitchens, bathrooms, room additions, and ADUs. 3D design preview on every project. Licensed CA #1081134. No surprise pricing. Serving all San Diego County.",
};

const remodelNavLinks: NavLink[] = [
  {
    label: "Services",
    href: "#kitchen",
    children: [
      { label: "Kitchen Remodeling", href: "#kitchen" },
      { label: "Bathroom Remodeling", href: "#bathroom" },
      { label: "Room Additions & ADUs", href: "#room-additions" },
      { label: "Restoration Services", href: "#services" },
    ],
  },
  {
    label: "About Us",
    href: "#why-ems",
    children: [
      { label: "About Us", href: "#why-ems" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#reviews" },
    ],
  },
  { label: "Contact", href: "#hero-form" },
];

export default function Remodel() {
  return (
    <>
      <MobileTopBar />
      <Header navLinks={remodelNavLinks} />
      <main className="flex-1">
        <Hero />
        <VideoSection />
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
