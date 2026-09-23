"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const SkillsSection: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...PORTFOLIO_DATA.skillCategories.map((c) => c.title)];

  const filteredCategories =
    activeCategory === "All"
      ? PORTFOLIO_DATA.skillCategories
      : PORTFOLIO_DATA.skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="relative pt-12 pb-24 md:pt-16 md:pb-32 bg-black text-white px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Signature Numbered Format */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-white/40 mb-3">
              <span className="text-xl md:text-2xl font-mono font-bold text-white">(01)</span>
              <span className="font-serif italic text-lg text-white/70">the toolkit</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
              Software <span className="font-bold">skills</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-white/60 font-sans max-w-md">
            A comprehensive, battle-tested technology stack refined across enterprise client deployments, high-throughput document engines, and scalable web platforms.
          </p>
        </div>

        {/* Filter Tabs */}
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

        {/* Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-mono text-white/40">
                    {cat.skills.length} skills
                  </span>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-medium text-white/90 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          {skill.tag && (
                            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-white/60">
                              {skill.tag}
                            </span>
                          )}
                          <span className="text-xs font-mono text-white/40">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Level Progress Bar */}
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-white/60 to-white group-hover/skill:from-emerald-400 group-hover/skill:to-teal-300 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                <span>Verified Production Experience</span>
                <span className="text-emerald-400">● Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Skill Tags Cloud */}
        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.01]">
          <span className="text-xs uppercase font-mono tracking-widest text-white/40 block mb-4">
            Quick Stack Inventory
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              "PHP 8.3",
              "Laravel 11",
              "Vue 3",
              "React",
              "Next.js",
              "LaTeX Engine",
              "MySQL Optimization",
              "Redis",
              "Node.js",
              "Tailwind CSS",
              "TypeScript",
              "Docker",
              "Homestead",
              "Laragon",
              "Linux Ubuntu",
              "REST APIs",
              "Spatie RBAC",
              "ApexCharts",
              "WebSockets",
              "MongoDB",
              "Git Flow",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-xs font-mono text-white/80 hover:border-white hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Distinct Section Separator */}
        <div className="mt-20 divider-line" />
      </div>
    </section>
  );
};
