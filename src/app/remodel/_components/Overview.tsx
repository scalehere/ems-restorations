import Image from "next/image";

export function Overview() {
  return (
    <section id="overview" className="bg-white py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <h2 className="font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] text-balance">
            Most Remodel Nightmares Start the Same Way.
          </h2>
          <div className="mt-6 space-y-4 text-[18px] leading-[1.6]">
            <p>
              The contractor seemed solid. The quote looked reasonable. Then the crew shows up late, the project drags on for months, the price balloons, and you&rsquo;re left living in a half-finished kitchen arguing over change orders.
            </p>
            <p>
              At EMS Restorations, we built our entire process around preventing exactly that. Before any work begins, we create a full 3D model of your finished project — so you see exactly what you&rsquo;re getting before we start. <strong>No guessing. No surprises.</strong>
            </p>
            <p>
              Every remodel is managed start to finish by a single point of contact. We pull the permits. We show up on time. We finish on schedule. And <strong>the price we quote is the price you pay.</strong>
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#hero-form"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-white font-heading font-bold uppercase tracking-wide transition"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/sections/remodel-kitchen-navy-island.jpg"
            alt="EMS Restorations — completed kitchen remodel San Diego"
            width={800}
            height={800}
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
