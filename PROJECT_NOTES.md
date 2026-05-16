# PROJECT_NOTES.md — Northrise Digital Agency Site

## Project Overview
- **Business:** Northrise Digital (our agency site)
- **Domain:** northrisedigital.ca / northrisedigital.vercel.app
- **Type:** Next.js 14 single-page scroll site (all sections on `/`) + legacy HTML sub-pages
- **Goal:** Convert ALL Alberta small business owners into paying clients
- **Tech stack:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Lucide React

## Brand
- **Primary background:** `#080808` (near-black)
- **Section alt background:** `#0D0D0D`
- **Accent (electric):** `#64FFDA` (mint teal — spec colors matching SiteRabbits style)
- **Accent dark:** `#4CD9B0`
- **Text body:** `#8892B0`
- **Text headings:** `#FFFFFF`
- **Text off-white:** `#CCD6F6`
- **Navy highlight block:** `#0A192F`
- **Heading font:** Plus Jakarta Sans (Google Fonts, via next/font)
- **Body font:** Inter (Google Fonts, via next/font)
- CSS variables: `--font-jakarta`, `--font-inter` → Tailwind classes `font-jakarta`, `font-inter`

## Key Messaging (Non-Negotiable)
- "Affordable packages tailored to small business budgets"
- "No big agency prices"
- "Custom quote after free audit — no pressure"
- "We work with ALL local businesses in Alberta"
- NO dollar amounts or prices shown anywhere on the site

## Services & Pricing
- **PRICING IS HIDDEN** — visitors get a "Get Free Quote" CTA that anchors to the contact form
- 3 tiers shown (features only, no prices): Starter, Growth (Best Value), Premium
- Actual pricing is sent after a free audit via email/call

## Contact Form
- **Formspree ID:** `xnjwzgwn`
- **Action URL:** `https://formspree.io/f/xnjwzgwn`
- **Fields (DO NOT CHANGE):** name, email, phone, business_type (select dropdown), business_type_other (conditional), project_details (textarea)
- **Business type dropdown expanded** to include: HVAC, Roofing, Landscaping, Plumbing, Electrical, Painting, Cleaning, Restaurant/Café, Salon/Spa/Barbershop, Gym/Fitness, Retail Shop, Dental/Medical, Realtor, Auto Shop, Med Spa, General Contractor, Other
- **AJAX handler:** Async fetch, sets React state (idle/sending/success/error), shows success message in-place

## Demo Sites (Portfolio)
- Northstar Heating & Cooling (HVAC): https://demo-hvac-northstar.vercel.app/
- Rivervalley Landscaping: https://demo-landscaping-rivervalley.vercel.app/
- Summit Peak Roofing: https://demo-roofing-summitpeak.vercel.app/

## File Structure
```
my-agency-site/
├── app/
│   ├── layout.tsx          — root layout, fonts, metadata, GA tag, schema
│   ├── globals.css         — Tailwind directives + scrollbar + selection + scroll-margin
│   └── page.tsx            — single-page scroll (imports all section components)
├── components/
│   ├── Navbar.tsx          — fixed, blur-on-scroll, hamburger → full-screen mobile overlay
│   ├── Footer.tsx          — brand, quick links, social icons
│   └── sections/
│       ├── HeroSection.tsx           — parallax (useScroll+useTransform), animated orbs, 2 CTAs
│       ├── ProblemSection.tsx        — 3 pain cards (red left-border), reassurance callout
│       ├── SolutionSection.tsx       — 4 offerings grid (teal left-border), hover lift
│       ├── HowItWorksSection.tsx     — 3 steps, directional slide-in animations
│       ├── PricingSection.tsx        — 3 tiers NO PRICES, Growth card has glow border
│       ├── WorkSection.tsx           — 3 demo cards with real preview images + live site links
│       ├── TestimonialsSection.tsx   — 3 placeholder testimonial cards
│       ├── AboutSection.tsx          — 2-column: bio text + 4 trust signal cards
│       └── ContactSection.tsx        — EXACT Formspree form preserved; updated heading/copy only
├── public/
│   └── images/
│       ├── logo.png
│       ├── preview-hvac.jpg
│       ├── preview-landscaping.jpg
│       └── preview-roofing.jpg
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── .gitignore

— Legacy vanilla HTML files still present in root (not served by Next.js):
  index.html, services.html, work.html, about.html, testimonials.html, contact.html, style.css, script.js
```

## Animation Patterns
- All sections: `initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}`
- Staggered grids: `delay: i * 0.1` on each card
- Hero parallax: `useScroll + useTransform` on `scrollYProgress` → y and opacity transforms
- Orbs: CSS keyframe animations (`animate-float-orb-1/2/3`)
- Buttons: `whileHover={{ y: -2 }}`
- Navbar mobile: `AnimatePresence` + `motion.div` slide-in
- Work cards: `whileHover={{ y: -6 }}`

## Session Log

### 2026-05-06 — Session 1 (Vanilla Build)
- Read SPEC.md and CLAUDE.md
- Built full 6-page vanilla site: style.css, script.js, all 6 HTML pages, sitemap.xml, robots.txt

### 2026-05-15 — Session 2 (Next.js Conversion + Full Redesign)
- Converted from vanilla HTML/CSS/JS to Next.js 14 + TypeScript + Tailwind + Framer Motion
- Removed ALL prices from the site (no dollar amounts anywhere)
- Broadened niche: now targets ALL Alberta local businesses (not just trades)
- Implemented single-page scroll architecture with 9 section components
- Built modular components: Navbar, HeroSection, ProblemSection, SolutionSection, HowItWorksSection, PricingSection, WorkSection, TestimonialsSection, AboutSection, ContactSection, Footer
- ContactSection: preserved exact Formspree form (same ID, same fields, same AJAX handler); updated surrounding copy only; expanded business type dropdown to 17 options
- Build output: ✅ 145kB first load, 0 TypeScript errors, 0 lint warnings
- Dev server: running on http://localhost:3000

## Known Issues / Outstanding
- **SEO sub-pages not yet built:** Legacy HTML files exist but aren't served. Should create `app/services/page.tsx`, `app/work/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx` as proper Next.js routes.
- **Testimonials are placeholder** — replace with real client quotes once available
- **Social links in Footer** are `#` placeholders — update with real Instagram/Facebook/LinkedIn URLs
- **Domain:** northrisedigital.ca — connect after Vercel deployment
- **Chatbot removed** from new site (was vanilla JS, not in spec) — can be re-added as a React component if needed
- **Google Analytics ID:** G-SGWLN5L944 (already wired in layout.tsx)
- **Formspree form:** ID `xnjwzgwn` is already live and working
