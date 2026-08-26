"use client";

import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black text-white px-6 md:px-12 overflow-hidden"
    >
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Availability Badge */}
        <div className="flex items-center gap-3 mb-6 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-mono tracking-widest uppercase text-white/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open for High-Impact Contracts &amp; Engineering</span>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-white/40">
            • Banting &amp; Kuala Lumpur, Malaysia
          </span>
        </div>

        {/* Main Big Statement Headline */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.08] tracking-tight font-light">
            <span className="font-serif italic text-white/80 mr-3">I&apos;m a</span>
            <span className="font-bold text-white tracking-tighter">full-stack</span>
            <br className="hidden sm:inline" />
            <span className="font-bold text-white tracking-tighter sm:ml-4"> developer</span>
            <span className="font-serif italic text-white/80 mx-3">&amp;</span>
            <br className="hidden lg:inline" />
            <span className="font-bold text-white tracking-tighter">software</span>
            <span className="font-bold text-white tracking-tighter ml-3">engineer</span>
          </h1>
        </div>

        {/* 2-Column Hero Showcase: Full 3:4 Color Photo + Bio & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Authentic 3:4 Full Portrait in Original Color */}
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 bg-neutral-900 shadow-2xl group">
              <Image
                src="/assets/img/person.jpg"
                alt="Muhammad Hafiz Ruslan"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Sleek bottom gradient overlay and pill badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold block">
                    Verified Engineer
                  </span>
                  <span className="text-base font-mono font-bold text-white">
                    Muhammad Hafiz Ruslan
                  </span>
                  <span className="text-xs font-mono text-white/60 block">
                    Age 28 • Malaysia
                  </span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-right">
                  <span className="text-[10px] uppercase font-mono text-white/50 block">Academic</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">1st Class 3.53</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio Statement, Action Buttons, and 2x2 Metric Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <p className="text-lg sm:text-2xl md:text-3xl font-light leading-relaxed text-white/90">
              I specialize in writing high-velocity backend systems and fluid interactive frontends using{" "}
              <b className="font-semibold text-white px-2 py-0.5 rounded bg-white/10 mx-1">PHP &amp; Laravel</b>,{" "}
              <b className="font-semibold text-white px-2 py-0.5 rounded bg-white/10 mx-1">Vue.js</b>,{" "}
              <b className="font-semibold text-white px-2 py-0.5 rounded bg-white/10 mx-1">React &amp; Next.js</b>, and{" "}
              <b className="font-semibold text-white px-2 py-0.5 rounded bg-white/10 mx-1">Node.js</b>.
              Notable for architecting an asynchronous LaTeX engine compiling <span className="text-white font-medium underline decoration-white/40">1,000+ PDF pages/sec</span> and managing enterprise systems for 7+ live platforms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#experience"
                className="group flex items-center justify-between px-6 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 shadow-lg"
                data-cursor-text="View"
              >
                <span>Work &amp; Experience</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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
              </a>

              <a
                href="#contact"
                className="group flex items-center justify-between px-6 py-4 rounded-full border border-white/30 text-white font-semibold text-sm uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300"
                data-cursor-text="Talk"
              >
                <span>Get in Touch</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* 4 Quantifiable Benchmark Metric Tiles (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              {PORTFOLIO_DATA.stats.map((st, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white block">
                    {st.value}
                    <span className="text-xs sm:text-sm font-normal text-white/50 ml-1.5 font-sans">
                      {st.unit}
                    </span>
                  </span>
                  <span className="text-[11px] uppercase font-mono tracking-widest text-white/40 block mt-1.5">
                    {st.label}
                  </span>
                  <p className="text-xs text-white/60 font-sans mt-0.5">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
