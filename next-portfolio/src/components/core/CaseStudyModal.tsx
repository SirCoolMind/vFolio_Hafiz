"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Zap, CheckCircle2, Layers, Cpu } from "lucide-react";
import { ProjectCaseStudy } from "@/data/portfolio-data";

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950/95 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl text-slate-100 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              data-cursor-text="CLOSE"
              className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700"
            >
              <X size={20} />
            </button>

            {/* Header Badge & Category */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.year} • ARCHITECTURAL CASE STUDY
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
              {project.title}
            </h2>
            <p className="text-base md:text-lg text-slate-300 mb-6 font-light">
              {project.subtitle}
            </p>

            {/* Key Metric Banner */}
            <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-500/30 mb-8 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-0.5">
                  Performance & Scale Benchmark
                </div>
                <div className="text-base md:text-lg font-bold text-white">
                  {project.metrics}
                </div>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-rose-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" /> Challenge & Problem
                </h4>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Engineering Solution
                </h4>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="mb-8 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-indigo-300 mb-4 flex items-center gap-2">
                <Layers size={16} /> Key Architectural Pillars
              </h4>
              <ul className="space-y-3">
                {project.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-200">
                    <CheckCircle2 size={18} className="text-cyan-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Cpu size={14} /> Technology Arsenal
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="VISIT"
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink size={16} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="CODE"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-all flex items-center gap-2 border border-slate-700"
                >
                  <Github size={16} />
                  <span>View Repository</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="ml-auto px-5 py-3 rounded-xl text-slate-400 hover:text-white text-sm transition-all"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
