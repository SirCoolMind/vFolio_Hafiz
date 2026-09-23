import React from "react";
import { CustomCursor } from "./CustomCursor";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { ProjectsSection } from "./ProjectsSection";
import { ServicesSection } from "./ServicesSection";
import { TestimonialSection } from "./TestimonialSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export const AgustinPortfolio: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <CustomCursor />
      <Navbar activeSection="home" />

      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
