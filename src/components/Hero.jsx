import { useEffect, useState } from "react";
import Underline from "./Underline";
import { profile, projects, experiences, yearsOfExperience } from "../data";

/** Cycles through roles with a typewriter effect. */
const useTypewriter = (words, { type = 70, erase = 35, hold = 1600 } = {}) => {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    let i = 0;
    let len = words[0].length;
    let deleting = true;
    let timer;
    const tick = () => {
      if (deleting) {
        len -= 1;
        if (len <= 0) {
          deleting = false;
          i = (i + 1) % words.length;
        }
      } else {
        len += 1;
      }
      const current = words[i];
      setText(current.slice(0, Math.max(0, len)));
      let delay = deleting ? erase : type;
      if (!deleting && len >= current.length) {
        deleting = true;
        delay = hold;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, hold);
    return () => clearTimeout(timer);
  }, [words, type, erase, hold]);
  return text;
};

const Stat = ({ value, label, first }) => (
  <div className={`min-w-0 px-2 sm:px-0 ${first ? "" : "border-l-2 border-foreground/15 pl-3 sm:border-0 sm:pl-0"}`}>
    <p className="text-2xl font-bold sm:text-4xl">{value}</p>
    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">{label}</p>
  </div>
);

const Chip = ({ className, children }) => (
  <span
    className={`absolute border-2 border-border px-3 py-1.5 text-xs font-bold shadow-brutal-sm sm:text-sm ${className}`}
  >
    {children}
  </span>
);

const CodeCard = () => (
  <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
    <div className="relative z-10 border-2 border-border bg-panel shadow-brutal-lg">
      <div className="flex items-center gap-2 border-b-2 border-border bg-muted px-4 py-3">
        <span className="h-3 w-3 border-2 border-border bg-brand-red" />
        <span className="h-3 w-3 border-2 border-border bg-brand-yellow" />
        <span className="h-3 w-3 border-2 border-border bg-brand-green" />
        <span className="ml-2 truncate font-mono text-xs text-muted-foreground">tahir.py</span>
      </div>
      <pre className="overflow-x-auto px-4 py-5 font-mono text-[12px] leading-6 sm:px-6 sm:text-sm sm:leading-7">
        <code>
          <span className="text-brand-blue">class</span> <span className="font-semibold">Developer</span>:{"\n"}
          {"  "}name = <span className="text-brand-green">"{profile.fullName}"</span>{"\n"}
          {"  "}stack = [{"\n"}
          {"    "}<span className="text-brand-green">"Frappe"</span>, <span className="text-brand-green">"ERPNext"</span>,{"\n"}
          {"    "}<span className="text-brand-green">"Vue"</span>, <span className="text-brand-green">"React"</span>, <span className="text-brand-green">"Python"</span>,{"\n"}
          {"  "}]{"\n"}
          {"\n"}
          {"  "}<span className="text-brand-blue">def</span> <span className="font-semibold">ship</span>(self, idea):{"\n"}
          {"    "}<span className="text-brand-blue">return</span> idea.build().test().deploy(){"\n"}
          <span className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-foreground" aria-hidden="true" />
        </code>
      </pre>
    </div>
    <Chip className="animate-float -top-5 right-4 z-20 bg-brand-yellow text-neutral-950 sm:right-10">Frappe / ERPNext</Chip>
    <Chip className="animate-float-delay -right-2 top-1/3 z-20 bg-brand-blue text-white sm:-right-6">Vue.js</Chip>
    <Chip className="animate-float-slow -bottom-5 left-8 z-20 bg-brand-pink text-neutral-950">React</Chip>
  </div>
);

const Hero = () => {
  const role = useTypewriter(profile.roles);

  return (
    <section id="top" className="bg-grid relative border-b-2 border-border">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="animate-enter">
          <span className="eyebrow sheen">
            <span className="h-2 w-2 bg-brand-green" aria-hidden="true" />
            Open to new projects
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight xs:text-6xl lg:text-7xl">
            Hey, I'm <Underline>{profile.firstName}.</Underline>
          </h1>

          <p className="mt-5 min-h-[2.25rem] font-mono text-lg font-semibold text-brand-blue sm:text-2xl" aria-live="polite">
            <span className="sr-only">{profile.roles.join(", ")}</span>
            <span aria-hidden="true">
              &gt; {role}
              <span className="animate-blink">_</span>
            </span>
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.summary}</p>

          <div className="mt-8 flex flex-col gap-4 xs:flex-row">
            <a href="#work" className="btn btn-blue h-12 sm:h-14 sm:px-7 sm:text-base">
              See my work
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-yellow h-12 sm:h-14 sm:px-7 sm:text-base">
              Let's talk
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 sm:flex sm:gap-10">
            <Stat first value={`${yearsOfExperience()}+`} label="Years" />
            <Stat value={experiences.length} label="Companies" />
            <Stat value={`${projects.length}+`} label="Products" />
          </div>
        </div>

        <div className="animate-enter-late px-2 py-6 sm:px-6">
          <CodeCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
