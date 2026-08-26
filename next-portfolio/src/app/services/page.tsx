"use client";

import React from "react";
import { Navbar } from "@/components/agustin/Navbar";
import { ServicesSection } from "@/components/agustin/ServicesSection";
import { TestimonialSection } from "@/components/agustin/TestimonialSection";
import { ContactSection } from "@/components/agustin/ContactSection";
import { Footer } from "@/components/agustin/Footer";
import { CustomCursor } from "@/components/agustin/CustomCursor";

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
