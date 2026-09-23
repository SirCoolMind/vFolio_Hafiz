import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const TestimonialSection: React.FC = () => {
  const t = PORTFOLIO_DATA.testimonials[0];
  if (!t) return null;

  return (
    <section className="py-20 md:py-28 bg-black text-white px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="text-xs uppercase font-mono tracking-widest text-white/40 block mb-6">
          Client Endorsement • Executive Board
        </span>

        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic leading-tight text-white/95 mb-8">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <div className="flex flex-col items-center justify-center gap-2">
          <cite className="font-mono not-italic text-base font-bold text-white tracking-wide">
            {t.author}
          </cite>
          <span className="text-xs font-mono text-white/50">
            {t.role} • {t.company}
          </span>
          <a
            href={t.linkedInPostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 underline decoration-emerald-500/40"
          >
            <span>Verified Recommendation on LinkedIn</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
