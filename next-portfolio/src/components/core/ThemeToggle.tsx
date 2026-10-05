"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  variant?: "minimal" | "pill" | "cyber" | "tactile";
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  variant = "pill",
}) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Default to dark mode for cinematic aesthetics
    const savedTheme = localStorage.getItem("vfolio-theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("vfolio-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("vfolio-theme", "dark");
      setIsDark(true);
    }
  };

  if (variant === "cyber") {
    return (
      <button
        onClick={toggleTheme}
        data-cursor-text="MODE"
        className={`px-3 py-1.5 font-mono text-xs uppercase border border-cyan-500/40 bg-black/60 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 rounded transition-all flex items-center gap-2 ${className}`}
      >
        <span className={`w-2 h-2 rounded-full ${isDark ? "bg-cyan-400 animate-pulse" : "bg-amber-400"}`} />
        <span>{isDark ? "SYS: DARK" : "SYS: LIGHT"}</span>
      </button>
    );
  }

  if (variant === "tactile") {
    return (
      <button
        onClick={toggleTheme}
        data-cursor-text="SWITCH"
        className={`relative w-14 h-7 rounded-full p-1 transition-all ${
          isDark ? "neu-pressed bg-slate-900 border border-slate-700" : "bg-slate-200 border border-slate-300 shadow-inner"
        } ${className}`}
      >
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform ${
            isDark ? "translate-x-7 bg-cyan-500 text-black shadow-[0_0_10px_#06b6d4]" : "translate-x-0 bg-white text-slate-800 shadow"
          }`}
        >
          {isDark ? <Moon size={12} /> : <Sun size={12} />}
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      data-cursor-text="THEME"
      className={`p-2 rounded-full backdrop-blur-md transition-all border ${
        isDark
          ? "bg-white/10 text-white border-white/10 hover:bg-white/20 hover:border-white/30"
          : "bg-black/5 text-slate-900 border-black/10 hover:bg-black/10"
      } ${className}`}
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={18} className="text-amber-300" /> : <Moon size={18} className="text-indigo-600" />}
    </button>
  );
};
