"use client";

import React, { useState, useEffect, useRef } from "react";
import { Atom, ArrowRight, Download, Zap, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design10_ParticleNexus: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Interactive Particle Physics Simulation
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

    const mouse = { x: -1000, y: -1000, radius: 140 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.vx = 0;
        this.vy = 0;
        this.size = Math.random() * 2.5 + 1;
        this.color = color;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.vx -= Math.cos(angle) * force * 5;
          this.vy -= Math.sin(angle) * force * 5;
        }

        const homeDx = this.originX - this.x;
        const homeDy = this.originY - this.y;
        this.vx += homeDx * 0.05;
        this.vy += homeDy * 0.05;
        this.vx *= 0.85;
        this.vy *= 0.85;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const colors = ["#10b981", "#06b6d4", "#3b82f6", "#ffffff"];

    const count = Math.min(240, Math.floor(width / 6));
    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(new Particle(x, y, color));
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.25 * (1 - dist / 85)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#040907] text-slate-100 selection:bg-emerald-400 selection:text-black font-sans relative overflow-x-hidden">
      <CustomCursor variant="fluid" color="#10b981" />

      {/* Physics Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-70" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/60 border-b border-white/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-8 h-8 rounded-full object-cover object-top border border-emerald-400/60"
            />
            <div>
              <span className="font-bold text-sm text-white">Hafiz Ruslan</span>
              <span className="text-xs text-slate-400 block leading-none">Particle Nexus Canvas // Design 10</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono uppercase text-slate-400">
            <a href="#projects" className="hover:text-white transition-colors">Particles</a>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold hover:bg-emerald-500 hover:text-black transition-all flex items-center gap-1.5"
            >
              <Download size={13} /> Curriculum
            </a>
          </div>
        </div>
      </header>

      {/* Generative Hero with Particle Nexus Portrait Portal */}
      <section className="pt-20 pb-28 px-4 md:px-12 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[85vh] relative z-10">
        {/* Glowing Nexus Portrait Portal */}
        <div className="relative mb-6 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-pulse-slow">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
              <img
                src={PORTFOLIO_DATA.personal.avatar}
                alt={PORTFOLIO_DATA.personal.name}
                className="w-full h-full object-cover object-[center_65%] group-hover:scale-110 transition-transform duration-500 filter brightness-105"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-400/50 text-[9px] font-mono text-emerald-300 uppercase tracking-widest whitespace-nowrap shadow-lg">
            NEXUS // HAFIZ
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs mb-6">
          <Zap size={14} className="text-emerald-400" />
          <span>REAL-TIME GENERATIVE PARTICLE PHYSICS</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white mb-6 leading-none">
          Reactive Systems <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            & High Velocity
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
          Muhammad Hafiz Ruslan &bull; Crafting asynchronous LaTeX document compilers (1,000+ pgs/sec), multi-level room reservation systems, and interactive cloud applications.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            data-cursor-text="DISPERSE"
            className="px-8 py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-emerald-500/25 flex items-center gap-2"
          >
            <span>Explore Particle Nexus</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-24 px-4 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-white/10">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            Generative Systems Matrix
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase">
            Deployed Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor-text="INSPECT"
              className="p-7 rounded-3xl bg-black/60 border border-emerald-500/20 hover:border-emerald-400/60 backdrop-blur-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between text-xs font-mono text-emerald-400 mb-3">
                  <span className="uppercase">{project.category}</span>
                  <span className="text-slate-500">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">{project.highlight}</p>
                <div className="p-3.5 rounded-2xl bg-black/80 border border-slate-800 text-xs text-slate-200 mb-4">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-0.5">Scale Metric</span>
                  <span className="font-semibold">{project.metrics}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono text-emerald-400">
                <span>View Nexus Node</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
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
