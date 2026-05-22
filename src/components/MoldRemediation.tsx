import Image from "next/image";

export function MoldRemediation() {
  return (
    <section id="mold-remediation" className="bg-white py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <Image
          src="/images/sections/mold-remediation.jpg"
          alt="EMS Restoration — Mold Remediation Specialists"
          width={900}
          height={1000}
          className="w-full rounded-2xl shadow-xl order-first lg:order-none"
        />
        <div>
          <h2 className="font-heading font-bold text-3xl lg:text-[40px] leading-[1.15]">
            Mold Spreads Fast. We Stop It Permanently.
          </h2>
          <div className="mt-6 space-y-4 text-[18px] leading-[1.6]">
            <p>
              Mold infestations develop from moisture — leaks, flooding, high humidity — and they spread <strong>behind walls, under floors, and in places you can&rsquo;t see</strong>. By the time you notice it, it&rsquo;s already a health risk and a structural concern.
            </p>
            <p>
              EMS Restoration&rsquo;s certified mold remediation team inspects, contains, removes, and prevents regrowth using <strong>IICRC-certified methods</strong>. We go after the moisture source — not just the visible mold — so it doesn&rsquo;t come back.
            </p>
            <p>
              If your mold resulted from a covered event, <strong>we document and file your claim.</strong>
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#hero-form"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-white font-heading font-bold uppercase tracking-wide transition"
            >
              Schedule a Free Mold Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
