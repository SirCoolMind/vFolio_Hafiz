"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Move, ZoomIn, ZoomOut, Download, ArrowRight, Sparkles, MapPin, Award } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design15_InfiniteCanvas: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [zoom, setZoom] = useState<number>(1);

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black relative overflow-x-hidden">
      <CustomCursor variant="default" color="#10b981" />

      {/* Infinite Canvas Dot Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Canvas Tool Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-[#090b10]/80 border-b border-white/10 px-6 md:px-12 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={PORTFOLIO_DATA.personal.avatar}
            alt={PORTFOLIO_DATA.personal.name}
            className="w-7 h-7 rounded-full object-cover object-top border border-emerald-400"
          />
          <span className="font-bold text-sm text-white uppercase tracking-wider">
            INFINITE CANVAS // FIGMA NODE GRAPH [DESIGN 15]
          </span>
        </div>

        {/* Zoom & Pan Widget */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
            <button onClick={() => setZoom(Math.max(0.7, zoom - 0.1))} className="p-1 hover:text-emerald-400"><ZoomOut size={14} /></button>
            <span className="px-2">{Math.round(zoom * 100)}%</span>
            <button onClick={() => setZoom(Math.min(1.3, zoom + 0.1))} className="p-1 hover:text-emerald-400"><ZoomIn size={14} /></button>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
          >
            <Download size={13} /> Export PDF
          </a>
        </div>
      </header>

      {/* Draggable Node Canvas Workspace */}
      <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center">
        {/* Central Master Node with Hafiz's Portrait */}
        <div className="flex justify-center mb-16">
          <div className="p-8 md:p-10 rounded-3xl bg-slate-900/90 border-2 border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.25)] backdrop-blur-2xl max-w-2xl text-center relative group">
            {/* Center Avatar */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 group">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-emerald-400 shadow-lg bg-black">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%] filter brightness-105"
                />
              </div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-400 text-[8px] font-mono text-emerald-300 whitespace-nowrap">
                ROOT NODE
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
              <Sparkles size={13} /> <span>CENTRAL GRAPH ROOT // ARCHITECT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mb-3">
              {PORTFOLIO_DATA.personal.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
              UiTM CS 1st Class Honours (CGPA: 3.53). High-throughput backend systems (1,000+ pgs/sec LaTeX engine) and 300+ room distributed booking networks.
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-lg bg-black/60 border border-slate-800 text-slate-300">
                &bull; Banting, MY
              </span>
              <span className="px-3 py-1 rounded-lg bg-black/60 border border-slate-800 text-emerald-400 font-bold">
                &bull; 1,000+ pgs/s
              </span>
              <span className="px-3 py-1 rounded-lg bg-black/60 border border-slate-800 text-slate-300">
                &bull; 300+ Rooms
              </span>
            </div>
          </div>
        </div>

        {/* Child Case Study Node Clusters */}
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedProject(project)}
              className="p-6 rounded-3xl bg-slate-900/60 border border-emerald-500/30 hover:border-emerald-400 transition-all cursor-pointer backdrop-blur-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-emerald-400 mb-3">
                  <span>NODE_0{idx + 1} &bull; {project.category}</span>
                  <span className="text-slate-500">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">{project.highlight}</p>
                <div className="p-3 rounded-xl bg-black/60 border border-slate-800 text-xs font-mono text-slate-200 mb-4">
                  <span className="text-[10px] text-emerald-400 uppercase block">Scale Throughput</span>
                  {project.metrics}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono text-emerald-400 font-bold">
                <span>EXPAND NODE</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ContactSection themeStyle="cyber" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
