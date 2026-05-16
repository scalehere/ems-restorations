import Image from "next/image";
import Script from "next/script";
import { CheckIcon } from "@/components/icons";
import { heroBullets, trustBadges } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src="/images/sections/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/40" />

      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        <div className="text-white">
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-[44px] leading-[1.15] text-white">
            San Diego&rsquo;s Restoration Team That Handles Your Insurance Claim Start to Finish
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/90 max-w-xl">
            Water damage, mold, fire &amp; smoke restoration for San Diego County homeowners. Over 1,000 insurance claims handled. Licensed, veteran-owned, available 24/7.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
            {heroBullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white">
                <span className="mt-0.5 grid place-items-center w-6 h-6 rounded-full bg-cyan text-navy">
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
          className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md mx-auto lg:ml-auto"
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/EEJ792UCw3hfLSrTfLyQ"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "1038px",
              border: "none",
              borderRadius: "8px",
              display: "block",
            }}
            id="inline-EEJ792UCw3hfLSrTfLyQ"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="EMS_form1"
            data-height="1038"
            data-layout-iframe-id="inline-EEJ792UCw3hfLSrTfLyQ"
            data-form-id="EEJ792UCw3hfLSrTfLyQ"
            title="EMS_form1"
          />
        </div>
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
