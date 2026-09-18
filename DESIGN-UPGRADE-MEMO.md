> **DRAFT — Louis:** finalize this memo only after the website v1 look is locked.

# Orb website — design upgrade memo (handoff)

**For:** a stronger design / frontend model (Claude Opus/Sonnet, GPT, Gemini, DeepSeek, etc.) in Cursor, Cline, or OpenCode  
**From:** Grok Bot (v1 scaffold owner)  
**Date:** 2026-09-18  
**Project path (Mac):** `/Users/lautinyam/Documents/AEO Company/orb-site`  
**Stack:** Astro static (`output: 'static'`), plain CSS, minimal client JS  
**Language:** English first (Traditional Chinese later)  
**Brand:** **Orb** — Answer Engine Optimization (AEO) · Hong Kong experiment

---

## 1. Mission of this upgrade

Ship a **visually Framer-grade** marketing site while **keeping AEO crawlability**.

Upgrade **visual craft, motion, spacing, and product-demo polish** — do not rewrite the business thesis, invent market stats, or turn the site into a JS-only SPA.

**Success:** `/` feels gallery-worthy like a Framer showcase, while `curl` still returns full answer text, FAQ, and JSON-LD without executing JS.

---

## 2. What already exists (do not throw away)

| Path | Role |
|------|------|
| `src/config.ts` | Brand, URL, email, nav — change brand/URL here first |
| `src/styles/global.css` | Design tokens + layout (black / `#0099FF` glow) |
| `src/layouts/BaseLayout.astro` | Shell, meta, Organization + ProfessionalService JSON-LD |
| `src/components/Header.astro` | Nav |
| `src/components/Footer.astro` | Footer |
| `src/components/HeroChat.astro` | LLM chat demo that **cites Orb** with blue glow + typewriter loop |
| `src/pages/index.astro` | Landing |
| `src/pages/what-is-aeo.astro` | AEO education |
| `src/pages/how-we-work.astro` | 4-step process |
| `src/pages/measurement.astro` | Prompt-panel methodology |
| `src/pages/faq.astro` | FAQ + FAQPage JSON-LD |
| `public/robots.txt` | Allows major search + AI crawlers |
| `astro.config.mjs` | `site` URL for sitemap |

**Run locally:**

```bash
cd "/Users/lautinyam/Documents/AEO Company/orb-site"
npm install
npm run dev    # http://localhost:4321
npm run build && npm run preview
```

**Reference aesthetic:** Framer.com — true black canvas, oversized white headline, large rounded product demo, restrained electric-blue bloom (`#0099FF`), generous whitespace, one bright pill CTA.

---

## 3. Non-negotiable constraints (AEO + experiment)

1. **HTML-first.** Primary claims must remain in static HTML. Hero animation is progressive enhancement only.
2. **No CSR-only content.** Do not migrate to a pure React/Vue SPA that ships empty shells to crawlers.
3. **JSON-LD must match visible text** (Organization / ProfessionalService / FAQPage). Change FAQ copy → update JSON-LD in lockstep.
4. **No fabricated market stats** (no fake TAM/CAGR, no fake case-study metrics). Honest self-experiment framing is OK.
5. **`npm run build` must succeed** (Astro static).
6. **`prefers-reduced-motion`:** chat / glow loops must respect reduced motion.
7. **Brand is `Orb`.** Placeholder domain/email stay easy to swap via `src/config.ts` + `astro.config.mjs`.
8. **Scope:** visual upgrade of existing 5 pages. No pricing, fake clients, or blog unless asked.

---

## 4. Design direction (push harder than v1)

### Keep
- Black `#000000`, cards `#0a0a0a` / `#111`, accent `#0099FF`
- Answer-first H1 + short lede on every page
- Hero demo narrative: user asks which AEO company to hire → answer **cites Orb** with glow

### Raise the bar
1. **Hero composition** closer to Framer: headline block + one dominant rounded demo with depth (soft bloom, inner chrome).
2. **Typography:** more dramatic H1, clearer eyebrow hierarchy, better body measure.
3. **Motion:** subtler ambient glow; product-quality chat streaming; optional light scroll reveals — still lightweight.
4. **Section rhythm:** alternate dense panels with large black space; avoid bland triple-card sameness.
5. **Micro-details:** borders ~8–14% white, focus states, header polish, mobile nav.
6. **Demo credibility:** chat chrome like a modern answer UI (no trademark copying); highlight on **Orb** is the climax.

### Avoid
- Purple-gradient AI clichés, glassmorphism spam, particle WebGL for its own sake
- Stock art that fights the mono/tech look
- Heavy Three.js / large video unless asked
- Hiding the value prop inside canvas only

---

## 5. Suggested work order

1. Read `src/config.ts`, `index.astro`, `HeroChat.astro`, `global.css`.
2. Screenshot `/` before changes.
3. Upgrade tokens + hero + chat demo first.
4. Cascade the same system through inner pages.
5. Verify FAQ JSON-LD matches on-page Q&A.
6. `npm run build`; fix regressions.
7. Screenshot after; note changelog briefly.

---

## 6. Copy / product facts you may use

- **Orb** helps brands be **found, cited, and correctly represented** in AI answers—not only ranked in classic search.
- Hong Kong–based **bounded experiment** (not “largest agency” claims).
- Method: on-site citability → off-site mentions → prompt-panel measurement (found / cited / correct).
- Near-term proof is **self-dogfooding** (Orb optimizing Orb).

Tighten English for rhythm. Do not invent clients, revenue, or rankings.

---

## 7. Prompt to paste into the stronger model

```text
Upgrade the Astro static site at Documents/AEO Company/orb-site for brand Orb.

Read DESIGN-UPGRADE-MEMO.md first and obey every non-negotiable constraint.

Goal: Framer-quality dark UI (black + #0099FF glow), especially the landing hero and LLM chat demo that cites Orb. Keep Astro static + HTML-first AEO. Improve typography, spacing, motion, and demo chrome. Do not invent market stats or clients. Leave npm run build green. English only for now.

Start with hero + HeroChat + global.css, then cascade to other pages. Show before/after notes when done.
```

---

## 8. Out of scope

- Real domain / DNS
- Traditional Chinese locale (wave 2)
- New Grok Bot sub-agents
- Customer interviews or live prompt-panel data collection

---

## 9. Checklist

- [ ] Hero feels Framer-like with blue bloom on demo panel
- [ ] Orb citation remains the focal highlight
- [ ] View-source / no-JS still shows core claims
- [ ] FAQ JSON-LD synced
- [ ] `npm run build` passes
- [ ] Config remains single source for brand + URL

---

*v1 scaffold by Grok Bot for Louis’s Orb AEO experiment. Upgrade agent: improve craft; protect constraints.*

---

## 10. Visual attempts Louis rejected (2026-09-18) — do better later

Do **not** revive these as-is. A stronger design model should redo from references.

1. **libraries.dev/beam border beam** — CSS conic-gradient border chase on the chat card. Louis: ugly → fully reverted.
2. **libraries.dev/orbs interactive hero orb + dotted logo** — canvas dotted sphere with cursor tracking in the hero right slot; SVG dotted orb as header mark. Louis: ugly → reverted to simple radial brand-mark + chat-only hero.

**What to aim for instead (when upgrading):**
- Study https://libraries.dev/orbs and https://libraries.dev/beam carefully; match craft quality, not a rough CSS/canvas imitation.
- Prefer a restrained brand mark and optional subtle motion; avoid gimmicky hero toys that fight the product demo.
- Keep the Codex-like Thinking → Answer chat demo (that part was requested and kept).
- HTML-first / Astro static constraints still apply.

