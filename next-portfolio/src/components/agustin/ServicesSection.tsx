"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const ServicesSection: React.FC = () => {
  const [activePack, setActivePack] = useState<number | null>(0);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-black text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-white/40 mb-3">
              <span className="text-xl md:text-2xl font-mono font-bold text-white">(05)</span>
              <span className="font-serif italic text-lg text-white/70">what I offer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
              Services <span className="font-bold">packs</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-white/60 font-sans max-w-md">
            Flexible collaboration structures for companies, startups, and engineering teams seeking high-velocity execution.
          </p>
        </div>

        {/* Numbered Service Packs Accordion / List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {PORTFOLIO_DATA.servicePacks.map((pack, idx) => (
            <div key={pack.number} className="py-6 md:py-8">
              <button
                onClick={() => setActivePack(activePack === idx ? null : idx)}
                className="w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                data-cursor-text={activePack === idx ? "Close" : "Open"}
              >
                <div className="flex items-start md:items-center gap-4 sm:gap-8">
                  <span className="text-sm font-mono text-white/40 group-hover:text-emerald-400 transition-colors">
                    ({pack.number})
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white group-hover:translate-x-1 transition-transform">
                      {pack.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/50 font-sans mt-0.5">
                      {pack.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                    {pack.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:border-white group-hover:text-white transition-colors">
                    <span className="text-sm font-mono">
                      {activePack === idx ? "−" : "+"}
                    </span>
                  </div>
                </div>
              </button>

              {/* Expandable Deliverables */}
              <AnimatePresence>
                {activePack === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pb-2 pl-0 sm:pl-16 max-w-3xl">
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                        {pack.description}
                      </p>
                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-white/40 block">
                          Included Deliverables:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {pack.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                              <span className="text-emerald-400">✓</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Distinct Section Separator */}
        <div className="mt-20 divider-line" />
      </div>
    </section>
  );
};
