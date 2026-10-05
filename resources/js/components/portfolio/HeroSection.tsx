import React, { useRef, useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ZoomablePhoto } from "./Lightbox";

/** "firefighter" with a hover/focus explanation that is nudged to stay inside the viewport. */
const FirefighterTip: React.FC = () => {
  const tipRef = useRef<HTMLSpanElement>(null);
  const [shift, setShift] = useState(0);

  const fit = () => {
    const tip = tipRef.current;
    if (!tip) return;
    const margin = 16;
    const rect = tip.getBoundingClientRect();
    const left = rect.left - shift;
    const right = rect.right - shift;
    if (left < margin) setShift(margin - left);
    else if (right > window.innerWidth - margin) setShift(window.innerWidth - margin - right);
    else setShift(0);
  };

  return (
    <span
      tabIndex={0}
      aria-describedby="firefighter-tip"
      onMouseEnter={fit}
      onFocus={fit}
      className="group/tip relative font-medium text-white border-b border-dashed border-white/50 pb-0.5 cursor-help focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
    >
      firefighter
      <span
        ref={tipRef}
        id="firefighter-tip"
        role="tooltip"
        style={{ marginLeft: shift }}
        className="pointer-events-none absolute left-1/2 bottom-full mb-3 w-64 -translate-x-1/2 translate-y-1 rounded-xl bg-white px-4 py-3 text-sm font-normal leading-snug text-black shadow-xl opacity-0 transition-[opacity,transform] duration-200 group-hover/tip:opacity-100 group-hover/tip:translate-y-0 group-focus/tip:opacity-100 group-focus/tip:translate-y-0"
      >
        When something breaks under pressure, I&apos;m the one who jumps in, finds the root cause and gets it running again.
        <span
          style={{ marginLeft: -shift }}
          className="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-white"
        />
      </span>
    </span>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-6 md:pt-32 md:pb-10 text-white px-6 md:px-12 overflow-hidden"
    >
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Split Layout: Left Text & Headline / Right Portrait Photo */}
        {/* Mobile order: intro, portrait, actions. Desktop: intro + actions left, portrait right. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 lg:items-center">
          {/* Intro (Badge, Headline, Bio) */}
          <div className="lg:col-span-7 lg:row-start-1 flex flex-col justify-end lg:self-end">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-mono tracking-widest uppercase text-white/80 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Open for High-Impact Contracts &amp; Engineering</span>
            </div>

            {/* Main Big Statement Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3rem,4.6vw,4.2rem)] leading-[1.08] tracking-tight font-light mb-6 text-balance">
              <span className="font-serif italic text-white/80">I&apos;m an</span>{" "}
              <span className="font-bold text-white tracking-tighter whitespace-nowrap">AI-assisted</span>{" "}
              <span className="font-bold text-white tracking-tighter whitespace-nowrap">full-stack</span>{" "}
              <span className="font-bold text-white tracking-tighter">developer</span>{" "}
              <span className="font-serif italic text-white/80">&amp;</span>{" "}
              <span className="font-bold text-white tracking-tighter">software engineer</span>
            </h1>

            {/* Narrative Bio */}
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-white/85 max-w-2xl">
              I build fast, reliable systems for government and enterprise clients with{" "}
              <span className="font-medium text-white border-b border-white/40 pb-0.5">PHP &amp; Laravel</span>,{" "}
              <span className="font-medium text-white border-b border-white/40 pb-0.5">Vue.js</span> and{" "}
              <span className="font-medium text-white border-b border-white/40 pb-0.5">Node.js</span>, and put{" "}
              <span className="font-medium text-white border-b border-white/40 pb-0.5">AI</span> to work across the whole delivery cycle, from requirements to testing, to ship faster without cutting corners. I&apos;m a good{" "}
              <FirefighterTip />{" "}
              as well.
            </p>
          </div>

          {/* Right Column: Top-Right Full 3:4 Portrait Photo in True Color */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 flex justify-center lg:justify-end">
            <ZoomablePhoto
              src={PORTFOLIO_DATA.personal.avatar}
              alt="Portrait of Muhammad Hafiz Ruslan"
              caption="Muhammad Hafiz Ruslan · Putrajaya & KL, Malaysia"
              className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[390px] aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 bg-neutral-900 shadow-2xl group"
            >
              <img
                src={PORTFOLIO_DATA.personal.avatar}
                alt="Muhammad Hafiz Ruslan"
                width={1200}
                height={1600}
                {...{ fetchpriority: "high" }}
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Sleek bottom gradient overlay and pill badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-coal/80 via-coal/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-2">
                <div>
                  <span className="text-sm sm:text-base font-mono font-bold text-snow block">
                    Muhammad Hafiz Ruslan
                  </span>
                  <span className="text-[11px] font-mono text-snow/75">
                    Putrajaya &amp; KL, Malaysia
                  </span>
                </div>
              </div>
            </ZoomablePhoto>
          </div>

          {/* Actions */}
          <div className="lg:col-span-7 lg:row-start-2 lg:self-start">
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#experience"
                  className="group flex items-center justify-between sm:justify-center gap-3 px-6 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 shadow-lg"
                  data-cursor-text="View"
                >
                  <span>5+ Years Work Experience</span>
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
              <div className="grid grid-cols-[repeat(auto-fit,minmax(15.5rem,1fr))] gap-4 mt-4 max-w-2xl">
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
                      <span className="text-lg font-semibold tracking-tight whitespace-nowrap">View {file.label}</span>
                      <span className="text-xs font-mono text-white/65 group-hover:text-black/60 transition-colors whitespace-nowrap">{file.desc}</span>
                    </span>
                    <svg className="w-5 h-5 shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7m0 0H8m9 0v9" />
                    </svg>
                  </a>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
