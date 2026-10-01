import React from "react";
import { HolographicShowroom } from "./skills/HolographicShowroom";

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-[#070913] text-white px-6 md:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Refined subtle dark background grid (no light leaking) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              (01) // THE TOOLKIT
            </span>
            <span className="font-serif italic text-lg text-white/60">
              architectural stack
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
            Software <span className="font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>

        {/* Applied Holographic Showroom */}
        <HolographicShowroom />
      </div>
    </section>
  );
};
