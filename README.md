# Anshita Koshta — Portfolio

Personal portfolio site built with React 19, Vite 6 and Tailwind CSS 4.

Live sections: Home, About, Experience, Skills, Projects, Contact.

## Requirements

- Node.js 20.19+ (built and tested on 24.x)
- npm 10+

## Run locally

```bash
npm install     # first time only
npm run dev     # starts Vite at http://localhost:5173
```

## Other scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload on port 5173 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally to sanity-check it |
| `npm run lint` | ESLint over the whole project |

## Project layout

```
index.html              page shell, <title>, favicon, meta tags
src/main.jsx            React entry point
src/App.jsx             composes the page sections in order
src/index.css           Tailwind import + global styles
src/App.css             custom keyframes (waves, timeline line)
src/components/         one file per section
src/assets/img/         images imported through JS (bundled + hashed)
public/assets/img/      images referenced by "/assets/img/..." string paths
```

## Editing content

All content is hardcoded in the section components — there's no CMS or data file.

| To change | Edit |
| --- | --- |
| Name, typed job titles, social links | `src/components/Home.jsx` |
| Bio paragraph and skill bars | `src/components/About.jsx` |
| Work history timeline **and** education cards | `src/components/Education.jsx` (exports `Experience`) |
| Tech stack grid + categorised skill chips | `src/components/Skills.jsx` |
| Project cards | `src/components/Projects.jsx` |
| Email, phone, location, socials, contact form | `src/components/Contact.jsx` |
| Nav links | `src/components/Header.jsx` |

The contact form posts to [Formspree](https://formspree.io/) — the endpoint is the
`action` URL in `Contact.jsx`.

### Images

Two conventions coexist:

- `import img from '../assets/img/x.png'` — Vite bundles and fingerprints it.
- `src="/assets/img/x.png"` — served as-is from `public/`, so the file must exist
  under `public/assets/img/`.

If you add an image for a string path, drop it in `public/assets/img/`.

## Unused components

`Certificates.jsx` and `ProjectSection.jsx` exist but are commented out in
`App.jsx`. Uncomment the corresponding lines there to bring them back.

## Deploy

`npm run build` emits a static `dist/` folder — deployable to Netlify, Vercel,
GitHub Pages or any static host. No server or env vars needed.
