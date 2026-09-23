import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = "home" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "Work", href: "/#work" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Monogram Brand */}
          <a
            href="/#home"
            className="group flex items-center gap-3"
            data-cursor-text="Top"
          >
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-white/5 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
              <span className="font-serif italic font-bold text-sm tracking-tighter">
                HR
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-medium text-xs tracking-wider text-white uppercase group-hover:tracking-widest transition-all">
                Hafiz Ruslan
              </span>
              <span className="text-[9px] font-mono text-white/40 tracking-wider">
                Fullstack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 group"
                data-cursor-text="Go"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-xs font-mono font-medium tracking-wider uppercase"
              data-cursor-text="PDF"
            >
              <span>Resume</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full border border-white/20 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`w-5 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-5 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-white transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-8 lg:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-light text-white/80 hover:text-white flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-white/40">↳</span>
              </a>
            ))}
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider"
            >
              <span>Download Resume PDF</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
};
