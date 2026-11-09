import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences } from "../data";

const initials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Experience = () => (
  <section id="experience" className="border-y-2 border-border bg-card">
    <div className="section">
      <SectionHeading eyebrow="Career" title="Where I've" highlight="worked.">
        Teams I've built ERP systems, dashboards and apps with.
      </SectionHeading>

      <ol className="relative mt-12 space-y-8 border-l-2 border-border pl-6 sm:ml-4 sm:pl-10">
        {experiences.map((exp, i) => (
          <Reveal as="li" key={`${exp.company}-${exp.date}`} delay={i * 0.05} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[33px] top-6 h-4 w-4 border-2 border-border sm:-left-[49px] ${
                exp.current ? "bg-brand-yellow" : "bg-panel"
              }`}
            />
            <article className="brutal-card brutal-card-hover bg-panel p-5 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden border-2 border-border bg-white">
                    {exp.icon ? (
                      <img src={exp.icon} alt="" className="h-full w-full object-contain p-1" />
                    ) : (
                      <span className="text-lg font-bold text-neutral-950">{initials(exp.company)}</span>
                    )}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight">{exp.title}</h3>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${exp.company} (opens in a new tab)`}
                        className="inline-flex items-center gap-1 font-semibold text-brand-blue underline-offset-4 hover:underline"
                      >
                        {exp.company}
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                          <path d="M7 17L17 7M9 7h8v8" />
                        </svg>
                      </a>
                    ) : (
                      <p className="font-semibold text-brand-blue">{exp.company}</p>
                    )}
                  </div>
                </div>
                <span
                  className={`self-start border-2 border-border px-3 py-1 text-xs font-bold uppercase tracking-wider sm:text-sm ${
                    exp.current ? "bg-brand-yellow text-neutral-950" : "bg-muted"
                  }`}
                >
                  {exp.date}
                </span>
              </div>
              <ul className="mt-5 space-y-2">
                {exp.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-foreground" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
