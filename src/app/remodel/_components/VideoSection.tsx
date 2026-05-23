"use client";

import { useEffect, useRef } from "react";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F5F1EB] py-14 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">

        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-[var(--orange-accent)] text-white text-xs font-heading font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            3D Design Preview
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-[40px] leading-[1.15] text-balance">
            See Exactly What Your Remodel Will Look Like — Before Demo Starts.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-gray-600">
            Most homeowners don&apos;t see their finished remodel until the contract is already signed. At EMS Restoration, we build a full 3D model of your space first — so you know exactly what you&apos;re getting, with zero surprises and no costly do-overs.
          </p>
          <p className="mt-6">
            <a
              href="#hero-form"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-white font-heading font-bold uppercase tracking-wide transition"
            >
              Get My Free Estimate
            </a>
          </p>
        </div>

        {/* Portrait video */}
        <div className="w-full max-w-[360px] mx-auto lg:mx-0 lg:flex-shrink-0">
          <video
            ref={videoRef}
            src="/videos/ems-remodel-promo.mp4"
            poster="/images/sections/ems-remodel-promo-poster.jpg"
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-2xl shadow-2xl"
            aria-label="EMS Restoration — see your remodel in 3D before demo starts"
          />
        </div>

      </div>
    </section>
  );
}
