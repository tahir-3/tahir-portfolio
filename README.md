# Tahir Zaqout · Portfolio

Personal portfolio for Tahir Zaqout, software engineer working on Frappe / ERPNext, Vue, React and Python.

Neo-brutalist design: warm cream background, thick black borders, hard offset shadows, blue + yellow brand colors, Space Grotesk type, and light / dark themes.

## Stack

- [Vite](https://vitejs.dev) + React 18
- Tailwind CSS 3 (theme tokens as CSS variables in `src/index.css`)
- Framer Motion for scroll reveals
- EmailJS for the contact form (falls back to `mailto:` when not configured)

## Features

- Hero with entrance animation, hand-drawn underline that draws itself, typewriter role line, floating tech chips
- Infinite tech-stack marquee (pauses on hover)
- Cards and buttons that lift on hover and press into their shadow on click
- Experience timeline, project cards, contact form with inline status
- Light / dark theme (follows the system, remembers your choice)
- Responsive down to 320px, `prefers-reduced-motion` respected, keyboard-friendly

## Getting started

```bash
npm install
cp .env.example .env   # optional: add EmailJS keys
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Editing content

All content (profile, services, tech stack, experience, projects) lives in `src/data.js`.
Images are in `src/assets/`.
