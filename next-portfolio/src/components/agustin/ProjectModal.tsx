"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCaseStudy } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/90 backdrop-blur-xl">
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-10 z-10 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-white/20 hover:border-white text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Header */}
          <div className="mb-8 pr-12">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white/10 text-white border border-white/15">
                {project.category}
              </span>
              <span className="text-xs font-mono text-white/50">{project.year}</span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">{project.metrics}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              {project.title}
            </h2>
            <p className="text-base text-white/70 font-sans">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metric Highlight Callout */}
          <div className="p-5 rounded-2xl border border-white/15 bg-white/5 mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-white/40 block mb-1">
              Engineering Highlight &amp; Metric
            </span>
            <p className="text-sm sm:text-base font-medium text-white/95">
              {project.highlight}
            </p>
          </div>

          {/* Problem & Solution Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <span className="text-xs uppercase font-mono tracking-widest text-rose-400 block mb-2 font-bold">
                The Engineering Problem
              </span>
              <p className="text-sm text-white/70 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 block mb-2 font-bold">
                The Architectural Solution
              </span>
              <p className="text-sm text-white/70 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pillars */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="mb-8">
              <span className="text-xs uppercase font-mono tracking-widest text-white/40 block mb-3">
                Key Architectural Pillars
              </span>
              <div className="space-y-2">
                {project.architecture.map((arch, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="text-emerald-400 font-mono text-xs mt-0.5">0{i + 1}.</span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mb-8 pt-6 border-t border-white/10">
            <span className="text-xs uppercase font-mono tracking-widest text-white/40 block mb-3">
              Technologies &amp; Libraries
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 text-white/90 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                <span>Live Demo / Portal</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-xs uppercase tracking-wider hover:border-white hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <span>Source Code / Repo</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
