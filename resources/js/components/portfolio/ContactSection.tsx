import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { SweetAlertOptions } from "sweetalert2";

// SweetAlert2 is only needed after a submit, so load it on demand
const showAlert = async (options: SweetAlertOptions) => {
  const { default: Swal } = await import("sweetalert2");
  return Swal.fire(options);
};

const EMPTY_FORM = { name: "", email: "", subject: "", message: "", antiSpam: "" };

const swalTheme = () => {
  const light = document.documentElement.getAttribute("data-theme") === "light";
  return {
    background: light ? "#faf9f6" : "#18191e",
    color: light ? "#141518" : "#f2f0eb",
    confirmButtonColor: light ? "#141518" : "#f2f0eb",
  };
};

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-[15px] text-white placeholder-white/45 transition-colors hover:border-white/30 focus:border-white focus:bg-black/60 focus:outline-none";

const labelClass = "block text-sm font-medium text-white/80 mb-1.5";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [botFlagged, setBotFlagged] = useState(false);

  const update = (field: keyof typeof EMPTY_FORM) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Wrong answer: don't block the visitor, but skip sending and say so under the success state
    if (formData.antiSpam.trim() !== PORTFOLIO_DATA.personal.combatSpamAnswer) {
      setBotFlagged(true);
      setSubmitted(true);
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
        setBotFlagged(false);
        setSubmitted(true);
      } else {
        throw new Error(data.detail || "Unable to send the message.");
      }
    } catch (err: any) {
      showAlert({
        icon: "error",
        title: "Message not sent",
        text: `${err.message || "Something went wrong."} You can email me directly at ${PORTFOLIO_DATA.personal.email}.`,
        ...swalTheme(),
      });
    } finally {
      setLoading(false);
    }
  };

  const marqueeSet = ["Say hello!", "Start a project", "Hire for contracts", "Let's collaborate"];

  return (
    <section
      id="contact"
      className="section-panel text-white px-6 md:px-12 py-10 md:py-14"
    >
      {/* Marquee Header Banner */}
      <div className="mb-10 -mx-6 md:-mx-12 -mt-10 md:-mt-14 overflow-hidden py-4 border-y border-white/10 bg-white/[0.02]">
        <div className="animate-marquee whitespace-nowrap text-3xl sm:text-5xl font-serif italic text-white/60">
          {[...marqueeSet, ...marqueeSet, ...marqueeSet, ...marqueeSet].map((phrase, i) => (
            <span key={i} className="pr-10" aria-hidden={i >= marqueeSet.length}>
              {phrase} ✦
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-xs font-mono font-bold tracking-widest text-white/65">
                (06)
              </span>
              <span className="font-serif italic text-lg text-white/60">
                thank you for visiting me
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-5">
              Let&apos;s make <br />
              <span className="font-bold">magic happen!</span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
              Hiring for a role, or have a project in mind? Send a message and I&apos;ll get back to you.
            </p>

            <ul className="space-y-3 text-[15px]">
              <li>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="group inline-flex items-center gap-3 text-white hover:underline underline-offset-4"
                >
                  <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black transition-colors">
                    <Mail size={16} strokeWidth={1.75} />
                  </span>
                  <span className="font-medium">{PORTFOLIO_DATA.personal.email}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-white/75">
                <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80">
                  <MapPin size={16} strokeWidth={1.75} />
                </span>
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </li>
            </ul>

            {/* Profiles & documents */}
            <div className="pt-6 mt-8 border-t border-white/10 flex flex-wrap items-center gap-2.5">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-black hover:border-white transition-colors"
                data-cursor-text="In"
              >
                <Linkedin size={18} strokeWidth={1.75} />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-black hover:border-white transition-colors"
                data-cursor-text="Git"
              >
                <Github size={18} strokeWidth={1.75} />
              </a>
              <span className="w-px h-6 bg-white/15 mx-1.5" aria-hidden="true" />
              <a href={PORTFOLIO_DATA.personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-wider uppercase text-white/70 hover:text-white transition-colors px-2">Resume ↗</a>
              <a href={PORTFOLIO_DATA.personal.cvUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-wider uppercase text-white/70 hover:text-white transition-colors px-2">CV ↗</a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/[0.12] bg-white/[0.03] p-5 sm:p-7">
              {submitted ? (
                <div className="py-10 text-center space-y-4" role="status">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Message sent</h3>
                  <p className="text-white/70 max-w-sm mx-auto text-[15px]">
                    Thanks for reaching out. I&apos;ll reply to {formData.email || "your email"} soon.
                  </p>
                  {botFlagged && (
                    <p
                      role="alert"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-left border border-amber-500/40 bg-amber-500/10 text-amber-500 text-sm font-medium"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      </svg>
                      Bot detected. Email will not be sent.
                    </p>
                  )}
                  <div>
                  <button
                    onClick={() => {
                      setBotFlagged(false);
                      setSubmitted(false);
                      setFormData(EMPTY_FORM);
                    }}
                    className="mt-2 px-5 py-2.5 rounded-full border border-white/20 text-sm text-white hover:bg-white hover:text-black transition-colors"
                  >
                    Send another message
                  </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-semibold text-white">Drop me a message!</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={update("name")}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={update("email")}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className={labelClass}>Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder="Interested in job opening at our place?"
                      value={formData.subject}
                      onChange={update("subject")}
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>Message</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Give me more details"
                      value={formData.message}
                      onChange={update("message")}
                      className={`${fieldClass} resize-y min-h-[120px]`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                    <div className="sm:w-44">
                      <label htmlFor="contact-antispam" className={labelClass}>
                        What is 17 + 2?
                      </label>
                      <input
                        id="contact-antispam"
                        type="text"
                        inputMode="numeric"
                        required
                        placeholder="Answer"
                        value={formData.antiSpam}
                        onChange={update("antiSpam")}
                        className={fieldClass}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="sm:flex-1 h-[50px] px-6 rounded-xl bg-white text-black font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                      data-cursor-text="Send"
                    >
                      {loading ? (
                        <span>Sending…</span>
                      ) : (
                        <>
                          <span>Send message</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
