"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Orbit, Download, ArrowRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design4_SpatialCosmos: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.12]);

  // Starfield animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const stars: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < 180; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.4 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.y -= star.speed;
        if (star.y < 0) star.y = height;

        ctx.fillStyle = star.alpha > 0.6 ? "#a855f7" : `rgba(255, 255, 255, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-purple-500 selection:text-white font-sans relative overflow-x-hidden">
      <CustomCursor variant="spotlight" color="#a855f7" />

      {/* Dynamic Starfield Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />

      {/* Cosmic Nebula Backdrops */}
      <div className="fixed top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[160px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[160px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-black/60 border-b border-white/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-8 h-8 rounded-full object-cover object-top border border-purple-400/60"
            />
            <span className="font-bold text-sm tracking-wide text-white">Spatial Cosmos 3D // Hafiz Ruslan</span>
          </div>

          <nav className="flex items-center gap-6 text-xs font-mono uppercase text-slate-400">
            <a href="#systems" className="hover:text-white transition-colors">Systems</a>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500 hover:text-white transition-all flex items-center gap-1.5"
            >
              <Download size={13} /> Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Spatial 3D Hero with Holographic Portrait Orb */}
      <motion.section
        style={{ scale }}
        className="relative pt-20 pb-28 px-4 md:px-12 max-w-6xl mx-auto text-center flex flex-col items-center justify-center min-h-[85vh] z-10"
      >
        {/* Floating Holographic Portrait Orb */}
        <div className="relative mb-6 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.3)] animate-pulse-slow">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
              <img
                src={PORTFOLIO_DATA.personal.avatar}
                alt={PORTFOLIO_DATA.personal.name}
                className="w-full h-full object-cover object-[center_65%] group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-purple-950 border border-purple-400/50 text-[9px] font-mono text-purple-300 uppercase tracking-widest whitespace-nowrap shadow-lg">
            PILOT // HAFIZ
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-6">
          <Orbit size={14} className="animate-spin-slow" />
          <span>APPLE VISION PRO & ACTIVE THEORY PARADIGM</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 uppercase leading-none">
          Deep Space <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400">
            Engineering
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
          Orchestrating high-scale fullstack web engines, LaTeX document pipelines (1,000+ pgs/sec), and multi-tenant platforms from Banting, Malaysia to global scale.
        </p>

        {/* Orbiting Tech Glyphs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Laravel", "PHP 8.2", "Vue.js", "React.js", "MySQL", "LaTeX", "Redis", "Node.js"].map((glyph, gIdx) => (
            <motion.div
              key={gIdx}
              whileHover={{ scale: 1.1, rotateZ: 4 }}
              className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono text-slate-200 shadow-xl cursor-default"
            >
              {glyph}
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="#systems"
            data-cursor-text="EXPLORE"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider hover:from-purple-600 hover:to-indigo-700 transition-all shadow-xl shadow-purple-500/25 hover:scale-105"
          >
            Launch Systems Vault
          </a>
        </div>
      </motion.section>

      {/* Systems Grid */}
      <section id="systems" className="py-24 px-4 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-white/10">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-2">
            Orbiting Artifacts
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            Spatial Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              data-cursor-text="INSPECT"
              className="p-7 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl transition-all cursor-pointer group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">{project.highlight}</p>
                <div className="p-3.5 rounded-2xl bg-black/80 border border-white/10 text-xs mb-4">
                  <span className="text-[10px] font-mono text-purple-400 uppercase block">Benchmark Telemetry</span>
                  <span className="font-semibold text-slate-200">{project.metrics}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-purple-400">
                <span>Enter Orbit</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="relative z-10">
        <ContactSection themeStyle="cyber" />
      </div>

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
