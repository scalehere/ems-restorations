import Image from "next/image";

export function FireSmoke() {
  return (
    <section id="fire-smoke" className="bg-muted py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <h2 className="font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] text-balance">
            When the Fire Is Out, We&rsquo;re Just Getting Started.
          </h2>
          <div className="mt-6 space-y-4 text-[18px] leading-[1.6]">
            <p>
              Fire damage goes far beyond what you can see. <strong>Smoke penetrates walls and ceilings. Soot damages surfaces.</strong> Water from firefighting creates secondary moisture damage. If you only address what&rsquo;s visible, you&rsquo;ll be dealing with the hidden damage for years.
            </p>
            <p>
              EMS Restoration handles the full scope — <strong>structural repairs, odor elimination, contents cleaning, and complete reconstruction</strong>. We work directly with your insurance adjuster so every eligible dollar is documented and recovered.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#hero-form"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-white font-heading font-bold uppercase tracking-wide transition"
            >
              Get a Free Assessment
            </a>
          </div>
        </div>
        <Image
          src="/images/sections/fire-damaged-kitchen-gutted.jpg"
          alt="Fire-damaged kitchen interior — charred walls, burned appliances, soot damage"
          width={800}
          height={800}
          className="w-full rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}
