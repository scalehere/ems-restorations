import { PhoneIcon, StarIcon } from "@/components/icons";
import { PHONE, PHONE_HREF, testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="section-bubble">Testimonials</span>
          <h2 className="mt-5 font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] max-w-3xl mx-auto text-balance">
            Hear What San Diego Homeowners Say About EMS Restoration
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
              {t.project && t.location && (
                <p className="mt-3 text-xs text-navy/50">{t.project} — {t.location}</p>
              )}
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
