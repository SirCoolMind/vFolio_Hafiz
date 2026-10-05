"use client";

import React, { useState } from "react";
import { Sliders, Download, ArrowRight, Check, Disc, Volume2, ToggleLeft, ToggleRight } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design13_BraunIndustrial: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [rotaryAngle, setRotaryAngle] = useState<number>(45);
  const [powerSwitch, setPowerSwitch] = useState<boolean>(true);

  const categories = ["All", "Fullstack", "High Performance", "Enterprise", "Systems", "Security"];

  const handleDialClick = () => {
    const nextAngle = (rotaryAngle + 60) % 360;
    setRotaryAngle(nextAngle);
    const catIdx = Math.floor((nextAngle / 360) * categories.length);
    setFilterCategory(categories[catIdx] || "All");
  };

  const filteredProjects = filterCategory === "All"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category.toLowerCase().includes(filterCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#ebe8e1] text-[#1c1b18] font-sans selection:bg-[#f97316] selection:text-white relative overflow-x-hidden">
      <CustomCursor variant="default" color="#f97316" />

      {/* Millimeter Engineering Drafting Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Industrial Header Bar */}
      <header className="sticky top-0 z-40 bg-[#ebe8e1]/95 border-b-2 border-[#1c1b18] px-6 md:px-12 py-4 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-7 h-7 rounded-sm object-cover object-top border border-[#1c1b18]"
            />
            <span className="font-bold tracking-tighter text-sm uppercase">
              BRAUN &bull; RAMS 1970 // DESIGN 13
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase font-bold tracking-wider">
            <a href="#projects" className="hover:opacity-70 transition-opacity">Models</a>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border-2 border-[#1c1b18] hover:bg-[#1c1b18] hover:text-[#ebe8e1] transition-all flex items-center gap-1.5"
            >
              <Download size={13} /> SPEC SHEET
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero Chassis with Photo Plate */}
      <section className="pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Monograph Details */}
          <div className="lg:col-span-7 p-8 md:p-12 border-2 border-[#1c1b18] bg-[#f4f2eb] shadow-[6px_6px_0px_#1c1b18]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f97316] block mb-3">
              FUNCTIONALIST SPECIFICATION NO. 13
            </span>

            <h1 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tight leading-none mb-6">
              Dieter Rams <br />
              <span className="text-[#f97316]">Precision</span>
            </h1>

            <p className="text-base sm:text-lg opacity-85 leading-relaxed max-w-2xl mb-8">
              &ldquo;Good design is as little design as possible.&rdquo; Engineered high-throughput LaTeX document pipelines (1,000+ pgs/sec), room allocation algorithms (300+ rooms across 80+ levels), and minimalist software systems.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#1c1b18] text-[#ebe8e1] font-bold text-xs uppercase tracking-wider hover:bg-[#f97316] hover:text-white transition-all shadow-[4px_4px_0px_#f97316]"
              >
                Inspect Apparatus ({filteredProjects.length})
              </a>

              <button
                onClick={() => setPowerSwitch(!powerSwitch)}
                className="px-4 py-3 border-2 border-[#1c1b18] font-mono text-xs font-bold uppercase flex items-center gap-2 bg-white"
              >
                {powerSwitch ? <ToggleRight className="text-[#f97316]" size={18} /> : <ToggleLeft size={18} />}
                <span>MAIN POWER: {powerSwitch ? "ON" : "STANDBY"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Physical Matte Photo Plate & Rotary Unit */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Matte Photo Plate */}
            <div className="p-4 border-2 border-[#1c1b18] bg-[#f4f2eb] shadow-[6px_6px_0px_#1c1b18] flex items-center gap-6">
              <div className="w-24 h-28 sm:w-28 sm:h-32 border-2 border-black overflow-hidden bg-stone-200 shrink-0">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%] grayscale contrast-125"
                />
              </div>
              <div className="font-mono text-xs space-y-1">
                <div className="font-bold uppercase text-[#f97316]">SPECIMEN NO. HR-98</div>
                <div className="font-extrabold text-sm">{PORTFOLIO_DATA.personal.name}</div>
                <div className="text-[11px] opacity-75">UiTM CS (1st Class 3.53)</div>
                <div className="text-[10px] text-stone-500 pt-1 border-t border-stone-400">
                  SERIAL: 19980311-BANTING
                </div>
              </div>
            </div>

            {/* Interactive Rotary Control Unit */}
            <div className="p-6 border-2 border-[#1c1b18] bg-[#f4f2eb] shadow-[6px_6px_0px_#1c1b18] flex flex-col items-center justify-between text-center">
              <span className="text-xs font-mono font-bold uppercase mb-2">
                ROTARY APPARATUS SELECTOR
              </span>

              {/* Clickable/Rotatable Physical Knob */}
              <div
                onClick={handleDialClick}
                className="w-28 h-28 rounded-full border-4 border-[#1c1b18] bg-[#e4e0d5] relative cursor-pointer shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] flex items-center justify-center my-2 transition-transform duration-300"
                style={{ transform: `rotate(${rotaryAngle}deg)` }}
              >
                <div className="absolute top-1.5 w-1.5 h-5 bg-[#f97316] rounded-full" />
                <div className="w-12 h-12 rounded-full border-2 border-[#1c1b18] bg-[#d9d5c9] flex items-center justify-center font-mono text-[10px] font-bold">
                  DIAL
                </div>
              </div>

              <div className="text-xs font-mono font-bold mt-1">
                FILTER: <span className="text-[#f97316] underline">{filterCategory}</span>
              </div>
              <p className="text-[10px] opacity-70">Click knob to cycle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Machinery Rack */}
      <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t-2 border-[#1c1b18]">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-[#f97316] mb-1 block">
              CATALOGUE OF APPARATUS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
              Production Models
            </h2>
          </div>
          <span className="font-mono text-xs font-bold">[ {filteredProjects.length} UNITS AVAILABLE ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-6 border-2 border-[#1c1b18] bg-[#f4f2eb] hover:bg-white transition-all cursor-pointer shadow-[4px_4px_0px_#1c1b18] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between font-mono text-[11px] font-bold mb-3">
                  <span className="text-[#f97316]">MODEL {String(idx + 1).padStart(2, "0")}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-xl font-bold uppercase mb-2">{project.title}</h3>
                <p className="text-xs opacity-80 leading-relaxed mb-4 line-clamp-2">{project.highlight}</p>
                <div className="p-3 border border-[#1c1b18] bg-[#ebe8e1] font-mono text-xs mb-4">
                  <span className="text-[10px] text-[#f97316] uppercase block font-bold">Output Metric</span>
                  {project.metrics}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t-2 border-[#1c1b18] text-xs font-bold">
                <span>INSPECT APPARATUS</span>
                <ArrowRight size={14} />
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
