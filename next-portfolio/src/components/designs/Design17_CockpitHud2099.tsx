"use client";

import React, { useState } from "react";
import { Crosshair, Shield, Zap, Target, Download, ArrowRight, Radio, Scan } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design17_CockpitHud2099: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [shieldPower, setShieldPower] = useState(99);
  const [targetLock, setTargetLock] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#02070d] text-[#00f0ff] font-mono selection:bg-[#00f0ff] selection:text-black relative overflow-x-hidden">
      <CustomCursor variant="reticle" color="#00f0ff" />

      {/* Cockpit Canopy Hexagonal Shield Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-15 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,10,20,0.85)_95%)]" />

      {/* Top Avionics Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#02070d]/85 border-b border-[#00f0ff]/30 px-6 md:px-12 py-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-7 h-7 rounded object-cover object-top border border-[#00f0ff]"
            />
            <Radio size={16} className="text-[#00f0ff] animate-pulse" />
            <span className="font-bold tracking-widest uppercase">COCKPIT_HUD // VF-2099</span>
          </div>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-emerald-400">SHIELD: {shieldPower}%</span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">LATENCY: 8MS</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#targets" className="hover:underline uppercase">01 // TARGETS</a>
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black transition-all font-bold flex items-center gap-1"
          >
            <Download size={12} /> TELEMETRY.PDF
          </a>
        </div>
      </header>

      {/* Cockpit Horizon Hero with Pilot Biometric Frame */}
      <section className="pt-20 pb-28 px-6 md:px-12 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs mb-6 font-bold">
              <Target size={14} />
              <span>PRIMARY FLIGHT COMMANDER: MUHAMMAD HAFIZ RUSLAN</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
              High Velocity <br />
              <span className="text-[#00f0ff] text-shadow-[0_0_20px_rgba(0,240,255,0.6)]">
                Architecture
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-8">
              Tactical software development: Asynchronous LaTeX document generator (1,000+ pgs/sec), 300+ room space allocation system across 80+ levels, and high-frequency cloud pipelines.
            </p>

            {/* Cockpit Systems Status Blocks */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-3.5 rounded-lg bg-black/60 border border-[#00f0ff]/30">
                <span className="text-[10px] text-slate-400 block">THROUGHPUT</span>
                <span className="text-xl font-bold text-white">1,000+ pgs/s</span>
              </div>
              <div className="p-3.5 rounded-lg bg-black/60 border border-[#00f0ff]/30">
                <span className="text-[10px] text-slate-400 block">LEVELS</span>
                <span className="text-xl font-bold text-white">80+ Floors</span>
              </div>
              <div className="p-3.5 rounded-lg bg-black/60 border border-[#00f0ff]/30">
                <span className="text-[10px] text-slate-400 block">ACADEMICS</span>
                <span className="text-xl font-bold text-emerald-400">UiTM 3.53</span>
              </div>
              <div className="p-3.5 rounded-lg bg-black/60 border border-[#00f0ff]/30">
                <span className="text-[10px] text-slate-400 block">SYSTEMS</span>
                <span className="text-xl font-bold text-white">7 Platforms</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#targets"
                className="px-6 py-3 rounded-lg bg-[#00f0ff] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#38bdf8] transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center gap-2"
              >
                <span>Engage Targets</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Commander Biometric Telemetry Photo Frame */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="p-3 rounded-2xl bg-black/80 border border-[#00f0ff]/50 shadow-[0_0_25px_rgba(0,240,255,0.25)] relative max-w-[220px] w-full">
              <div className="flex justify-between items-center text-[9px] text-[#00f0ff] pb-1.5 mb-1.5 border-b border-[#00f0ff]/30">
                <span className="flex items-center gap-1"><Scan size={10} /> PILOT_ID</span>
                <span className="text-emerald-400">READY</span>
              </div>

              <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-slate-950 border border-[#00f0ff]/40 relative">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%] filter contrast-125"
                />
                <div className="absolute inset-0 border border-[#00f0ff]/30 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                  <Crosshair size={32} className="text-[#00f0ff]" />
                </div>
              </div>

              <div className="mt-2 text-[9px] space-y-0.5 text-slate-300">
                <div className="flex justify-between"><span>PILOT:</span><span className="text-[#00f0ff] font-bold">HAFIZ</span></div>
                <div className="flex justify-between"><span>BASE:</span><span>BANTING</span></div>
                <div className="flex justify-between"><span>CGPA:</span><span className="text-emerald-400 font-bold">3.53</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Target Grid */}
      <section id="targets" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#00f0ff]/30">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#00f0ff] mb-1 block">
              TACTICAL TARGET LOCK-ON
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
              Targeted Case Studies
            </h2>
          </div>
          <span className="text-xs text-slate-400">[ 10 TARGETS LOCKED ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => setTargetLock(project.id)}
              onMouseLeave={() => setTargetLock(null)}
              onClick={() => setSelectedProject(project)}
              className="p-6 rounded-2xl bg-black/60 border border-[#00f0ff]/30 hover:border-[#00f0ff] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center text-xs mb-3">
                  <span className="text-[#00f0ff] font-bold">TARGET_0{idx + 1}</span>
                  <span className="text-slate-400">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">{project.highlight}</p>
                <div className="p-3 rounded-lg bg-slate-950 border border-[#00f0ff]/20 text-xs mb-4">
                  <span className="text-[10px] text-[#00f0ff] uppercase block">Benchmark</span>
                  <span className="text-white font-bold">{project.metrics}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#00f0ff]/20 text-xs font-bold text-[#00f0ff]">
                <span>LOCK & INSPECT</span>
                <Crosshair size={14} className="group-hover:rotate-90 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection themeStyle="cyber" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
