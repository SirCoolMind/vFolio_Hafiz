import React from "react";
import { HolographicShowroom } from "./skills/HolographicShowroom";

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      style={{ backgroundColor: "rgb(var(--skills-bg))" }}
      className="section-panel text-white px-6 md:px-12 py-10 md:py-14"
    >
      {/* Refined subtle dark background grid (no light leaking) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgb(var(--ink)/0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Applied Holographic Showroom, with the section header beside the moving tech ribbons */}
        <HolographicShowroom
          header={
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-3">
                <span className="text-xs font-mono font-bold tracking-widest text-white/65 whitespace-nowrap">
                  (01)
                </span>
                <span className="font-serif italic text-lg text-white/60 whitespace-nowrap">
                  architectural stack
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
                Software <span className="skills-accent font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Skills</span>
              </h2>
            </div>
          }
        />
      </div>
    </section>
  );
};
