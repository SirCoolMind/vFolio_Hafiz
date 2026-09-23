import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-24 md:py-32 bg-black text-white px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Agustin-style Numbered Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-xs font-mono font-bold tracking-widest text-white/50">
                (03)
              </span>
              <span className="font-serif italic text-lg text-white/60">
                the foundation
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
              Education <span className="font-bold">&amp; leadership</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-white/60 font-sans max-w-md leading-relaxed">
            Formal computer science degrees, first-class academic honors, and proven university community leadership initiatives.
          </p>
        </div>

        {/* Academic Timeline Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.education.map((edu) => (
            <div
              key={edu.degree}
              className="p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Year & Grade Badge */}
                <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                    {edu.period}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-400">
                    {edu.grade}
                  </span>
                </div>

                {/* Degree and Institution */}
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {edu.degree}
                </h3>
                <p className="text-sm font-mono text-white/60 mb-6">
                  {edu.institution}
                </p>

                {/* Highlights & Leadership Roles */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  <span className="text-[11px] uppercase font-mono tracking-widest text-white/40 block mb-2">
                    Honors &amp; Leadership
                  </span>
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 leading-relaxed">
                      <span className="text-white/40 mt-1">↳</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom verification badge */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                <span>Verified Academic Record</span>
                <span className="text-emerald-400">✓ Accredited</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
