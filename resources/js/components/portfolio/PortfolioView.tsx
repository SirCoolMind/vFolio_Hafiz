import React from "react";
import { CustomCursor } from "./CustomCursor";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { ProjectsSection } from "./ProjectsSection";
import { TestimonialSection } from "./TestimonialSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { Lightbox } from "./Lightbox";
import { useSectionProgress } from "./wayfinding/useSectionProgress";
import { ChapterRail } from "./wayfinding/ChapterRail";
import { ChapterPill } from "./wayfinding/ChapterPill";

// Owns the scroll state so only the wayfinding UI re-renders while scrolling.
const Wayfinding: React.FC = () => {
  const sectionProgress = useSectionProgress();
  return (
    <>
      <ChapterRail {...sectionProgress} />
      <ChapterPill {...sectionProgress} />
    </>
  );
};

export const PortfolioView: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar activeSection="live" />
      <Wayfinding />
      <Lightbox />

      <div className="has-rail">
        <main className="relative z-10 max-w-[1500px] mx-auto px-2 sm:px-4 xl:pl-0 xl:pr-6">
          <HeroSection />
          <div className="space-y-3 sm:space-y-4">
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
            <TestimonialSection />
            <ContactSection />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
