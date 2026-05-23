import Image from "next/image";

export function Process() {
  return (
    <section id="remodeling" className="bg-muted py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div>
          <h2 className="font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] text-balance">
            We Also Rebuild — Kitchens, Bathrooms, Additions &amp; ADUs
          </h2>
          <div className="mt-6 space-y-4 text-[18px] leading-[1.6]">
            <p>
              Many of our restoration customers discover their home needs more than repairs — they need a real upgrade. EMS Restoration handles <strong>full kitchen remodels, bathroom remodels, home additions, and ADU builds</strong> with the same licensed team that handles emergency restoration.
            </p>
            <p>
              <strong>One contractor. One point of contact. No subcontractor shuffle.</strong>
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-border bg-white p-6 space-y-3">
            <div className="flex items-start gap-3 text-[17px]">
              <span className="mt-1 text-cyan font-bold text-xl leading-none">✓</span>
              <span><strong>5% off up to $1,000</strong> on remodels</span>
            </div>
            <div className="flex items-start gap-3 text-[17px]">
              <span className="mt-1 text-cyan font-bold text-xl leading-none">✓</span>
              <span><strong>10% off up to $10,000</strong> on new additions</span>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#hero-form"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-navy hover:bg-navy-light text-white font-heading font-bold uppercase tracking-wide transition"
            >
              Get a Free Remodel Estimate
            </a>
          </div>
        </div>

        <div className="grid gap-6">
          <Image
            src="/images/process/remodel-kitchen-hero.jpg"
            alt="EMS Restoration Remodeling and Construction"
            width={1100}
            height={700}
            className="w-full rounded-2xl shadow-xl"
          />
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/process/remodel-kitchen-warm-maple.jpg"
              alt="EMS Restoration Kitchen and Bathroom Remodels"
              width={600}
              height={600}
              className="w-full rounded-xl shadow-lg aspect-square object-cover"
            />
            <Image
              src="/images/process/remodel-adu-construction-exterior.jpg"
              alt="EMS Restoration Home Additions and ADU Builds"
              width={600}
              height={600}
              className="w-full rounded-xl shadow-lg aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
