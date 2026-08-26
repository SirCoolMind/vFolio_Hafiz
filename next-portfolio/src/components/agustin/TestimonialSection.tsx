"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const TestimonialSection: React.FC = () => {
  const testimonial = PORTFOLIO_DATA.testimonials[0];

  if (!testimonial) return null;

  return (
    <section className="relative py-20 bg-black text-white px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 md:p-16 rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-transparent text-center relative overflow-hidden"
        >
          {/* Subtle Quote Mark */}
          <span className="font-serif italic text-7xl sm:text-9xl text-white/10 select-none block -mb-8 sm:-mb-12">
            “
          </span>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-white/95 max-w-3xl mx-auto mb-8">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-lg font-semibold text-white tracking-tight">
              {testimonial.author}
            </h4>
            <p className="text-xs font-mono text-white/60">
              {testimonial.role} • {testimonial.company}
            </p>

            <a
              href={testimonial.linkedInPostUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:underline"
              data-cursor-text="Verify"
            >
              <span>Verified on LinkedIn</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Distinct Section Separator */}
        <div className="mt-20 divider-line" />
      </div>
    </section>
  );
};
