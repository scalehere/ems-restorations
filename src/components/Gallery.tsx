import { ImageComparison } from "@/components/ui/image-comparison-slider";

const beforeAfterPairs = [
  {
    beforeSrc: "/images/before-after/before-mold-kitchen.png",
    afterSrc: "/images/before-after/after-mold-kitchen.png",
    altBefore: "Mold damage — heavily affected kitchen walls and ceiling",
    altAfter: "Restored kitchen — clean, remediated, move-in ready",
    label: "Mold Damage → Kitchen Restored",
  },
  {
    beforeSrc: "/images/before-after/before-water-damage.png",
    afterSrc: "/images/before-after/after-kitchen-rebuild.png",
    altBefore: "Water damage — flooded open room with standing water",
    altAfter: "Completed kitchen rebuild — white cabinets, large island, hardwood floors",
    label: "Water Damage → Full Rebuild",
  },
  {
    beforeSrc: "/images/before-after/before-fire-home.png",
    afterSrc: "/images/before-after/after-remodel-home.png",
    altBefore: "Fire-damaged home — destroyed exterior and interior",
    altAfter: "Fully restored home — new exterior and remodeled kitchen",
    label: "Fire Damage → Complete Restoration",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-muted py-16 lg:py-20 scroll-mt-[var(--nav-offset)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="section-bubble">Gallery</span>
          <h2 className="mt-5 font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] max-w-3xl mx-auto">
            Before &amp; After — See the EMS Difference
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-navy/80">
            Real restoration projects from real San Diego homes. Drag the slider to see the transformation.
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
            Get a Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
