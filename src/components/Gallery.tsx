import Image from "next/image";
import { galleryItems } from "@/lib/content";

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
            Real restoration projects from real San Diego homes. Water damage, mold remediation, fire restoration, and full remodels — all handled by our team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((g) => (
            <a
              key={g.src}
              href={g.href}
              className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <Image
                src={g.src}
                alt={g.alt}
                width={800}
                height={800}
                className="w-full aspect-square object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent text-white text-center py-4 font-heading font-semibold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition">
                {g.caption}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block px-7 py-3 rounded-md bg-navy text-white font-heading font-bold uppercase tracking-wide hover:bg-navy-light transition"
          >
            View Our Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
