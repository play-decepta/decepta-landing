# Decepta — Landing Page

> Predict • Outplay • Earn

The official marketing landing page for **Decepta** — a competitive intelligence platform where players compete in skill-based duels, challenge an AI opponent, and predict weekly live events, with stakes settled onchain on Base.

This is a **showcase/marketing site**, not the game itself. It has no backend, no live data, and no wallet integration — its job is to explain what Decepta is and get people to sign up for early access.

---

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — section and scroll animations
- **Lucide React** — icon set used throughout

No backend, no database, no authentication. All data shown on leaderboards, payout examples, and the Friday Event matchup card is illustrative mock data, not live information.

---

## Project Structure

```
app/
  page.tsx                 → Assembles the homepage from all sections, in order
  layout.tsx                → Root layout, fonts, metadata, favicon config
  globals.css                → Tailwind import + base styles
  signup/page.tsx            → "Coming soon" holding page (all CTAs route here)
  privacy-policy/page.tsx    → Privacy Policy (DRAFT — see Legal section below)
  terms-of-service/page.tsx  → Terms of Service (DRAFT — see Legal section below)
  cookie-policy/page.tsx     → Cookie Policy (live, no cookies currently used)

components/
  sections/      → One file per homepage section, numbered roughly in page order
  ui/            → Small shared building blocks (buttons, labels, headings)

hooks/
  useCountdown.ts   → Countdown timer used by the Friday Event section

lib/
  constants.ts      → Shared values (currently minimal — see Known Gaps)
  utils.ts          → Class-name merge helper (cn())

public/
  assets/           → Brand images: logos, Cipher character art, card art, partner logos
  favicon.ico, etc. → Full favicon set + site.webmanifest
```

### Section order on the homepage

Defined in `app/page.tsx`. Current order, top to bottom:

1. Live Banner
2. Navbar
3. Hero
4. Powered By (partner logo marquee)
5. How It Works
6. About Us (founding story + interactive elements)
7. Modes Expanded (Duel / Cipher / Friday Event)
8. Cipher (full lore section, cyan theme)
9. Friday Spotlight (gold theme)
10. Card Reveal Preview (interactive card flip demo)
11. Leaderboard Preview
12. Earnings Breakdown
13. Trust & Safety
14. FAQ
15. Community (Discord / X / Telegram)
16. Roadmap
17. CTA Banner
18. Footer

The **Press** section (`16-Press.tsx`) exists but is commented out in `page.tsx` — it has no real press coverage yet and was left unused intentionally. Bring it back once real coverage exists.

---

## Brand & Design System

| Identity | Color | Used for |
|---|---|---|
| Decepta (default) | `#F97316` (orange) | Default brand color, used everywhere unless overridden |
| Cipher | `#22D3EE` (cyan) | The entire Cipher section is cyan-themed |
| Friday Event | `#EAB308` (gold) | Friday Event section, Live Banner, and any Friday-related UI |

Background is `#0A0A0A` throughout, with card surfaces around `#111111`. Headlines follow a consistent pattern: white text with the final word/phrase in the section's accent color.

All icons use **Lucide React** — no emoji are used anywhere on the page by design decision.

---

## Real External Links (already wired in)

| Platform | URL |
|---|---|
| Telegram | https://t.me/playdecepta |
| X / Twitter | https://x.com/Play_Decepta |
| Discord | https://discord.gg/Ba9FnPq8Z3 |
| GitHub | https://github.com/play-decepta |
| Contact email | playdecepta@gmail.com (opens Gmail compose in a new tab) |

---

## Known Gaps / What's Intentionally Left for Later

These are not bugs — they're deliberately deferred until the relevant piece exists:

- **All "Enter the Arena" / "Get started" / mode CTA buttons** route to `/signup`, which is currently a "Coming Soon" page linking out to Telegram and X. Replace this with the real signup/app URL once the dashboard exists.
- **Legal pages are drafts.** Both `/privacy-policy` and `/terms-of-service` display a visible orange banner stating they are under legal review. The source documents both contain unresolved flags (age minimum per jurisdiction, no governing law/entity specified, skill-vs-chance legal positioning) that require lawyer sign-off before these are final. Do not remove the draft banner until the founder confirms legal sign-off.
- **`[insert date]` placeholders** remain on both legal pages intentionally — fill in the real "last updated" date only once each document is finalized and published for real.
- **Cookie Policy** states truthfully that no tracking/analytics cookies are currently used. If analytics, ads, or tracking scripts are added later, this page (and likely a consent banner, which does not currently exist) must be updated before those scripts go live.
- **`metadataBase` in `app/layout.tsx`** is set to `https://decepta.xyz`. Update this immediately if the final domain changes.
- **`lib/constants.ts`** is currently minimal. Several values (platform fee %, Cipher max stake, round timer length, disconnect timeout) are hardcoded directly inside individual section components rather than centralized. If these numbers change, search across `components/sections/` rather than assuming one central file controls them.

---

## Notes for Whoever Picks This Up Next

- Several components use long single-line JSX attribute strings rather than multi-line formatting. This is intentional — multi-line JSX attributes inside this project's build pipeline have repeatedly caused silent truncation/corruption when written via terminal heredocs. Keep new components' JSX tags on a single line per element where practical.
- All mock data (leaderboard names, testimonial-style content, Friday Event contestants, recent payout examples) is fictional and exists purely to demonstrate UI, not to represent real activity. Do not present these numbers as real without explicitly building the backend to support them.
