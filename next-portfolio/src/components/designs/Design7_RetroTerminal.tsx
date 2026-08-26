"use client";

import React, { useState } from "react";
import { Folder, Download, Disc, Monitor, Play, User } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design7_RetroTerminal: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<"explorer" | "exec" | "bios">("explorer");

  return (
    <div className="min-h-screen bg-[#050e09] text-[#22c55e] font-mono relative overflow-x-hidden p-3 md:p-8">
      <CustomCursor variant="pixel" color="#22c55e" />

      {/* CRT Scanline Overlay */}
      <div className="fixed inset-0 crt-overlay pointer-events-none z-50 opacity-40" />

      {/* Retro OS Window Frame */}
      <div className="max-w-7xl mx-auto border-2 border-[#22c55e] bg-black/90 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.3)]">
        {/* Retro Window Titlebar */}
        <div className="bg-[#22c55e] text-black px-4 py-2 flex items-center justify-between font-bold text-xs select-none">
          <div className="flex items-center gap-2">
            <Monitor size={16} />
            <span>RETRO_CYBERDECK_1999 // VFOLIO_HAFIZ.SYS</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-2 py-0.5 bg-black text-[#22c55e] border border-black text-[10px]">_</button>
            <button className="px-2 py-0.5 bg-black text-[#22c55e] border border-black text-[10px]">□</button>
            <button className="px-2 py-0.5 bg-black text-rose-400 border border-black text-[10px]">X</button>
          </div>
        </div>

        {/* Retro Menu Bar */}
        <div className="border-b border-[#22c55e]/40 bg-black/80 px-4 py-1.5 flex flex-wrap items-center gap-6 text-xs select-none">
          <span className="cursor-pointer hover:bg-[#22c55e] hover:text-black px-1.5 py-0.5">FILE(F)</span>
          <span className="cursor-pointer hover:bg-[#22c55e] hover:text-black px-1.5 py-0.5">EXECUTE(E)</span>
          <span className="cursor-pointer hover:bg-[#22c55e] hover:text-black px-1.5 py-0.5">DIAGNOSTICS(D)</span>
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1 text-[#22c55e] hover:underline"
          >
            <Download size={12} /> GET_RESUME.EXE
          </a>
        </div>

        {/* Hero Banner with CRT Photo Frame */}
        <div className="p-6 md:p-10 border-b border-[#22c55e]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="text-xs mb-2 font-bold opacity-90 text-[#4ade80]">
              BOOT SEQUENCE: CRT TRINITRON 1999 BIOS // STATUS: OK
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider leading-tight mb-4 text-white">
              MUHAMMAD HAFIZ RUSLAN
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed max-w-2xl mb-6 text-[#86efac]">
              Fullstack Software Engineer specializing in Laravel architectures, LaTeX ultra-fast generation (1,000+ pgs/sec), and 300+ room distributed systems.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-4 py-2 bg-[#22c55e] text-black font-bold text-xs uppercase hover:bg-white transition-colors flex items-center gap-2"
              >
                <Play size={12} fill="currentColor" /> RUN PROJECTS_DIRECTORY
              </a>
              <a
                href="#contact"
                className="px-4 py-2 border border-[#22c55e] hover:bg-[#22c55e]/10 text-xs uppercase"
              >
                OPEN CONTACT_PORT
              </a>
            </div>
          </div>

          {/* Right Column: CRT Green Phosphor Photo Frame */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="border border-[#22c55e] bg-black p-2.5 shadow-[0_0_15px_rgba(34,197,94,0.3)] relative max-w-[210px] w-full">
              <div className="text-[9px] uppercase font-bold text-black bg-[#22c55e] px-1.5 py-0.5 mb-1.5 flex justify-between">
                <span>PORTRAIT.BMP</span>
                <span>320x240</span>
              </div>

              <div className="w-full h-44 border border-[#22c55e]/60 overflow-hidden relative bg-black">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%] filter grayscale contrast-150 brightness-90 hover:filter-none transition-all duration-300"
                />
                {/* Green Tint Overlay */}
                <div className="absolute inset-0 bg-[#22c55e]/15 mix-blend-color pointer-events-none" />
              </div>

              <div className="text-[9px] mt-1.5 space-y-0.5 text-[#86efac]">
                <div>HAFIZ_RUSLAN (AGE 28)</div>
                <div>UiTM CS (1ST CLASS 3.53)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Retro Explorer Tabs */}
        <div className="p-6 md:p-10 border-b border-[#22c55e]/30">
          <div className="flex gap-2 mb-6">
            {(["explorer", "exec", "bios"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-bold uppercase transition-all ${
                  activeTab === tab ? "bg-[#22c55e] text-black" : "border border-[#22c55e]/40 text-[#22c55e]"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {activeTab === "explorer" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 border border-[#22c55e]/30 bg-black/60">
                <div className="font-bold flex items-center gap-2 mb-2 text-white">
                  <Folder size={14} className="text-[#22c55e]" /> C:\CAREER\IMT_TECH
                </div>
                <p className="text-[11px] text-[#86efac]">
                  PHP Programmer (2023-Present). LaTeX engine 1000+ pages/sec, 300+ room booking system.
                </p>
              </div>

              <div className="p-4 border border-[#22c55e]/30 bg-black/60">
                <div className="font-bold flex items-center gap-2 mb-2 text-white">
                  <Folder size={14} className="text-[#22c55e]" /> C:\CAREER\UNIJAYA
                </div>
                <p className="text-[11px] text-[#86efac]">
                  PHP Developer (2021-2023). 7 live client platforms, API latency reduction.
                </p>
              </div>

              <div className="p-4 border border-[#22c55e]/30 bg-black/60">
                <div className="font-bold flex items-center gap-2 mb-2 text-white">
                  <Folder size={14} className="text-[#22c55e]" /> C:\CAREER\LEADMIND
                </div>
                <p className="text-[11px] text-[#86efac]">
                  Lead MERN Developer (2021). 1000+ leads management platform.
                </p>
              </div>
            </div>
          )}

          {activeTab === "exec" && (
            <div className="p-4 bg-black border border-[#22c55e]/40 text-xs space-y-2">
              <div className="font-bold text-white">&gt; RUNTIME BENCHMARK RESULTS:</div>
              <div>[+] LaTeX Worker Execution: 1,000 pages in 2.4s (PASS)</div>
              <div>[+] Booking Room Collision Tests: 0 conflicts across 300 rooms (PASS)</div>
              <div>[+] UiTM Degree Validation: First Class Honors (CGPA: 3.53) (PASS)</div>
            </div>
          )}

          {activeTab === "bios" && (
            <div className="p-4 bg-black border border-[#22c55e]/40 text-xs">
              <div className="font-bold mb-2 text-white">&gt; SYSTEM ARSENAL INVENTORY:</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-[#86efac]">
                <div>&bull; Laravel (95%)</div>
                <div>&bull; PHP 8.2 (96%)</div>
                <div>&bull; Vue.js (92%)</div>
                <div>&bull; React.js (88%)</div>
                <div>&bull; MySQL (94%)</div>
                <div>&bull; LaTeX (92%)</div>
                <div>&bull; Redis (85%)</div>
                <div>&bull; Docker (82%)</div>
              </div>
            </div>
          )}
        </div>

        {/* Retro Projects Showcase */}
        <div id="projects" className="p-6 md:p-10 border-b border-[#22c55e]/30">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold uppercase flex items-center gap-2 text-white">
              <Disc size={18} className="text-[#22c55e]" /> EXECUTABLE CASE STUDIES
            </h2>
            <span className="text-xs">[DIRECTORY: 10 FILES]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="p-5 border border-[#22c55e]/40 hover:bg-[#22c55e]/10 transition-colors cursor-pointer group bg-black/60"
              >
                <div className="flex justify-between text-[10px] mb-2 font-bold">
                  <span className="text-[#22c55e]">{project.category}.EXE</span>
                  <span className="text-slate-400">{project.year}</span>
                </div>
                <h3 className="text-base font-bold uppercase mb-2 text-white group-hover:text-[#22c55e]">{project.title}</h3>
                <p className="text-xs text-[#86efac] line-clamp-2 mb-4">{project.highlight}</p>
                <div className="text-[10px] font-bold border-t border-[#22c55e]/30 pt-2 flex justify-between items-center">
                  <span>METRIC: {project.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-10">
          <ContactSection themeStyle="retro" />
        </div>
      </div>

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
