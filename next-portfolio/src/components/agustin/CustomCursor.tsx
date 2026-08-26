"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, [data-cursor], input, textarea, select");
      if (interactiveEl) {
        setIsHovering(true);
        const customText = interactiveEl.getAttribute("data-cursor-text");
        setHoverText(customText || "");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Central dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer follow ring */}
      <motion.div
        className="fixed top-0 left-0 border border-white/60 pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
        style={{
          borderRadius: isHovering ? "4px" : "9999px",
        }}
        animate={{
          x: mousePosition.x - (isHovering ? (hoverText ? 44 : 24) : 18),
          y: mousePosition.y - (isHovering ? (hoverText ? 44 : 24) : 18),
          width: isHovering ? (hoverText ? 88 : 48) : 36,
          height: isHovering ? (hoverText ? 88 : 48) : 36,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.15)" : "transparent",
          borderColor: isHovering ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.4)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 280, mass: 0.2 }}
      >
        {hoverText && (
          <span className="text-[10px] uppercase font-mono tracking-widest text-white font-semibold">
            {hoverText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
