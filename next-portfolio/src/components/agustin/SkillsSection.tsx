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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/20 transition-all duration-200 group/skill"
                    >
                      <span className="font-medium text-sm text-white/90 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-white/60">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>            </div>
          ))}
        </div>

        {/* Distinct Section Separator */}
        <div className="mt-20 divider-line" />
      </div>
    </section>
  );
};
