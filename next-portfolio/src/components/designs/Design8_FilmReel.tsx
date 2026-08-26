"use client";

import React, { useState, useRef } from "react";
import { Film, ChevronRight, ChevronLeft, ArrowUpRight, Download, Play, Clapperboard } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design8_FilmReel: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollHorizontal = (dir: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = dir === "left" ? -600 : 600;
    scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-slate-100 selection:bg-amber-500 selection:text-black font-sans relative overflow-x-hidden">
      <CustomCursor variant="viewfinder" color="#f59e0b" />

      {/* Cinematic Letterbox Bars */}
      <div className="fixed top-0 left-0 right-0 h-4 bg-black z-50 pointer-events-none" />
      <div className="fixed bottom-0 left-0 right-0 h-4 bg-black z-50 pointer-events-none" />

      {/* Cinematic Header Bar */}
      <header className="sticky top-4 z-40 backdrop-blur-xl bg-black/70 border-b border-white/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="text-amber-400 font-bold uppercase tracking-widest">[REC] 2.39:1 CINEMATIC REEL // DESIGN 08</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-slate-400">DIRECTOR&apos;S CUT</span>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase transition-colors flex items-center gap-1"
            >
              <Download size={12} /> SCRIPT / RESUME
            </a>
          </div>
        </div>
      </header>

      {/* Horizontal Storytelling Strip with Protagonist Film Slate */}
      <div className="py-12 px-6 md:px-12">
        <div className="flex items-center justify-between mb-6 max-w-7xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
            <Film size={16} /> CINEMATIC ROLL &bull; 35MM HORIZONTAL TIMELINE
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollHorizontal("left")}
              className="p-2 rounded-full bg-slate-900 border border-slate-700 text-white hover:bg-white hover:text-black transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollHorizontal("right")}
              className="p-2 rounded-full bg-slate-900 border border-slate-700 text-white hover:bg-white hover:text-black transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Reel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none no-scrollbar"
        >
          {/* Card 01: Protagonist Movie Slate Card with Hafiz's Photo */}
          <div className="snap-center shrink-0 w-[90vw] md:w-[700px] p-8 md:p-12 rounded-3xl bg-slate-900/70 border border-amber-500/30 backdrop-blur-xl flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-3">
                  SCENE 01 // THE PROTAGONIST
                </span>
                <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-4">
                  HAFIZ <br />
                  <span className="text-amber-400">RUSLAN</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-light">
                  {PORTFOLIO_DATA.personal.tagline} Fullstack Software Engineer from Banting, Malaysia.
                </p>
              </div>
              <div className="p-3.5 bg-black/80 border border-slate-800 rounded-2xl text-[11px] font-mono text-slate-300">
                DIRECTOR NOTE: UiTM Computer Science 1st Class Honours (CGPA: 3.53). LaTeX PDF engine generating 1000+ pages/sec.
              </div>
            </div>

            {/* Movie Poster Frame */}
            <div className="w-40 h-52 sm:w-44 sm:h-56 shrink-0 rounded-xl overflow-hidden border border-amber-400/50 shadow-xl relative bg-black">
              <img
                src={PORTFOLIO_DATA.personal.avatar}
                alt={PORTFOLIO_DATA.personal.name}
                className="w-full h-full object-cover object-[center_60%] filter contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono text-amber-300">
                <span>TAKE 01</span>
                <span>ROLL A</span>
              </div>
            </div>
          </div>

          {/* Project Poster Cards */}
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor-text="PLAY"
              className="snap-center shrink-0 w-[85vw] md:w-[480px] p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-amber-400/60 backdrop-blur-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-amber-400 mb-3">
                  <span>ACT {idx + 2} // {project.category.toUpperCase()}</span>
                  <span className="text-slate-400">{project.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">{project.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6">{project.highlight}</p>
                <div className="p-3.5 rounded-xl bg-black/60 border border-slate-800 text-xs font-mono mb-4">
                  <span className="text-[10px] text-amber-400 uppercase block">Scale Benchmark</span>
                  <span className="font-semibold text-slate-200">{project.metrics}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-amber-400">
                <span className="flex items-center gap-1.5"><Play size={12} fill="currentColor" /> Watch Case Study</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Reel */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-800">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
          CHRONOLOGICAL CUTS
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-12">
          Production Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.workExperience.map((exp, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800">
              <span className="text-xs font-mono text-amber-400 block mb-2">{exp.period}</span>
              <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
              <div className="text-xs text-slate-400 mb-4">{exp.company}</div>
              <ul className="space-y-2 text-xs text-slate-300">
                {exp.description.map((d, dIdx) => (
                  <li key={dIdx}>&bull; {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ContactSection themeStyle="minimal" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
