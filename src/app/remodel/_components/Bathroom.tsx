import Image from "next/image";

export function Bathroom() {
  return (
    <section id="bathroom" className="bg-muted py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <h2 className="font-heading font-bold text-3xl lg:text-[40px] leading-[1.15]">
            Bathroom Remodeling
          </h2>
          <div className="mt-6 space-y-4 text-[18px] leading-[1.6]">
            <p>
              A well-done bathroom remodel adds value to your home and quality to your daily life. A poorly done one leaks, molds, and costs twice as much to fix later.
            </p>
            <p>
              We build bathrooms that are beautiful and built to last — <strong>proper waterproofing, quality tile work, and finishes that hold up.</strong> From a single-bathroom refresh to a full primary suite, we&rsquo;ve done it all.
            </p>
          </div>
          <ul className="mt-6 space-y-2 text-[17px]">
            {[
              "Walk-in showers and soaking tub installs",
              "Full tile work — floor, walls, and wet areas",
              "Vanity, fixture, and lighting upgrades",
              "Proper waterproofing and moisture barriers",
              "ADA-accessible design available",
              "3D layout preview included on every project",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-cyan font-bold text-xl leading-none">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="#hero-form"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-white font-heading font-bold uppercase tracking-wide transition"
            >
              Book a Free Bathroom Estimate
            </a>
          </div>
        </div>
        <Image
          src="/images/sections/commercial-mold.webp"
          alt="EMS Restorations — Bathroom Remodeling San Diego"
          width={800}
          height={800}
          className="w-full rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}
