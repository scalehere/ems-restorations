import Image from "next/image";

export function RoomAdditions() {
  return (
    <section id="room-additions" className="bg-muted py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <h2 className="font-heading font-bold text-3xl lg:text-[40px] leading-[1.15]">
            Room Additions &amp; ADUs
          </h2>
          <div className="mt-6 space-y-4 text-[18px] leading-[1.6]">
            <p>
              Need more space without the cost of moving? A room addition or ADU is one of the smartest investments a San Diego homeowner can make — especially with California&rsquo;s ADU-friendly permitting laws.
            </p>
            <p>
              We handle the full build: architectural planning, permits, foundation, framing, electrical, plumbing, and finish work. From single-room additions to fully permitted detached ADUs.
            </p>
          </div>
          <ul className="mt-6 space-y-2 text-[17px]">
            {[
              "Single room and multi-room additions",
              "Detached and attached ADU construction",
              "Full permit acquisition and inspection management",
              "Architectural planning and 3D preview",
              "Foundation, framing, MEP, and finish work",
              "Rental-ready ADU builds",
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
              className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-navy hover:bg-navy-light text-white font-heading font-bold uppercase tracking-wide transition"
            >
              Get an ADU or Addition Estimate
            </a>
          </div>
        </div>

        <Image
          src="/images/process/remodel-adu-construction-exterior.jpg"
          alt="EMS Restorations — ADU and room addition San Diego"
          width={900}
          height={600}
          className="w-full rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}
