"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white px-6 md:px-12 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand & Elevator Back-To-Top Button */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div
                onClick={scrollToTop}
                className="inline-flex items-center gap-3 border border-white/30 rounded-full px-5 py-2.5 cursor-pointer hover:border-white hover:bg-white hover:text-black transition-all duration-300 group mb-6"
                data-cursor-text="Top"
              >
                <span className="font-serif italic text-xl">HR</span>
                <span className="text-xs uppercase tracking-widest font-mono font-bold">
                  Muhammad Hafiz Ruslan
                </span>
                <svg
                  className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>

              <p className="text-xs uppercase font-mono tracking-widest text-white/50 leading-relaxed max-w-sm">
                FULL STACK DEVELOPER &amp; SOFTWARE ENGINEER <br />
                PUTRAJAYA &amp; KUALA LUMPUR, MALAYSIA
              </p>
            </div>

            <div className="mt-8 text-xs font-mono text-white/40">
              <span>Awwwards Developer Portfolio Architecture</span>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-white/40 block mb-4">
              Sections
            </span>
            <ul className="space-y-2 text-xs font-mono tracking-wider uppercase">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#work" className="text-white/70 hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/70 hover:text-white transition-colors">
                  Skills (01)
                </a>
              </li>
              <li>
                <a href="#experience" className="text-white/70 hover:text-white transition-colors">
                  Experience (02)
                </a>
              </li>
              <li>
                <a href="#education" className="text-white/70 hover:text-white transition-colors">
                  Education (03)
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-white/40 block mb-4">
              Explore
            </span>
            <ul className="space-y-2 text-xs font-mono tracking-wider uppercase">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Services (05)
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact (06)
                </a>
              </li>
              <li>
                <a href={PORTFOLIO_DATA.personal.resumeUrl} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
                  Resume PDF ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-white/40 block mb-4">
              Network
            </span>
            <ul className="space-y-2 text-xs font-mono tracking-wider uppercase">
              <li>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-white/70 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Email Direct</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} Muhammad Hafiz Ruslan. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={scrollToTop} className="hover:text-white transition-colors">
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
