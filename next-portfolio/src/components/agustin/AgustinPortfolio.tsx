"use client";

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
      {/* Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* (01) Software Skills - Strictly Isolated */}
        <SkillsSection />

        {/* (02) Work Experience - Strictly Isolated */}
        <ExperienceSection />

        {/* (03) Education & Leadership - Strictly Isolated */}
        <EducationSection />

        {/* (04) Selected Work / Case Studies */}
        <ProjectsSection />

        {/* (05) Services Packs */}
        <ServicesSection />

        {/* Verified Endorsement */}
        <TestimonialSection />

        {/* (06) Contact & Anti-Spam Security */}
        <ContactSection />
      </main>

      {/* Footer & Back to Top */}
      <Footer />
    </div>
  );
};
