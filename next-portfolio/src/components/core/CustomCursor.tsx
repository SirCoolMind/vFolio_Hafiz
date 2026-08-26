"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface CustomCursorProps {
  variant?: "default" | "reticle" | "spotlight" | "difference" | "pixel" | "viewfinder" | "fluid";
  color?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  variant = "default",
  color = "#00f0ff",
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });

      // Update CSS variables for spotlight cards
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, [role='button'], input, textarea, [data-cursor]");
        if (interactive) {
          setIsHovered(true);
          const customText = interactive.getAttribute("data-cursor-text");
          setCursorText(customText || "");
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Reticle / HUD Cyber Variant */}
      {variant === "reticle" && (
        <motion.div
          style={{ x: smoothX, y: smoothY, transform: "translate(-50%, -50%)" }}
          className="relative flex items-center justify-center"
        >
          <div
            className={`w-10 h-10 border border-dashed rounded-full transition-all duration-300 ${
              isHovered ? "w-16 h-16 border-cyan-400 rotate-45 scale-110" : "border-cyan-500/50"
            }`}
            style={{ borderColor: color }}
          />
          <div className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full" style={{ backgroundColor: color }} />
          <div className="absolute top-6 left-6 font-mono text-[9px] tracking-wider text-cyan-400 bg-black/80 px-1.5 py-0.5 rounded border border-cyan-500/30 whitespace-nowrap">
            {isHovered ? (cursorText || "TARGET LOCK") : `X:${coords.x} Y:${coords.y}`}
          </div>
        </motion.div>
      )}

      {/* Difference Invert Variant (Brutalist) */}
      {variant === "difference" && (
        <motion.div
          style={{ x: smoothX, y: smoothY, transform: "translate(-50%, -50%)" }}
          className={`rounded-full bg-white mix-blend-difference transition-all duration-200 flex items-center justify-center ${
            isHovered ? "w-20 h-20 scale-125" : isClicking ? "w-6 h-6" : "w-10 h-10"
          }`}
        >
          {cursorText && (
            <span className="text-[10px] font-black uppercase text-black tracking-widest text-center px-1">
              {cursorText}
            </span>
          )}
        </motion.div>
      )}

      {/* Retro Pixel Variant */}
      {variant === "pixel" && (
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="relative font-mono text-emerald-400 select-none -translate-x-1 -translate-y-1"
        >
          <div className="w-4 h-4 bg-emerald-400 shadow-[0_0_10px_#10b981] animate-pulse" />
          {cursorText && (
            <span className="ml-5 mt-1 block text-[10px] bg-black border border-emerald-500 text-emerald-300 px-1">
              {`> ${cursorText}`}
            </span>
          )}
        </motion.div>
      )}

      {/* Viewfinder Film Reel Variant */}
      {variant === "viewfinder" && (
        <motion.div
          style={{ x: smoothX, y: smoothY, transform: "translate(-50%, -50%)" }}
          className="relative flex items-center justify-center"
        >
          <div className="w-12 h-12 border border-amber-400/40 rounded-sm relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-amber-400" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-amber-400" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-amber-400" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-amber-400" />
          </div>
          <div className="absolute w-1 h-1 bg-red-500 rounded-full animate-ping" />
          <span className="absolute -bottom-5 text-[9px] font-mono text-amber-400/80 tracking-widest">
            {`[REC] ${coords.x}mm`}
          </span>
        </motion.div>
      )}

      {/* Default & Spotlight Variant */}
      {(variant === "default" || variant === "spotlight" || variant === "fluid") && (
        <>
          <motion.div
            style={{ x: smoothX, y: smoothY, transform: "translate(-50%, -50%)" }}
            className={`rounded-full border transition-all duration-300 flex items-center justify-center ${
              isHovered
                ? "w-16 h-16 bg-white/10 backdrop-blur-sm border-white/40 scale-110 shadow-lg shadow-cyan-500/20"
                : isClicking
                ? "w-8 h-8 border-white/60 scale-90"
                : "w-10 h-10 border-white/30"
            }`}
          >
            {cursorText && (
              <span className="text-[10px] font-medium tracking-wider text-white text-center px-1">
                {cursorText}
              </span>
            )}
          </motion.div>
          <motion.div
            style={{ x: mouseX, y: mouseY, transform: "translate(-50%, -50%)" }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </>
      )}
    </div>
  );
};
