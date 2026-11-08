import { useEffect, useRef, useState } from "react";

/**
 * Wraps text with a hand-drawn yellow underline that draws itself
 * the first time the text scrolls into view.
 */
const Underline = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`relative inline-block whitespace-nowrap ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 300 24"
        preserveAspectRatio="none"
        className={`underline-draw pointer-events-none absolute -bottom-[0.12em] left-0 z-0 h-[0.36em] min-h-[10px] w-full text-brand-yellow ${
          drawn ? "is-drawn" : ""
        }`}
      >
        <path
          d="M4 15 C 60 6, 120 4, 180 9 S 270 18, 296 8"
          pathLength="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </span>
  );
};

export default Underline;
