import React from "react";
import { CustomCursor } from "./CustomCursor";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ProjectsSection } from "./ProjectsSection";

export const WorkView: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar activeSection="work" />
      <main className="pt-28 md:pt-32 px-2 sm:px-4 space-y-3 sm:space-y-4 max-w-[1500px] mx-auto">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};
