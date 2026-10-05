"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Zap, Globe, Download, Calendar, CheckCircle, MapPin } from "lucide-react";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio-data";
import { CustomCursor } from "../core/CustomCursor";
import { CaseStudyModal } from "../core/CaseStudyModal";
import { ContactSection } from "../core/ContactSection";

export const Design3_BentoHorizon: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [currentTime, setCurrentTime] = useState("");
  const [bookingSimLevel, setBookingSimLevel] = useState(42);
  const [bookingSimRoom, setBookingSimRoom] = useState(12);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", { timeZone: "Asia/Kuala_Lumpur", hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#06070a] text-slate-100 selection:bg-indigo-500 selection:text-white font-sans relative overflow-x-hidden">
      <CustomCursor variant="default" color="#6366f1" />

      {/* Background Radial Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-900/20 via-purple-900/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#06070a]/80 border-b border-white/5 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-8 h-8 rounded-full object-cover object-top border border-indigo-400/50"
            />
            <div>
              <span className="font-bold text-sm text-white">Hafiz Ruslan</span>
              <span className="text-xs text-slate-400 block leading-none">Bento Grid Horizon // Design 03</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Contracts
            </span>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="RESUME"
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-slate-200 transition-all flex items-center gap-1.5 shadow-lg shadow-white/10"
            >
              <Download size={14} /> Resume PDF
            </a>
          </div>
        </div>
      </header>

      {/* Bento Grid Hero Matrix with Prominent Portrait Card */}
      <section className="pt-12 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Hero Text Bento Tile */}
          <div className="md:col-span-8 md:row-span-2 p-8 md:p-12 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500/30 transition-colors">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
                <Sparkles size={13} /> Fullstack Architecture & High Scale Systems
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
                  Resilient Systems
                </span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg max-w-xl font-light leading-relaxed">
                Specializing in high-throughput document pipelines (1,000+ PDF pgs/sec), multi-level facility booking platforms (300+ rooms across 80+ levels), and reactive cloud architectures.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/5">
              <a
                href="#projects"
                data-cursor-text="PROJECTS"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25"
              >
                <span>View Projects Ecosystem</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Dedicated Bento Portrait Tile of Hafiz */}
          <div className="md:col-span-4 md:row-span-2 p-6 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group hover:border-indigo-400/50 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-400/60 shadow-lg bg-slate-950">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-[center_65%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-[9px] font-bold uppercase block mb-1">
                  FULLSTACK ARCHITECT
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">{PORTFOLIO_DATA.personal.shortName}</h3>
                <div className="text-xs text-indigo-400 font-bold mt-0.5">UiTM CS 1st Class (3.53)</div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                  <MapPin size={11} className="text-indigo-400" /> Banting, MY
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5">
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1.5">
                <span>TIME (MYT):</span>
                <span className="text-emerald-400 font-bold">{currentTime || "00:00:00"}</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                {PORTFOLIO_DATA.personal.bio.slice(0, 130)}...
              </p>
            </div>
          </div>

          {/* LaTeX PDF Engine Speed Dial Widget */}
          <div className="md:col-span-4 p-6 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-indigo-400">
              <span className="flex items-center gap-1.5 uppercase">
                <Zap size={14} /> LaTeX Asynchronous Worker
              </span>
              <span className="text-slate-400">1000+ PGS</span>
            </div>
            <div className="my-2">
              <div className="text-3xl font-black text-white">
                &lt; 2.5s <span className="text-xs font-mono font-normal text-slate-400">Burst Run</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Asynchronous headless LaTeX pipeline compiling high-fidelity invoices at enterprise scale.
              </p>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-[96%]" />
            </div>
          </div>

          {/* Room Booking Simulator Widget */}
          <div className="md:col-span-4 p-6 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
              <span className="flex items-center gap-1.5 text-indigo-400">
                <Calendar size={14} /> Multi-Level Room Engine
              </span>
              <span className="text-slate-500">IMT Tech</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Level (1-80)</span>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Lvl {bookingSimLevel}</span>
                  <div className="flex gap-1">
                    <button onClick={() => setBookingSimLevel(Math.max(1, bookingSimLevel - 1))} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">-</button>
                    <button onClick={() => setBookingSimLevel(Math.min(80, bookingSimLevel + 1))} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">+</button>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Room Slot</span>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">#{bookingSimRoom}</span>
                  <div className="flex gap-1">
                    <button onClick={() => setBookingSimRoom(Math.max(1, bookingSimRoom - 1))} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">-</button>
                    <button onClick={() => setBookingSimRoom(Math.min(300, bookingSimRoom + 1))} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="flex items-center gap-1"><CheckCircle size={12} /> Zero Conflicts</span>
              <span>Available</span>
            </div>
          </div>

          {/* Tech Arsenal Quick Stack */}
          <div className="md:col-span-4 p-6 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-colors flex flex-col justify-between">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Core Tech Arsenal
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Laravel 10", "PHP 8.2", "Vue 3", "React.js", "MySQL", "LaTeX", "Redis", "Docker"].map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-200 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-[11px] text-slate-500 mt-2">
              Relational query tuning to reactive micro-frontends.
            </div>
          </div>

        </div>
      </section>

      {/* Projects Showcase Bento Grid */}
      <section id="projects" className="py-20 px-4 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
              Bento Showcase
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Case Studies
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor-text="OPEN"
              className="p-6 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-indigo-500/40 transition-all cursor-pointer group flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">{project.highlight}</p>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs mb-4">
                  <span className="text-[10px] font-mono text-indigo-400 uppercase block">Scale Metric</span>
                  <span className="font-semibold text-slate-200">{project.metrics}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-semibold text-indigo-400">
                  <span>Explore Architecture</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection themeStyle="bento" />
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
