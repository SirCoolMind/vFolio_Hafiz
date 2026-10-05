import React, { useEffect, useRef, useState } from "react";

/**
 * Ring + dot cursor for mice on desktop widths; it replaces the system arrow
 * (see .has-custom-cursor in app.css). Position is written straight to the DOM
 * in a rAF loop (no re-render per mouse move); React state only tracks the
 * hover mode, and size changes are plain CSS transitions.
 */
const MEDIA = "(pointer: fine) and (min-width: 1024px)";
const TEXT_FIELD = "input:not([type=checkbox]):not([type=radio]):not([type=submit]), textarea, [contenteditable=true]";

export const CustomCursor: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [overText, setOverText] = useState(false);
  const [pressed, setPressed] = useState(false);

  // Only hide the system cursor where the custom one is actually drawn
  useEffect(() => {
    const mq = window.matchMedia(MEDIA);
    const sync = () => document.documentElement.classList.toggle("has-custom-cursor", mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const target = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let frame = 0;

    const place = (el: HTMLElement | null, x: number, y: number) => {
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.3;
      ring.y += (target.y - ring.y) * 0.3;
      place(ringRef.current, ring.x, ring.y);
      place(dotRef.current, target.x, target.y);
      place(beamRef.current, target.x, target.y);
      frame = Math.abs(target.x - ring.x) + Math.abs(target.y - ring.y) > 0.1 ? requestAnimationFrame(tick) : 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setIsVisible(true);
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setOverText(!!el.closest(TEXT_FIELD));
      const interactiveEl = el.closest("a, button, [data-cursor-text], [role='button'], [tabindex='0']");
      setIsHovered(!!interactiveEl);
      setCursorText(interactiveEl?.getAttribute("data-cursor-text") || "");
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const size = (cursorText ? 88 : isHovered ? 56 : 32) * (pressed ? 0.8 : 1);

  return (
    <div
      className={`hidden lg:block pointer-events-none fixed inset-0 z-[2000] overflow-hidden transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Text-field cursor: an italic serif capital I, centred on the pointer */}
      <span
        ref={beamRef}
        className={`fixed top-0 left-0 font-serif italic text-[26px] leading-none text-white [text-shadow:0_0_3px_rgb(var(--paper))] will-change-transform select-none transition-opacity duration-150 ${
          overText ? "opacity-100" : "opacity-0"
        }`}
      >
        I
      </span>

      {/* Outer ring. Colours come from theme tokens (no blend mode, so photos are never colour-inverted) */}
      <div
        ref={ringRef}
        style={{ width: size, height: size }}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center border will-change-transform [transition:width_200ms_ease-out,height_200ms_ease-out,background-color_200ms,border-color_200ms,opacity_150ms] ${
          overText ? "opacity-0" : "opacity-100"
        } ${
          cursorText
            ? "bg-white border-transparent shadow-[0_6px_20px_rgb(0_0_0/0.25)]"
            : isHovered
            ? "bg-white/15 border-transparent"
            : "bg-transparent border-white/50"
        }`}
      >
        {cursorText && (
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-black">
            {cursorText}
          </span>
        )}
      </div>

      {/* Inner dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-white rounded-full ring-2 ring-black/40 will-change-transform transition-opacity duration-150 ${
          cursorText || isHovered || overText ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};
