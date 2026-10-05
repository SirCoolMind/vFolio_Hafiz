"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, RotateCw, ChevronLeft, ChevronRight, Download, ArrowUpRight, Sparkles, UserCheck } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design19_CardDeck3D: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeCardIdx, setActiveCardIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Deck includes Genesis Profile Card (Index 0) followed by 10 Project Case Studies
  const isProfileCard = activeCardIdx === 0;
  const currentProject = isProfileCard ? null : PORTFOLIO_DATA.projects[activeCardIdx - 1];
  const totalCards = PORTFOLIO_DATA.projects.length + 1;

  const nextCard = () => {
    setIsFlipped(false);
    setActiveCardIdx((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setActiveCardIdx((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <div className="min-h-screen bg-[#080914] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      <CustomCursor variant="spotlight" color="#818cf8" />

      {/* Radial Depth Lighting */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-indigo-600/20 via-purple-600/15 to-pink-600/15 blur-[160px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-black/40 border-b border-white/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-8 h-8 rounded-full object-cover object-top border border-indigo-400"
            />
            <span className="font-bold text-sm tracking-wider uppercase text-white">
              3D CARD STACK // DESIGN 19
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-slate-400">
              CARD {activeCardIdx + 1} / {totalCards}
            </span>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-lg shadow-indigo-500/25"
            >
              <Download size={13} /> Resume PDF
            </a>
          </div>
        </div>
      </header>

      {/* Main 3D Card Deck Hero Canvas */}
      <section className="pt-12 pb-24 px-6 md:px-12 max-w-5xl mx-auto min-h-[85vh] flex flex-col justify-center items-center text-center">
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-2">
            GESTURE DECK &bull; 3D FLIP MECHANICS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            Muhammad Hafiz Ruslan
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-2">
            UiTM CS 1st Class Honours (3.53). High-throughput LaTeX document pipelines & multi-level facility booking.
          </p>
        </div>

        {/* 3D Card Stage */}
        <div className="relative w-full max-w-lg h-[480px] [perspective:1200px] mb-8">
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring", damping: 20 }}
            className="w-full h-full relative [transform-style:preserve-3d] cursor-pointer shadow-2xl"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* CARD 0: GENESIS MASTER PROFILE CARD */}
            {isProfileCard && (
              <>
                <div className="absolute inset-0 [backface-visibility:hidden] p-6 md:p-8 rounded-3xl bg-slate-900/90 border-2 border-indigo-500/40 backdrop-blur-2xl flex flex-col justify-between text-left shadow-[0_15px_40px_rgba(99,102,241,0.2)]">
                  <div className="flex gap-4 items-center">
                    <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border border-indigo-400 shrink-0 bg-black">
                      <img
                        src={PORTFOLIO_DATA.personal.avatar}
                        alt={PORTFOLIO_DATA.personal.name}
                        className="w-full h-full object-cover object-[center_60%]"
                      />
                    </div>
                    <div>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-[9px] font-bold uppercase block mb-1">
                        GENESIS #00
                      </span>
                      <h3 className="text-xl font-black text-white">{PORTFOLIO_DATA.personal.name}</h3>
                      <div className="text-[11px] text-indigo-400 font-bold mt-0.5">UiTM CS 1st Class (3.53)</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Banting, Malaysia &bull; Age 28</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light mt-2">
                    {PORTFOLIO_DATA.personal.bio}
                  </p>

                  <div className="p-2.5 rounded-xl bg-black/60 border border-slate-800 text-[11px] font-mono">
                    <span className="text-[9px] text-indigo-400 uppercase block font-bold mb-0.5">Scale Core</span>
                    <span>1,000+ pgs/s LaTeX &bull; 300+ Room Engine</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono text-indigo-400">
                    <span className="flex items-center gap-1.5"><RotateCw size={13} /> Click to Flip Credentials</span>
                    <span className="text-slate-500">Genesis Card</span>
                  </div>
                </div>

                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 md:p-10 rounded-3xl bg-slate-950/95 border-2 border-purple-500/40 backdrop-blur-2xl flex flex-col justify-between text-left shadow-[0_15px_40px_rgba(168,85,247,0.2)]">
                  <div>
                    <div className="text-xs font-mono text-purple-400 mb-3 font-bold">CAREER HISTORY & ARSENAL</div>
                    <div className="space-y-2 text-xs text-slate-300 mb-4">
                      {PORTFOLIO_DATA.workExperience.map((w, idx) => (
                        <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800">
                          <div className="font-bold text-white">{w.role} @ {w.company}</div>
                          <div className="text-[10px] text-purple-300">{w.period}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono text-purple-400">
                    <span>Card Flipped</span>
                    <span className="flex items-center gap-1"><RotateCw size={12} /> Flip Back</span>
                  </div>
                </div>
              </>
            )}

            {/* PROJECT CARDS */}
            {!isProfileCard && currentProject && (
              <>
                <div className="absolute inset-0 [backface-visibility:hidden] p-8 md:p-10 rounded-3xl bg-slate-900/90 border-2 border-indigo-500/40 backdrop-blur-2xl flex flex-col justify-between text-left shadow-[0_15px_40px_rgba(99,102,241,0.2)]">
                  <div>
                    <div className="flex justify-between items-center text-xs font-mono text-indigo-400 mb-4">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 font-bold">
                        {currentProject.category}
                      </span>
                      <span>{currentProject.year}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{currentProject.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6 font-light">
                      {currentProject.highlight}
                    </p>
                    <div className="p-4 rounded-2xl bg-black/60 border border-slate-800 text-xs font-mono">
                      <span className="text-[10px] text-indigo-400 uppercase block font-bold mb-1">Benchmark Metric</span>
                      <span className="font-semibold text-slate-200">{currentProject.metrics}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-indigo-400">
                    <span className="flex items-center gap-1.5"><RotateCw size={13} /> Click to Flip Specs</span>
                    <span className="text-slate-500">Card 0{activeCardIdx}</span>
                  </div>
                </div>

                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 md:p-10 rounded-3xl bg-slate-950/95 border-2 border-purple-500/40 backdrop-blur-2xl flex flex-col justify-between text-left shadow-[0_15px_40px_rgba(168,85,247,0.2)]">
                  <div>
                    <div className="flex justify-between items-center text-xs font-mono text-purple-400 mb-3 font-bold">
                      <span>ARCHITECTURE BREAKDOWN</span>
                      <span>FLIPPED</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{currentProject.title}</h4>
                    <div className="space-y-2 text-xs text-slate-300 mb-4">
                      {currentProject.architecture.map((arch, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2">
                          <span className="text-purple-400">&bull;</span>
                          <span>{arch}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {currentProject.techStack.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(currentProject);
                      }}
                      className="px-4 py-2 rounded-xl bg-purple-500 text-white font-mono text-xs font-bold hover:bg-purple-400 transition-all flex items-center gap-1"
                    >
                      <span>Open Full Modal</span>
                      <ArrowUpRight size={14} />
                    </button>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1"><RotateCw size={12} /> Flip Back</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* Card Navigation Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevCard}
            className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:bg-white hover:text-black transition-all shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="px-6 py-3 rounded-full bg-slate-900 border border-slate-700 hover:border-indigo-400 font-mono text-xs text-indigo-300 transition-all flex items-center gap-2"
          >
            <RotateCw size={14} className={isFlipped ? "rotate-180 transition-transform" : ""} />
            <span>{isFlipped ? "Show Front Side" : "Flip to Details"}</span>
          </button>

          <button
            onClick={nextCard}
            className="p-3 rounded-full bg-slate-900 border border-slate-700 hover:bg-white hover:text-black transition-all shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Grid Thumbnail Ribbon */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
          <div
            onClick={() => {
              setActiveCardIdx(0);
              setIsFlipped(false);
            }}
            className={`shrink-0 w-44 p-4 rounded-2xl border transition-all cursor-pointer ${
              0 === activeCardIdx
                ? "bg-indigo-950/60 border-indigo-400 shadow-lg scale-105"
                : "bg-slate-900/40 border-slate-800 hover:border-slate-700 opacity-60"
            }`}
          >
            <div className="text-[10px] font-mono text-indigo-400 mb-1">CARD #00</div>
            <h4 className="text-xs font-bold text-white truncate">Hafiz Ruslan (Bio)</h4>
          </div>

          {PORTFOLIO_DATA.projects.map((p, idx) => (
            <div
              key={p.id}
              onClick={() => {
                setActiveCardIdx(idx + 1);
                setIsFlipped(false);
              }}
              className={`shrink-0 w-44 p-4 rounded-2xl border transition-all cursor-pointer ${
                idx + 1 === activeCardIdx
                  ? "bg-indigo-950/60 border-indigo-400 shadow-lg scale-105"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700 opacity-60"
              }`}
            >
              <div className="text-[10px] font-mono text-indigo-400 mb-1">CARD 0{idx + 1}</div>
              <h4 className="text-xs font-bold text-white truncate">{p.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <ContactSection themeStyle="bento" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
