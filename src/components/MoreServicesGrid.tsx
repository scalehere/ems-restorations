import Image from "next/image";
import { services } from "@/lib/content";

export function MoreServicesGrid() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <span className="section-bubble">Our Services</span>
        <h2 className="mt-5 font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] max-w-3xl mx-auto">
          EMS Restoration Handles More Than You Think
        </h2>
        <p className="mt-5 max-w-3xl mx-auto text-[18px] leading-[1.6]">
          From emergency mitigation to full remodels, EMS Restoration is your single point of contact for every project. One licensed team, one call, start to finish.
        </p>
      </div>

      <div className="mt-12 mx-auto max-w-[1200px] px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-border overflow-hidden flex flex-col transition"
          >
            <a href={s.residentialHref} className="block overflow-hidden">
              <Image
                src={s.imageSrc}
                alt={s.imageAlt}
                width={600}
                height={300}
                className="w-full aspect-[2/1] object-cover group-hover:scale-105 transition duration-500"
              />
            </a>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-heading font-bold text-navy text-xl">
                <a href={s.residentialHref} className="hover:text-cyan transition">
                  {s.title}
                </a>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/85 flex-1">{s.description}</p>
              <div className="mt-5 flex gap-2">
                <a
                  href={s.residentialHref}
                  className="flex-1 text-center px-4 py-2 rounded-md bg-cyan text-navy text-sm font-heading font-bold uppercase tracking-wide hover:brightness-95 transition"
                >
                  Residential
                </a>
                <a
                  href={s.commercialHref}
                  className="flex-1 text-center px-4 py-2 rounded-md bg-navy text-white text-sm font-heading font-bold uppercase tracking-wide hover:bg-navy-light transition"
                >
                  Commercial
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
