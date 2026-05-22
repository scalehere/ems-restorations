import { ImageComparison } from "@/components/ui/image-comparison-slider";

const beforeAfterPairs = [
  {
    beforeSrc: "/images/before-after/before-water.jpg",
    afterSrc: "/images/process/process-main.jpg",
    altBefore: "Water-damaged room — gutted walls, exposed studs, vapor barrier",
    altAfter: "Completed kitchen remodel — warm wood island, recessed lighting",
    label: "Water Damage → Full Kitchen Rebuild",
  },
  {
    beforeSrc: "/images/gallery/gallery-2.jpg",
    afterSrc: "/images/gallery/gallery-3.jpg",
    altBefore: "Active water dryout — dehumidifiers and air movers deployed",
    altAfter: "Completed bathroom remodel — custom tile shower, soaking tub",
    label: "Active Dryout → Bathroom Remodel",
  },
  {
    beforeSrc: "/images/sections/mold-remediation.jpg",
    afterSrc: "/images/gallery/gallery-1.jpg",
    altBefore: "Black mold inside opened wall cavity",
    altAfter: "Completed kitchen remodel — white cabinets, navy island",
    label: "Mold Remediation → Kitchen Remodel",
  },
];

export function Gallery() {
  return (
    <section className="bg-muted py-16 lg:py-20">
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
      </div>
    </section>
  );
}
