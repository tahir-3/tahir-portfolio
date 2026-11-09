import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, profile } from "../data";

/** Featured card: three phone screens beside the text, links to the in-page showcase. */
const FeaturedCard = ({ project }) => (
  <a
    href={project.anchor}
    aria-label={`${project.name}: view app screens`}
    className="brutal-card brutal-card-hover group grid overflow-hidden lg:grid-cols-[1fr_1.15fr]"
  >
    <div className="order-2 flex flex-col p-5 sm:p-8 lg:order-1">
      <span className="w-fit border-2 border-border bg-inverse px-2.5 py-1 text-xs font-bold text-inverse-foreground shadow-brutal-sm">
        Featured · Mobile app
      </span>
      <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{project.name}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted-foreground sm:text-lg">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="border-2 border-border bg-muted px-2 py-0.5 font-mono text-xs font-semibold">
            #{t}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue">
        View app screens
        <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </span>
    </div>
    <div
      className={`bg-grid order-1 flex items-end justify-center gap-3 overflow-hidden border-b-2 border-border px-4 pt-8 sm:gap-5 lg:order-2 lg:border-b-0 lg:border-l-2 ${project.accent}`}
    >
      {project.screens.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading="lazy"
          className={`w-[30%] max-w-[190px] rounded-[11%/5%] drop-shadow-[6px_4px_0_rgba(0,0,0,0.9)] transition-transform duration-300 motion-reduce:transition-none ${
            i === 1 ? "-mb-2 group-hover:-translate-y-2" : "translate-y-8 group-hover:translate-y-5"
          }`}
        />
      ))}
    </div>
  </a>
);

const ProjectCard = ({ project }) => {
  const Wrapper = project.link ? "a" : "div";
  const linkProps = project.link
    ? { href: project.link, target: "_blank", rel: "noreferrer", "aria-label": `${project.name} source code on GitHub` }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`brutal-card group flex h-full flex-col overflow-hidden ${project.link ? "brutal-card-hover" : ""}`}
    >
      <div className={`relative aspect-[16/10] overflow-hidden border-b-2 border-border ${project.accent}`}>
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
        <span
          className={`absolute right-3 top-3 border-2 border-border px-2.5 py-1 text-xs font-bold shadow-brutal-sm ${
            project.link ? "bg-panel text-foreground" : "bg-inverse text-inverse-foreground"
          }`}
        >
          {project.link ? "Open source" : "Private"}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-2xl font-bold">{project.name}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="border-2 border-border bg-muted px-2 py-0.5 font-mono text-xs font-semibold">
              #{t}
            </li>
          ))}
        </ul>
        {project.link && (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue">
            View source
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        )}
      </div>
    </Wrapper>
  );
};

const Projects = () => (
  <section id="work" className="section">
    <SectionHeading eyebrow="My work" title="Things I've" highlight="built.">
      A few projects that show how I work: real problems, shipped end to end.
    </SectionHeading>

    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <Reveal
          key={p.name}
          delay={p.screens ? 0 : i * 0.1}
          className={p.screens ? "sm:col-span-2 lg:col-span-3" : "h-full"}
        >
          {p.screens ? <FeaturedCard project={p} /> : <ProjectCard project={p} />}
        </Reveal>
      ))}
    </div>

    <Reveal className="mt-10">
      <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-plain">
        More on GitHub
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </a>
    </Reveal>
  </section>
);

export default Projects;
