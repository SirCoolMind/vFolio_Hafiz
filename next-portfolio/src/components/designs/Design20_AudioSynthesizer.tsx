"use client";

import React, { useState, useEffect, useRef } from "react";
import { Activity, Sliders, Volume2, Download, ArrowRight, Radio, Play, Pause, Headphones } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design20_AudioSynthesizer: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [waveType, setWaveType] = useState<"sine" | "square" | "sawtooth">("sine");
  const [frequency, setFrequency] = useState<number>(440);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Real-time Audio Oscilloscope Waveform Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#f43f5e";
      ctx.beginPath();

      const sliceWidth = width / 200;
      let x = 0;

      for (let i = 0; i < 200; i++) {
        const t = (i / 200) * Math.PI * (frequency / 60) + phase;
        let y = height / 2;

        if (waveType === "sine") {
          y += Math.sin(t) * (height / 3);
        } else if (waveType === "square") {
          y += (Math.sin(t) >= 0 ? 1 : -1) * (height / 3.5);
        } else if (waveType === "sawtooth") {
          y += ((t % (Math.PI * 2)) / (Math.PI * 2) - 0.5) * (height / 1.8);
        }

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);

        x += sliceWidth;
      }

      ctx.stroke();

      if (isPlaying) {
        phase += 0.08;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [frequency, waveType, isPlaying]);

  return (
    <div className="min-h-screen bg-[#0e0408] text-slate-100 font-mono selection:bg-[#f43f5e] selection:text-white relative overflow-x-hidden">
      <CustomCursor variant="reticle" color="#f43f5e" />

      {/* Ambient Red Glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-rose-600/15 via-red-600/10 to-orange-600/15 blur-[160px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-black/60 border-b border-rose-500/20 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-7 h-7 rounded-lg object-cover object-top border border-[#f43f5e]"
            />
            <Radio className="text-[#f43f5e] animate-pulse" size={18} />
            <span className="font-bold text-white uppercase tracking-widest">
              SYNTHESIS LAB // DESIGN 20
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400 hidden sm:inline">FREQ: {frequency}Hz</span>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg bg-[#f43f5e] text-white font-bold text-xs hover:bg-rose-400 transition-all flex items-center gap-1.5 shadow-lg shadow-rose-500/25"
            >
              <Download size={13} /> SCORE.PDF
            </a>
          </div>
        </div>
      </header>

      {/* Main Oscilloscope Hero Section with Sound Engineer Photo Frame */}
      <section className="pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs mb-6">
              <Headphones size={14} className="text-rose-400" />
              <span>SOUND ENGINEER & SOFTWARE ARCHITECT</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-none mb-6">
              Harmonic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-300 to-amber-400">
                Synthesis
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
              Muhammad Hafiz Ruslan &bull; Synthesizing ultra-fast backend throughput (1,000+ pgs/sec LaTeX pipeline), frequency-tuned space allocation algorithms (300+ rooms across 80+ levels), and reactive cloud interfaces.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-8">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl bg-[#f43f5e] hover:bg-rose-400 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-rose-500/30 flex items-center gap-2"
              >
                <span>Audition Case Studies</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-5 py-3.5 rounded-xl bg-black/60 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 hover:bg-rose-950/40 transition-colors"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlaying ? "Pause Waveform" : "Resume Waveform"}</span>
              </button>
            </div>
          </div>

          {/* Sound Engineer Profile Monitor & Oscilloscope Display */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Engineer Profile Card */}
            <div className="p-3 rounded-2xl bg-black/80 border border-rose-500/30 flex items-center gap-3.5">
              <div className="w-14 h-18 rounded-lg overflow-hidden bg-slate-950 border border-rose-500/40 shrink-0">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_60%]"
                />
              </div>
              <div className="text-xs">
                <div className="text-white font-bold text-sm">{PORTFOLIO_DATA.personal.name}</div>
                <div className="text-rose-400 font-semibold text-[11px]">{PORTFOLIO_DATA.personal.title}</div>
                <div className="text-slate-400 text-[10px] mt-0.5">UiTM CS (3.53 GPA) &bull; Age 28</div>
              </div>
            </div>

            {/* Interactive Oscilloscope Display & Synthesizer Controls */}
            <div className="p-6 rounded-3xl bg-black/80 border border-rose-500/30 shadow-2xl relative">
              <div className="flex items-center justify-between text-xs text-rose-400 pb-3 mb-4 border-b border-rose-500/20">
                <span className="flex items-center gap-2"><Sliders size={14} /> OSCILLOSCOPE DISPATCH</span>
                <span>{waveType.toUpperCase()} WAVE</span>
              </div>

              {/* Canvas Oscilloscope */}
              <div className="w-full h-36 rounded-2xl bg-slate-950 border border-rose-900/60 relative overflow-hidden mb-4 flex items-center">
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#f43f5e_1px,transparent_1px),linear-gradient(to_bottom,#f43f5e_1px,transparent_1px)] bg-[size:16px_16px]" />
                <canvas ref={canvasRef} className="w-full h-full relative z-10" />
              </div>

              {/* Synthesizer Waveform Selectors & Frequency Fader */}
              <div className="space-y-3 text-xs">
                <div className="flex gap-2">
                  {(["sine", "square", "sawtooth"] as const).map((w) => (
                    <button
                      key={w}
                      onClick={() => setWaveType(w)}
                      className={`flex-1 py-1.5 rounded-xl uppercase font-bold border transition-all ${
                        waveType === w
                          ? "bg-[#f43f5e] text-white border-[#f43f5e]"
                          : "bg-black border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1 text-[11px]">
                    <span>FREQUENCY MODULATOR</span>
                    <span className="text-rose-400 font-bold">{frequency} Hz</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1200"
                    value={frequency}
                    onChange={(e) => setFrequency(parseInt(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-rose-500/20">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-rose-400 mb-1 block">
              AUDIO SPECTRUM VAULT
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
              Harmonic Case Studies
            </h2>
          </div>
          <span className="text-xs text-slate-400">[ 10 TRACKS RECORDED ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-6 rounded-3xl bg-black/60 border border-rose-500/20 hover:border-rose-400 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between text-xs text-rose-400 mb-3">
                  <span className="uppercase">{project.category}</span>
                  <span className="text-slate-500">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">{project.highlight}</p>
                <div className="p-3 rounded-xl bg-slate-950 border border-rose-900/40 text-xs text-slate-200 mb-4">
                  <span className="text-[10px] uppercase text-rose-400 block mb-0.5">Scale Resonance</span>
                  <span className="font-bold">{project.metrics}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs text-rose-400 font-bold">
                <span>OPEN FREQUENCY</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection themeStyle="cyber" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
