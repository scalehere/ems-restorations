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
            <div className="block overflow-hidden">
              <Image
                src={s.imageSrc}
                alt={s.imageAlt}
                width={600}
                height={300}
                className="w-full aspect-[2/1] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-heading font-bold text-navy text-xl">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/85">{s.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
