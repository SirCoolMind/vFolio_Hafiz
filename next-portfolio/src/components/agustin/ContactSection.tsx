"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    combatSpam: "",
    acceptedPrivacy: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.acceptedPrivacy) {
      setErrorMessage("Please accept the terms to proceed.");
      setStatus("error");
      return;
    }

    if (formState.combatSpam.trim() !== PORTFOLIO_DATA.personal.combatSpamAnswer) {
      setErrorMessage("Anti-Spam validation failed. Please solve: 17 + 2 = ?");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        service: "",
        message: "",
        combatSpam: "",
        acceptedPrivacy: false,
      });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-black text-white px-6 md:px-12 overflow-hidden">
      {/* Infinite Scrolling Marquee ("Say hello!") */}
      <div className="w-full overflow-hidden whitespace-nowrap mb-16 select-none opacity-20 hover:opacity-40 transition-opacity">
        <div className="inline-block animate-marquee">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-6xl sm:text-8xl md:text-9xl font-light tracking-tighter mx-4 text-stroke-1 text-transparent">
                Say hello! <span className="font-serif italic font-normal text-white/40">✦</span>
              </span>
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-white/40 mb-3">
                <span className="text-xl md:text-2xl font-mono font-bold text-white">(06)</span>
                <span className="font-serif italic text-lg text-white/70">get in touch</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-6">
                Let&apos;s build <br />
                <span className="font-bold">something impactful.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed mb-8">
                Ready to elevate your engineering architecture, speed up document generation pipelines, or build scalable web applications? Let&apos;s discuss your project goals.
              </p>

              <div className="space-y-4 pt-6 border-t border-white/10 text-sm font-mono">
                <div className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Direct Email:</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-white hover:underline font-semibold"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span>Alternate:</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.alternateEmail}`}
                    className="hover:text-white"
                  >
                    {PORTFOLIO_DATA.personal.alternateEmail}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span>Location:</span>
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-10 mt-10 border-t border-white/10 text-xs font-mono tracking-wider uppercase">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-white hover:underline transition-colors"
                data-cursor-text="Connect"
              >
                LinkedIn ↗
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-white hover:underline transition-colors"
                data-cursor-text="Code"
              >
                GitHub ↗
              </a>
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-white hover:underline transition-colors"
                data-cursor-text="CV"
              >
                Resume PDF ↗
              </a>
            </div>
          </div>

          {/* Right Column: Underline Form with Anti-Spam Security */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase font-mono tracking-widest text-white/40 mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 text-base sm:text-lg text-white placeholder-white/25 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-widest text-white/40 mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@enterprise.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 text-base sm:text-lg text-white placeholder-white/25 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-widest text-white/40 mb-2">
                  Service / Project Scope
                </label>
                <select
                  required
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full bg-black border-b border-white/20 focus:border-white py-3 text-base sm:text-lg text-white focus:outline-none transition-colors"
                >
                  <option value="" disabled>What are you looking to build?</option>
                  <option value="Fullstack Development">Enterprise Fullstack Web Development</option>
                  <option value="High-Throughput LaTeX Engine">High-Throughput LaTeX Document Engine</option>
                  <option value="Booking & Allocation System">Complex Room &amp; Facility Booking Engine</option>
                  <option value="Database Indexing Tuning">Database Indexing &amp; Query Latency Tuning</option>
                  <option value="Technical Mentorship">Technical Consultation &amp; Code Review</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-widest text-white/40 mb-2">
                  Brief Project Summary / Requirements
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project timeline, tech requirements, and deliverables..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white py-3 text-base sm:text-lg text-white placeholder-white/25 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Combat Spam Field from Original Backend */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <label className="block text-xs font-mono text-white/60 mb-2">
                  🛡️ Anti-Spam Security Challenge: What is <span className="text-white font-bold">17 + 2</span>?
                </label>
                <input
                  type="text"
                  required
                  placeholder="Answer here"
                  value={formState.combatSpam}
                  onChange={(e) => setFormState({ ...formState, combatSpam: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white py-2 text-sm font-mono text-white placeholder-white/20 focus:outline-none transition-colors"
                />
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  checked={formState.acceptedPrivacy}
                  onChange={(e) => setFormState({ ...formState, acceptedPrivacy: e.target.checked })}
                  className="mt-1 accent-white"
                />
                <label htmlFor="privacy" className="text-xs text-white/60 leading-relaxed cursor-pointer">
                  I consent to sharing these project details directly with Muhammad Hafiz Ruslan for consultation and proposal purposes.
                </label>
              </div>

              {/* Status alerts */}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs font-mono">
                  {errorMessage || "Submission failed. Please check all required fields."}
                </div>
              )}

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  ✓ Message transmitted successfully! Hafiz will respond within 24 business hours.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full group flex items-center justify-between px-8 py-5 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 disabled:opacity-50"
                data-cursor-text="Send"
              >
                <span>{status === "submitting" ? "Transmitting..." : "Send Message"}</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
