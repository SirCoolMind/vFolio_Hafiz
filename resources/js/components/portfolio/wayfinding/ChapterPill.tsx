import React, { useEffect, useState } from "react";
import { CHAPTERS, SectionProgress, jumpTo } from "./useSectionProgress";

const pad = (n: number) => String(n + 1).padStart(2, "0");
const RING_R = 11;
const RING_C = 2 * Math.PI * RING_R;

/**
 * Mobile/tablet wayfinding: a floating pill with the current chapter and the
 * whole-page percentage. Tapping it opens the full chapter list.
 */
export const ChapterPill: React.FC<SectionProgress> = ({ page, progress, active }) => {
  const [open, setOpen] = useState(false);
  const visible = active >= 0;
  const current = visible ? CHAPTERS[active] : CHAPTERS[0];
  const pct = Math.round(page * 100);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="xl:hidden">
      {/* Pill */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Now reading ${current.label}. ${pct}% of the page read. Show all sections`}
        aria-expanded={open}
        className={`rail-anim fixed z-30 bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 pl-2 pr-4 py-2 rounded-full border border-white/20 bg-panel/90 backdrop-blur-md text-white shadow-[0_10px_30px_-10px_rgb(0_0_0/0.5)] transition-all duration-500 ease-out ${
          visible && !open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" className="-rotate-90" aria-hidden="true">
          <circle cx="14" cy="14" r={RING_R} fill="none" strokeWidth="2.5" className="stroke-white/15" />
          <circle
            cx="14"
            cy="14"
            r={RING_R}
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="stroke-white rail-anim transition-[stroke-dashoffset] duration-150"
            strokeDasharray={RING_C}
            strokeDashoffset={RING_C * (1 - page)}
          />
        </svg>
        <span className="font-mono text-[11px] tabular-nums text-white/60">{pad(active)}</span>
        <span className="text-sm font-semibold">{current.label}</span>
        <span className="font-mono text-xs tabular-nums text-white/70 w-9 text-right">{pct}%</span>
      </button>

      {/* Sheet */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close section list"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <nav
          aria-label="Page sections"
          className={`rail-anim absolute inset-x-3 bottom-3 rounded-3xl border border-white/15 bg-panel text-white p-3 transition-transform duration-500 ease-out ${
            open ? "translate-y-0" : "translate-y-[110%]"
          }`}
        >
          {/* Whole-page progress */}
          <div className="px-3 pt-2 pb-4 mb-1 border-b border-white/10">
            <div className="flex items-baseline justify-between mb-2.5">
              <span className="text-sm text-white/70">Page read</span>
              <span className="font-semibold tabular-nums">{pct}%</span>
            </div>
            <span className="block h-[3px] rounded-full rail-track overflow-hidden">
              <span
                className="block h-full rail-fill"
                style={{ transform: `scaleX(${page})`, transformOrigin: "left" }}
              />
            </span>
          </div>

          <ol>
            {CHAPTERS.map((chapter, i) => {
              const isActive = i === active;
              const isDone = progress[i] >= 1 && !isActive;
              return (
                <li key={chapter.id}>
                  <button
                    type="button"
                    tabIndex={open ? 0 : -1}
                    onClick={() => {
                      setOpen(false);
                      jumpTo(chapter.id);
                    }}
                    aria-current={isActive ? "location" : undefined}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-left transition-colors ${
                      isActive ? "bg-white/[0.07]" : "hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`block w-2.5 h-2.5 rounded-full shrink-0 ${
                        isActive ? "border-2 border-white" : isDone ? "bg-white" : "border border-white/40"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[11px] tabular-nums text-white/60 w-5">{pad(i)}</span>
                    <span className={`text-[15px] ${isActive ? "font-semibold" : "text-white/80"}`}>
                      {chapter.label}
                    </span>
                    {isActive && (
                      <span className="ml-auto text-[11px] font-mono text-white/60">You are here</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};
