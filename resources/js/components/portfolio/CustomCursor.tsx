import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, [data-cursor-text], [role='button']");
      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute("data-cursor-text");
        setCursorText(text || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Magnetic Ring / Expansion */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorText ? 44 : isHovered ? 28 : 16),
          y: mousePosition.y - (cursorText ? 44 : isHovered ? 28 : 16),
          width: cursorText ? 88 : isHovered ? 56 : 32,
          height: cursorText ? 88 : isHovered ? 56 : 32,
          backgroundColor: cursorText ? "#ffffff" : isHovered ? "rgba(255, 255, 255, 0.15)" : "transparent",
          borderColor: isHovered ? "transparent" : "rgba(255, 255, 255, 0.5)",
          borderWidth: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350, mass: 0.2 }}
      >
        {cursorText && (
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-black">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      {!cursorText && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
            scale: isHovered ? 0 : 1,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 450, mass: 0.1 }}
        />
      )}
    </div>
  );
};
