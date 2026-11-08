import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, profile } from "../data";

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
        <Reveal key={p.name} delay={i * 0.1} className="h-full">
          <ProjectCard project={p} />
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
