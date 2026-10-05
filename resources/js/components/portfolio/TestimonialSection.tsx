import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ZoomablePhoto } from "./Lightbox";

export const TestimonialSection: React.FC = () => {
  const t = PORTFOLIO_DATA.testimonials[0];
  if (!t) return null;

  return (
    <section id="words" className="section-panel text-white px-6 md:px-12 py-10 md:py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Endorsement */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <span className="text-xs uppercase font-mono tracking-widest text-white/60 block mb-6">
            Endorsement • {t.company}
          </span>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif italic leading-tight text-white/95 mb-8 text-balance">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="flex flex-col gap-1.5">
            <cite className="font-mono not-italic text-base font-bold text-white tracking-wide">
              {t.author}
            </cite>
            <span className="text-xs font-mono text-white/65">
              {t.role} • {t.company}
            </span>
            <a
              href={t.linkedInPostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 w-fit text-xs font-mono text-emerald-400 hover:text-emerald-300 underline decoration-emerald-500/40 underline-offset-4"
            >
              <span>Verified Recommendation on LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Team photo */}
        {t.image && (
          <div className="lg:col-span-5 order-1 lg:order-2">
            <ZoomablePhoto
              src={t.image}
              alt={`${t.company} team photo`}
              caption={`${t.imageCaption || t.company}`}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-xl group/img"
            >
              <img
                loading="lazy"
                src={t.image}
                alt={`${t.company} team photo`}
                decoding="async"
                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-snow/90 backdrop-blur-md bg-coal/60 px-3 py-1.5 rounded-lg border border-snow/15">
                <span>{t.imageCaption || t.company}</span>
              </div>
            </ZoomablePhoto>
          </div>
        )}
      </div>
    </section>
  );
};
