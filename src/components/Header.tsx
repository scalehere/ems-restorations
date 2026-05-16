"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, MenuIcon, CloseIcon } from "@/components/icons";
import { navLinks, PHONE, PHONE_HREF } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-[var(--mobile-bar-h,0px)] z-50 bg-white shadow-sm">
      {/* Top utility row */}
      <div className="hidden lg:block border-b border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center gap-6">
          <Link href="#" className="shrink-0">
            <Image
              src="/images/logos/ems-restoration-logo.png"
              alt="EMS Restoration"
              width={500}
              height={500}
              className="h-[70px] w-[70px]"
              priority
            />
          </Link>

          <div className="flex-1 flex items-center gap-6 justify-end">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 text-navy hover:text-cyan transition"
            >
              <span className="grid place-items-center w-10 h-10 rounded-full bg-cyan/15 text-cyan">
                <Image src="/images/icons/phone-icon.svg" alt="" width={22} height={22} />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] uppercase tracking-widest font-heading text-muted-foreground">
                  Call Now
                </span>
                <span className="block text-lg font-heading font-bold">{PHONE}</span>
              </span>
            </a>

            <a
              href="#hero-form"
              className="inline-flex items-center justify-center h-11 px-4 rounded-md bg-cyan hover:brightness-95 text-navy font-heading font-semibold uppercase tracking-wide text-xs transition whitespace-nowrap"
            >
              Schedule an Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Primary nav */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1200px] px-6 py-3 flex items-center justify-center gap-8">
          {navLinks.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-[14px] font-heading font-medium uppercase tracking-wider text-navy hover:text-cyan transition"
              >
                {item.label}
                {item.children?.length ? <ChevronDownIcon className="w-3 h-3" /> : null}
              </Link>
              {item.children?.length ? (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <ul className="min-w-[260px] bg-white shadow-lg border border-border rounded-md py-2">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          href={c.href}
                          className="block px-4 py-2 text-sm text-navy hover:bg-cyan/10 hover:text-cyan transition"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-border">
        <Link href="#" className="shrink-0">
          <Image
            src="/images/logos/ems-restoration-logo.png"
            alt="EMS Restoration"
            width={500}
            height={500}
            className="h-12 w-12"
          />
        </Link>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="grid place-items-center w-11 h-11 rounded-md text-navy hover:bg-muted"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-b border-border",
          mobileOpen ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <nav className="px-4 py-4 max-h-[75vh] overflow-y-auto">
          <ul className="flex flex-col">
            {navLinks.map((item) => (
              <li key={item.label} className="border-b border-border/60 last:border-b-0">
                <details className="group">
                  <summary
                    className={cn(
                      "flex items-center justify-between py-3 text-base font-heading font-semibold uppercase tracking-wide text-navy",
                      !item.children && "list-none",
                    )}
                  >
                    {item.children ? (
                      <span>{item.label}</span>
                    ) : (
                      <Link href={item.href} onClick={() => setMobileOpen(false)} className="flex-1">
                        {item.label}
                      </Link>
                    )}
                    {item.children ? (
                      <ChevronDownIcon className="group-open:rotate-180 transition" />
                    ) : null}
                  </summary>
                  {item.children ? (
                    <ul className="pl-3 pb-2">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <Link
                            href={c.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-muted-foreground hover:text-cyan"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </details>
              </li>
            ))}
          </ul>
          <div className="pt-4 flex flex-col gap-2">
            <a
              href={PHONE_HREF}
              className="block w-full text-center py-3 rounded-md bg-cyan text-navy font-heading font-bold uppercase tracking-wide"
            >
              Call {PHONE}
            </a>
            <a
              href="#hero-form"
              className="block w-full text-center py-3 rounded-md bg-navy text-white font-heading font-bold uppercase tracking-wide"
            >
              Schedule an Appointment
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
