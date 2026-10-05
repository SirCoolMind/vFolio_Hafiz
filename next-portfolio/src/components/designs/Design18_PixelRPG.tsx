"use client";

import React, { useState } from "react";
import { Sword, Shield, Scroll, Trophy, Download, ArrowRight, Heart, Sparkles, User } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design18_PixelRPG: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<"stats" | "inventory" | "quests">("stats");

  return (
    <div className="min-h-screen bg-[#0d1b11] text-[#9dfc9d] font-mono selection:bg-[#22c55e] selection:text-black relative overflow-x-hidden p-4 md:p-8">
      <CustomCursor variant="pixel" color="#22c55e" />

      {/* 16-bit RPG Window Box */}
      <div className="max-w-7xl mx-auto border-4 border-[#22c55e] bg-[#051107] rounded-none p-6 md:p-10 shadow-[8px_8px_0px_#14532d]">
        {/* Top RPG Header */}
        <header className="border-b-4 border-[#22c55e] pb-6 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-8 h-8 object-cover object-top border-2 border-[#22c55e]"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
                HAFIZ_QUEST // DESIGN 18
              </h1>
              <span className="text-xs text-[#4ade80]">LVL 28 SOFTWARE ARCHITECT &bull; EXP: 99,999</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* HP Hearts */}
            <div className="flex gap-1 text-rose-500">
              <Heart size={16} fill="currentColor" />
              <Heart size={16} fill="currentColor" />
              <Heart size={16} fill="currentColor" />
              <Heart size={16} fill="currentColor" />
            </div>

            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#22c55e] text-black font-black text-xs uppercase hover:bg-white transition-all shadow-[3px_3px_0px_#000]"
            >
              <Download size={13} className="inline mr-1" /> CHARACTER_SHEET.PDF
            </a>
          </div>
        </header>

        {/* Hero Character Box with 16-bit Portrait Frame */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-4 border-[#22c55e]/50 p-6 bg-[#091f0c] mb-10 items-center">
          <div className="lg:col-span-8 flex flex-col md:flex-row gap-6 items-center">
            {/* 16-bit Pixel Hero Portrait */}
            <div className="w-24 h-28 sm:w-28 sm:h-32 shrink-0 border-2 border-[#22c55e] bg-black shadow-[3px_3px_0px_#000] p-0.5">
              <img
                src={PORTFOLIO_DATA.personal.avatar}
                alt={PORTFOLIO_DATA.personal.name}
                className="w-full h-full object-cover object-[center_60%] filter contrast-125"
              />
            </div>

            <div>
              <span className="text-xs uppercase px-2 py-0.5 bg-[#22c55e] text-black font-bold mb-3 inline-block">
                CLASS: HIGH-THROUGHPUT FULLSTACK ARCHITECT
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase mb-2">
                MUHAMMAD HAFIZ RUSLAN
              </h2>
              <p className="text-xs sm:text-sm text-[#86efac] leading-relaxed mb-4">
                Traversing enterprise software dungeons: Casts asynchronous LaTeX document spells (1,000+ pgs/sec) and commands multi-level facility booking matrices across 80+ levels.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#quests"
                  className="px-5 py-2.5 bg-[#22c55e] text-black font-black text-xs uppercase hover:bg-white shadow-[4px_4px_0px_#000] flex items-center gap-1.5"
                >
                  <span>OPEN QUEST LOG</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Character Stat Badge */}
          <div className="lg:col-span-4 border-2 border-[#22c55e] p-4 bg-[#051107] text-xs space-y-2">
            <div className="text-white font-black border-b border-[#22c55e] pb-1">HERO STAT SHEET:</div>
            <div className="flex justify-between"><span>ATK (Problem Solving):</span><span className="text-white font-bold">99/99</span></div>
            <div className="flex justify-between"><span>DEF (Code Quality):</span><span className="text-white font-bold">95/99</span></div>
            <div className="flex justify-between"><span>INT (UiTM 1st Class):</span><span className="text-[#4ade80] font-bold">3.53 CGPA</span></div>
            <div className="flex justify-between"><span>AGI (LaTeX Speed):</span><span className="text-white font-bold">1,000 pgs/s</span></div>
            <div className="flex justify-between"><span>HOME DUNGEON:</span><span className="text-slate-300">Banting, MY</span></div>
          </div>
        </section>

        {/* Inventory & Quests Tab Section */}
        <section className="mb-10">
          <div className="flex gap-2 mb-6">
            {(["stats", "inventory", "quests"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-black uppercase transition-all border-2 border-[#22c55e] ${
                  activeTab === tab ? "bg-[#22c55e] text-black" : "bg-[#051107] text-[#9dfc9d] hover:bg-[#22c55e]/20"
                }`}
              >
                [{tab.toUpperCase()}]
              </button>
            ))}
          </div>

          {activeTab === "inventory" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {[
                { name: "Laravel 10", type: "Master Weapon", stat: "95% Master" },
                { name: "PHP 8.2", type: "Runtime Core", stat: "96% Velocity" },
                { name: "LaTeX Worker", type: "High-Speed Spell", stat: "1000 pgs/s" },
                { name: "Vue.js 3", type: "Reactive Shield", stat: "92% Fluency" },
                { name: "MySQL / Redis", type: "Data Citadel", stat: "Sub-100ms" },
                { name: "Docker", type: "Container Fortress", stat: "82% Defense" },
              ].map((item, idx) => (
                <div key={idx} className="p-3 border-2 border-[#22c55e]/60 bg-[#091f0c]">
                  <div className="text-white font-bold mb-1">{item.name}</div>
                  <div className="text-[10px] text-[#4ade80]">{item.type}</div>
                  <div className="text-[10px] text-slate-300 mt-1">{item.stat}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "stats" && (
            <div className="p-6 border-2 border-[#22c55e]/60 bg-[#091f0c] text-xs space-y-3">
              <div className="text-white font-black">CHRONICLE OF ACHIEVEMENTS:</div>
              <div>&bull; Universiti Teknologi MARA (UiTM) — Bachelor of CS (1st Class Honours, CGPA 3.53)</div>
              <div>&bull; Build-IT KICTM (2019) — Appointed Project Leader</div>
              <div>&bull; Computer Science Association (CSA) — Lead Instructor (2020)</div>
              <div>&bull; Selangor Matriculation College — Pure Science CGPA 3.83</div>
            </div>
          )}

          {activeTab === "quests" && (
            <div className="space-y-3 text-xs">
              {PORTFOLIO_DATA.workExperience.map((exp, idx) => (
                <div key={idx} className="p-4 border-2 border-[#22c55e]/60 bg-[#091f0c]">
                  <div className="flex justify-between font-bold text-white mb-1">
                    <span>QUEST: {exp.role} @ {exp.company}</span>
                    <span className="text-[#4ade80]">{exp.period}</span>
                  </div>
                  <ul className="text-[11px] text-slate-300 space-y-1 mt-2">
                    {exp.description.map((d, dIdx) => (
                      <li key={dIdx}>[X] {d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Case Studies Boss Battles */}
        <section id="quests" className="border-t-4 border-[#22c55e] pt-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-black text-white uppercase flex items-center gap-2">
              <Trophy size={18} className="text-amber-400" /> BOSS BATTLE CASE STUDIES
            </h3>
            <span className="text-xs">[10 QUESTS COMPLETE]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="p-5 border-2 border-[#22c55e]/60 bg-[#091f0c] hover:bg-[#22c55e]/20 transition-all cursor-pointer shadow-[4px_4px_0px_#000] flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] text-[#4ade80] font-bold mb-1">STAGE 0{idx + 1} &bull; {project.category}</div>
                  <h4 className="text-base font-bold text-white uppercase mb-2">{project.title}</h4>
                  <p className="text-xs text-slate-300 line-clamp-2 mb-4">{project.highlight}</p>
                </div>
                <div className="text-xs pt-2 border-t border-[#22c55e]/40 flex justify-between text-[#4ade80] font-bold">
                  <span>EXP: {project.metrics.split(" ")[0]}...</span>
                  <span>VIEW &gt;</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ContactSection themeStyle="retro" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
