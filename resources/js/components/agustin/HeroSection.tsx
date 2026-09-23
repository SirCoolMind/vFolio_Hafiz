import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-black text-white px-6 md:px-12 overflow-hidden"
    >
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Split Layout: Left Text & Headline / Right Portrait Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
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
                  <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold block">
                    Verified Engineer
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-white block">
                    Muhammad Hafiz Ruslan
                  </span>
                  <span className="text-[11px] font-mono text-white/60">
                    Banting &amp; KL, Malaysia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4 Quantifiable Benchmark Metric Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-white/10">
          {PORTFOLIO_DATA.stats.map((st, i) => (
            <div
              key={i}
              className="p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
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
    </section>
  );
};
