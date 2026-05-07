# PROJECT_NOTES.md — Northrise Digital Agency Site

## Project Overview
- **Business:** Northrise Digital (our agency site)
- **Domain:** northrisedigital.ca / northrisedigital.vercel.app
- **Type:** 6-page agency portfolio site with chatbot
- **Goal:** Convert Alberta home service business owners into paying clients
- **Tech stack:** Vanilla HTML, CSS, JavaScript — no frameworks

## Brand
- **Primary:** Deep navy `#0F2540`
- **Secondary:** Teal/cyan `#06B6D4`
- **Accent:** White `#FFFFFF`
- **Background light:** `#F8F9FA`
- **Background dark:** `#0A0F1A`
- **Text dark:** `#0A0A0A`
- **Text muted:** `#6B7280`
- **Headings font:** Space Grotesk (Google Fonts)
- **Body font:** DM Sans (Google Fonts)
- **Logo:** Pure CSS/SVG mountain peak (two triangles in teal) + "NORTHRISE DIGITAL" text

## Services & Pricing
1. Starter Website — $450 (founding rate: $299)
2. Professional Website — $850 (founding rate: $599)
3. Monthly Maintenance & Hosting — $79/month
4. Google Business Profile Setup — $99 one-time
5. Instagram Caption Pack — $75/month

## Demo Sites (Portfolio)
- Northstar Heating & Cooling (HVAC): https://demo-hvac-northstar.vercel.app/
- Rivervalley Landscaping: https://demo-landscaping-rivervalley.vercel.app/
- Summit Peak Roofing: https://demo-roofing-summitpeak.vercel.app/

## Files To Build
- index.html, services.html, work.html, about.html, testimonials.html, contact.html
- style.css, script.js
- sitemap.xml, robots.txt

## Build Status
| File | Status |
|------|--------|
| PROJECT_NOTES.md | ✅ Done |
| style.css | ✅ Done — full design system, chatbot styles, all components |
| script.js | ✅ Done — sticky nav, hamburger, FAQ accordion, full chatbot (10 Q&A) |
| index.html | ✅ Done — all sections including hero w/ browser mockup, founding offer |
| services.html | ✅ Done — 5 full service blocks, comparison table, FAQ, founding banner |
| work.html | ✅ Done — 3 case studies with iframes, industry grid, CTAs |
| about.html | ✅ Done — origin story, 4 differentiators, process, service area grid |
| testimonials.html | ✅ Done — honest framing, 3 demo iframes, 3 placeholder cards |
| contact.html | ✅ Done — Formspree form w/ AJAX, contact info, "what happens next", FAQ |
| sitemap.xml | ✅ Done — all 6 pages |
| robots.txt | ✅ Done |

## Session Log
### 2026-05-06 — Session 1
- Read SPEC.md and CLAUDE.md
- Created PROJECT_NOTES.md
- Built full 6-page site: style.css, script.js, all 6 HTML pages, sitemap.xml, robots.txt
- All 10 chatbot Q&A responses implemented in pure JS
- All 3 demo site iframes embedded (HVAC, Landscaping, Roofing)
- Founding client offer banner on index.html and services.html
- Full schema markup on every page (LocalBusiness, ProfessionalService, FAQPage, Service)
- SEO: title tags, meta descriptions, OG tags, Twitter Cards, canonical URLs on all pages

## Design Decisions
- No stock photos — using CSS gradients, geometric shapes, browser mockups, demo site iframes
- Browser mockup in hero shows demo-hvac-northstar.vercel.app
- Founding client offer banner: amber/gold accent to stand out from navy/teal palette
- Portfolio uses iframes with fallback links (no placeholder images needed)
- Chatbot: 10 pre-built Q&A + 5 quick reply buttons, pure JS

## Known Issues / Outstanding
- Formspree form ID: replace `YOUR_FORM_ID` in contact.html action URL before going live
- Domain northrisedigital.ca: connect after Vercel deployment
- Real client testimonials: replace placeholder cards in testimonials.html + index.html once available
- GBP price confirmed as $99 (not $149 as mistakenly listed in FAQ draft)
- sitemap.xml: update `lastmod` dates when pages are edited
