import Image from "next/image";
import { CheckIcon } from "@/components/icons";
import { trustBadges } from "@/lib/content";

const trustBand = [
  "Licensed & Insured — CA Lic. #1081134",
  "3D Project Preview Included on Every Job",
  "Serving All of San Diego County",
  "No Hidden Fees. Ever.",
];
import { GHLFormIframe } from "@/components/GHLFormIframe";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src="/images/sections/joseph-higa-owner-portrait.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[30%_50%] md:object-center -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/55" />

      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        <div className="text-white">
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-[44px] leading-[1.15] text-white">
            Your Dream Kitchen or Bathroom — Built Right, On Time, No Surprises.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/90 max-w-xl">
            San Diego&rsquo;s trusted remodeling contractor for kitchens, bathrooms, and home additions. Licensed, insured, and backed by a 3D design preview before we touch a single wall.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
            {trustBand.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white">
                <span className="mt-0.5 grid place-items-center w-6 h-6 rounded-full bg-cyan text-white">
                  <CheckIcon className="w-3.5 h-3.5" />
                </span>
                <span className="text-base font-medium">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            {trustBadges.map((b) => (
              <Image
                key={b.src}
                src={b.src}
                alt={b.alt}
                width={b.width}
                height={b.height}
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        {/* GoHighLevel (LeadConnector) embedded form */}
        <div
          id="hero-form"
          className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md mx-auto lg:ml-auto scroll-mt-[var(--nav-offset)]"
        >
          <GHLFormIframe />
        </div>
      </div>
    </section>
  );
}
