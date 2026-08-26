"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { ProjectModal } from "./ProjectModal";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Fullstack", "High Performance", "Enterprise", "Frontend & UI", "Systems"];

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-24 md:py-32 bg-black text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-white/40 mb-3">
              <span className="text-xl md:text-2xl font-mono font-bold text-white">(04)</span>
              <span className="font-serif italic text-lg text-white/70">selected work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
              Case <span className="font-bold">studies</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-white/60 font-sans max-w-md">
            Interactive breakdown of 10 real production systems, document pipelines, scheduling platforms, and web engines.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12 pb-6 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-black font-bold shadow-lg"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
              data-cursor-text="Filter"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project List (Agustin Burgos editorial link style) */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="py-8 md:py-12 group cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-white/[0.02] px-4 md:px-6 rounded-2xl transition-all duration-300"
              data-cursor-text="Inspect"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-white/40">
                    (0{idx + 1})
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/10 text-white/80">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-medium">
                    {project.metrics}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white group-hover:text-emerald-400 group-hover:translate-x-2 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-white/60 font-sans mt-2 max-w-2xl">
                  {project.subtitle}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action and Arrow */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white transition-colors hidden sm:inline">
                  View Case Study
                </span>
                <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300 flex items-center justify-center text-white">
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal viewer */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Distinct Section Separator */}
        <div className="mt-20 divider-line" />
      </div>
    </section>
  );
};
