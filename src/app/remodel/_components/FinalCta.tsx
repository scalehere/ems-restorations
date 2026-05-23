import { PhoneIcon } from "@/components/icons";
import { PHONE, PHONE_HREF } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading font-bold text-2xl lg:text-3xl leading-[1.25] text-balance">
          Ready to Finally Get It Done Right?
        </h2>
        <p className="mt-5 text-[18px] leading-[1.6]">
          You&rsquo;ve probably been putting this remodel off because you don&rsquo;t want the headache. We get it. That&rsquo;s why we built our entire process to be clear, predictable, and stress-free — starting with a 3D preview so you know exactly what you&rsquo;re getting before we start.
        </p>
        <p className="mt-3 text-[18px] leading-[1.6]">
          Book your free estimate today. No pressure, no obligation — just an honest conversation about your project and what it&rsquo;ll take to get it done.
        </p>
        <p className="mt-3 text-sm text-navy/70">
          Free consultation. No commitment required. We serve all of San Diego County.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#hero-form"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-white font-heading font-bold uppercase tracking-wide transition"
          >
            Book My Free Estimate
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-navy hover:bg-navy-light text-white font-heading font-bold uppercase tracking-wide transition"
          >
            <PhoneIcon className="w-4 h-4" /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
