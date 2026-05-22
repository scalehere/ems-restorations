import { ImageComparison } from "@/components/ui/image-comparison-slider";

const beforeAfterPairs = [
  {
    beforeSrc: "/images/before-after/before-mold-kitchen.png",
    afterSrc: "/images/before-after/after-mold-kitchen.png",
    altBefore: "Kitchen before remodel",
    altAfter: "Kitchen after remodel",
    label: "Kitchen Remodel — San Diego, CA",
  },
  {
    beforeSrc: "/images/before-after/before-bathroom-gutted.jpg",
    afterSrc: "/images/before-after/after-bathroom-remodel.jpg",
    altBefore: "Bathroom gutted to studs before remodel",
    altAfter: "Bathroom after remodel",
    label: "Bathroom Remodel — San Diego, CA",
  },
  {
    beforeSrc: "/images/before-after/before-fire-home.png",
    afterSrc: "/images/before-after/after-remodel-home.png",
    altBefore: "Room addition before",
    altAfter: "Room addition after",
    label: "Room Addition — San Diego, CA",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-muted py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="section-bubble">Gallery</span>
          <h2 className="mt-5 font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] max-w-3xl mx-auto">
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
