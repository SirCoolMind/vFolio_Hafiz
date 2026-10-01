"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative pt-6 pb-12 md:pt-8 md:pb-16 bg-black text-white px-6 md:px-12">
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

        {/* Chronological Career Timeline List with Alternating Images */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.workExperience.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.company}
                className="p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Text Details Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${!isEven && exp.image ? "lg:order-2" : "lg:order-1"}`}>
                    <div>
                      {/* Header row: Company, Role, Duration */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10 mb-5">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                              {exp.company}
                            </h3>
                            {exp.badge && (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/10 text-white/90 border border-white/15">
                                {exp.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-medium text-white/80">
                            {exp.role}
                          </p>
                        </div>

                        <div className="flex flex-col sm:items-end gap-1">
                          <span className="text-xs font-mono font-semibold text-white bg-white/5 px-3 py-1 rounded-full border border-white/10 inline-block">
                            {exp.period}
                          </span>
                          <span className="text-[11px] font-mono text-white/40">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Achievements and Responsibilities */}
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 block mb-2">
                          Key Achievements &amp; Impact
                        </span>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 leading-relaxed">
                              <span className="text-emerald-400 mt-1 text-[10px]">◆</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies Applied */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-white/40 mr-1.5">
                        Stack:
                      </span>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-white/80 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Photo Column */}
                  {exp.image && (
                    <div className={`lg:col-span-5 ${!isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-xl group/img">
                        <img
                          src={exp.image}
                          alt={`${exp.company} Team Photo`}
                          className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90 backdrop-blur-md bg-black/60 px-3 py-1.5 rounded-lg border border-white/10">
                          <span>{exp.imageCaption || `${exp.company} Team`}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Distinct Section Separator */}
        <div className="mt-20 divider-line" />
      </div>
    </section>
  );
};
