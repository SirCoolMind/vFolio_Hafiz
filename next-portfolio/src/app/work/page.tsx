"use client";

import React from "react";
import { Navbar } from "@/components/agustin/Navbar";
import { ProjectsSection } from "@/components/agustin/ProjectsSection";
import { ContactSection } from "@/components/agustin/ContactSection";
import { Footer } from "@/components/agustin/Footer";
import { CustomCursor } from "@/components/agustin/CustomCursor";

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
