import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const ServicesSection: React.FC = () => {
  const [openService, setOpenService] = useState<string | null>("01");

  return (
    <section
      id="services"
      className="relative py-12 md:py-16 bg-black text-white px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Agustin-style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-xs font-mono font-bold tracking-widest text-white/50">
                (05)
              </span>
              <span className="font-serif italic text-lg text-white/60">
                what I offer
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
              Services <span className="font-bold">packs</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-white/60 font-sans max-w-md leading-relaxed">
            Flexible collaboration structures for companies, startups, and engineering teams seeking high-velocity execution.
          </p>
        </div>

        {/* Accordion / Expandable Row List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {PORTFOLIO_DATA.servicePacks.map((service) => {
            const isOpen = openService === service.number;

            return (
              <div key={service.number} className="py-8 transition-colors">
                <button
                  onClick={() => setOpenService(isOpen ? null : service.number)}
                  className="w-full flex items-center justify-between text-left group"
                  data-cursor-text={isOpen ? "Close" : "Expand"}
                >
                  <div className="flex items-start md:items-center gap-4 md:gap-8">
                    <span className="text-xs font-mono text-white/40 group-hover:text-emerald-400 transition-colors mt-1 md:mt-0">
                      ({service.number})
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-white/50 mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white/5 text-white/70 border border-white/10">
                      {service.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm font-mono text-white/60 group-hover:border-white group-hover:text-white transition-all">
                      {isOpen ? "−" : "+"}
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in pl-8 md:pl-16">
                    <div className="lg:col-span-6">
                      <p className="text-base sm:text-lg text-white/80 font-sans leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="lg:col-span-6">
                      <span className="text-xs uppercase font-mono tracking-widest text-white/40 block mb-3">
                        Key Deliverables &amp; Artifacts
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs sm:text-sm font-mono text-white/70"
                          >
                            <span className="text-emerald-400">↳</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
