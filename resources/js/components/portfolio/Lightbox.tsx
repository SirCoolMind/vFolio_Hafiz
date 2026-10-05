import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

const OPEN_EVENT = "lightbox:open";
const MIN_SCALE = 1;
const MAX_SCALE = 5;
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

interface OpenDetail {
  images: LightboxImage[];
  index: number;
}

/** Open an image in the shared lightbox. Pass a gallery to get prev/next browsing. */
export const openLightbox = (image: LightboxImage, gallery?: LightboxImage[], index = 0) => {
  const detail: OpenDetail = gallery?.length ? { images: gallery, index } : { images: [image], index: 0 };
  window.dispatchEvent(new CustomEvent<OpenDetail>(OPEN_EVENT, { detail }));
};

/**
 * Wraps a photo so it opens in the lightbox. Keeps the wrapped markup's own
 * layout; adds a zoom-in cursor and keyboard access.
 */
export const ZoomablePhoto: React.FC<
  LightboxImage & { className?: string; children: React.ReactNode }
> = ({ src, alt, caption, className = "", children }) => (
  <button
    type="button"
    onClick={() => openLightbox({ src, alt, caption })}
    aria-label={`Open photo: ${alt}`}
    className={`block w-full text-left cursor-zoom-in ${className}`}
    data-cursor-text="Zoom"
  >
    {children}
  </button>
);

/** Mounted once per page. Wheel, buttons, double-click and pinch zoom; drag to pan; arrows/swipe for galleries. */
export const Lightbox: React.FC = () => {
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [index, setIndex] = useState(0);
  const image = images[index] ?? null;
  const hasGallery = images.length > 1;
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchStart = useRef<{ dist: number; scale: number } | null>(null);
  const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const reset = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const zoomTo = useCallback((next: number) => {
    const s = clamp(next, MIN_SCALE, MAX_SCALE);
    setScale(s);
    if (s === 1) setOffset({ x: 0, y: 0 });
  }, []);

  const close = useCallback(() => {
    setImages([]);
    reset();
  }, [reset]);

  const step = useCallback(
    (dir: number) => {
      if (images.length < 2) return;
      reset();
      setIndex((i) => (i + dir + images.length) % images.length);
    },
    [images.length, reset]
  );

  useEffect(() => {
    const onOpen = (e: Event) => {
      const { images: next, index: start } = (e as CustomEvent<OpenDetail>).detail;
      reset();
      setImages(next);
      setIndex(start);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, [reset]);

  useEffect(() => {
    if (!image) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "+" || e.key === "=") setScale((s) => clamp(s + 0.5, MIN_SCALE, MAX_SCALE));
      if (e.key === "-") zoomTo(scale - 0.5);
      if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus?.();
    };
  }, [image, close, reset, zoomTo, scale, step]);

  if (!image) return null;

  const onWheel = (e: React.WheelEvent) => {
    zoomTo(scale * (e.deltaY < 0 ? 1.15 : 1 / 1.15));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinchStart.current = { dist: Math.hypot(a.x - b.x, a.y - b.y), scale };
      dragStart.current = null;
    } else {
      dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
      swipeStart.current = scale === 1 ? { x: e.clientX, y: e.clientY } : null;
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2 && pinchStart.current) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      zoomTo(pinchStart.current.scale * (dist / pinchStart.current.dist));
    } else if (dragStart.current && scale > 1) {
      setOffset({
        x: dragStart.current.ox + (e.clientX - dragStart.current.x),
        y: dragStart.current.oy + (e.clientY - dragStart.current.y),
      });
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    // Unzoomed horizontal swipe flips through a gallery
    if (swipeStart.current && pointers.current.size === 1 && scale === 1) {
      const dx = e.clientX - swipeStart.current.x;
      const dy = e.clientY - swipeStart.current.y;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    }
    swipeStart.current = null;
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinchStart.current = null;
    if (pointers.current.size === 0) dragStart.current = null;
  };

  const controlBtn =
    "w-10 h-10 rounded-full flex items-center justify-center text-snow/90 hover:bg-snow hover:text-coal disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-snow/90 transition-colors";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-[60] bg-coal/90 backdrop-blur-sm flex flex-col animate-[fadeIn_200ms_ease-out]"
    >
      {/* Stage: click the backdrop (not the photo) to close */}
      <div
        className="relative flex-1 overflow-hidden touch-none select-none"
        onWheel={onWheel}
        onClick={(e) => e.target === e.currentTarget && scale === 1 && close()}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-12 pointer-events-none">
          <img
            src={image.src}
            alt={image.alt}
            draggable={false}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onDoubleClick={() => (scale > 1 ? reset() : zoomTo(2.5))}
            className={`pointer-events-auto max-w-full max-h-full object-contain rounded-xl shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)] ${
              scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
            } ${dragStart.current || pinchStart.current ? "" : "transition-transform duration-200 ease-out"}`}
            style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})` }}
          />
        </div>

        {hasGallery && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-coal/70 border border-snow/20 text-snow hover:bg-snow hover:text-coal transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-coal/70 border border-snow/20 text-snow hover:bg-snow hover:text-coal transition-colors"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* Toolbar */}
      <div className="shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-8 pb-5 pt-2">
        <p className="text-sm text-snow/80 order-2 sm:order-1 text-center sm:text-left">
          {hasGallery && (
            <span className="font-mono text-xs text-snow/60 tabular-nums mr-2">
              {index + 1} / {images.length}
            </span>
          )}
          {image.caption || image.alt}
        </p>
        <div className="order-1 sm:order-2 flex items-center gap-1 rounded-full border border-snow/20 bg-coal/70 p-1">
          <button type="button" className={controlBtn} onClick={() => zoomTo(scale - 0.5)} disabled={scale <= MIN_SCALE} aria-label="Zoom out">
            <ZoomOut size={18} />
          </button>
          <span className="w-14 text-center font-mono text-xs tabular-nums text-snow/80" aria-live="polite">
            {Math.round(scale * 100)}%
          </span>
          <button type="button" className={controlBtn} onClick={() => zoomTo(scale + 0.5)} disabled={scale >= MAX_SCALE} aria-label="Zoom in">
            <ZoomIn size={18} />
          </button>
          <button type="button" className={controlBtn} onClick={reset} disabled={scale === 1} aria-label="Reset zoom">
            <RotateCcw size={17} />
          </button>
          <span className="w-px h-6 bg-snow/20 mx-1" aria-hidden="true" />
          <button ref={closeRef} type="button" className={controlBtn} onClick={close} aria-label="Close photo">
            <X size={19} />
          </button>
        </div>
      </div>
    </div>
  );
};
