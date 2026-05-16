import { ArrowRightIcon } from "@/components/icons";

export function FinalCta() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading font-bold text-2xl lg:text-3xl leading-[1.25]">
          Don&rsquo;t Wait —{" "}
          <span className="text-cyan">Damage Gets Worse Every Hour</span>
        </h2>
        <p className="mt-5 text-[18px] leading-[1.6]">
          Call EMS Restoration now for a free estimate and find out what your insurance covers. If it&rsquo;s an emergency, we&rsquo;ll be there today.
        </p>
        <p className="mt-3 text-sm text-navy/70">
          Licensed CA #1081134 &nbsp;|&nbsp; Veteran-Owned &nbsp;|&nbsp; Serving All of San Diego County &nbsp;|&nbsp; 24/7 Emergency Response
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#hero-form"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-white font-heading font-bold uppercase tracking-wide transition"
          >
            Get My Free Estimate + $250 Gift Card
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-navy hover:bg-navy-light text-white font-heading font-bold uppercase tracking-wide transition"
          >
            Our Service Areas <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
