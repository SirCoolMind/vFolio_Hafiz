import React, { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";
import { PORTFOLIO_DATA, ProjectShowcase } from "@/data/portfolio-data";
import { openLightbox } from "./Lightbox";

/** Swipeable screenshot strip (native scroll-snap) with arrows, dots and zoom. */
const ScreenshotCarousel: React.FC<{ project: ProjectShowcase }> = ({ project }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const shots = project.screenshots;
  const gallery = shots.map((shot) => ({
    src: shot.src,
    alt: `${project.title}: ${shot.caption}`,
    caption: `${project.title} · ${shot.caption}`,
  }));

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (i + shots.length) % shots.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  const arrowBtn =
    "w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white/80 hover:bg-white hover:text-black hover:border-white transition-colors";

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-xl">
        <div
          ref={trackRef}
          onScroll={onScroll}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); goTo(index + 1); }
            if (e.key === "ArrowLeft") { e.preventDefault(); goTo(index - 1); }
          }}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${project.title} screenshots`}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          {shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => openLightbox(gallery[i], gallery, i)}
              className="w-full shrink-0 snap-center cursor-zoom-in"
              aria-label={`Open screenshot ${i + 1} of ${shots.length}: ${shot.caption}`}
              data-cursor-text="Zoom"
            >
              <img
                loading="lazy"
                src={shot.src}
                alt={`${project.title}: ${shot.caption}`}
                decoding="async"
                width={1526}
                height={770}
                draggable={false}
                className="w-full aspect-[1526/770] object-cover object-top"
              />
            </button>
          ))}
        </div>
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-mono tabular-nums text-snow/90 bg-coal/60 backdrop-blur-md border border-snow/15 pointer-events-none">
          {index + 1} / {shots.length}
        </span>
      </div>

      {/* Caption + controls */}
      <div className="mt-3 md:mt-4 flex items-center gap-4">
        <p className="flex-1 min-w-0 text-sm text-white/70" aria-live="polite">
          {shots[index]?.caption}
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button type="button" className={arrowBtn} onClick={() => goTo(index - 1)} aria-label="Previous screenshot">
            <ChevronLeft size={18} />
          </button>
          <button type="button" className={arrowBtn} onClick={() => goTo(index + 1)} aria-label="Next screenshot">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="mt-3 flex gap-1.5" role="tablist" aria-label="Choose screenshot">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Screenshot ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="work" className="section-panel text-white px-5 md:px-12 py-8 md:py-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 lg:gap-6 mb-6 md:mb-10">
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-xs font-mono font-bold tracking-widest text-white/65">(04)</span>
              <span className="font-serif italic text-lg text-white/60">side quests</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
              Things I&apos;ve <span className="font-bold">built</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-white/60 font-sans max-w-md leading-relaxed">
            Personal AI tools I build on my own time. Private and local-first, so your data stays on your own device.
          </p>
        </div>

        <div className="space-y-10 md:space-y-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <article
              key={project.id}
              className="md:p-8 md:rounded-3xl md:border md:border-white/10 md:bg-white/[0.02] md:hover:border-white/30 transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8 items-center">
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <ScreenshotCarousel project={project} />
                </div>

                <div className={`lg:col-span-5 flex flex-col ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-xs font-mono text-white/60 mb-1 md:mb-2">(0{idx + 1})</span>
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">{project.title}</h3>
                  <p className="font-serif italic text-lg text-white/70 mt-1">{project.tagline}</p>

                  <p className="text-sm sm:text-base text-white/75 leading-relaxed mt-3 md:mt-5">{project.description}</p>

                  <ul className="space-y-1.5 md:space-y-2 mt-3 md:mt-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed">
                        <span className="text-emerald-400 mt-1 text-[10px]">◆</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-4 md:mt-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-white/80 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 md:gap-3 mt-5 pt-5 md:mt-7 md:pt-6 border-t border-white/10">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90 transition-opacity"
                        data-cursor-text="Open"
                      >
                        <span>Live demo</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white hover:text-black hover:border-white transition-colors"
                        data-cursor-text="Git"
                      >
                        <Github size={16} />
                        <span>Source code</span>
                      </a>
                    )}
                    {project.note && (
                      <span className="text-xs font-mono text-white/55">{project.note}</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
