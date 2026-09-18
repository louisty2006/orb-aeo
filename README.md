# Orb — Answer Engine Optimization

Static marketing site for **Orb**, an AEO (Answer Engine Optimization) experiment based in Hong Kong.

Built with [Astro](https://astro.build) (`output: 'static'`). Primary content is real HTML so answer engines and crawlers can read the value proposition without executing client JavaScript. The hero chat demo is a progressive enhancement.

## Quick start

```bash
cd /workspace/orb-aeo
npm install
npm run dev        # local dev server
npm run build      # static output → dist/
npm run preview    # preview the production build
```

Preview after build:

```bash
npm run build && npm run preview
```

Then open the URL Astro prints (typically `http://localhost:4321`).

## Pages

| Path | Purpose |
|------|---------|
| `/` | Landing — answer-first H1, hero LLM demo citing Orb, value props, CTAs |
| `/what-is-aeo` | AEO vs SEO vs GEO; retrieval vs generation; content principles |
| `/how-we-work` | Four steps: audit → on-site citability → off-site mentions → prompt panel |
| `/measurement` | Prompt panel methodology; found / cited / correct; self-experiment |
| `/faq` | FAQs + matching `FAQPage` JSON-LD |

## Design notes

- Background `#000000`; cards `#0a0a0a` / `#111`
- Accent `#0099FF` with restrained CSS glow on key panels
- Oversized headlines, generous whitespace, pill CTAs
- `prefers-reduced-motion` disables streaming animation loops

## Rename the brand

1. Edit `src/config.ts` — `brand`, `siteUrl`, `email`, `description`, nav labels.
2. Search the repo for remaining display strings (`Orb`, `hello@orb.example`) in pages/components if you changed copy beyond config.
3. Update `astro.config.mjs` → `site`.
4. Update `public/robots.txt` → `Sitemap:` URL.

## Change the site URL

Set the same origin in:

- `astro.config.mjs` → `site: 'https://your-domain.example'`
- `src/config.ts` → `siteUrl`
- `public/robots.txt` → `Sitemap:` line

`@astrojs/sitemap` uses `site` from the Astro config at build time.

## AEO / crawler posture

- `public/robots.txt` allows Googlebot, GPTBot, ClaudeBot, Google-Extended, PerplexityBot, and related agents.
- Organization + ProfessionalService JSON-LD on every page via the base layout.
- FAQ page emits `FAQPage` JSON-LD identical to on-page Q&A text.
- No invented market statistics.

## Stack

- Astro (static)
- Plain CSS (`src/styles/global.css`)
- Minimal client JS: hero chat island + mobile nav toggle

## Project path

This project lives at `/workspace/orb-aeo` on the shared agent box.
