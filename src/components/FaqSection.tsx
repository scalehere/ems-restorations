"use client";

import { useState } from "react";
import { ChevronDownIcon, PhoneIcon } from "@/components/icons";
import { faqs, PHONE, PHONE_HREF } from "@/lib/content";
import { cn } from "@/lib/utils";

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
        <h2 className="mt-5 font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] max-w-3xl mx-auto">
          Frequently Asked Questions About Restoration &amp; Insurance
        </h2>
        <p className="mt-5 max-w-3xl mx-auto text-[18px] leading-[1.6]">
          We know restoration and insurance claims can feel overwhelming. Here are answers to the questions San Diego homeowners ask us most. Don&rsquo;t see yours? Call us directly — we&rsquo;re available 24/7.
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
            Schedule an Appointment
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
