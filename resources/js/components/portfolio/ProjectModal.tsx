import React, { useEffect } from "react";
import { ProjectCaseStudy } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-neutral-950 border border-white/20 rounded-3xl p-6 sm:p-8 md:p-12 z-10 shadow-2xl my-auto max-h-[90vh] overflow-y-auto">
        {/* Header bar: category, close button */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white/10 text-white/90 border border-white/15">
              {project.category}
            </span>
            <span className="text-xs font-mono text-emerald-400 font-semibold">
              {project.metrics}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 text-white"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Title and Subtitle */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            {project.title}
          </h2>
          <p className="text-base sm:text-xl font-light text-white/70 font-sans">
            {project.subtitle}
          </p>
        </div>

        {/* Problem vs Solution Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/[0.03]">
            <span className="text-xs uppercase font-mono tracking-widest text-red-400 font-bold block mb-2">
              The Challenge &amp; Problem
            </span>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03]">
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold block mb-2">
              Architectural Solution
            </span>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Pillars */}
        <div className="mb-8 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <span className="text-xs uppercase font-mono tracking-widest text-white/40 font-bold block mb-4">
            Core Architecture Pillars
          </span>
          <ul className="space-y-3">
            {project.architecture.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-white/80">
                <span className="text-emerald-400 mt-1 text-xs">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips & Action CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 text-white/80 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                Live Demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                GitHub Code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
