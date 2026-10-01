"use client";

import React from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { TestimonialSection } from "@/components/portfolio/TestimonialSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { CustomCursor } from "@/components/portfolio/CustomCursor";

export default function ServicesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar activeSection="services" />
      <main className="pt-24 md:pt-32">
        <ServicesSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
