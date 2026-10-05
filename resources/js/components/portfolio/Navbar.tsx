import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ThemeToggle } from "./wayfinding/ThemeToggle";
import { useActiveChapterId } from "./wayfinding/useSectionProgress";

interface NavbarProps {
  /** Section id to highlight, or "live" to follow the scroll position */
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection: activeProp = "home" }) => {
  const liveSection = useActiveChapterId(activeProp === "live");
  const activeSection = activeProp === "live" ? liveSection : activeProp;
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
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    { label: "Playground", href: "/#work" },
    { label: "Contact", href: "/#contact" },
  ];

  const documents = [
    { label: "Resume", href: PORTFOLIO_DATA.personal.resumeUrl },
    { label: "CV", href: PORTFOLIO_DATA.personal.cvUrl },
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
              <span className="font-sans font-medium text-xs tracking-wider text-white uppercase whitespace-nowrap group-hover:tracking-widest transition-all">
                Hafiz Ruslan
              </span>
              <span className="text-[9px] font-mono text-white/60 tracking-wider whitespace-nowrap">
                AI-Assisted Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-7 text-xs font-mono tracking-widest uppercase text-white/70">
            {navLinks.map((link) => {
              const isActive = link.href === `/#${activeSection}`;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`hover:text-white transition-colors relative py-1 group ${isActive ? "text-white" : ""}`}
                  data-cursor-text="Go"
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Resume, CV & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-2">
              {documents.map((file) => (
                <a
                  key={file.label}
                  href={file.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-xs font-mono font-medium tracking-wider uppercase"
                  data-cursor-text="PDF"
                >
                  <span>{file.label}</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7m0 0H8m9 0v9" />
                  </svg>
                </a>
              ))}
            </div>

            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-full border border-white/20 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
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
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-8 xl:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-light text-white/80 hover:text-white flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-white/60">↳</span>
              </a>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {documents.map((file, i) => (
                <a
                  key={file.label}
                  href={file.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm uppercase tracking-wider ${
                    i === 0 ? "bg-white text-black" : "border border-white/30 text-white"
                  }`}
                >
                  <span>{file.label} PDF</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
