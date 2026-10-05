import { useEffect, useState } from "react";

export interface Chapter {
  id: string;
  label: string;
}

// Reading order of the page. The Hero is the cover, so it is not a chapter.
export const CHAPTERS: Chapter[] = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "work", label: "Playground" },
  { id: "words", label: "Words" },
  { id: "contact", label: "Contact" },
];

export interface SectionProgress {
  /** 0..1 through the whole page, top to bottom */
  page: number;
  /** 0..1 per chapter, same order as CHAPTERS (drives which chapter is active) */
  progress: number[];
  /** index of the chapter being read, or -1 while on the cover */
  active: number;
}

// The reading line sits 35% down the viewport: a section starts at 0% when
// its top crosses that line and reaches 100% when its bottom does.
const READING_LINE = 0.35;

const measure = (): SectionProgress => {
  const line = window.innerHeight * READING_LINE;
  const atBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

  const progress = CHAPTERS.map(({ id }) => {
    const el = document.getElementById(id);
    if (!el) return 0;
    if (atBottom) return 1;
    const rect = el.getBoundingClientRect();
    return Math.min(1, Math.max(0, (line - rect.top) / rect.height));
  });

  let active = -1;
  progress.forEach((p, i) => {
    if (p > 0) active = i;
  });

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const page = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;

  return { page, progress, active };
};

export const useSectionProgress = (): SectionProgress => {
  const [state, setState] = useState<SectionProgress>({
    page: 0,
    progress: CHAPTERS.map(() => 0),
    active: -1,
  });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = measure();
        setState((prev) =>
          prev.active === next.active &&
          Math.round(prev.page * 1000) === Math.round(next.page * 1000) &&
          prev.progress.every((p, i) => Math.round(p * 100) === Math.round(next.progress[i] * 100))
            ? prev
            : next
        );
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Sections can change height after images and fonts load.
    const observer = new ResizeObserver(update);
    observer.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return state;
};

/** Id of the chapter being read ("home" on the cover). Cheap: re-renders only when the chapter changes. */
export const useActiveChapterId = (enabled: boolean): string => {
  const [id, setId] = useState("home");

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { active } = measure();
        setId(active >= 0 ? CHAPTERS[active].id : "home");
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [enabled]);

  return id;
};

export const jumpTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};
