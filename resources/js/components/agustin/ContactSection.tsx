import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import Swal from "sweetalert2";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Enterprise Fullstack Project",
    message: "",
    antiSpam: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.antiSpam.trim() !== PORTFOLIO_DATA.personal.combatSpamAnswer) {
      Swal.fire({
        icon: "warning",
        title: "Anti-Spam Verification Failed",
        text: "Please solve the math challenge correctly: 17 + 2 = 19",
        background: "#0a0a0a",
        color: "#ffffff",
        confirmButtonColor: "#ffffff",
      });
      return;
    }

    setLoading(true);

    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "";

      const body = new FormData();
      body.append("_token", csrfToken);
      body.append("contact_name", formData.name);
      body.append("contact_email", formData.email);
      body.append("contact_subject", formData.subject);
      body.append("contact_message", formData.message);
      body.append("combat_spam", formData.antiSpam);

      const response = await fetch("/sendEmail", {
        method: "POST",
        headers: {
          "X-CSRF-TOKEN": csrfToken,
          "Accept": "application/json",
        },
        body: body,
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        setSubmitted(true);
        Swal.fire({
          icon: "success",
          title: "Message Delivered!",
          text: "Thank you! Muhammad Hafiz Ruslan has received your inquiry.",
          background: "#0a0a0a",
          color: "#ffffff",
          confirmButtonColor: "#ffffff",
        });
      } else {
        throw new Error(data.detail || "Unable to dispatch message.");
      }
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Transmission Error",
        text: err.message || "Failed to communicate with Laravel backend. Please try emailing hafizruslan98@gmail.com directly.",
        background: "#0a0a0a",
        color: "#ffffff",
        confirmButtonColor: "#ffffff",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-12 md:py-16 bg-black text-white px-6 md:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Marquee Header Banner */}
      <div className="mb-16 -mx-6 md:-mx-12 overflow-hidden py-4 border-y border-white/10 bg-white/[0.02]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 text-3xl sm:text-5xl font-serif italic text-white/40">
          <span>Say hello! ✦</span>
          <span>Start a project ✦</span>
          <span>Hire for contracts ✦</span>
          <span>Let&apos;s collaborate ✦</span>
          <span>Say hello! ✦</span>
          <span>Start a project ✦</span>
          <span>Hire for contracts ✦</span>
          <span>Let&apos;s collaborate ✦</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xs font-mono font-bold tracking-widest text-white/50">
                  (06)
                </span>
                <span className="font-serif italic text-lg text-white/60">
                  get in touch
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-6">
                Let&apos;s build <br />
                <span className="font-bold">something impactful.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed mb-8">
                Ready to elevate your engineering architecture, speed up document generation pipelines, or build scalable web applications? Let&apos;s discuss your project goals.
              </p>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-white/60">Direct Email:</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-white font-bold hover:underline"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="text-white/60">Alternate:</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.alternateEmail}`}
                    className="text-white/80 hover:text-white"
                  >
                    {PORTFOLIO_DATA.personal.alternateEmail}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="text-white/60">Location:</span>
                  <span className="text-white/80">{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono tracking-wider uppercase text-white/50">
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn ↗</a>
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub ↗</a>
              <a href={PORTFOLIO_DATA.personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume PDF ↗</a>
            </div>
          </div>

          {/* Right Column: Clean Underline Input Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-12 rounded-3xl border border-emerald-500/30 bg-emerald-500/[0.04] text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-400 text-black font-bold text-2xl flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  Message Dispatched Successfully
                </h3>
                <p className="text-white/70 max-w-md mx-auto text-sm sm:text-base">
                  Thank you for reaching out. I will review your project brief and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "Enterprise Fullstack Project", message: "", antiSpam: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono uppercase text-white hover:bg-white hover:text-black transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="text-[11px] uppercase font-mono tracking-widest text-white/50 block mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-lg sm:text-xl text-white placeholder-white/25 focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase font-mono tracking-widest text-white/50 block mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-lg sm:text-xl text-white placeholder-white/25 focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase font-mono tracking-widest text-white/50 block mb-2">
                    Service / Project Scope
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black border-b border-white/20 py-3 text-base sm:text-lg text-white focus:border-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Enterprise Fullstack Web Development">Enterprise Fullstack Web Development</option>
                    <option value="High-Throughput LaTeX / PDF Engine">High-Throughput LaTeX / PDF Engine</option>
                    <option value="Complex Booking & Allocation Systems">Complex Booking &amp; Allocation Systems</option>
                    <option value="Database Indexing & Query Latency Tuning">Database Indexing &amp; Query Latency Tuning</option>
                    <option value="General Engineering Contract / Collaboration">General Engineering Contract / Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase font-mono tracking-widest text-white/50 block mb-2">
                    Brief Project Summary / Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project timeline, tech requirements, and deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-base sm:text-lg text-white placeholder-white/25 focus:border-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Anti-Spam Math Challenge */}
                <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <label className="text-xs font-mono text-white/70 block mb-2">
                    🛡️ Anti-Spam Security Challenge: What is <b className="text-white font-bold">17 + 2</b>?
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Answer here"
                    value={formData.antiSpam}
                    onChange={(e) => setFormData({ ...formData, antiSpam: e.target.value })}
                    className="w-full max-w-xs bg-black border border-white/20 rounded-xl px-4 py-2 text-sm font-mono text-white placeholder-white/30 focus:border-white focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-white/40">
                  <input type="checkbox" required defaultChecked className="accent-white" />
                  <span>I consent to sharing these project details directly with Muhammad Hafiz Ruslan for consultation and proposal purposes.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 disabled:opacity-50 shadow-xl flex items-center justify-center gap-2"
                  data-cursor-text="Send"
                >
                  {loading ? (
                    <span>Transmitting to Laravel Backend...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
