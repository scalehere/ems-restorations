import Image from "next/image";
import { services } from "@/lib/content";

export function RestorationTieIn() {
  return (
    <section id="services" className="bg-white py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <span className="section-bubble">Restoration Services</span>
        <h2 className="mt-5 font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] max-w-3xl mx-auto">
          Your Remodel Uncovered a Problem? We Handle That Too.
        </h2>
        <p className="mt-5 max-w-3xl mx-auto text-[18px] leading-[1.6]">
          It happens more than you&rsquo;d think. You open up a wall for a kitchen remodel and find water damage. You pull up old bathroom tile and find mold underneath. Most contractors stop work, hand you a referral, and leave you managing two separate crews.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-[18px] leading-[1.6]">
          EMS handles both. We&rsquo;re a full-service restoration and remodeling contractor — licensed for water damage remediation, mold removal, and fire damage repair, in addition to full home remodels. If your project reveals damage, we address it and keep the remodel moving without skipping a beat.
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
