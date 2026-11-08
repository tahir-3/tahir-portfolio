import Reveal from "./Reveal";
import Underline from "./Underline";

const SectionHeading = ({ eyebrow, title, highlight, children }) => (
  <Reveal className="max-w-3xl">
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
      {title} {highlight && <Underline>{highlight}</Underline>}
    </h2>
    {children && (
      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{children}</p>
    )}
  </Reveal>
);

export default SectionHeading;
