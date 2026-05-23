"use client";

import { useState } from "react";
import { ChevronDownIcon, PhoneIcon } from "@/components/icons";
import { PHONE, PHONE_HREF } from "@/lib/content";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does a typical remodel take?",
    answer:
      "A kitchen remodel typically takes 3–6 weeks depending on scope. A bathroom is usually 1–3 weeks. We give you a realistic timeline before we start — and we stick to it.",
  },
  {
    question: "What does the 3D design preview include?",
    answer:
      "We build a full 3D model of your finished space before construction begins. You approve layout, finishes, and fixtures before we touch a single wall.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "Yes. We pull all required permits and manage every inspection. You don't deal with the city — we do.",
  },
  {
    question: "What if my remodel project uncovers water damage or mold?",
    answer:
      "We handle it. EMS is licensed for both remodeling and restoration — water damage, mold, and fire repair. We address it and keep your project on track without you needing to hire a second contractor.",
  },
  {
    question: "How is your pricing structured?",
    answer:
      "We provide a full written estimate before any work starts. The price we quote is the price you pay — no surprise charges or mid-project change orders for things we should have caught upfront.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. EMS Restorations holds CA Contractor License #1081134 and carries full general liability and workers' compensation insurance.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="bg-muted py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <span className="section-bubble">FAQ</span>
        <h2 className="mt-5 font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] max-w-3xl mx-auto text-balance">
          Frequently Asked Questions — Remodeling &amp; Restoration
        </h2>
        <p className="mt-5 max-w-3xl mx-auto text-[18px] leading-[1.6]">
          Here are answers to the questions San Diego homeowners ask us most. Don&rsquo;t see yours? Call us directly — we&rsquo;re available 24/7.
        </p>
      </div>

      <div className="mt-10 mx-auto max-w-3xl px-6">
        <div className="rounded-2xl bg-white shadow-md divide-y divide-border overflow-hidden">
          {faqs.map((f, i) => {
            const isOpen = open.has(i);
            return (
              <div key={f.question}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 lg:p-6 hover:bg-muted/50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-navy text-lg lg:text-xl">
                    {f.question}
                  </span>
                  <ChevronDownIcon
                    className={cn(
                      "w-5 h-5 shrink-0 text-cyan transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 lg:px-6 pb-6 text-navy/85 leading-relaxed">{f.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#hero-form"
            className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-navy font-heading font-bold uppercase tracking-wide transition"
          >
            Book My Free Estimate
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-navy hover:bg-navy-light text-white font-heading font-bold uppercase tracking-wide transition"
          >
            <PhoneIcon className="w-4 h-4" /> Call Now {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
