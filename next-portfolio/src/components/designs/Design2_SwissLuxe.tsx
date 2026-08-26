"use client";

import React, { useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design2_SwissLuxe: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <div className="min-h-screen bg-[#f7f5f0] dark:bg-[#0d0e12] text-[#1a1917] dark:text-[#f4f2ed] selection:bg-[#c44d2d] selection:text-white transition-colors duration-500 font-serif relative">
      <CustomCursor variant="spotlight" color="#c44d2d" />

      {/* Editorial Navigation */}
      <nav className="border-b border-black/10 dark:border-white/10 px-6 md:px-16 py-6 flex items-center justify-between font-sans text-xs uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="font-serif font-black text-lg tracking-normal">H.R.</span>
          <span className="opacity-50 hidden sm:inline">&bull;</span>
          <span className="opacity-60 hidden sm:inline">SWISS LUXE &bull; LOOKBOOK 2026</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="#manifesto" className="hover:opacity-75 transition-opacity">Manifesto</a>
          <a href="#archive" className="hover:opacity-75 transition-opacity">Works</a>
          <a href="#chronology" className="hover:opacity-75 transition-opacity">Chronology</a>
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="RESUME"
            className="px-4 py-1.5 border border-current hover:bg-current hover:text-white dark:hover:text-black transition-all"
          >
            Curriculum
          </a>
        </div>
      </nav>

      {/* Editorial Hero Spread with Prominent Portrait */}
      <section className="px-6 md:px-16 pt-16 pb-28 max-w-7xl mx-auto border-b border-black/10 dark:border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Typography Block */}
          <div className="lg:col-span-7">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#c44d2d] block mb-4">
              MONOGRAPH &bull; FULLSTACK CRAFTSMANSHIP
            </span>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight leading-[0.88] mb-6">
              Hafiz <br />
              <span className="italic font-serif text-[#c44d2d]">Ruslan</span>
            </h1>

            <p className="font-sans text-sm sm:text-base opacity-80 uppercase tracking-wider leading-relaxed max-w-xl mb-6">
              B. 1998 &bull; Banting, Malaysia. First-Class Honors in Computer Science (UiTM). Crafting high-throughput document engines and scalable multi-tenant digital systems.
            </p>

            <div className="flex gap-4 font-sans text-xs uppercase tracking-widest font-bold">
              <a href="#archive" className="px-6 py-3 bg-[#1a1917] text-white dark:bg-white dark:text-black hover:opacity-80 transition-all">
                Explore Works ({PORTFOLIO_DATA.projects.length})
              </a>
              <a href="#manifesto" className="px-6 py-3 border border-current hover:opacity-75 transition-all">
                Read Manifesto
              </a>
            </div>
          </div>

          {/* Right Column: High-Fashion Portrait Lookbook Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[240px]">
              <div className="w-48 sm:w-56 h-64 sm:h-72 rounded-none border-4 border-white dark:border-[#171717] shadow-xl overflow-hidden bg-stone-200">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%] grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Red Wax Stamp Badge */}
              <div className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full bg-[#c44d2d] text-white flex flex-col items-center justify-center font-sans text-[8px] uppercase tracking-widest shadow-lg rotate-[-10deg]">
                <span className="font-black text-[10px]">UiTM</span>
                <span>3.53</span>
              </div>

              {/* Archival Label */}
              <div className="font-sans text-[9px] uppercase tracking-widest opacity-60 mt-2 text-right">
                PLATE NO. 01 &bull; HAFIZ RUSLAN
              </div>
            </div>
          </div>
        </div>

        {/* Hero Marquee Bar */}
        <div className="overflow-hidden py-4 border-y border-black/10 dark:border-white/10 font-sans text-xs uppercase tracking-widest opacity-60 flex whitespace-nowrap">
          <div className="animate-marquee flex gap-12 shrink-0">
            <span>&bull; LATEX PDF ENGINE (1000+ PGS/SEC)</span>
            <span>&bull; 300+ ROOM ENTERPRISE BOOKING</span>
            <span>&bull; 7 CLIENT SYSTEMS DEPLOYED</span>
            <span>&bull; UITM 1ST CLASS HONORS (3.53 CGPA)</span>
          </div>
          <div className="animate-marquee flex gap-12 shrink-0" aria-hidden="true">
            <span>&bull; LATEX PDF ENGINE (1000+ PGS/SEC)</span>
            <span>&bull; 300+ ROOM ENTERPRISE BOOKING</span>
            <span>&bull; 7 CLIENT SYSTEMS DEPLOYED</span>
            <span>&bull; UITM 1ST CLASS HONORS (3.53 CGPA)</span>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="px-6 md:px-16 py-28 max-w-7xl mx-auto border-b border-black/10 dark:border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 font-sans uppercase text-xs tracking-widest opacity-60">
            <span className="font-bold text-[#c44d2d]">01 //</span> THE MANIFESTO
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-8">
              &ldquo;Software craftsmanship lies at the intersection of mathematical rigor, performance optimization, and refined user simplicity.&rdquo;
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm opacity-80 leading-relaxed">
              <p>
                <span className="text-3xl font-serif float-left mr-2 leading-none font-bold text-[#c44d2d]">I</span>
                enjoy finding non-obvious engineering solutions to high-load architectural bottlenecks. From compiling over a thousand invoice pages in seconds using asynchronous LaTeX worker pipelines at IMT Tech to orchestrating 300+ rooms across 80+ levels with zero booking collisions, I design systems that endure.
              </p>
              <p>
                Graduated with First-Class Honors in Computer Science from Universiti Teknologi MARA (CGPA: 3.53), combining academic precision with real-world enterprise delivery across 7 live client platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Works Showcase */}
      <section id="archive" className="px-6 md:px-16 py-28 max-w-7xl mx-auto border-b border-black/10 dark:border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="font-sans uppercase text-xs tracking-widest opacity-60 mb-2">
              <span className="font-bold text-[#c44d2d]">02 //</span> SELECTED CATALOGUE
            </div>
            <h2 className="text-4xl md:text-6xl font-normal">Works Archive</h2>
          </div>
          <span className="font-sans text-xs opacity-60 uppercase tracking-wider mt-4 md:mt-0">
            [ {PORTFOLIO_DATA.projects.length} CASE STUDIES DOCUMENTED ]
          </span>
        </div>

        <div className="space-y-12">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor-text="EXPAND"
              className="group border-t border-black/10 dark:border-white/10 pt-8 pb-12 cursor-pointer transition-all hover:opacity-90"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1 font-sans text-xs opacity-50 font-mono">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>

                <div className="lg:col-span-6">
                  <h3 className="text-3xl md:text-5xl font-normal mb-3 transition-colors group-hover:opacity-75">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-widest opacity-60 mb-4">
                    {project.subtitle}
                  </p>
                  <p className="font-sans text-sm opacity-80 leading-relaxed max-w-xl">
                    {project.highlight}
                  </p>
                </div>

                <div className="lg:col-span-3 font-sans text-xs">
                  <div className="opacity-60 uppercase tracking-widest mb-1">Key Benchmark</div>
                  <div className="font-semibold mb-4">{project.metrics}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 border border-black/10 dark:border-white/10 text-[10px] uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 flex justify-end">
                  <div className="w-12 h-12 rounded-full border border-black/15 dark:border-white/15 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all flex items-center justify-center">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chronology */}
      <section id="chronology" className="px-6 md:px-16 py-28 max-w-7xl mx-auto border-b border-black/10 dark:border-white/10">
        <div className="font-sans uppercase text-xs tracking-widest opacity-60 mb-2">
          <span className="font-bold text-[#c44d2d]">03 //</span> CHRONOLOGY
        </div>
        <h2 className="text-4xl md:text-6xl font-normal mb-16">Career Stations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PORTFOLIO_DATA.workExperience.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-[#c44d2d] pl-6">
              <span className="font-sans text-xs opacity-60 uppercase tracking-widest block mb-2 font-mono">
                {exp.period}
              </span>
              <h3 className="text-2xl font-normal mb-1">{exp.role}</h3>
              <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#c44d2d] mb-4">
                {exp.company}
              </h4>
              <ul className="font-sans text-xs opacity-80 space-y-2 leading-relaxed">
                {exp.description.map((d, dIdx) => (
                  <li key={dIdx}>&bull; {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ContactSection themeStyle="editorial" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
