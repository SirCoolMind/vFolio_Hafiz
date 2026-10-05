"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Download, Award } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design6_VelvetAurora: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a14] text-slate-100 selection:bg-pink-500 selection:text-white font-sans relative overflow-x-hidden">
      <CustomCursor variant="spotlight" color="#ec4899" />

      {/* Morphing Aurora Borealis Fluid Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-pink-600/20 via-purple-600/15 to-transparent blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-cyan-600/15 via-indigo-600/15 to-transparent blur-[140px] pointer-events-none animate-pulse-slow" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-black/50 border-b border-white/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-8 h-8 rounded-full object-cover object-top border border-pink-400/60"
            />
            <div>
              <span className="font-bold text-sm text-white">Hafiz Ruslan</span>
              <span className="text-xs text-slate-400 block leading-none">Velvet Aurora // Design 06</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase font-medium tracking-wider text-slate-300">
            <a href="#creations" className="hover:text-white transition-colors">Creations</a>
            <a href="#career" className="hover:text-white transition-colors">Experience</a>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg shadow-pink-500/25 hover:opacity-90 transition-all flex items-center gap-1.5"
            >
              <Download size={13} /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* Velvet Aurora Hero with Frosted Glass Portrait Frame */}
      <section className="pt-16 pb-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center min-h-[85vh] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-pink-300 text-xs font-medium mb-6 backdrop-blur-xl">
              <Sparkles size={14} className="text-pink-400" />
              <span>STRIPE PRESS & macOS SEQUOIA AESTHETIC</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none">
              Sculpting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300">
                Experiences
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-xl font-light leading-relaxed mb-8">
              Muhammad Hafiz Ruslan — Blending high-throughput backend performance (1,000+ invoice pgs/sec LaTeX engine) with fluid, glassmorphic interfaces that delight users.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#creations"
                data-cursor-text="DISCOVER"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-semibold text-sm transition-all shadow-xl shadow-pink-500/25 flex items-center gap-2 hover:scale-105"
              >
                <span>Explore Creations</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Frosted Glass Glowing Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/20 backdrop-blur-2xl shadow-[0_20px_40px_rgba(236,72,153,0.2)] relative group max-w-[240px]">
              <div className="w-48 sm:w-56 h-60 sm:h-64 rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-500 filter brightness-105"
                />
              </div>

              {/* Floating Glass Pill */}
              <div className="absolute -bottom-3 -left-3 p-2 rounded-xl bg-black/80 border border-white/20 backdrop-blur-xl shadow-xl flex items-center gap-2 text-xs">
                <Award className="text-pink-400" size={16} />
                <div>
                  <div className="text-white font-bold text-[11px]">UiTM 1st Class</div>
                  <div className="text-slate-400 text-[9px]">3.53 GPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphic Project Showcase */}
      <section id="creations" className="py-24 px-4 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-white/10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-pink-400 font-bold block mb-2">
            Selected Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Cinematic Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              data-cursor-text="EXPLORE"
              className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-pink-500/40 backdrop-blur-2xl transition-all cursor-pointer group flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 font-medium">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400">{project.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">{project.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">{project.highlight}</p>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-6">
                  <div className="text-[10px] uppercase tracking-wider text-pink-400 font-bold mb-1">Key Achievement</div>
                  <div className="text-xs font-semibold text-slate-200">{project.metrics}</div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold text-pink-300">
                  <span>View Case Study</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="career" className="py-24 px-4 md:px-12 max-w-5xl mx-auto relative z-10 border-t border-white/10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-pink-400 font-bold block mb-2">
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Professional Evolution
          </h2>
        </div>

        <div className="space-y-8">
          {PORTFOLIO_DATA.workExperience.map((exp, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <div className="text-xs text-pink-400 font-semibold">{exp.company} &bull; {exp.location}</div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-slate-300">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {exp.description.map((d, dIdx) => (
                  <li key={dIdx} className="leading-relaxed">&bull; {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="relative z-10">
        <ContactSection themeStyle="glass" />
      </div>

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
