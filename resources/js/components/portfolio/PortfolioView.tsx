import React, { useEffect, useState } from "react";
import { CustomCursor } from "./CustomCursor";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { ProjectsSection } from "./ProjectsSection";
import { TestimonialSection } from "./TestimonialSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { Lightbox } from "./Lightbox";
import { useSectionProgress } from "./wayfinding/useSectionProgress";
import { ChapterRail } from "./wayfinding/ChapterRail";
import { ChapterPill } from "./wayfinding/ChapterPill";

// Owns the scroll state so only the wayfinding UI re-renders while scrolling.
const Wayfinding: React.FC = () => {
  const sectionProgress = useSectionProgress();
  return (
    <>
      <ChapterRail {...sectionProgress} />
      <ChapterPill {...sectionProgress} />
    </>
  );
};

// Fresh visits to the top of the page can paint the hero before the rest exists.
// Deep links and reload/back (scroll restoration) need the full page at once.
const shouldDeferBelowFold = () => {
  const nav = performance.getEntriesByType?.("navigation")[0] as PerformanceNavigationTiming | undefined;
  return !window.location.hash && (!nav || nav.type === "navigate");
};

/**
 * Lets the browser skip style, layout and paint for panels that are off screen
 * (content-visibility: auto). Each panel's real height is measured first and kept
 * as its placeholder size, so the scrollbar, anchor jumps and the chapter rail
 * see exactly the same page. This is what keeps the theme switch cheap: the
 * token change no longer re-styles ~2,000 elements, only the visible ones.
 */
const useSkipOffscreenPanels = (enabled: boolean) => {
  useEffect(() => {
    if (!enabled || !CSS.supports("content-visibility", "auto")) return;
    let cancelled = false;
    // Measure after web fonts land, since they change text heights.
    (document.fonts?.ready ?? Promise.resolve()).then(() =>
      requestAnimationFrame(() => {
        if (cancelled) return;
        document.querySelectorAll<HTMLElement>(".section-panel").forEach((panel) => {
          // contain-intrinsic-size is the content box: leave out padding and border.
          const cs = getComputedStyle(panel);
          const chrome = ["paddingTop", "paddingBottom", "borderTopWidth", "borderBottomWidth"] as const;
          const content = chrome.reduce((h, prop) => h - parseFloat(cs[prop]), panel.getBoundingClientRect().height);
          panel.style.setProperty("--panel-h", `${content}px`);
        });
        document.documentElement.classList.add("skip-offscreen-panels");
      })
    );
    return () => {
      cancelled = true;
      document.documentElement.classList.remove("skip-offscreen-panels");
    };
  }, [enabled]);
};

export const PortfolioView: React.FC = () => {
  // Everything below the hero mounts right after the first paint, so first paint
  // (and LCP) waits on the hero's ~200 nodes instead of the whole ~2,000-node page.
  const [showBelowFold, setShowBelowFold] = useState(() => !shouldDeferBelowFold());

  useEffect(() => {
    if (showBelowFold) return;
    let timer = 0;
    const frame = requestAnimationFrame(() => {
      timer = window.setTimeout(() => setShowBelowFold(true), 0);
    });
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [showBelowFold]);

  useSkipOffscreenPanels(showBelowFold);

  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar activeSection="live" />
      <Wayfinding />
      <Lightbox />

      <div className="has-rail">
        <main className="relative z-10 max-w-[1500px] mx-auto px-2 sm:px-4 xl:pl-0 xl:pr-6">
          <HeroSection />
          {showBelowFold && (
            <div className="space-y-3 sm:space-y-4">
              <SkillsSection />
              <ExperienceSection />
              <EducationSection />
              <ProjectsSection />
              <TestimonialSection />
              <ContactSection />
            </div>
          )}
        </main>

        {showBelowFold && <Footer />}
      </div>
    </div>
  );
};
