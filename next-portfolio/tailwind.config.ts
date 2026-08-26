import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Courier New", "monospace"],
      },
      colors: {
        cyber: {
          bg: "#08090d",
          card: "#11141c",
          border: "#1e2536",
          cyan: "#00f0ff",
          green: "#00ff66",
          amber: "#ffb703",
          pink: "#ff007f",
        },
        obsidian: {
          950: "#030712",
          900: "#070b14",
          800: "#0f172a",
          700: "#1e293b",
        },
        swiss: {
          bg: "#f7f5f0",
          darkBg: "#0d0e12",
          text: "#121316",
          accent: "#c44d2d",
          line: "#e3dfd6",
          darkLine: "#252730",
        },
        aurora: {
          violet: "#8b5cf6",
          cyan: "#06b6d4",
          pink: "#ec4899",
          emerald: "#10b981",
        }
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 4s ease-in-out infinite",
        "float-delayed": "float 5s ease-in-out 2s infinite",
        "aurora": "aurora 15s ease infinite alternate",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee 25s linear infinite reverse",
        "scanline": "scanline 8s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 5px rgba(0, 240, 255, 0.4))" },
          "100%": { filter: "drop-shadow(0 0 20px rgba(0, 240, 255, 0.9))" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        "grid-pattern-dark": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};

export default config;
