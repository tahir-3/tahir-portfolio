import { technologies } from "../data";

const Item = ({ tech }) => (
  <li className="flex shrink-0 items-center gap-3 px-6">
    {tech.icon ? (
      <span className="flex h-11 w-11 items-center justify-center border-2 border-inverse-foreground/30 bg-white p-1.5">
        <img src={tech.icon} alt="" className="h-full w-full object-contain" loading="lazy" />
      </span>
    ) : (
      <span
        className={`flex h-11 w-11 items-center justify-center border-2 border-inverse-foreground/30 font-mono text-sm font-bold ${
          tech.markBg ?? "bg-brand-yellow text-neutral-950"
        }`}
      >
        {tech.mark}
      </span>
    )}
    <span className="text-lg font-bold whitespace-nowrap">{tech.name}</span>
    <span className="ml-6 text-brand-yellow" aria-hidden="true">✦</span>
  </li>
);

/** Infinite marquee of the tech stack. List is doubled so the loop is seamless. */
const Ticker = () => (
  <section aria-label="Tech stack" className="ticker overflow-hidden border-b-2 border-border bg-inverse py-5 text-inverse-foreground">
    <ul className="sr-only">
      {technologies.map((t) => (
        <li key={t.name}>{t.name}</li>
      ))}
    </ul>
    <ul className="ticker-track flex w-max" aria-hidden="true" style={{ "--ticker-duration": "45s" }}>
      {[...technologies, ...technologies].map((t, i) => (
        <Item key={`${t.name}-${i}`} tech={t} />
      ))}
    </ul>
  </section>
);

export default Ticker;
