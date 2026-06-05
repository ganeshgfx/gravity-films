# Gravity Films

Website for Gravity Films, a creative digital content and filmmaking agency based in Silvassa, India. Built with Next.js App Router, React, Tailwind CSS, and a static export flow for GitHub Pages.

Production: https://gravityfilms.space

## Features

- Responsive marketing site for Gravity Films
- Home page with hero effects, services, client logos, and work cards
- Portfolio page with gallery images and hosted video showcases
- Services page for individuals, small businesses, and enterprises
- About page with story, contact links, and location map
- Contact page with inquiry form, social links, and map
- SEO metadata, Open Graph data, robots, sitemap, and JSON-LD organization schema

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS 3
- Framer Motion
- MUI, NextUI, Lucide, and Tabler icons
- tsparticles and custom UI effects
- Axios for contact form submission
- GitHub Pages deployment via `gh-pages`

## Requirements

- Node.js 18.18+ or current LTS
- npm

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Build static export into dist/
npm run start    # Start Next production server
npm run lint     # Run configured lint script
npm run deploy   # Add dist/.nojekyll and publish dist/
npm run gh-pages # Publish dist/ to GitHub Pages
npm run push     # Build, then publish dist/
```

## Project Structure

```text
app/
  page.js              Home page
  layout.js            Root layout, metadata, schema, nav, footer
  aboutus/page.jsx     About page
  contact-us/page.jsx  Contact form and location
  portfolio/page.jsx   Portfolio gallery and videos
  servicess/page.jsx   Services page
Components/
  ui/                  Reusable UI components
  anime/               Reveal animation wrapper
  *.jsx                Site sections and shared components
data/index.js          Services, clients, cards, gallery, videos, people
public/                Images, fonts, client logos, gallery, CNAME, SEO files
dist/                  Static export output
```

## Static Export

`next.config.mjs` uses:

- `output: "export"`
- `distDir: "dist"`
- `images.unoptimized: true`

This creates a static site in `dist/` for GitHub Pages. `public/CNAME` points the custom domain to `gravityfilms.space`.

## Deployment

```bash
npm run push
```

This runs `next build`, exports to `dist/`, then publishes `dist/` through `gh-pages`.

## Content Updates

- Edit routes in `app/`
- Edit shared sections in `Components/`
- Edit service, client, portfolio, and team data in `data/index.js`
- Add static assets under `public/`

## Contact

Contact form route: `/contact-us`

Business email in site schema: `info@gravityfilms.space`
