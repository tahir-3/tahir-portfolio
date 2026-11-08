import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, services } from "../data";

const colors = ["bg-brand-blue", "bg-brand-yellow", "bg-brand-pink"];

const About = () => (
  <section id="about" className="section">
    <SectionHeading eyebrow="Introduction" title="What I" highlight="do.">
      {profile.about}
    </SectionHeading>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.1} className="h-full">
          <article className="brutal-card brutal-card-hover flex h-full flex-col p-6">
            <span className={`flex h-16 w-16 items-center justify-center border-2 border-border ${colors[i % 3]} shadow-brutal-sm`}>
              <img src={s.icon} alt="" className="h-10 w-10 object-contain" />
            </span>
            <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default About;
