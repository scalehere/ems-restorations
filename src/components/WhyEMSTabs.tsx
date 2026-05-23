"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckIcon } from "@/components/icons";
import { stats, tabContents } from "@/lib/content";
import { cn } from "@/lib/utils";

export function WhyEMSTabs() {
  const [active, setActive] = useState(tabContents[0].id);
  const current = tabContents.find((t) => t.id === active) ?? tabContents[0];

  return (
    <section id="why-ems" className="bg-white pt-16 lg:pt-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <span className="section-bubble">About Us</span>
        <h2 className="mt-5 font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] max-w-3xl mx-auto text-balance">
          Why San Diego Homeowners Choose EMS Restoration
        </h2>
        <p className="mt-5 max-w-3xl mx-auto text-[18px] leading-[1.6]">
          San Diego homeowners trust EMS Restoration because <strong>we handle everything — from the emergency call to the final inspection</strong>. We manage the insurance paperwork, coordinate the work, and hold ourselves to a veteran&rsquo;s standard of accountability on every job.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-2 sm:gap-3 mb-6">
          {tabContents.map((t) => (
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

        {/* Tab panel with gradient bg */}
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
              {current.bullets ? (
                <ul className="mt-6 space-y-3">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white">
                      <span className="mt-1 grid place-items-center w-5 h-5 rounded-full bg-cyan text-white shrink-0">
                        <CheckIcon className="w-3 h-3" />
                      </span>
                      <span className="text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
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

      {/* Stats strip */}
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
