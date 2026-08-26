"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Download, Droplet, Layers } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design12_LiquidChrome: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Liquid Mercury Ripple Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const drops: { x: number; y: number; r: number; vx: number; vy: number; color: string }[] = [];
    const colors = ["#a855f7", "#ec4899", "#06b6d4", "#f43f5e", "#e2e8f0"];

    for (let i = 0; i < 40; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 80 + 30,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        color: colors[i % colors.length],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      drops.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -d.r) d.x = width + d.r;
        if (d.x > width + d.r) d.x = -d.r;
        if (d.y < -d.r) d.y = height + d.r;
        if (d.y > height + d.r) d.y = -d.r;

        const grad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r);
        grad.addColorStop(0, `${d.color}25`);
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#07050d] text-slate-100 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      <CustomCursor variant="fluid" color="#c084fc" />

      {/* Fluid Mercury Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40 blur-2xl" />

      {/* Iridescent Ambient Glows */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/15 via-fuchsia-500/10 to-cyan-500/15 blur-[160px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-black/40 border-b border-white/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-8 h-8 rounded-full object-cover object-top border border-purple-400/60"
            />
            <span className="font-bold text-sm text-white tracking-wide">LIQUID CHROME // DESIGN 12</span>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-wider font-semibold">
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Creations</a>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all flex items-center gap-1.5"
            >
              <Download size={13} /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* Liquid Chrome Hero with Fluid Portrait Frame */}
      <section className="pt-20 pb-28 px-6 md:px-12 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center items-center text-center relative z-10">
        {/* Iridescent Liquid Chrome Portrait Frame */}
        <div className="relative mb-6 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-purple-500 via-pink-400 to-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.3)] rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300">
            <div className="w-full h-full rounded-xl overflow-hidden bg-black">
              <img
                src={PORTFOLIO_DATA.personal.avatar}
                alt={PORTFOLIO_DATA.personal.name}
                className="w-full h-full object-cover object-[center_60%] filter brightness-105 contrast-110 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-black/80 border border-white/20 text-[9px] font-mono text-purple-300 uppercase tracking-widest whitespace-nowrap shadow-xl">
            HAFIZ &bull; 3.53 GPA
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-medium mb-6 backdrop-blur-xl">
          <Droplet size={14} className="text-purple-400" />
          <span>FLUID MERCURY & HOLOGRAPHIC REFRACTION</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white mb-6 leading-none">
          Liquid Chrome <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-400">
            Fullstack Artistry
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
          Muhammad Hafiz Ruslan &bull; Engineering high-velocity compiled LaTeX pipelines (1,000+ pgs/sec) and reactive glassmorphic architectures with fluid precision.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xl shadow-purple-500/25 hover:scale-105"
          >
            Explore Fluid Works
          </a>
        </div>
      </section>

      {/* Refractive Glass Projects Grid */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-white/10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-bold block mb-2">
            REFRACTIVE VAULT
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase">
            Prism Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="p-8 rounded-3xl bg-white/[0.04] border border-white/15 hover:border-purple-400/60 backdrop-blur-2xl transition-all cursor-pointer group flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center text-xs mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-medium">
                    {project.category}
                  </span>
                  <span className="text-slate-400">{project.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-6 font-light">{project.highlight}</p>
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-xs mb-6">
                  <span className="text-[10px] uppercase text-purple-400 font-bold block mb-1">Benchmark Throughput</span>
                  <span className="font-semibold text-slate-200">{project.metrics}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold text-purple-300">
                <span>Inspect Prism Node</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
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
