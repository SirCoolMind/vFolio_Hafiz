import React from "react";
import { CustomCursor } from "./CustomCursor";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ContactSection } from "./ContactSection";

export const ContactView: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar activeSection="contact" />
      <main className="pt-28 md:pt-36">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
