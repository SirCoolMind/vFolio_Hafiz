import React from "react";
import { CustomCursor } from "./CustomCursor";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import { SkillsSection } from "./SkillsSection";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const AboutView: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar activeSection="about" />

      <main className="pt-28 md:pt-36">
        {/* Hero Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-7">
              <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white/70 block mb-2">
                hi there, I&apos;m
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
                Muhammad Hafiz Ruslan
              </h1>
              <p className="text-lg sm:text-xl font-light text-white/80 leading-relaxed max-w-xl">
                Full-Stack Developer and Software Engineer with over 4 years of experience architecting high-throughput backend services, document compilation engines, and reactive modern frontends.
              </p>
            </div>

            {/* High-Impact Portrait in Original Color (Top Right) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 shadow-2xl group bg-neutral-900">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt="Muhammad Hafiz Ruslan"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 block font-semibold">
                    Full Stack Developer &amp; Software Engineer
                  </span>
                  <span className="text-base font-mono font-bold text-white">
                    Banting &amp; Kuala Lumpur, Malaysia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Resume Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-12 border-t border-white/10">
            <div className="lg:col-span-4">
              <span className="font-serif italic text-3xl text-white/80 block">
                the Resume
              </span>
              <span className="text-xs uppercase font-mono tracking-widest text-white/40 block mt-2">
                Background &amp; Philosophy
              </span>
            </div>

            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-white/80 font-sans font-light leading-relaxed">
              <p>
                I am a First-Class Honours Computer Science graduate from Universiti Teknologi MARA (UiTM) with a 3.53 CGPA. Over the past 4+ years, I have engineered mission-critical backend APIs, high-throughput asynchronous document pipelines, and scalable multi-tenant web applications.
              </p>
              <p>
                At <b className="font-medium text-white">IMT Tech Sdn Bhd</b>, I architected an asynchronous <b className="font-medium text-white">LaTeX</b> invoice engine generating over 1,000+ custom PDF invoices in seconds, overcoming limitations of conventional DOM parsers. I also developed an adaptive booking algorithm orchestrating 300+ rooms across 80+ levels without collision.
              </p>
              <p>
                At <b className="font-medium text-white">Unijaya Resources</b>, I maintained and accelerated 7 enterprise web applications, dropping database query latency by 40% through composite indexing and optimized query structures.
              </p>
            </div>
          </div>
        </section>

        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </main>

      <Footer />
    </div>
  );
};
