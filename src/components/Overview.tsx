import Image from "next/image";

export function Overview() {
  return (
    <section id="water-damage" className="bg-white py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <h2 className="font-heading font-bold text-3xl lg:text-[40px] leading-[1.15]">
            San Diego Water Damage Restoration — Responded to in Hours, Not Days
          </h2>
          <div className="mt-6 space-y-4 text-[18px] leading-[1.6]">
            <p>
              When water damages your home, every hour counts. <strong>Mold can begin growing in as little as 24–48 hours.</strong> The longer you wait, the more damage spreads — and the more expensive it becomes.
            </p>
            <p>
              EMS Restoration responds fast. We contain the source, extract standing water, dry the structure, and restore your home to pre-loss condition. We work directly with your insurance company to <strong>document the damage, file your claim correctly, and fight for the maximum payout</strong> — so you don&rsquo;t have to.
            </p>
            <p>
              <strong>Fixed-price estimates. No change orders. No surprises.</strong>
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#hero-form"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-white font-heading font-bold uppercase tracking-wide transition"
            >
              Schedule My Free Assessment
            </a>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/sections/overview.webp"
            alt="EMS Restoration — San Diego Water Damage Restoration"
            width={800}
            height={800}
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
