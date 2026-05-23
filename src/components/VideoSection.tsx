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
            Real Client Story
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-[40px] leading-[1.15]">
            Her Home Was Devastated. We Coordinated With Her Insurance Company and Had It Fully Restored.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-gray-600">
            Watch Joseph walk through a real San Diego water damage claim — and exactly how we pushed back against a lowball insurance offer on behalf of our client.
          </p>
          <p className="mt-6">
            <a
              href="#hero-form"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-cyan hover:brightness-95 text-white font-heading font-bold uppercase tracking-wide transition"
            >
              See How We Can Help
            </a>
          </p>
        </div>

        {/* Portrait video */}
        <div className="w-full max-w-[360px] mx-auto lg:mx-0 lg:flex-shrink-0">
          <video
            ref={videoRef}
            src="/videos/ems-client-story.mp4"
            poster="/images/sections/ems-client-story-poster.jpg"
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-2xl shadow-2xl"
            aria-label="EMS Restoration client story — Daphne Higa water damage claim"
          />
        </div>

      </div>
    </section>
  );
}
