import Image from "next/image";

export function Kitchen() {
  return (
    <section id="kitchen" className="bg-white py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <Image
          src="/images/services/remodel-kitchen-showcase.jpg"
          alt="EMS Restorations — Kitchen Remodeling San Diego"
          width={900}
          height={1000}
          className="w-full rounded-2xl shadow-xl order-first lg:order-none"
        />
        <div>
          <h2 className="font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] text-balance">
            Kitchen Remodeling
          </h2>
          <div className="mt-6 space-y-4 text-[18px] leading-[1.6]">
            <p>
              Your kitchen is the most-used room in your home — and one of the highest-value renovations you can make. Whether you want a full gut renovation or a targeted upgrade, we handle everything from demolition to final install.
            </p>
            <p>
              We work with your budget, your timeline, and your vision. Custom cabinetry, new countertops, updated lighting, flooring, plumbing — coordinated by one team so nothing falls through the cracks.
            </p>
          </div>
          <ul className="mt-6 space-y-2 text-[17px]">
            {[
              "Full kitchen gut and rebuild",
              "Custom and semi-custom cabinetry",
              "Countertop installation (quartz, granite, marble)",
              "Tile backsplash, flooring, and lighting",
              "Plumbing and appliance relocation",
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
              Book a Free Kitchen Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
