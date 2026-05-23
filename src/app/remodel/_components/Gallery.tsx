import { ImageComparison } from "@/components/ui/image-comparison-slider";

const beforeAfterPairs = [
  {
    beforeSrc: "/images/before-after/before-kitchen-oak-cabinets.png",
    afterSrc: "/images/before-after/after-kitchen-navy-island.png",
    altBefore: "Kitchen before remodel — dated oak cabinets",
    altAfter: "Kitchen after remodel — white shaker cabinets and navy island",
    label: "Kitchen Remodel — San Diego, CA",
  },
  {
    beforeSrc: "/images/before-after/before-bathroom-dated-vanity.png",
    afterSrc: "/images/before-after/after-bathroom-navy-vanity.png",
    altBefore: "Bathroom before remodel — dated vanity and stripped walls",
    altAfter: "Bathroom after remodel — navy vanity with marble countertop",
    label: "Bathroom Remodel — San Diego, CA",
  },
  {
    beforeSrc: "/images/before-after/before-adu-stucco-exterior.png",
    afterSrc: "/images/before-after/after-adu-landscaped-exterior.png",
    altBefore: "Property before ADU addition — plain stucco exterior",
    altAfter: "Property after ADU addition — landscaped exterior with new structure",
    label: "Room Addition & ADU — San Diego, CA",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-muted py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="section-bubble">Gallery</span>
          <h2 className="mt-5 font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] max-w-3xl mx-auto text-balance">
            Before &amp; After — Our Work Speaks for Itself.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-navy/80">
            Real remodel projects from real San Diego homes. Drag the slider to see the transformation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfterPairs.map((pair) => (
            <ImageComparison key={pair.label} {...pair} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#hero-form"
            className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-white font-heading font-bold uppercase tracking-wide transition"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
