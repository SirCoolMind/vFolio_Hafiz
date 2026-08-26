"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-black text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-white/40 mb-3">
              <span className="text-xl md:text-2xl font-mono font-bold text-white">(02)</span>
              <span className="font-serif italic text-lg text-white/70">the journey</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
              Work <span className="font-bold">experience</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-white/60 font-sans max-w-md">
            Over 4+ years of professional fullstack engineering track record delivering scalable backends, high-throughput engines, and multi-tenant platforms.
          </p>
        </div>

        {/* Chronological Career Timeline List */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.workExperience.map((exp) => (
            <div
              key={exp.company}
              className="p-8 md:p-10 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300 group"
            >
              {/* Header row: Company, Role, Duration */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                      {exp.company}
                    </h3>
                    {exp.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white/10 text-white/90 border border-white/15">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-base sm:text-lg text-white/80 font-medium">
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-col lg:items-end gap-1">
                  <span className="text-sm sm:text-base font-mono font-semibold text-white bg-white/5 px-4 py-1.5 rounded-full border border-white/10 inline-block">
                    {exp.period}
                  </span>
                  <span className="text-xs font-mono text-white/40">
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements and Responsibilities */}
              <div className="mt-6 space-y-3">
                <span className="text-xs uppercase font-mono tracking-widest text-white/40 block mb-2">
                  Key Achievements &amp; Impact
                </span>
                <ul className="space-y-2.5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-white/70 leading-relaxed">
                      <span className="text-emerald-400 mt-1.5 text-xs">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-white/40 mr-2">
                  Stack:
                </span>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-white/80 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Distinct Section Separator */}
        <div className="mt-20 divider-line" />
      </div>
    </section>
  );
};
