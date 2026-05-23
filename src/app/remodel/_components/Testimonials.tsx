import { PhoneIcon, StarIcon } from "@/components/icons";
import { PHONE, PHONE_HREF } from "@/lib/content";
import type { Testimonial } from "@/types/content";

const testimonials: Testimonial[] = [
  {
    name: "Maria L.",
    location: "Chula Vista, CA",
    project: "Kitchen Remodel",
    rating: 5,
    daysAgo: "2 weeks ago",
    text: "They showed me a 3D design before anything started — I knew exactly what I was getting. The kitchen came out better than I imagined and they finished on schedule.",
  },
  {
    name: "David R.",
    location: "La Mesa, CA",
    project: "Bathroom Remodel",
    rating: 5,
    daysAgo: "1 month ago",
    text: "Joseph and his crew were professional from start to finish. No surprises on the price, no delays. The bathroom looks incredible and everything was done to code.",
  },
  {
    name: "Sandra T.",
    location: "El Cajon, CA",
    project: "ADU Build",
    rating: 5,
    daysAgo: "2 months ago",
    text: "EMS handled all the permits and inspections — I didn't have to deal with the city once. The ADU was completed on time and is already rented out.",
  },
  {
    name: "James K.",
    location: "Santee, CA",
    project: "Kitchen Remodel",
    rating: 5,
    daysAgo: "3 months ago",
    text: "I've had bad experiences with contractors before. EMS was completely different — honest pricing, one point of contact, and the work was done right the first time.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="section-bubble">Testimonials</span>
          <h2 className="mt-5 font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] max-w-3xl mx-auto text-balance">
            What San Diego Homeowners Are Saying About EMS
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-white rounded-xl border border-border shadow-md p-6 flex flex-col hover:-translate-y-1 transition"
            >
              <header className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-cyan text-white font-heading font-bold grid place-items-center">
                  {t.initial ?? t.name[0]}
                </span>
                <div className="leading-tight">
                  <div className="font-heading font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.daysAgo}</div>
                </div>
              </header>
              <div className="mt-3 flex gap-0.5 text-star">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-navy/90 line-clamp-5">{t.text}</p>
              <p className="mt-3 text-xs text-navy/50">{t.project} — {t.location}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-navy hover:bg-navy-light text-white font-heading font-bold uppercase tracking-wide transition"
          >
            <PhoneIcon className="w-4 h-4" /> Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
