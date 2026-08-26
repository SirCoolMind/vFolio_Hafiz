"use client";

import React, { useState } from "react";
import { Sliders, Power, Download, ArrowRight, UserCheck } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design9_NeumorphicHardware: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [powerOn, setPowerOn] = useState(true);
  const [outputLevel, setOutputLevel] = useState(85);

  return (
    <div className="min-h-screen bg-[#13151b] text-slate-100 selection:bg-sky-500 selection:text-black font-sans relative overflow-x-hidden p-4 md:p-10">
      <CustomCursor variant="default" color="#38bdf8" />

      {/* Main Hardware Console Chassis */}
      <div className="max-w-7xl mx-auto rounded-3xl neu-flat border border-slate-700/50 p-6 md:p-12">
        {/* Hardware Control Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-700/60">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPowerOn(!powerOn)}
              data-cursor-text="POWER"
              className={`p-3 rounded-2xl transition-all ${
                powerOn ? "neu-pressed text-sky-400 shadow-lg" : "neu-flat text-slate-500"
              }`}
            >
              <Power size={20} />
            </button>
            <div>
              <h2 className="font-mono text-sm font-bold tracking-widest text-sky-400 uppercase">
                TACTILE HARDWARE // SYSTEM V2.4
              </h2>
              <span className="text-[11px] font-mono text-slate-400">
                TEENAGE ENGINEERING &bull; POWER: {powerOn ? "ACTIVE" : "STANDBY"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* LED VU Meter */}
            <div className="flex items-end gap-1 h-6 px-3 py-1 rounded-lg bg-black/60 border border-slate-700">
              {[40, 60, 80, 95, 70, 90, 100].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-sm transition-all duration-300 ${
                    i > 4 ? "bg-rose-500" : i > 2 ? "bg-amber-400" : "bg-emerald-400"
                  }`}
                  style={{ height: `${(h * outputLevel) / 100}%` }}
                />
              ))}
            </div>

            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl neu-convex text-xs font-mono font-bold text-sky-400 hover:text-white transition-all flex items-center gap-1.5"
            >
              <Download size={14} /> MANUAL.PDF
            </a>
          </div>
        </div>

        {/* Hero Tactile Spread with Operator Photo Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8 p-8 md:p-10 rounded-3xl neu-pressed border border-slate-800 flex flex-col md:flex-row gap-8 items-center">
            {/* Operator Photo Inset Bezel */}
            <div className="w-36 h-44 shrink-0 rounded-2xl neu-flat p-2 border border-slate-700/60 flex flex-col items-center">
              <div className="w-full h-32 rounded-xl overflow-hidden bg-black mb-1.5">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%]"
                />
              </div>
              <div className="text-[9px] font-mono text-sky-400 font-bold uppercase flex items-center gap-1">
                <UserCheck size={11} /> OP: HAFIZ
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-2">
                PRIMARY OPERATOR SPECIFICATION
              </span>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-3">
                Muhammad <br />
                <span className="text-sky-400">Hafiz Ruslan</span>
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                {PORTFOLIO_DATA.personal.tagline} High-performance document compilation, space allocation algorithms, and reactive cloud architectures.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
                <span>&bull; UiTM CS (1st Class 3.53)</span>
                <span>&bull; IMT Tech</span>
                <span>&bull; Unijaya</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-8 rounded-3xl neu-flat space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">THROUGHPUT DIAL</span>
              <span className="text-xs font-mono font-bold text-sky-400">{outputLevel}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={outputLevel}
              onChange={(e) => setOutputLevel(parseInt(e.target.value))}
              className="w-full accent-sky-400 cursor-pointer"
            />
            <div className="p-4 rounded-xl bg-black/40 border border-slate-800 text-xs font-mono space-y-1">
              <div>LATEX WORKER: 1,000+ PGS/S</div>
              <div>CAPACITY: 300+ ROOMS / 80+ LVLS</div>
              <div>ACADEMICS: UITM 1ST CLASS (3.53)</div>
            </div>
          </div>
        </div>

        {/* Modular Hardware Project Units */}
        <div id="projects" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-2">
              <Sliders size={20} className="text-sky-400" /> RACKMOUNT PROJECTS
            </h2>
            <span className="text-xs font-mono text-slate-400">[10 MODULES ONLINE]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                data-cursor-text="INSPECT"
                className="p-6 rounded-3xl neu-flat border border-slate-700/40 hover:border-sky-500/50 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span className="text-sky-400">{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">{project.highlight}</p>
                  <div className="p-3 rounded-xl neu-pressed text-xs font-mono text-slate-300 mb-4">
                    <span className="text-[10px] text-sky-400 uppercase block">Benchmark</span>
                    {project.metrics}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-700/60 text-xs font-mono text-sky-400">
                  <span>Open Schematics</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <ContactSection themeStyle="minimal" />
      </div>

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
