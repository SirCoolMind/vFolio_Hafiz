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
      <main className="pt-28 md:pt-36">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};
