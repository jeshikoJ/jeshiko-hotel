# Jeshiko J — Portfolio

A dark, gold-accented developer portfolio inspired by the reference site, built with React + Vite + Tailwind CSS v4.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/` — deploy that folder to Vercel, Netlify, GitHub Pages, etc.

## Before you publish — fill these in

A few placeholders need your real links:

1. **GitHub profile** — `src/data.js` -> `profile.github` is currently `"#"`. Set it to your GitHub URL.
2. **E-Commerce project links** — `src/data.js` -> `project.links.demo` and `project.links.code` are placeholders. Add your live demo URL and GitHub repo link.
3. **Contact form** — currently opens the visitor's email client (`mailto:`) pre-filled with their message, since there's no backend. If you want it to submit silently, wire it to a form service like Formspree or a small serverless function.

## Structure

```
src/
  data.js                 — all site content (name, experience, projects, tech stack, contact info)
  components/
    Navbar.jsx             — fixed nav with scroll-spy + resume download
    Hero.jsx                — intro section with watermark name + typed role
    About.jsx                — photo + bio + specializations
    Experience.jsx            — tabbed roles + tech stack grid + certifications
    Projects.jsx                — expanded case study for the E-Commerce project
    Contact.jsx                   — contact info + form
    BrandIcons.jsx                 — GitHub/LinkedIn icons (current lucide-react version dropped brand icons)
```

To add more projects later, turn the `project` object in `data.js` into an array and map over it in `Projects.jsx`.
