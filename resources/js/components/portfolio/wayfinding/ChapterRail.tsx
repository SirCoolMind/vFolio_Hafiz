import React from "react";
import { CHAPTERS, SectionProgress, jumpTo } from "./useSectionProgress";

const pad = (n: number) => String(n + 1).padStart(2, "0");
const ROW = 40; // px between chapter nodes

/**
 * Desktop wayfinding: one whole-page percentage above a continuous spine.
 * The spine's fill head always sits inside the chapter being read, so the
 * nodes double as a map of where that percentage lands.
 */
export const ChapterRail: React.FC<SectionProgress> = ({ page, progress, active }) => {
  const pct = Math.round(page * 100);
  const spine = (CHAPTERS.length - 1) * ROW;
  // Chapters read so far, as fractional node units (0 = Skills node, 6 = Contact node)
  const units = Math.min(
    CHAPTERS.length - 1,
    progress.reduce((sum, p) => sum + p, 0)
  );

  return (
    <aside
      aria-label="Page sections"
      className="hidden xl:flex fixed left-0 top-[88px] bottom-0 z-30 items-center"
      style={{ width: "var(--rail-width)" }}
    >
      <nav className="w-full pl-7 pr-4">
        {/* Whole-page readout */}
        <div
          className="mb-6"
          role="progressbar"
          aria-label="Page read"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
        >
          <div className="flex items-baseline gap-0.5 text-white">
            <span className="text-[34px] leading-none font-semibold tracking-tight tabular-nums">{pct}</span>
            <span className="text-sm font-semibold">%</span>
          </div>
          <span className="block mt-1.5 text-[11px] font-mono text-white/60">of the page read</span>
        </div>

        <div className="relative">
          {/* Continuous spine */}
          <div
            className="absolute left-[6px] w-[2px] rounded-full overflow-hidden"
            style={{ top: ROW / 2, height: spine }}
            aria-hidden="true"
          >
            <span className="rail-track absolute inset-0" />
            <span
              className="rail-fill rail-anim absolute inset-x-0 top-0 transition-[height] duration-150 ease-out"
              style={{ height: (units / (CHAPTERS.length - 1)) * spine }}
            />
          </div>

          <ol className="relative">
            {CHAPTERS.map((chapter, i) => {
              const isActive = i === active;
              const isDone = progress[i] >= 1 && !isActive;

              return (
                <li key={chapter.id}>
                  <button
                    type="button"
                    onClick={() => jumpTo(chapter.id)}
                    aria-current={isActive ? "location" : undefined}
                    className="group w-full flex items-center gap-3 text-left"
                    style={{ height: ROW }}
                    data-cursor-text="Go"
                  >
                    <span className="relative w-3.5 h-3.5 shrink-0 flex items-center justify-center">
                      <span
                        className={`rail-anim block rounded-full transition-all duration-300 ${
                          isActive
                            ? "w-3.5 h-3.5 border-2 border-white bg-black"
                            : isDone
                            ? "w-2.5 h-2.5 bg-white"
                            : "w-2.5 h-2.5 border border-white/40 bg-black group-hover:border-white/80"
                        }`}
                      />
                    </span>

                    <span className="flex-1 min-w-0 flex items-baseline gap-2">
                      <span
                        className={`font-mono text-[10px] tabular-nums tracking-wider ${
                          isActive ? "text-white" : "text-white/55"
                        }`}
                      >
                        {pad(i)}
                      </span>
                      <span
                        className={`rail-anim truncate transition-all duration-300 ${
                          isActive
                            ? "text-[15px] font-semibold text-white"
                            : isDone
                            ? "text-[13px] text-white/75 group-hover:text-white"
                            : "text-[13px] text-white/60 group-hover:text-white"
                        }`}
                      >
                        {chapter.label}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </aside>
  );
};
