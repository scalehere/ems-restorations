"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "licensed",
    label: "Licensed & Permit-Ready",
    heading: "Fully Permitted, Start to Finish",
    body: "We pull every required permit and handle all inspections. Your remodel is done to code — protecting your home value and your safety.",
    imageSrc: "/images/sections/joseph-higa-owner-portrait.webp",
    imageAlt: "EMS Restorations — Joseph, owner",
  },
  {
    id: "locked-pricing",
    label: "Honest, Locked-In Pricing",
    heading: "Your Quote Is Your Final Price",
    body: "No change orders for things we should have caught upfront. No hidden labor fees at the end. We price jobs honestly from day one.",
    imageSrc: "/images/tabs/remodel-kitchen-dark-cherry.jpg",
    imageAlt: "EMS Restorations — completed kitchen remodel",
  },
  {
    id: "3d-preview",
    label: "3D Design Preview",
    heading: "See It Before We Build It",
    body: "We create a 3D model of your finished project before construction begins. You approve every detail — layout, finishes, fixtures — before a single wall comes down.",
    imageSrc: "/images/tabs/remodel-3d-kitchen-render.png",
    imageAlt: "EMS Restorations — 3D kitchen design render",
  },
  {
    id: "one-team",
    label: "One Team, One Contact",
    heading: "No Getting Passed Around",
    body: "You work directly with Joseph and his crew from estimate to final walkthrough. No subcontractors disappearing. No being handed off to someone you've never met.",
    imageSrc: "/images/tabs/ems-van-branded.jpg",
    imageAlt: "EMS Restorations — branded company van",
  },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "10+", label: "Years Serving San Diego County" },
  { number: "3D", label: "Preview on Every Project" },
  { number: "100%", label: "Licensed & Permit-Compliant Work" },
];

export function WhyEMSTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="why-ems" className="bg-white pt-16 lg:pt-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <span className="section-bubble">About Us</span>
        <h2 className="mt-5 font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] max-w-3xl mx-auto">
          Why San Diego Homeowners Choose EMS
        </h2>
        <p className="mt-5 max-w-3xl mx-auto text-[18px] leading-[1.6]">
          San Diego homeowners choose EMS because we built our entire process around one goal — <strong>no surprises, start to finish.</strong> 3D preview before we start, permits handled, one team, one price.
        </p>
      </div>

      <div className="mt-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-2 sm:gap-3 mb-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={cn(
                "px-4 sm:px-6 py-3 rounded-md font-heading font-semibold text-sm sm:text-base uppercase tracking-wide transition border",
                active === t.id
                  ? "bg-cyan text-white border-cyan"
                  : "bg-navy text-white border-navy hover:bg-navy-light",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="relative isolate rounded-2xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "url('/images/decor/dots-bkgrd.svg'), linear-gradient(25deg, #1F2937 0%, #1F2937 50%, #1E8E3E 100%)",
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundSize: "300px auto, cover",
              backgroundPosition: "top left, center",
            }}
          />
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 p-8 sm:p-10 lg:p-14 items-center text-white">
            <div key={current.id} className="animate-in fade-in duration-300">
              <h3 className="font-heading font-bold text-2xl lg:text-3xl text-white text-balance">{current.heading}</h3>
              <p className="mt-4 text-white/90 text-[17px] leading-[1.65]">{current.body}</p>
            </div>
            <div className="relative flex items-center justify-center">
              <Image
                key={current.imageSrc}
                src={current.imageSrc}
                alt={current.imageAlt}
                width={900}
                height={900}
                className="w-full max-w-xs lg:max-w-sm rounded-xl shadow-2xl animate-in fade-in duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-t border-border">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading font-extrabold text-cyan text-4xl lg:text-5xl">{s.number}</div>
                <div className="mt-2 text-sm lg:text-base text-navy/80 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="pb-10 text-center">
            <a
              href="#hero-form"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-white font-heading font-bold uppercase tracking-wide transition"
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
