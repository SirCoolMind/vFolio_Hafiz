"use client";

import React from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { CustomCursor } from "@/components/portfolio/CustomCursor";

export default function WorkPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar activeSection="work" />
      <main className="pt-24 md:pt-32">
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
