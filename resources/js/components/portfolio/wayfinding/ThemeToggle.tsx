import React, { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

const readTheme = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

const applyTheme = (next: Theme) => {
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Storage blocked (private mode): the choice still applies for this visit.
  }
};

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

/**
 * Sun/moon button. The new theme washes over the page as a circle growing out
 * of the button (View Transitions API); browsers without it get a soft
 * colour cross-fade instead. Reduced-motion users get an instant switch.
 */
export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [theme, setTheme] = useState<Theme>(readTheme);
  const [burst, setBurst] = useState(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Several toggles can be mounted (desktop + mobile); keep them all in sync with <html>.
  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(readTheme()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const doc = document as ViewTransitionDoc;
    setBurst((b) => b + 1);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme(next);
      return;
    }

    if (!doc.startViewTransition) {
      root.classList.add("theme-fading");
      applyTheme(next);
      window.setTimeout(() => root.classList.remove("theme-fading"), 500);
      return;
    }

    const rect = btnRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 40;
    const y = rect ? rect.top + rect.height / 2 : 40;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = doc.startViewTransition(() => applyTheme(next));
    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 750, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  };

  const isDark = theme === "dark";

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      className={`group/theme relative w-10 h-10 rounded-full border border-white/25 bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-colors duration-300 ${className}`}
      data-cursor-text={isDark ? "Light" : "Dark"}
    >
      {/* Click ripple */}
      {burst > 0 && (
        <span
          key={burst}
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-white/60 animate-[theme-burst_600ms_ease-out_forwards] pointer-events-none"
        />
      )}

      {/* Sun: rays spin in as the moon sets */}
      <svg
        className={`absolute w-[18px] h-[18px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          className="origin-center transition-transform duration-700 group-hover/theme:rotate-45"
          d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
        />
      </svg>
      {/* Moon: rises from below */}
      <svg
        className={`absolute w-[17px] h-[17px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? "opacity-0 translate-y-3 rotate-45 scale-50" : "opacity-100 translate-y-0 rotate-0 scale-100 group-hover/theme:-rotate-12"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  );
};
