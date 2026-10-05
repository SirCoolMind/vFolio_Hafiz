import React from "react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white px-6 md:px-12 pt-8 pb-24 xl:pb-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
        <div>© {new Date().getFullYear()} Muhammad Hafiz Ruslan. All rights reserved.</div>
        <button
          onClick={scrollToTop}
          className="hover:text-white underline underline-offset-4 transition-colors"
          data-cursor-text="Top"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
};
