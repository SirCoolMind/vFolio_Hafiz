import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-8 md:pt-36 md:pb-12 bg-black text-white px-6 md:px-12 overflow-hidden"
    >
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Split Layout: Left Text & Headline / Right Portrait Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Headline, Tagline, Bio, Action Buttons) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-mono tracking-widest uppercase text-white/80 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Open for High-Impact Contracts &amp; Engineering</span>
            </div>

            {/* Main Big Statement Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] tracking-tight font-light mb-6">
              <span className="font-serif italic text-white/80 mr-3">I&apos;m a</span>
              <span className="font-bold text-white tracking-tighter">full-stack</span>
              <br />
              <span className="font-bold text-white tracking-tighter">developer</span>
              <span className="font-serif italic text-white/80 mx-2.5">&amp;</span>
              <span className="font-bold text-white tracking-tighter">software engineer</span>
            </h1>

            {/* Narrative Bio */}
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-white/85 max-w-2xl mb-8">
              Specializing in high-velocity backends and seamless frontends using{" "}
              <span className="font-medium text-white border-b border-white/40 pb-0.5">PHP &amp; Laravel</span>,{" "}
              <span className="font-medium text-white border-b border-white/40 pb-0.5">Vue.js</span>, and{" "}
              <span className="font-medium text-white border-b border-white/40 pb-0.5">Node.js</span>.{" "}
              <span className="font-medium text-white border-b border-white/40 pb-0.5">Detail-oriented</span>, master of{" "}
              <span className="font-medium text-white border-b border-white/40 pb-0.5">system flow</span>, expert{" "}
              <span className="font-medium text-white border-b border-white/40 pb-0.5">firefighter</span>, and a high-value engineering asset.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#experience"
                className="group flex items-center justify-between sm:justify-center gap-3 px-6 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 shadow-lg"
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
                className="group flex items-center justify-between sm:justify-center gap-3 px-6 py-4 rounded-full border border-white/30 text-white font-semibold text-sm uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300"
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

            {/* Document Previews: Resume & CV (open in new tab) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 max-w-2xl">
              {[
                { label: "Resume", desc: "Quick summary · PDF", href: PORTFOLIO_DATA.personal.resumeUrl },
                { label: "CV", desc: "Full details · PDF", href: PORTFOLIO_DATA.personal.cvUrl },
              ].map((file) => (
                <a
                  key={file.label}
                  href={file.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-5 py-5 rounded-2xl border border-white/20 bg-white/[0.04] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  data-cursor-text="PDF"
                >
                  <span className="w-12 h-12 shrink-0 rounded-xl border border-white/20 group-hover:border-black/20 flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <span className="flex flex-col flex-1 min-w-0">
                    <span className="text-lg font-semibold tracking-tight">View {file.label}</span>
                    <span className="text-xs font-mono text-white/50 group-hover:text-black/60 transition-colors">{file.desc}</span>
                  </span>
                  <svg className="w-5 h-5 shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7m0 0H8m9 0v9" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Top-Right Full 3:4 Portrait Photo in True Color */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[390px] aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 bg-neutral-900 shadow-2xl group">
              <img
                src={PORTFOLIO_DATA.personal.avatar}
                alt="Muhammad Hafiz Ruslan"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Sleek bottom gradient overlay and pill badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-2">
                <div>
                  <span className="text-sm sm:text-base font-mono font-bold text-white block">
                    Muhammad Hafiz Ruslan
                  </span>
                  <span className="text-[11px] font-mono text-white/60">
                    Putrajaya &amp; KL, Malaysia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
