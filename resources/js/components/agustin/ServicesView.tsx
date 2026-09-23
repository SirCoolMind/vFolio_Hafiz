import React from "react";
import { CustomCursor } from "./CustomCursor";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ServicesSection } from "./ServicesSection";
import { ContactSection } from "./ContactSection";

export const ServicesView: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar activeSection="services" />
      <main className="pt-28 md:pt-36">
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
