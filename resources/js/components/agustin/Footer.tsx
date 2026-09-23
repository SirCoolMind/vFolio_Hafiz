import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white px-6 md:px-12 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand & Elevator Button */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-3 mb-6"
                data-cursor-text="Top"
              >
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/5 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <span className="font-serif italic font-bold text-base tracking-tighter">
                    HR
                  </span>
                </div>
                <div className="text-left">
                  <span className="font-mono text-xs uppercase tracking-widest text-white block group-hover:text-emerald-400 transition-colors">
                    Muhammad Hafiz Ruslan ⤤
                  </span>
                  <span className="text-[10px] font-mono text-white/40">
                    Click to Elevate to Top
                  </span>
                </div>
              </button>

              <p className="text-xs uppercase font-mono tracking-widest text-white/50 max-w-sm leading-relaxed">
                Full Stack Developer &amp; Software Engineer
                <br />
                Putrajaya &amp; Kuala Lumpur, Malaysia
              </p>
            </div>

            <div className="mt-8 text-[11px] font-mono text-white/30">
              Awwwards Developer Portfolio Architecture
            </div>
          </div>

          {/* Quick Sitemap */}
          <div className="md:col-span-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 block mb-4">
              Sections
            </span>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-white/70">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills (01)</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience (02)</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education (03)</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Services (05)</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact (06)</a></li>
              <li><a href={PORTFOLIO_DATA.personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume PDF ↗</a></li>
            </ul>
          </div>

          {/* Network & Social */}
          <div className="md:col-span-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 block mb-4">
              Network
            </span>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-white/70">
              <li>
                <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center justify-between">
                  <span>LinkedIn</span>
                  <span className="text-white/40">↗</span>
                </a>
              </li>
              <li>
                <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center justify-between">
                  <span>GitHub</span>
                  <span className="text-white/40">↗</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-white flex items-center justify-between">
                  <span>Email Direct</span>
                  <span className="text-white/40">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} Muhammad Hafiz Ruslan. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={scrollToTop} className="hover:text-white underline">
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
