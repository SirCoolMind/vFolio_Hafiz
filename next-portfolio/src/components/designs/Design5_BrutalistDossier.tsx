"use client";

import React, { useState } from "react";
import { ArrowDownRight, Download, ShieldAlert, Stamp } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design5_BrutalistDossier: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeDossierTab, setActiveDossierTab] = useState<"dossier" | "chronology" | "arsenal">("dossier");

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ffe600] selection:text-black font-mono relative overflow-x-hidden">
      <CustomCursor variant="difference" color="#ffe600" />

      {/* Top Warning Ribbon */}
      <div className="bg-[#ffe600] text-black font-black text-xs uppercase py-1.5 px-4 flex items-center justify-between border-b-2 border-black tracking-widest overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex gap-8">
          <span>CLASSIFIED PERSONNEL DOSSIER // DEPT OF COMPUTING</span>
          <span>LATEX PDF GENERATOR (1000+ PGS/SEC)</span>
          <span>300+ ROOM FACILITY ALLOCATION</span>
          <span>UITM 1ST CLASS HONORS (3.53 CGPA)</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b-2 border-white px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xl font-black bg-[#ffe600] text-black px-2 py-0.5">
            DOSSIER #1998-0311
          </span>
          <span className="text-xs uppercase tracking-widest hidden sm:inline">MUHAMMAD HAFIZ RUSLAN</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold uppercase">
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="GET PDF"
            className="px-4 py-2 border-2 border-white bg-[#ffe600] text-black hover:bg-white hover:text-black transition-all flex items-center gap-1.5 font-black"
          >
            <Download size={14} /> RESUME FILE
          </a>
        </div>
      </header>

      {/* Brutalist Monolithic Hero with Classified ID Card */}
      <section className="px-6 md:px-12 pt-16 pb-24 border-b-2 border-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Left Text Monolith */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase bg-[#ffe600] text-black px-2 py-1 inline-block mb-6">
              SPEC: PHP / LARAVEL / REACT / HIGH LOAD
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
              HAFIZ <br />
              <span className="text-[#ffe600] underline decoration-4">RUSLAN</span>
            </h1>
            <p className="text-sm sm:text-base leading-relaxed opacity-85 uppercase mb-6 max-w-xl">
              {PORTFOLIO_DATA.personal.tagline} Fullstack Software Engineer specializing in compiled LaTeX document engines (1,000+ pgs/sec) and distributed facility allocation algorithms across 80+ levels.
            </p>
          </div>

          {/* Right Column: Classified Personnel Photo Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="border-2 border-white bg-[#111] p-4 shadow-[6px_6px_0px_#ffe600] relative max-w-[250px] w-full">
              {/* Declassified Stamp */}
              <div className="absolute top-2 right-2 px-1.5 py-0.5 border border-red-500 text-red-500 font-black text-[9px] uppercase rotate-[-6deg]">
                DECLASSIFIED
              </div>

              <div className="text-[9px] uppercase font-bold text-[#ffe600] mb-1.5">
                FILE: HR-98
              </div>

              {/* Photo */}
              <div className="w-full h-44 sm:h-48 border border-white overflow-hidden bg-black mb-3 relative">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%] filter grayscale contrast-150 hover:filter-none transition-all duration-300"
                />
                <div className="absolute bottom-1 left-1 bg-black text-white text-[8px] px-1.5 py-0.5 border border-white">
                  ID: 2026
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="space-y-1 text-[10px] uppercase border-t border-white pt-2">
                <div className="flex justify-between"><span>NAME:</span><span className="font-black text-[#ffe600]">HAFIZ R.</span></div>
                <div className="flex justify-between"><span>EDU:</span><span className="font-bold">UiTM CS (3.53)</span></div>
                <div className="flex justify-between"><span>ROLE:</span><span>FULLSTACK</span></div>
              </div>

              {/* Simulated Barcode */}
              <div className="mt-2 pt-1 border-t border-dashed border-white/40 flex justify-between items-center text-[9px]">
                <span className="tracking-widest">||| |||| || |</span>
                <span>LVL-5</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Brutalist Data Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-white">
          {PORTFOLIO_DATA.stats.map((s, idx) => (
            <div key={idx} className="p-6 border-r-2 last:border-r-0 border-b-2 md:border-b-0 border-white hover:bg-white/10 transition-colors">
              <div className="text-[10px] uppercase opacity-70 mb-1">{s.label}</div>
              <div className="text-3xl md:text-4xl font-black text-[#ffe600]">{s.value}</div>
              <div className="text-[11px] font-bold">{s.unit}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Dossier Tabs Section */}
      <section className="px-6 md:px-12 py-20 border-b-2 border-white">
        <div className="flex border-b-2 border-white mb-12">
          {(["dossier", "chronology", "arsenal"] as const).map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveDossierTab(tab)}
              data-cursor-text={`0${idx + 1}`}
              className={`px-6 py-3 uppercase text-xs font-black transition-all border-r-2 border-white ${
                activeDossierTab === tab ? "bg-white text-black" : "hover:bg-white/10 text-white"
              }`}
            >
              0{idx + 1} // {tab}
            </button>
          ))}
        </div>

        {activeDossierTab === "dossier" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-white p-8 bg-zinc-950">
              <h3 className="text-xl font-black uppercase text-[#ffe600] mb-4">PROFILE RECORD</h3>
              <p className="text-sm leading-relaxed opacity-85 mb-6">
                {PORTFOLIO_DATA.personal.bio}
              </p>
              <div className="p-4 bg-black border border-white text-xs space-y-2">
                <div>HONORS: Bachelor of Computer Science, UiTM (CGPA 3.53)</div>
                <div>PROJECT LEAD: Build-IT KICTM (2019)</div>
                <div>INSTRUCTOR: CSA Workshop (2020)</div>
              </div>
            </div>

            <div className="border-2 border-white p-8 bg-zinc-950">
              <h3 className="text-xl font-black uppercase text-[#ffe600] mb-4">BENCHMARK HIGHLIGHT</h3>
              <div className="text-2xl font-black mb-2">LATEX PDF INVOICE PIPELINE</div>
              <p className="text-xs opacity-75 uppercase leading-relaxed mb-6">
                Built asynchronous compilation workers producing 1000+ pages of high-fidelity tax invoices in seconds, eliminating legacy TCPDF bottlenecks.
              </p>
              <div className="p-3 bg-[#ffe600] text-black font-black text-xs uppercase">
                LATENCY SLICED BY &gt;4000%
              </div>
            </div>
          </div>
        )}

        {activeDossierTab === "chronology" && (
          <div className="space-y-6">
            {PORTFOLIO_DATA.workExperience.map((exp, idx) => (
              <div key={idx} className="border-2 border-white p-6 md:p-8 bg-zinc-950">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                  <div>
                    <h4 className="text-2xl font-black uppercase">{exp.role}</h4>
                    <div className="text-xs font-bold text-[#ffe600]">{exp.company} &bull; {exp.location}</div>
                  </div>
                  <span className="px-3 py-1 font-black text-xs bg-white text-black">{exp.period}</span>
                </div>
                <ul className="space-y-2 text-xs opacity-80 uppercase">
                  {exp.description.map((d, dIdx) => (
                    <li key={dIdx}>[X] {d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeDossierTab === "arsenal" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
              <div key={idx} className="border-2 border-white p-6 bg-zinc-950">
                <h4 className="text-xs font-black uppercase text-[#ffe600] mb-4 pb-2 border-b border-white">
                  {cat.title}
                </h4>
                <div className="space-y-2 text-xs uppercase">
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx} className="flex justify-between">
                      <span className="opacity-80">{s.name}</span>
                      <span className="font-bold text-[#ffe600]">{s.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="px-6 md:px-12 py-20 border-b-2 border-white">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase">PROJECT INDEX</h2>
          <span className="text-xs font-bold text-[#ffe600]">[ {PORTFOLIO_DATA.projects.length} RECORDS ]</span>
        </div>

        <div className="border-2 border-white divide-y-2 divide-white">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor-text="INSPECT"
              className="p-6 md:p-8 hover:bg-white/10 transition-colors cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-6">
                <span className="font-black text-lg">0{idx + 1}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase">{project.title}</h3>
                  <div className="text-xs uppercase opacity-70 font-semibold mt-1">
                    {project.subtitle}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-2">
                <span className="text-xs font-bold uppercase px-2 py-0.5 border border-white">
                  {project.metrics}
                </span>
                <div className="flex items-center gap-2 text-xs font-black uppercase">
                  <span>CASE STUDY</span>
                  <ArrowDownRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection themeStyle="brutalist" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
