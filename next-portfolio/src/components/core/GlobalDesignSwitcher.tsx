"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, ChevronRight, X, Keyboard, Check, RefreshCw, Grid } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ThemeToggle } from "./ThemeToggle";

interface GlobalDesignSwitcherProps {
  currentArchetype: number;
  currentIteration?: number;
  onSelectDesign: (archetypeId: number, iterationIndex?: number) => void;
}

export const GlobalDesignSwitcher: React.FC<GlobalDesignSwitcherProps> = ({
  currentArchetype,
  currentIteration = 1,
  onSelectDesign,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const activeArchetypeObj = PORTFOLIO_DATA.designArchetypes[currentArchetype - 1] || PORTFOLIO_DATA.designArchetypes[0];

  // Hotkey listener (1-9 for Designs 1-9; 0 for Design 10; Alt+1..Alt+0 for Designs 11-20)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;

      if (!e.altKey && e.key >= "1" && e.key <= "9") {
        const num = parseInt(e.key, 10);
        onSelectDesign(num);
        setToastMessage(`Design 0${num}: ${PORTFOLIO_DATA.designArchetypes[num - 1].title}`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      } else if (!e.altKey && e.key === "0") {
        onSelectDesign(10);
        setToastMessage(`Design 10: ${PORTFOLIO_DATA.designArchetypes[9].title}`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      } else if (e.altKey && e.key >= "1" && e.key <= "9") {
        const num = parseInt(e.key, 10) + 10;
        onSelectDesign(num);
        setToastMessage(`Design ${num}: ${PORTFOLIO_DATA.designArchetypes[num - 1].title}`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      } else if (e.altKey && e.key === "0") {
        onSelectDesign(20);
        setToastMessage(`Design 20: ${PORTFOLIO_DATA.designArchetypes[19].title}`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentArchetype, onSelectDesign]);

  return (
    <>
      {/* Floating HUD Command Flight Deck */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9980] flex flex-col items-center gap-2 max-w-[96vw]">
        {/* Master Flight Deck Pill */}
        <div className="flex items-center gap-2 p-2 rounded-full bg-slate-950/90 border border-slate-700/80 backdrop-blur-2xl shadow-2xl select-none">
          {/* Design Menu Launcher */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-cursor-text="DESIGNS"
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white transition-all border border-slate-700 group"
          >
            <img
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-5 h-5 rounded-full object-cover object-[center_60%] border border-cyan-400 shrink-0"
            />
            <span className="text-xs font-mono font-bold tracking-wider flex items-center gap-1.5">
              <span>DESIGN {currentArchetype.toString().padStart(2, "0")}</span>
              <span className="text-slate-400 text-[11px] hidden md:inline">({activeArchetypeObj.badge})</span>
            </span>
            <Grid size={14} className="text-slate-400 group-hover:text-white transition-colors" />
          </button>

          {/* Quick Design Selector (1 to 20) */}
          <div className="hidden lg:flex items-center gap-1 px-2 max-w-[50vw] overflow-x-auto scrollbar-none">
            {PORTFOLIO_DATA.designArchetypes.map((arch, idx) => {
              const num = idx + 1;
              const isActive = num === currentArchetype;
              return (
                <button
                  key={arch.id}
                  onClick={() => onSelectDesign(num)}
                  title={`${num}. ${arch.title}`}
                  className={`w-7 h-7 rounded-full text-xs font-mono font-bold transition-all flex items-center justify-center ${
                    isActive
                      ? "bg-white text-slate-950 shadow-lg scale-110"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {num}
                </button>
              );
            })}
          </div>

          {/* Cycle Next Design */}
          <button
            onClick={() => onSelectDesign(currentArchetype >= 20 ? 1 : currentArchetype + 1)}
            title="Cycle Next Design"
            className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
          >
            <RefreshCw size={14} />
          </button>

          <ThemeToggle />
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[9995] px-5 py-2.5 rounded-2xl bg-slate-900/95 border border-cyan-500/40 text-cyan-300 font-mono text-xs shadow-2xl backdrop-blur-md flex items-center gap-2"
          >
            <Sparkles size={14} className="text-cyan-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 20 Master Design Drawer Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl z-10 text-white"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-cyan-400 shrink-0 shadow-lg bg-black">
                    <img
                      src={PORTFOLIO_DATA.personal.avatar}
                      alt={PORTFOLIO_DATA.personal.name}
                      className="w-full h-full object-cover object-[center_60%]"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-0.5">
                      <Grid size={14} /> 20 Cinematic Portfolio Architectures
                    </div>
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
                      {PORTFOLIO_DATA.personal.name}
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Hotkey Helper */}
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <Keyboard size={16} className="text-cyan-400" />
                <span>
                  Hotkeys: <strong className="text-white font-mono">1–0</strong> for Designs 1–10 &bull; <strong className="text-white font-mono">Alt+1–Alt+0</strong> for Designs 11–20.
                </span>
              </div>

              {/* 20 Master Designs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PORTFOLIO_DATA.designArchetypes.map((arch, idx) => {
                  const num = idx + 1;
                  const isCurrent = num === currentArchetype;

                  return (
                    <div
                      key={arch.id}
                      onClick={() => {
                        onSelectDesign(num);
                        setIsOpen(false);
                      }}
                      className={`p-5 rounded-2xl cursor-pointer transition-all border relative overflow-hidden group ${
                        isCurrent
                          ? "bg-slate-900 border-cyan-400 ring-2 ring-cyan-500/20 shadow-xl"
                          : "bg-slate-900/40 border-slate-800 hover:bg-slate-900 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span
                            className="w-10 h-10 rounded-xl font-mono text-sm font-bold flex items-center justify-center border"
                            style={{
                              backgroundColor: `${arch.color}15`,
                              borderColor: `${arch.color}40`,
                              color: arch.color,
                            }}
                          >
                            {num.toString().padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {arch.title}
                            </h3>
                            <span className="text-xs text-slate-400">{arch.subtitle}</span>
                          </div>
                        </div>

                        <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-slate-800 text-slate-300 border border-slate-700">
                          {arch.badge}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 line-clamp-2 my-2 font-light leading-relaxed">
                        {arch.description}
                      </p>

                      <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
                        <span className="text-slate-500 font-mono">Route: /design-{num}</span>
                        <div className="flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform" style={{ color: arch.color }}>
                          <span>{isCurrent ? "Active" : "Launch Design"}</span>
                          {isCurrent ? <Check size={14} /> : <ChevronRight size={14} />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
