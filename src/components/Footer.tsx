import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/icons";
import { footerColumns, LOCATION_NAME, PHONE, PHONE_HREF } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('/images/decor/dot-bkgrd-4.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
          backgroundSize: "300px auto",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="#" className="inline-block">
            <Image
              src="/images/logos/ems-restoration-logo-white.webp"
              alt="EMS Restoration"
              width={245}
              height={200}
              className="w-48"
            />
          </Link>
          <div className="mt-5 flex gap-3">
            {[FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-cyan hover:text-navy transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact column with phone */}
        <div>
          <p className="font-heading font-bold uppercase text-cyan tracking-widest text-sm mb-4">
            Contact Us
          </p>
          <ul className="space-y-2 text-white/90 text-sm">
            <li>{LOCATION_NAME}</li>
            <li>
              <a href={PHONE_HREF} className="hover:text-cyan transition">
                {PHONE}
              </a>
            </li>
            <li>
              <a href="#hero-form" className="hover:text-cyan transition">
                Schedule an Appointment
              </a>
            </li>
          </ul>
        </div>

        {/* About + Quick Links columns from data */}
        {footerColumns.slice(1).map((col) => (
          <div key={col.title}>
            <p className="font-heading font-bold uppercase text-cyan tracking-widest text-sm mb-4">
              {col.title}
            </p>
            <ul className="space-y-2 text-white/90 text-sm">
              {col.items.map((item) => (
                <li key={item.value ?? item.label}>
                  {item.type === "link" ? (
                    <a href={item.href} className="hover:text-cyan transition">
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/70">
          <p>© {new Date().getFullYear()} EMS Restoration. All rights reserved.</p>
          <ul className="flex flex-wrap gap-5">
            <li><a href="#" className="hover:text-cyan transition">Policy</a></li>
            <li><a href="#" className="hover:text-cyan transition">Terms</a></li>
            <li><a href="#" className="hover:text-cyan transition">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
