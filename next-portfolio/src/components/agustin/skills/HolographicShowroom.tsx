import React, { useState } from "react";
import { RICH_SKILLS, RichSkill } from "./skills-data";
import { TechIcon } from "./TechIcon";
import {
  Sparkles,
  Zap,
  Server,
  Terminal,
} from "lucide-react";

interface GridSkillItem {
  skill: RichSkill;
  colSpan: string;
}

export const HolographicShowroom: React.FC = () => {
  const [activeHighlight, setActiveHighlight] = useState<RichSkill>(RICH_SKILLS[0]);

  // Track 1 and Track 2 for dual-direction infinite marquee ribbons
  const track1 = [
    RICH_SKILLS.find((s) => s.id === "vue")!,
    RICH_SKILLS.find((s) => s.id === "laravel-backend")!,
    RICH_SKILLS.find((s) => s.id === "nodejs")!,
    RICH_SKILLS.find((s) => s.id === "vite")!,
    RICH_SKILLS.find((s) => s.id === "latex-pipeline")!,
    RICH_SKILLS.find((s) => s.id === "clickhouse")!,
    RICH_SKILLS.find((s) => s.id === "gitlab-devsecops")!,
    RICH_SKILLS.find((s) => s.id === "antigravity")!,
    RICH_SKILLS.find((s) => s.id === "redis-valkey")!,
    RICH_SKILLS.find((s) => s.id === "docker-vbox")!,
    RICH_SKILLS.find((s) => s.id === "on-prem-nvidia")!,
  ].filter(Boolean);

  const track2 = [
    RICH_SKILLS.find((s) => s.id === "react-next")!,
    RICH_SKILLS.find((s) => s.id === "blade-jquery")!,
    RICH_SKILLS.find((s) => s.id === "npm")!,
    RICH_SKILLS.find((s) => s.id === "pnpm")!,
    RICH_SKILLS.find((s) => s.id === "mysql")!,
    RICH_SKILLS.find((s) => s.id === "nosql-mongo")!,
    RICH_SKILLS.find((s) => s.id === "git-versioning")!,
    RICH_SKILLS.find((s) => s.id === "etl-data")!,
    RICH_SKILLS.find((s) => s.id === "claude-code")!,
    RICH_SKILLS.find((s) => s.id === "deepseek-qwen")!,
    RICH_SKILLS.find((s) => s.id === "local-agent")!,
    RICH_SKILLS.find((s) => s.id === "laragon-homestead")!,
  ].filter(Boolean);

  // 4 Stacks, mathematically aligned in 12-column grids with clean top hairline accents (no light leaking!)
  const categories = [
    {
      title: "Front-End Presentation",
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      topBorder: "border-t-emerald-500",
      iconBadge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      totalCount: 5,
      summary: "High-performance reactive interfaces and asset compilation engines built with Vue 3, React, Vite, NPM, and PNPM.",
      row1: [
        { skill: RICH_SKILLS.find((s) => s.id === "vue")!, colSpan: "col-span-12 sm:col-span-4" },
        { skill: RICH_SKILLS.find((s) => s.id === "react-next")!, colSpan: "col-span-12 sm:col-span-4" },
        { skill: RICH_SKILLS.find((s) => s.id === "vite")!, colSpan: "col-span-12 sm:col-span-4" },
      ],
      row2: [
        { skill: RICH_SKILLS.find((s) => s.id === "npm")!, colSpan: "col-span-12 sm:col-span-6" },
        { skill: RICH_SKILLS.find((s) => s.id === "pnpm")!, colSpan: "col-span-12 sm:col-span-6" },
      ],
    },
    {
      title: "Backend Presentation",
      icon: <Server className="w-5 h-5 text-rose-400" />,
      topBorder: "border-t-rose-500",
      iconBadge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      totalCount: 7,
      summary: "Enterprise service architecture, 1,000+ pgs/sec LaTeX pipeline, Node.js runtime, MySQL indexing, ClickHouse, and Redis.",
      row1: [
        { skill: RICH_SKILLS.find((s) => s.id === "laravel-backend")!, colSpan: "col-span-6 sm:col-span-3" },
        { skill: RICH_SKILLS.find((s) => s.id === "nodejs")!, colSpan: "col-span-6 sm:col-span-3" },
        { skill: RICH_SKILLS.find((s) => s.id === "latex-pipeline")!, colSpan: "col-span-6 sm:col-span-3" },
        { skill: RICH_SKILLS.find((s) => s.id === "mysql")!, colSpan: "col-span-6 sm:col-span-3" },
      ],
      row2: [
        { skill: RICH_SKILLS.find((s) => s.id === "clickhouse")!, colSpan: "col-span-12 sm:col-span-4" },
        { skill: RICH_SKILLS.find((s) => s.id === "postgres-sqlite")!, colSpan: "col-span-6 sm:col-span-4" },
        { skill: RICH_SKILLS.find((s) => s.id === "redis-valkey")!, colSpan: "col-span-6 sm:col-span-4" },
      ],
    },
    {
      title: "DevOps & Runtime Infra",
      icon: <Terminal className="w-5 h-5 text-sky-400" />,
      topBorder: "border-t-sky-500",
      iconBadge: "bg-sky-500/10 text-sky-400 border-sky-500/20",
      totalCount: 6,
      summary: "GitLab DevSecOps automation, Git flow, ETL pipelines (Talend, Apache HOP), Docker, Laragon, and Linux administration.",
      row1: [
        { skill: RICH_SKILLS.find((s) => s.id === "gitlab-devsecops")!, colSpan: "col-span-12 sm:col-span-4" },
        { skill: RICH_SKILLS.find((s) => s.id === "git-versioning")!, colSpan: "col-span-6 sm:col-span-4" },
        { skill: RICH_SKILLS.find((s) => s.id === "etl-data")!, colSpan: "col-span-6 sm:col-span-4" },
      ],
      row2: [
        { skill: RICH_SKILLS.find((s) => s.id === "docker-vbox")!, colSpan: "col-span-12 sm:col-span-4" },
        { skill: RICH_SKILLS.find((s) => s.id === "laragon-homestead")!, colSpan: "col-span-6 sm:col-span-4" },
        { skill: RICH_SKILLS.find((s) => s.id === "linux-systems")!, colSpan: "col-span-6 sm:col-span-4" },
      ],
    },
    {
      title: "AI & Autonomous Workflows",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      topBorder: "border-t-purple-500",
      iconBadge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      totalCount: 5,
      summary: "Google Antigravity agentic workflows, Claude Code CLI agent, DeepSeek reasoning, Local Agents, and NVIDIA GPU acceleration.",
      row1: [
        { skill: RICH_SKILLS.find((s) => s.id === "antigravity")!, colSpan: "col-span-12 sm:col-span-4" },
        { skill: RICH_SKILLS.find((s) => s.id === "claude-code")!, colSpan: "col-span-6 sm:col-span-4" },
        { skill: RICH_SKILLS.find((s) => s.id === "deepseek-qwen")!, colSpan: "col-span-6 sm:col-span-4" },
      ],
      row2: [
        { skill: RICH_SKILLS.find((s) => s.id === "local-agent")!, colSpan: "col-span-12 sm:col-span-6" },
        { skill: RICH_SKILLS.find((s) => s.id === "on-prem-nvidia")!, colSpan: "col-span-12 sm:col-span-6" },
      ],
    },
  ];

  // OCD-Precision Skill Pill: Rigid grid width, zero layout shifts, floating hover popup tooltip (no percentage verified)
  const renderGridSkill = (item: GridSkillItem) => {
    const { skill, colSpan } = item;
    const isSelected = activeHighlight.id === skill.id;

    return (
      <div key={skill.id} className={`${colSpan} relative group/pill`}>
        <button
          onClick={() => setActiveHighlight(skill)}
          className={`relative w-full h-11 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 text-xs text-white/90 cursor-pointer overflow-hidden ${
            isSelected
              ? "bg-[#161B28] border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.16),inset_0_1px_1px_rgba(255,255,255,0.3)]"
              : "bg-[#10141E] hover:bg-[#141824] border border-white/[0.08] hover:border-white/35 hover:shadow-[0_0_20px_rgba(255,255,255,0.16),inset_0_1px_1px_rgba(255,255,255,0.3)]"
          }`}
        >
          {/* Surface Shiny Specular Sheen (Sweeps diagonally on hover) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.14] to-transparent shine-sheen-bar pointer-events-none -translate-x-[150%]" />
          </div>

          {/* Traveling Radiant Glowing Beam on Border (Firefox & Chromium compatible) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none rounded-xl overflow-visible opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300"
            style={{ zIndex: 1 }}
            aria-hidden="true"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="12"
              fill="none"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="1.5"
              strokeDasharray="60 300"
              className="glow-beam-rect group-hover/pill:animate-glow-beam"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Core Icon with Apple iOS Delete App Jiggle Mode */}
          <div className="relative z-[2] flex-shrink-0 core-icon-container group-hover/pill:animate-ios-jiggle">
            <TechIcon skill={skill} size="sm" />
          </div>

          <span className="relative z-[2] font-semibold text-xs tracking-tight text-white/90 group-hover/pill:text-white truncate">
            {skill.shortName}
          </span>
        </button>

        {/* Floating Pop-up Tooltip: Hover only, Zero effect on pill width or layout, percentage removed */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-50 opacity-0 group-hover/pill:opacity-100 transition-all duration-200 translate-y-1 group-hover/pill:translate-y-0 flex flex-col items-center">
          <div className="px-3.5 py-2 rounded-xl bg-neutral-950 border border-white/20 shadow-[0_12px_28px_rgba(0,0,0,0.9)] backdrop-blur-xl whitespace-nowrap text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs text-white">
                {skill.fullName}
              </span>
              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border uppercase font-medium ${skill.badgeStyle}`}>
                {skill.tag}
              </span>
            </div>
            <div className="text-[10px] font-mono text-white/50 mt-1">
              <span>{skill.experience} production tenure</span>
            </div>
          </div>
          {/* Tooltip Caret Pointer */}
          <div className="w-2 h-2 -mt-1 rotate-45 bg-neutral-950 border-r border-b border-white/20" />
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-10">
      {/* Dual Infinite Marquee Ribbons ("Iconic Moving Box") */}
      <div className="relative py-4 overflow-hidden rounded-2xl bg-[#090D15] border border-white/10 backdrop-blur-xl">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#090D15] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#090D15] to-transparent z-10 pointer-events-none" />

        {/* Track 1: Moving Left */}
        <div className="flex gap-4 animate-marquee mb-4">
          {[...track1, ...track1].map((skill, index) => (
            <div
              key={`${skill.id}-t1-${index}`}
              onClick={() => setActiveHighlight(skill)}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all flex-shrink-0 cursor-pointer group shadow-sm"
            >
              <TechIcon skill={skill} size="sm" />
              <span className="text-xs font-semibold text-white/90 group-hover:text-white whitespace-nowrap">
                {skill.marqueeName || skill.fullName || skill.name}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${skill.badgeStyle}`}>
                {skill.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Track 2: Moving in Reverse */}
        <div
          className="flex gap-4 animate-marquee"
          style={{ animationDirection: "reverse", animationDuration: "30s" }}
        >
          {[...track2, ...track2].map((skill, index) => (
            <div
              key={`${skill.id}-t2-${index}`}
              onClick={() => setActiveHighlight(skill)}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all flex-shrink-0 cursor-pointer group shadow-sm"
            >
              <TechIcon skill={skill} size="sm" />
              <span className="text-xs font-semibold text-white/90 group-hover:text-white whitespace-nowrap">
                {skill.marqueeName || skill.fullName || skill.name}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${skill.badgeStyle}`}>
                {skill.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Holographic Category Cards (Sleek Dark Obsidian Cards with 2px Top Accent Line - No Light Leaking!) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`relative p-6 sm:p-8 rounded-3xl bg-[#090D15]/95 border border-white/[0.08] border-t-2 ${cat.topBorder} hover:border-white/20 transition-all duration-300 shadow-2xl flex flex-col justify-between`}
          >
            <div>
              {/* Header */}
              <div className="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className={`p-2.5 sm:p-3 rounded-2xl border shadow-inner ${cat.iconBadge}`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                  {cat.totalCount} Cores
                </span>
              </div>

              {/* Summary Description with Consistent Height across Cards */}
              <p className="relative z-10 text-xs sm:text-sm text-white/60 mb-6 leading-relaxed min-h-[44px] flex items-center">
                {cat.summary}
              </p>
            </div>

            {/* Exactly 2 Clean Structured Rows in 12-Column Grid */}
            <div className="relative z-10 space-y-2.5">
              {/* Row 1 (12 Columns Total) */}
              <div className="grid grid-cols-12 gap-2.5">
                {cat.row1.map(renderGridSkill)}
              </div>

              {/* Row 2 (12 Columns Total) */}
              <div className="grid grid-cols-12 gap-2.5">
                {cat.row2.map(renderGridSkill)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
