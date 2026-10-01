/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.ts",
    "./resources/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Noto Serif Display", "Playfair Display", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern-dark":
          "radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern-dark": "32px 32px",
      },
      keyframes: {
        "glow-beam": {
          "0%": { strokeDashoffset: "0px" },
          "100%": { strokeDashoffset: "-360px" },
        },
        "shiny-sweep": {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(200%) skewX(-20deg)" },
        },
        "ios-jiggle": {
          "0%": { transform: "rotate(-2.5deg) translateY(0)" },
          "25%": { transform: "rotate(2deg) translateY(-0.5px)" },
          "50%": { transform: "rotate(-2deg) translateY(0.5px)" },
          "75%": { transform: "rotate(2.5deg) translateY(-0.5px)" },
          "100%": { transform: "rotate(-2.5deg) translateY(0)" },
        },
      },
      animation: {
        "glow-beam": "glow-beam 1.8s linear infinite",
        "shiny-sweep": "shiny-sweep 1.2s ease-in-out infinite",
        "ios-jiggle": "ios-jiggle 0.52s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
