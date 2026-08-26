"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Download, ArrowRight, Zap, Code, Layers, Scan, ShieldCheck, Crosshair } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design1_CyberHud: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<"architecture" | "skills" | "timeline">("architecture");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [commandInput, setCommandInput] = useState("");
  const [systemUptime, setSystemUptime] = useState(0);
  const [isCompilingLatex, setIsCompilingLatex] = useState(false);
  const [latexPagesCount, setLatexPagesCount] = useState(1048);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.2]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.97]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const simulateLatexRun = () => {
    setIsCompilingLatex(true);
    setLatexPagesCount(0);
    let count = 0;
    const interval = setInterval(() => {
      count += 131;
      if (count >= 1048) {
        count = 1048;
        clearInterval(interval);
        setIsCompilingLatex(false);
      }
      setLatexPagesCount(count);
    }, 150);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    let res = "";

    switch (cmd) {
      case "help":
        res = "COMMANDS: bio, skills, latex, run_benchmark, projects, contact, clear";
        break;
      case "bio":
        res = `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.title} | Location: ${PORTFOLIO_DATA.personal.location}`;
        break;
      case "latex":
      case "run_benchmark":
        simulateLatexRun();
        res = "LATEX ASYNCHRONOUS DAEMON: Compiling 1,048 invoice pages... Finished in 1.22s. Zero memory leaks.";
        break;
      case "skills":
        res = "ARSENAL: PHP 8.2 (96%), Laravel (95%), Vue 3 (92%), React/Next (88%), MySQL (94%), LaTeX (92%), Redis (85%), Docker (82%)";
        break;
      case "projects":
        res = `LOADED ${PORTFOLIO_DATA.projects.length} CASE STUDIES: Budget Tracker, LaTeX Engine, Room Booking Matrix, LeadMind MERN...`;
        break;
      case "clear":
        setTerminalOutput([]);
        setCommandInput("");
        return;
      default:
        res = `UNKNOWN COMMAND: '${cmd}'. Type 'help' for diagnostics reference.`;
    }

    setTerminalOutput((prev) => [...prev, `> ${commandInput}`, res]);
    setCommandInput("");
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-400 selection:text-black font-sans relative overflow-x-hidden">
      <CustomCursor variant="reticle" color="#00f0ff" />

      {/* Cyber Grid & Scanlines */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-15" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/15 via-transparent to-transparent" />

      {/* Top Telemetry Flight Deck */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#07090e]/85 border-b border-cyan-500/20 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-400 font-bold tracking-widest uppercase">HAFIZ.SYS // v2.4</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">LATENCY: 14ms</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-emerald-400">STATUS: OPTIMAL</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">UPTIME: {systemUptime}s</span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#about" data-cursor-text="ABOUT" className="text-slate-400 hover:text-cyan-400 transition-colors uppercase">01 // ABOUT</a>
            <a href="#projects" data-cursor-text="WORKS" className="text-slate-400 hover:text-cyan-400 transition-colors uppercase">02 // WORK</a>
            <a href="#skills" data-cursor-text="ARSENAL" className="text-slate-400 hover:text-cyan-400 transition-colors uppercase">03 // ARSENAL</a>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="PDF"
              className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all flex items-center gap-1.5 font-bold"
            >
              <Download size={12} />
              <span>RESUME</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Biometric Photo HUD */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-16 pb-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[88vh]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          {/* Left Text Column */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider mb-6 shadow-lg shadow-cyan-950/50">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>FULLSTACK ARCHITECT & HIGH-PERFORMANCE ENGINEER</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none mb-6">
              MUHAMMAD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                HAFIZ RUSLAN
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
              Crafting high-throughput backend pipelines (1,000+ PDF pgs/sec), real-time booking algorithms (300+ rooms across 80+ levels), and cinematic web interfaces.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                data-cursor-text="EXPLORE"
                className="px-7 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono font-bold text-sm tracking-wider uppercase transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                <span>Explore Deployed Systems</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={simulateLatexRun}
                data-cursor-text="BENCHMARK"
                className="px-6 py-3.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 text-cyan-300 font-mono text-sm transition-all flex items-center gap-2"
              >
                <Zap size={16} className={isCompilingLatex ? "animate-spin text-amber-400" : "text-cyan-400"} />
                <span>{isCompilingLatex ? "Compiling LaTeX..." : "Run 1,000+ Pg LaTeX Benchmark"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Biometric Photo HUD Scanner */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative p-2.5 rounded-2xl bg-slate-900/70 border border-cyan-500/40 shadow-[0_0_30px_rgba(0,240,255,0.2)] group max-w-[240px] w-full">
              {/* HUD Corner Accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

              {/* Top HUD Badge */}
              <div className="flex items-center justify-between text-[9px] font-mono text-cyan-400 px-1.5 pb-1.5 mb-1 border-b border-cyan-500/20">
                <span className="flex items-center gap-1"><Scan size={10} /> BIOMETRIC</span>
                <span className="text-emerald-400 font-bold">VERIFIED</span>
              </div>

              {/* Authentic Portrait Image */}
              <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%] filter brightness-105 contrast-110 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Animated Cyber Scanline Bar */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-12 w-full animate-scanline" />

                {/* Reticle Overlay */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                  <Crosshair size={32} className="text-cyan-400" />
                </div>
              </div>

              {/* Bottom Identity Block */}
              <div className="mt-2 p-2 rounded-lg bg-black/85 border border-cyan-500/30 text-[10px] font-mono">
                <div className="text-white font-bold truncate">{PORTFOLIO_DATA.personal.name}</div>
                <div className="text-cyan-400 text-[9px] flex justify-between">
                  <span>UiTM CS 3.53</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Telemetry Benchmark Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-400 transition-colors"
            >
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-1">
                {stat.label}
              </div>
              <div className="text-2xl md:text-3xl font-black text-white flex items-baseline gap-1">
                {stat.value}
                <span className="text-xs font-mono font-normal text-slate-400">{stat.unit}</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Interactive About & Experience Grid */}
      <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-wrap items-center justify-between mb-12">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">01 // IDENTITY & TRAJECTORY</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Engineering Dossier
            </h2>
          </div>

          <div className="flex gap-2 p-1 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs">
            {(["architecture", "skills", "timeline"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                data-cursor-text="TAB"
                className={`px-4 py-2 rounded-lg uppercase transition-all ${
                  activeTab === tab ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "architecture" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="text-cyan-400" size={20} /> Fullstack Philosophy & Profile
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {PORTFOLIO_DATA.personal.bio}
              </p>
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-500">BASE LOCATION:</span>
                  <div className="text-cyan-300 font-bold mt-0.5">{PORTFOLIO_DATA.personal.location}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-500">ACADEMIC HONORS:</span>
                  <div className="text-cyan-300 font-bold mt-0.5">UiTM CS (1st Class 3.53)</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-indigo-950/40 border border-cyan-500/30">
              <div className="flex items-center justify-between text-cyan-400 font-mono text-xs uppercase mb-3">
                <span className="flex items-center gap-2"><Zap size={16} /> Architectural Benchmark</span>
                <span>{latexPagesCount} / 1000 PGS</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">High-Throughput LaTeX Pipeline</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Replaced legacy blocking PHP PDF generators with an asynchronous compiled LaTeX worker daemon producing 1,000+ custom financial invoices in seconds.
              </p>
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden mb-4 border border-cyan-500/30">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-indigo-400 h-full transition-all duration-200"
                  style={{ width: `${Math.min(100, (latexPagesCount / 1048) * 100)}%` }}
                />
              </div>
              <div className="space-y-2 font-mono text-xs text-slate-300">
                <div className="flex justify-between p-2 rounded bg-slate-950/60 border border-slate-800">
                  <span>Legacy DomPDF</span>
                  <span className="text-rose-400">~120s / 100 pgs</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-bold">
                  <span>Hafiz LaTeX Worker</span>
                  <span>&lt; 2.5s / 1000 pgs (4000% Faster)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div id="skills" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <h4 className="text-sm font-mono font-bold uppercase text-cyan-400 mb-4 pb-2 border-b border-slate-800">
                  {cat.title}
                </h4>
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-slate-200">{skill.name}</span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.04 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="space-y-6">
            {PORTFOLIO_DATA.workExperience.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <div className="text-cyan-400 font-mono text-xs">{exp.company} • {exp.location}</div>
                  </div>
                  <span className="px-3 py-1 rounded font-mono text-xs bg-slate-800 text-slate-300 border border-slate-700">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Projects Showcase Grid */}
      <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
            <Layers size={14} /> Production Systems Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-4">
            Case Studies & Deployments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(project)}
              data-cursor-text="VIEW"
              className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4 font-light leading-relaxed">
                  {project.highlight}
                </p>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-4">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-0.5">
                    Benchmark Metric
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    {project.metrics}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono text-cyan-400">
                <span>Inspect Case Study</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Terminal */}
      <section id="terminal" className="py-16 px-4 md:px-8 max-w-4xl mx-auto border-t border-slate-800/80">
        <div className="p-6 md:p-8 rounded-3xl bg-black border border-cyan-500/30 font-mono text-xs shadow-2xl shadow-cyan-950/40">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-cyan-400" />
              <span>HAF_TERMINAL_V2.0 // CLI DIAGNOSTICS</span>
            </div>
            <span className="text-[10px] text-emerald-400">STATUS: ONLINE</span>
          </div>

          <div className="space-y-2 mb-4 max-h-48 overflow-y-auto text-slate-300">
            <div>&gt; Type <strong className="text-cyan-300">&apos;help&apos;</strong> to view command reference.</div>
            {terminalOutput.map((out, idx) => (
              <div key={idx} className={out.startsWith(">") ? "text-cyan-400 font-bold" : "text-slate-300"}>
                {out}
              </div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-slate-900">
            <span className="text-cyan-400 font-bold">&gt;</span>
            <input
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              placeholder="type command (e.g. latex, skills, bio)..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-slate-600 text-xs"
            />
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection themeStyle="cyber" />

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
