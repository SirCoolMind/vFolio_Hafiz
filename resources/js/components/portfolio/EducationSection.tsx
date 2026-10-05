import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="section-panel text-white px-5 md:px-12 py-8 md:py-14"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial-style Numbered Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 lg:gap-6 mb-6 md:mb-10">
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-xs font-mono font-bold tracking-widest text-white/65">
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
            A First Class Computer Science degree, plus leadership roles from school prefect to university project leader.
          </p>
        </div>

        {/* Cards share row tracks (subgrid) so dates, titles, schools and lists line up across columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-4 md:gap-y-6">
          {PORTFOLIO_DATA.education.map((edu) => (
            <div
              key={edu.degree}
              className="grid grid-rows-[auto_auto_auto_1fr] lg:row-span-4 lg:grid-rows-subgrid gap-y-0 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-colors duration-300 group"
            >
              {/* Period & Grade */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 md:pb-4 md:mb-5 border-b border-white/10">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-white border border-white/15 whitespace-nowrap">
                  {edu.period}
                </span>
                <span className="text-xs font-mono font-semibold text-emerald-400 whitespace-nowrap">
                  {edu.grade}
                </span>
              </div>

              {/* Degree */}
              <h3 className="text-lg sm:text-2xl font-semibold tracking-tight leading-snug text-white group-hover:text-emerald-400 transition-colors">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-sm font-mono text-white/60 mt-1.5 mb-4 md:mt-2 md:mb-6">
                {edu.institution}
              </p>

              {/* Highlights */}
              <div className="pt-3 md:pt-4 border-t border-white/10">
                <span className="text-[11px] uppercase font-mono tracking-widest text-white/60 block mb-2 md:mb-3">
                  Honors &amp; Leadership
                </span>
                <ul className="space-y-1.5 md:space-y-2.5">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed">
                      <span className="text-white/60 mt-px">↳</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
