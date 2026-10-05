"use client";

import React, { useState } from "react";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design16_KineticRunway: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black font-sans relative overflow-x-hidden">
      <CustomCursor variant="difference" color="#ffffff" />

      {/* Top Editorial Header */}
      <header className="border-b border-white/20 px-6 md:px-16 py-6 flex items-center justify-between uppercase text-xs tracking-widest">
        <div className="flex items-center gap-4">
          <span className="font-serif font-black text-xl">H.R.</span>
          <span className="opacity-40 hidden sm:inline">&bull;</span>
          <span className="opacity-60 hidden sm:inline">AUTUMN/WINTER 2026 RUNWAY</span>
        </div>

        <div className="flex items-center gap-8 font-bold">
          <a href="#runway" className="hover:opacity-70 transition-opacity">Runway</a>
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all text-xs"
          >
            Lookbook PDF
          </a>
        </div>
      </header>

      {/* Kinetic Typography Runway Hero with Editorial Photo Cover */}
      <section className="px-6 md:px-16 pt-16 pb-28 max-w-7xl mx-auto border-b border-white/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] opacity-60 block mb-6">
              ISSUE NO. 16 &bull; HIGH VELOCITY ARCHITECTURE
            </span>

            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter leading-[0.82] mb-8">
              HAFIZ <br />
              <span className="font-serif italic font-normal text-slate-400">RUSLAN</span>
            </h1>

            <p className="text-sm sm:text-base opacity-80 uppercase tracking-widest leading-relaxed max-w-xl mb-8">
              UiTM First-Class Honors in Computer Science (CGPA: 3.53). High-throughput compiled LaTeX document engines (1,000+ pgs/sec) and multi-level facility booking matrices.
            </p>

            <a
              href="#runway"
              className="inline-block px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all"
            >
              Enter The Runway ({PORTFOLIO_DATA.projects.length} Looks)
            </a>
          </div>

          {/* High-Fashion Editorial Model Cover Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[240px] w-full">
              <div className="w-full h-64 sm:h-72 border-2 border-white overflow-hidden bg-black relative shadow-2xl">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%] filter grayscale contrast-150 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end text-[10px] uppercase">
                  <div>
                    <div className="font-black text-xs tracking-wider">COVER // ARCHITECT</div>
                    <div className="text-[9px] opacity-75">BANTING, MY</div>
                  </div>
                  <span className="font-mono font-bold text-xs">3.53 GPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Marquee */}
        <div className="overflow-hidden py-4 border-t border-white/20 text-xs uppercase tracking-[0.25em] opacity-60 flex whitespace-nowrap">
          <div className="animate-marquee flex gap-12 shrink-0">
            <span>&bull; LATEX 1000+ PGS/SEC ENGINE</span>
            <span>&bull; 300+ ROOMS ACROSS 80+ LEVELS</span>
            <span>&bull; 7 ENTERPRISE SYSTEMS DEPLOYED</span>
            <span>&bull; UITM 1ST CLASS HONORS (3.53 CGPA)</span>
          </div>
        </div>
      </section>

      {/* Runway Project Looks */}
      <section id="runway" className="px-6 md:px-16 py-24 max-w-7xl mx-auto border-b border-white/20">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight">Runway Archive</h2>
          <span className="text-xs uppercase tracking-widest opacity-60">[ 10 ARCHITECTURAL LOOKS ]</span>
        </div>

        <div className="divide-y divide-white/20">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="py-10 group cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all hover:px-4"
            >
              <div className="flex items-start gap-8">
                <span className="font-mono text-sm opacity-40">LOOK {String(idx + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase group-hover:text-slate-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs uppercase tracking-widest opacity-60 mt-1 block">
                    {project.category} &bull; {project.year}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-xs font-mono opacity-80 uppercase px-3 py-1 border border-white/40">
                  {project.metrics}
                </span>
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection themeStyle="editorial" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
