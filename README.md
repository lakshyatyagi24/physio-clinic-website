# HealRight Physiotherapy — Static Website

> **Restore Motion, Reclaim Life**

A modern, responsive website for **HealRight Physiotherapy** built with Next.js 15, Tailwind CSS, and TypeScript.

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-width hero with tagline, CTA buttons, and social proof |
| **About Us** | Clinic overview with experience badge and key stats |
| **Why Choose Us** | 6-card feature grid highlighting clinic strengths |
| **Our Mission** | Patient-centered care messaging with image |
| **Our Services** | 6 service cards (Manual Therapy, Sports Rehab, Post-Surgery, Spine & Back, Neuro Rehab, Dry Needling) |
| **Call to Action** | Recovery prompt with dual CTA buttons |
| **Contact / Book** | Appointment form that sends details via email (Web3Forms) |
| **Location Map** | Google Maps embed with clinic address & directions |
| **Footer** | Brand info, quick links, services list, contact details, social icons |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Email / Appointment Form Setup (Mailtrap)

The contact form posts to a Next.js API route that sends email via Mailtrap.

**To activate:**

1. Create a Mailtrap token.
2. Create a `.env.local` file with:

```
MAILTRAP_TOKEN=your_mailtrap_token
APPOINTMENT_RECIPIENT=healrightphysio@gmail.com
MAILTRAP_SENDER_ADDRESS=hello@demomailtrap.co
MAILTRAP_SENDER_NAME=HealRight Physiotherapy
```

3. Restart the dev server.

## Customization Notes

- **Images**: Currently using Stitch-generated placeholder images hosted on Google CDN. Replace with your own clinic photos for production.
- **Google Maps**: The map embed in `src/components/LocationMap.tsx` uses your coordinates.
- **Contact Info**: Update phone, email, and address in `ContactForm.tsx`, `LocationMap.tsx`, and `Footer.tsx`.
- **Colors**: Brand color (`#9B5E2F`) is configured in `tailwind.config.ts` as `primary`.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static Export)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Icons**: Google Material Icons
- **Font**: Inter (Google Fonts)
- **Form Service**: Web3Forms (free tier)
