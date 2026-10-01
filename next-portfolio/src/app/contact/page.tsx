"use client";

import React from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { CustomCursor } from "@/components/portfolio/CustomCursor";

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar activeSection="contact" />
      <main className="pt-24 md:pt-32">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
