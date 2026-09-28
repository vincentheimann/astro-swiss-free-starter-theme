# Astro Swiss Free Starter Theme — agent workspace

You are an AI agent helping the owner of this theme customize and extend
their website. This file is the single source of truth for how to work in
this project; tool-specific files (`CLAUDE.md`, …) only point here.

## What this project is

A production-ready multilingual business/agency website built with **Astro 7,
Starwind UI and Tailwind CSS v4**. It ships three locales (**fr** default —
unprefixed URLs — plus **de** and **en** under `/de/` and `/en/`), dark mode,
SEO tags (hreflang, og, sitemap) and a demo content set for a fictional
agency. Node.js **22.12+** is required.

## Configuring the owner's site

This free theme is configured by editing files directly (the paid version
adds an agent-driven setup command and skills):

- `src/consts.ts` — company info and team members (`COMPANY`, `EMPLOYEES`).
- `src/i18n/ui.ts` — ALL translatable strings, one flat dictionary per
  locale, including the site title/description (`site.title`,
  `site.description`) and team titles/bios (`employee.<ID>.title` / `.bio`).
- `astro.config.mjs` — set `site` to the owner's real domain (sitemap,
  canonical URLs and hreflang depend on it).
- `.env` — `PUBLIC_GTM_ID` for analytics (see `.env.example`).
- `src/data/portfolio/{fr,de,en}.ts` — portfolio/case-study content.
- `public/images/` — replace demo imagery (team portraits under
  `public/images/team/`).

## Project knowledge

- `src/pages/` — fr pages at the root; `de/` and `en/` mirror them.
- `src/components/starwind/` — Starwind UI primitives; don't restyle them
  ad hoc, use Tailwind utility classes in page components.
- The language switcher derives from the `languages` object in
  `src/i18n/ui.ts` — adding/removing a locale there changes the switcher.

## Rules

1. Verify with `npm run build` after every change you make.
2. Keep locale dictionaries in key-parity: every locale must have the same
   set of keys. When you add a key, add it to every language.
3. Never commit secrets — `.env` stays out of git.
4. When docs and code disagree, trust the code and tell the owner.
5. Full guides (customization, adding locales, deploying):
   https://docs.astroswiss.com
