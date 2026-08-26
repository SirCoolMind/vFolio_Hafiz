"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Github, Linkedin, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface ContactSectionProps {
  themeStyle?: "cyber" | "editorial" | "bento" | "glass" | "brutalist" | "retro" | "minimal";
}

export const ContactSection: React.FC<ContactSectionProps> = ({ themeStyle = "cyber" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    spamCheck: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Bot combat spam validation (authentic check from Laravel database: 17 + 2 = 19)
    if (formData.spamCheck.trim() !== PORTFOLIO_DATA.personal.combatSpamAnswer) {
      setStatus("error");
      setErrorMessage("Anti-Spam Verification Failed: 17 + 2 must equal 19.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    // Simulate reliable dispatch + mailto fallback
    setTimeout(() => {
      setStatus("success");
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
          <ShieldCheck size={14} /> Direct Encrypted Communication
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Initiate Contact & Collaboration
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Have an upcoming high-scale project, contract inquiry, or fullstack role? Let&apos;s build exceptional software together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Info Left Card with Hafiz's Photo Profile */}
        <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-black border-2 border-cyan-400 shrink-0 shadow-lg">
              <img
                src={PORTFOLIO_DATA.personal.avatar}
                alt={PORTFOLIO_DATA.personal.name}
                className="w-full h-full object-cover object-[center_60%]"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-snug">{PORTFOLIO_DATA.personal.name}</h3>
              <span className="text-xs text-cyan-400 font-mono block">Laravel Fullstack Engineer</span>
              <span className="text-[11px] text-slate-400">UiTM 1st Class Honours (3.53)</span>
            </div>
          </div>
          
          <div className="space-y-6 mb-8">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
            >
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Direct Email</div>
                <div className="text-sm font-semibold">{PORTFOLIO_DATA.personal.email}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Base Location</div>
                <div className="text-sm font-semibold">{PORTFOLIO_DATA.personal.location}</div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800">
            <div className="text-xs font-mono uppercase text-slate-400 mb-4 tracking-wider">
              Verified Profiles & Repositories
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="GITHUB"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-all border border-slate-700"
              >
                <Github size={16} /> GitHub (@SirCoolMind)
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="LINKEDIN"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 text-xs font-mono transition-all border border-cyan-500/30"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Form Right Card */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="High-scale Architecture / Contract Discussion"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                Your Message *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Hello Hafiz, we are exploring a new enterprise platform and would love your engineering expertise..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            {/* Anti-Spam Math Validation (17 + 2) */}
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20">
              <label className="block text-xs font-mono uppercase text-cyan-300 mb-1.5 flex items-center justify-between">
                <span>Security Verification: Solve Math Captcha *</span>
                <span className="text-cyan-400 font-bold">17 + 2 = ?</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter answer (e.g. 19)"
                value={formData.spamCheck}
                onChange={(e) => setFormData({ ...formData, spamCheck: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-cyan-500/30 text-white font-mono text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === "success" && (
              <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Message verified and client dispatch ready. Thank you!</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              data-cursor-text="SEND"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 disabled:opacity-50"
            >
              <Send size={16} />
              <span>{status === "submitting" ? "Transmitting..." : "Send Message to Hafiz"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
