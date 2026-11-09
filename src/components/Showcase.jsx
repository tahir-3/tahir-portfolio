import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { aidApp } from "../data";

const Arrow = ({ dir }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
    <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
  </svg>
);

/** Full-screen viewer for one screen; arrows / Esc on keyboard. */
const Lightbox = ({ index, onClose, onStep }) => {
  const screen = aidApp.screens[index];
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onStep]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${screen.title} screen`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/90 p-4"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="btn btn-plain absolute right-4 top-4 !px-3"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onStep(-1); }}
        aria-label="Previous screen"
        className="btn btn-plain absolute left-2 top-1/2 -translate-y-1/2 !px-3 sm:left-6"
      >
        <Arrow dir="left" />
      </button>
      <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img src={screen.src} alt={`${screen.title}: ${screen.caption}`} className="max-h-[78vh] w-auto rounded-[11%/5%] max-w-[70vw]" />
        <figcaption className="mt-4 text-center text-white">
          <span className="font-bold">{screen.title}</span>
          <span className="text-white/70"> · {screen.caption}</span>
          <span className="ml-2 font-mono text-xs text-white/50">
            {index + 1}/{aidApp.screens.length}
          </span>
        </figcaption>
      </figure>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onStep(1); }}
        aria-label="Next screen"
        className="btn btn-plain absolute right-2 top-1/2 -translate-y-1/2 !px-3 sm:right-6"
      >
        <Arrow dir="right" />
      </button>
    </div>
  );
};

const Showcase = () => {
  const trackRef = useRef(null);
  const [open, setOpen] = useState(null);
  const count = aidApp.screens.length;

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i + d + count) % count), [count]);

  return (
    <section id={aidApp.id} className="section">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="App showcase" title="Inside the" highlight="aid app.">
          {aidApp.description} Personal data is blurred for privacy.
        </SectionHeading>
        <Reveal className="flex gap-3">
          <button type="button" onClick={() => scrollBy(-1)} aria-label="Scroll screens left" className="btn btn-plain !px-3">
            <Arrow dir="left" />
          </button>
          <button type="button" onClick={() => scrollBy(1)} aria-label="Scroll screens right" className="btn btn-yellow !px-3">
            <Arrow dir="right" />
          </button>
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <ul
          ref={trackRef}
          className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-6 pt-2 [scrollbar-width:thin] sm:-mx-6 sm:scroll-px-6 sm:gap-8 sm:px-6"
        >
          {aidApp.screens.map((s, i) => (
            <li key={s.title} className="w-[68%] shrink-0 snap-start sm:w-[42%] md:w-[30%] lg:w-[23%]">
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Enlarge ${s.title} screen`}
                className="brutal-card brutal-card-hover bg-grid group block w-full cursor-zoom-in p-4 text-left"
              >
                <img
                  src={s.src}
                  alt={`${s.title}: ${s.caption}`}
                  loading="lazy"
                  className="mx-auto w-full rounded-[11%/5%] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none"
                />
              </button>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-mono text-xs font-bold text-muted-foreground">0{i + 1}</span>
                <span className="font-bold">{s.title}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.caption}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      {open !== null && <Lightbox index={open} onClose={close} onStep={step} />}
    </section>
  );
};

export default Showcase;
