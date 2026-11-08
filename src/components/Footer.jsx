import { navLinks, profile } from "../data";

const Footer = () => (
  <footer className="border-t-2 border-border bg-inverse text-inverse-foreground">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-3xl font-bold tracking-tight sm:text-4xl">
          {profile.fullName}
          <span className="text-brand-yellow">.</span>
        </p>
        <p className="mt-2 max-w-sm text-inverse-foreground/70">{profile.role} building on Frappe, ERPNext, Vue and React.</p>
      </div>
      <nav aria-label="Footer">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="text-sm font-bold text-inverse-foreground/70 transition-colors hover:text-inverse-foreground">
                {l.title}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-sm font-bold text-inverse-foreground/70 transition-colors hover:text-inverse-foreground">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="border-t-2 border-inverse-foreground/15">
      <p className="mx-auto max-w-7xl px-4 py-5 text-sm text-inverse-foreground/60 sm:px-6">
        © {new Date().getFullYear()} {profile.fullName}. Built with React, Tailwind and Framer Motion.
      </p>
    </div>
  </footer>
);

export default Footer;
