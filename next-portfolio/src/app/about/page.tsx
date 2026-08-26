"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/agustin/Navbar";
import { SkillsSection } from "@/components/agustin/SkillsSection";
import { ExperienceSection } from "@/components/agustin/ExperienceSection";
import { EducationSection } from "@/components/agustin/EducationSection";
import { ContactSection } from "@/components/agustin/ContactSection";
import { Footer } from "@/components/agustin/Footer";
import { CustomCursor } from "@/components/agustin/CustomCursor";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <CustomCursor />
      <Navbar activeSection="about" />

      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16">
          <div className="mb-8">
            <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white/70 block mb-2">
              hi there, I&apos;m
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
              Muhammad Hafiz Ruslan
            </h1>
          </div>

          {/* High-Impact Portrait in Original Color */}
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 my-12 shadow-2xl group bg-neutral-900">
            <Image
              src="/assets/img/person.jpg"
              alt="Muhammad Hafiz Ruslan"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 block font-semibold">
                Full Stack Developer &amp; Software Engineer
              </span>
              <span className="text-lg md:text-xl font-mono font-bold text-white">
                Banting &amp; Kuala Lumpur, Malaysia
              </span>
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

            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-white/80 leading-relaxed font-sans">
              <p>
                I am a First-Class Honours Computer Science graduate from Universiti Teknologi MARA (UiTM) with a 3.53 CGPA. Over the past 4+ years, I have engineered mission-critical backend APIs, high-throughput asynchronous document pipelines, and scalable multi-tenant web applications.
              </p>
              <p>
                At <b>IMT Tech Sdn Bhd</b>, I architected an asynchronous <b>LaTeX</b> invoice engine generating over <b>1,000+ custom PDF invoice pages in seconds</b>, overcoming heavy processing bottlenecks for enterprise clients. I also designed an adaptive facility allocation system managing <b>300+ rooms across 80+ building levels</b> with zero collision risk.
              </p>
              <p>
                Prior to this at <b>Unijaya Resources</b>, I spearheaded development across <b>7 live client web portals</b>, cutting database query latency by 40% and instituting team-wide code standardizations. My foundation began with a self-taught jump from Java to the MERN stack at <b>Leadmind</b>, where I built a 1,000+ lead management platform with sub-50ms instant search.
              </p>
            </div>
          </div>
        </section>

        {/* Separated Sections */}
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
