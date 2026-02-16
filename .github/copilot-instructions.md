# HealRight Physiotherapy — Copilot Instructions

## Project Overview

- **Name**: HealRight Physiotherapy
- **Tagline**: Restore Motion, Reclaim Life
- **Type**: Next.js website with API routes (Mailtrap email)
- **Styling**: Tailwind CSS 3 with custom brand color `primary: #9B5E2F`
- **Language**: TypeScript
- **Icons**: Google Material Icons
- **Font**: Inter (Google Fonts)

## Architecture

- App Router (`src/app/`) with a single page (`page.tsx`)
- All sections are individual components in `src/components/`
- API route at `src/app/api/appointment/route.ts` sends email via Mailtrap

## Key Components

| Component | File | Purpose |
|-----------|------|---------|
| Navbar | `src/components/Navbar.tsx` | Sticky navigation with mobile menu |
| Hero | `src/components/Hero.tsx` | Landing hero with CTA |
| AboutUs | `src/components/AboutUs.tsx` | Clinic overview and stats |
| WhyChoose | `src/components/WhyChoose.tsx` | 6-card feature grid |
| Mission | `src/components/Mission.tsx` | Mission statement section |
| Services | `src/components/Services.tsx` | 6 service cards |
| CTA | `src/components/CTA.tsx` | Call-to-action band |
| ContactForm | `src/components/ContactForm.tsx` | Appointment form (Web3Forms) |
| LocationMap | `src/components/LocationMap.tsx` | Google Maps embed + address |
| Footer | `src/components/Footer.tsx` | Links, contact, social icons |

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Static export to `out/`
- `npm run lint` — ESLint check

## Placeholders to Replace

- Mailtrap token in `.env.local`
- Appointment recipient email in `.env.local`
- Clinic address, phone, email across multiple components
- All images are CDN-hosted placeholders — replace with real clinic photos
