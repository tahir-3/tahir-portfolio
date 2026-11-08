import web from "./assets/web.png";
import mobile from "./assets/mobile.png";
import backend from "./assets/backend.png";

import html from "./assets/tech/html.png";
import css from "./assets/tech/css.png";
import javascript from "./assets/tech/javascript.png";
import typescript from "./assets/tech/typescript.png";
import reactjs from "./assets/tech/reactjs.png";
import expo from "./assets/tech/expo.png";
import vuejs from "./assets/tech/vuejs.png";
import tailwind from "./assets/tech/tailwind.png";
import bootstrap from "./assets/tech/bootstrap.png";
import python from "./assets/tech/python.png";
import git from "./assets/tech/git.png";
import docker from "./assets/tech/docker.png";
import postman from "./assets/tech/postman.png";

import hasafh from "./assets/company/hasafh.png";
import projecx from "./assets/company/projecx.jpeg";

import owlTheme from "./assets/projects/owl-theme.webp";
import revenyu from "./assets/projects/revenyu.webp";
import travex from "./assets/projects/travex.webp";

export const profile = {
  firstName: "Tahir",
  fullName: "Tahir Zaqout",
  role: "Software Engineer",
  email: "tahir.a.zaqout@gmail.com",
  github: "https://github.com/tahir-3",
  careerStart: new Date(2020, 7, 1), // Aug 2020
  roles: ["Full Stack Developer", "Frappe / ERPNext Specialist", "Vue & React Engineer"],
  summary:
    "I build ERP systems, dashboards and web apps that fit how a business actually works. Most of my work is on the Frappe Framework and ERPNext, with Vue, React and Python on top.",
  about:
    "Full stack developer with deep experience customizing ERPNext and building on the Frappe Framework. I work across Python, JavaScript, React and Vue.js: tailoring ERP modules, building responsive dashboards, and designing REST APIs and webhooks that solve specific business problems. I work daily with AI coding agents (Claude Code, Codex and OpenCode) to plan, build and review faster, and I care about shipping software that is efficient, easy to use, and makes daily operations smoother.",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  {
    title: "Web Development",
    icon: web,
    text: "Responsive dashboards and web apps with Vue, React and Tailwind.",
  },
  {
    title: "Mobile Apps",
    icon: mobile,
    text: "Cross-platform apps with React Native and Expo.",
  },
  {
    title: "Backend & ERP",
    icon: backend,
    text: "Frappe / ERPNext customization, REST APIs, webhooks, integrations and web scraping.",
  },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Expo", icon: expo },
  { name: "Vue.js", icon: vuejs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Python", icon: python },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Postman", icon: postman },
  // AI coding agents: no icon file, the ticker renders a letter tile instead.
  { name: "Claude Code", mark: "CC", markBg: "bg-[#d97757] text-neutral-950" },
  { name: "Codex", mark: "CX", markBg: "bg-white text-neutral-950" },
  { name: "OpenCode", mark: "OC", markBg: "bg-brand-blue text-white" },
];

// Newest first.
export const experiences = [
  {
    title: "Software Developer",
    company: "PROJECXIO",
    icon: projecx,
    date: "Mar 2025 – Present",
    current: true,
    points: [
      "Develop and maintain web applications with Vue.js and related technologies.",
      "Work with designers, product managers and other developers to ship high-quality products.",
      "Build responsive interfaces that work across browsers and screen sizes.",
      "Build data scrapers that collect listings and profiles from social media and real estate websites.",
      "Keep scraping pipelines reliable at scale with rate-limit guards, captcha and challenge handling, and de-duplication.",
      "Take part in code reviews and give constructive feedback.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Hasafh",
    icon: hasafh,
    date: "May 2024 – Present",
    current: true,
    points: [
      "Built a dashboard in React to manage the HR module APIs.",
      "Developed REST APIs and webhooks for smooth front-end integration.",
      "Customized Frappe themes.",
    ],
  },
  {
    title: "Software Developer",
    company: "Ard",
    icon: null,
    date: "Jan 2023 – Oct 2023",
    points: [
      "Customized Frappe core to match company-specific requirements.",
      "Tailored ERPNext Accounting, Selling, Buying and HR modules to the business.",
      "Built Frappe and ERPNext reports.",
    ],
  },
  {
    title: "Frappe Developer",
    company: "AnvilERP",
    icon: null,
    date: "Aug 2020 – Jan 2023",
    points: [
      "Customized ERPNext Accounting, Selling, Buying and HR modules for client needs.",
      "Integrated Frappe with third-party services.",
      "Managed ERPNext updates and upgrades across projects.",
    ],
  },
];

export const projects = [
  {
    name: "Revenyu",
    description:
      "All-in-one real estate and CRM platform that streamlines property management, client relationships and the sales pipeline.",
    tags: ["vue.js", "rest api", "tailwind"],
    image: revenyu,
    link: "",
    accent: "bg-brand-blue",
  },
  {
    name: "Owl Theme",
    description:
      "Take full control of your Frappe / ERPNext app. Customize backgrounds, logos and colors with ease.",
    tags: ["frappe", "javascript", "html", "css"],
    image: owlTheme,
    link: "https://github.com/zaqouttahir/owl_theme",
    accent: "bg-brand-yellow",
  },
  {
    name: "TravEx",
    description: "Currency converter mobile app for travellers.",
    tags: ["react native", "expo", "css"],
    image: travex,
    link: "https://github.com/zaqouttahir/travex",
    accent: "bg-brand-pink",
  },
];

export const yearsOfExperience = () => {
  const ms = Date.now() - profile.careerStart.getTime();
  return Math.max(1, Math.floor(ms / (365.25 * 24 * 3600 * 1000)));
};
