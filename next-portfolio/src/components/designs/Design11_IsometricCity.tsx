"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Layers, Compass, ArrowRight, Download, UserCheck, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design11_IsometricCity: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<number>(42);

  return (
    <div className="min-h-screen bg-[#060b13] text-slate-100 font-sans selection:bg-sky-500 selection:text-black relative overflow-x-hidden">
      <CustomCursor variant="reticle" color="#38bdf8" />

      {/* Isometric 2.5D Grid Lines */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)_rotateZ(-45deg)_scale(2)]" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent" />

      {/* Blueprint Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#060b13]/85 border-b border-sky-500/20 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-8 h-8 rounded-lg object-cover object-top border border-sky-400"
            />
            <span className="text-sky-400 font-bold tracking-widest uppercase">
              ISOMETRIC ARCHITECTURE // DESIGN 11
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300">ELEVATION: 320M</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#schematics" className="text-slate-400 hover:text-sky-400 transition-colors uppercase">01 // TOWER</a>
            <a href="#projects" className="text-slate-400 hover:text-sky-400 transition-colors uppercase">02 // BLUEPRINTS</a>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/40 text-sky-300 hover:bg-sky-500 hover:text-black transition-all flex items-center gap-1.5 font-bold"
            >
              <Download size={12} />
              <span>SPECIFICATION.PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero: Isometric Skyline & System Architecture with Chief Architect ID */}
      <section className="relative pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950/80 border border-sky-500/40 text-sky-400 font-mono text-xs mb-6">
              <Building2 size={13} />
              <span>SCALE: 1:1 ENTERPRISE ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none text-white mb-6">
              Structural <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">
                Software Blueprint
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-8">
              Constructing fault-tolerant backend infrastructure, asynchronous LaTeX PDF compilation engines (1,000+ pgs/sec), and 300+ room distributed booking matrices across 80+ levels.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-500/25 flex items-center gap-2"
              >
                <span>Inspect Blueprints</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Chief Architect Blueprint Photo Elevation Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-sky-500/40 shadow-[0_0_25px_rgba(56,189,248,0.2)] relative max-w-[240px] w-full">
              <div className="flex justify-between items-center text-[9px] font-mono text-sky-400 pb-1.5 mb-1.5 border-b border-sky-500/20">
                <span>ELEVATION #01</span>
                <span>LVL 80</span>
              </div>

              <div className="w-full h-52 sm:h-56 rounded-xl overflow-hidden bg-slate-950 border border-sky-500/30 relative">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%] filter brightness-105 contrast-110 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 pointer-events-none" />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 p-1.5 rounded-lg bg-black/85 border border-sky-500/40 text-[10px] font-mono">
                  <div className="text-white font-bold truncate">{PORTFOLIO_DATA.personal.name}</div>
                  <div className="text-sky-400 text-[9px]">UiTM CS (3.53 GPA)</div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-1.5 text-[9px] font-mono text-slate-300">
                <div className="p-1.5 rounded bg-black/60 border border-sky-500/20">
                  <span className="text-slate-500 block">BASE:</span>
                  <span className="text-sky-300 font-bold">BANTING</span>
                </div>
                <div className="p-1.5 rounded bg-black/60 border border-sky-500/20">
                  <span className="text-slate-500 block">SPEED:</span>
                  <span className="text-emerald-400 font-bold">1000+ P/S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Blueprints Grid (Projects) */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-sky-500/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2 block">
              SECTION 02 // SCHEMATICS CATALOGUE
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Architectural Blueprints
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 mt-2 md:mt-0">
            [ 10 PRODUCTION SYSTEMS DOCUMENTED ]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
              className="p-7 rounded-3xl bg-slate-900/40 border border-sky-500/20 hover:border-sky-400 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-4">
                  <span className="px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    BLPRNT-0{idx + 1}
                  </span>
                  <span className="text-slate-500">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {project.highlight}
                </p>

                <div className="p-3.5 rounded-xl bg-black/60 border border-slate-800 text-xs font-mono mb-4">
                  <span className="text-[10px] uppercase text-sky-400 block mb-0.5">Scale Telemetry</span>
                  <span className="font-semibold text-slate-200">{project.metrics}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono text-sky-400">
                <span>View Full Schematics</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection themeStyle="cyber" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
