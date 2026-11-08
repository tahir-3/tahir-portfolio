import { useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";

const env = import.meta.env;
const emailjsReady =
  env.VITE_APP_EMAILJS_SERVICE_ID && env.VITE_APP_EMAILJS_TEMPLATE_ID && env.VITE_APP_EMAILJS_PUBLIC_KEY;

const empty = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!emailjsReady) {
      const subject = encodeURIComponent(`Hello from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n${form.name} <${form.email}>`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus({ state: "sending", msg: "" });
    try {
      await emailjs.send(
        env.VITE_APP_EMAILJS_SERVICE_ID,
        env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: profile.firstName,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        { publicKey: env.VITE_APP_EMAILJS_PUBLIC_KEY }
      );
      setForm(empty);
      setStatus({ state: "ok", msg: "Thanks! Your message is on its way. I'll reply soon." });
    } catch (err) {
      console.error(err);
      setStatus({
        state: "error",
        msg: `Something went wrong sending your message. Please email me at ${profile.email}.`,
      });
    }
  };

  const sending = status.state === "sending";

  return (
    <section id="contact" className="border-t-2 border-border bg-card">
      <div className="section grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Get in touch" title="Let's build" highlight="together.">
            Have a project, an ERPNext problem, or a role in mind? Send a message and I'll get back to you.
          </SectionHeading>

          <Reveal delay={0.1} className="mt-8 flex flex-col gap-3">
            <a href={`mailto:${profile.email}`} className="brutal-card brutal-card-hover flex min-w-0 items-center gap-4 bg-panel p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-border bg-brand-yellow text-neutral-950">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</span>
                <span className="block truncate font-bold">{profile.email}</span>
              </span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="brutal-card brutal-card-hover flex min-w-0 items-center gap-4 bg-panel p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-border bg-brand-blue text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">GitHub</span>
                <span className="block truncate font-bold">{profile.github.replace("https://", "")}</span>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="brutal-card flex flex-col gap-5 bg-panel p-5 shadow-brutal-lg sm:p-8">
            <label className="flex flex-col gap-2">
              <span className="font-bold">Your name</span>
              <input required name="name" value={form.name} onChange={onChange} autoComplete="name" placeholder="Jane Doe" className="field" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-bold">Your email</span>
              <input required type="email" name="email" value={form.email} onChange={onChange} autoComplete="email" placeholder="jane@company.com" className="field" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-bold">Message</span>
              <textarea required rows={6} name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project..." className="field resize-y" />
            </label>

            <button type="submit" disabled={sending} className="btn btn-blue h-12 w-full sm:w-fit sm:px-8">
              {sending ? "Sending..." : "Send message"}
            </button>

            <p role="status" aria-live="polite" className="min-h-0">
              {status.msg && (
                <span
                  className={`block border-2 border-border px-4 py-3 text-sm font-semibold ${
                    status.state === "ok" ? "bg-brand-green text-white" : "bg-brand-red text-white"
                  }`}
                >
                  {status.msg}
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
