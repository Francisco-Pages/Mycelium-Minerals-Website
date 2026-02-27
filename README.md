# Mycelium Minerals — Corporate Website

> Investor-facing corporate website for Mycelium Minerals, a TSX-listed gold and silver producer operating in Bolivia.

---

## Table of Contents

1. [Product Requirements Document (PRD)](#1-product-requirements-document)
2. [Architecture Specifications](#2-architecture-specifications)
3. [Design Document](#3-design-document)
4. [User Stories](#4-user-stories)

---

---

# 1. Product Requirements Document

## 1.1 Overview

Mycelium Minerals requires a public-facing corporate website that serves as the company's primary digital presence. The site will communicate the company's investment thesis, showcase its portfolio of gold and silver production projects in Bolivia, present leadership, and provide institutional and retail investors with all information needed to evaluate and engage with the company. The site functions as a high-credibility "digital greeting card plus" — equal parts corporate brochure, investor data room, and brand expression.

## 1.2 Business Goals

| Goal | Description |
|------|-------------|
| Investor Confidence | Establish credibility with institutional and retail investors via transparent, current, and well-organized financial and operational data |
| Lead Generation | Convert site visitors into registered investors and newsletter subscribers |
| Regulatory Compliance | Provide all required disclosures, filings, and links required for a TSX-listed company |
| Brand Expression | Communicate Mycelium's identity: bold, modern, honest, and environmentally responsible |
| Operational Transparency | Present active projects, production data, and ESG commitments clearly |

## 1.3 Success Metrics

- Newsletter subscriber conversion rate ≥ 3% of unique visitors
- Corporate presentation download rate ≥ 5% of Investor Relations page visitors
- Bounce rate < 50% (industry benchmark for mining IR sites)
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- WCAG 2.1 AA accessibility compliance
- Full content parity across all supported languages (EN / ES / FR)

## 1.4 User Personas

### Persona 1 — Institutional Investor (Primary)
- **Profile:** Portfolio manager or analyst at a fund with mining sector exposure
- **Goals:** Quickly assess investment thesis, review technical reports, verify capital structure and analyst coverage, download corporate presentation
- **Behavior:** Scans for key metrics first (production, reserves, market cap); digs into filings if interested
- **Needs:** Fast access to financial data, NI 43-101 technical reports, SEDAR/EDGAR links, IR contact

### Persona 2 — Retail Investor (Primary)
- **Profile:** Individual investor tracking TSX-listed junior/mid-tier miners
- **Goals:** Understand what Mycelium does, see the projects, track the stock price, subscribe to news
- **Behavior:** Enters via news article or social media; reads About and Projects; checks stock price
- **Needs:** Stock ticker widget, clear project descriptions, news archive, email alerts

### Persona 3 — Financial Journalist / Analyst
- **Profile:** Mining sector reporter or sell-side analyst writing coverage
- **Goals:** Access press releases, executive contacts, financial documents quickly
- **Needs:** Searchable news archive, named IR contact, downloadable media kit

### Persona 4 — Job Seeker
- **Profile:** Mining professional (geologist, engineer, operations) or recent graduate
- **Goals:** Understand company culture and open roles
- **Needs:** Careers page with open positions and a clear application path

### Persona 5 — ESG / Impact Investor
- **Profile:** Investor or fund with environmental/social mandate
- **Goals:** Evaluate Mycelium's environmental commitments, community relationships, and sustainability practices
- **Needs:** ESG section, tree-planting partnership details, community engagement content

---

## 1.5 Functional Requirements

### 1.5.1 Global / Site-Wide

| ID | Requirement | Priority |
|----|-------------|----------|
| G-01 | Multilingual support: English (default), Spanish, and French | P0 |
| G-02 | Language switcher accessible from global navigation on all pages | P0 |
| G-03 | TSX live stock ticker widget visible in site header or navigation bar | P0 |
| G-04 | Newsletter / investor alert email subscription — accessible from header and footer | P0 |
| G-05 | Named IR contact (name, phone, email) in footer and IR section | P0 |
| G-06 | Legal disclaimer banner / modal for forward-looking statements | P0 |
| G-07 | Cookie consent banner (GDPR/PIPEDA compliant) | P0 |
| G-08 | Fully responsive — mobile, tablet, desktop | P0 |
| G-09 | SEO: structured metadata, Open Graph tags, sitemap, robots.txt | P1 |
| G-10 | Social sharing links in footer (LinkedIn, X/Twitter) | P1 |

### 1.5.2 Homepage

| ID | Requirement | Priority |
|----|-------------|----------|
| H-01 | Full-width hero section with headline, sub-headline, and primary CTA (Download Corporate Presentation) | P0 |
| H-02 | Company snapshot: key production metrics (oz/yr), number of projects, exchange listing | P0 |
| H-03 | Featured Projects preview section (cards linking to individual project pages) | P0 |
| H-04 | Latest News feed (3–5 most recent press releases) | P0 |
| H-05 | ESG highlight / tree-planting partnership callout | P1 |
| H-06 | Email subscription section | P0 |

### 1.5.3 Projects

| ID | Requirement | Priority |
|----|-------------|----------|
| PR-01 | Projects index page listing all 4–5 projects with name, location, stage, and commodity | P0 |
| PR-02 | Individual page per project | P0 |
| PR-03 | Each project page includes: overview, location map, geology description, resource/reserve estimates, drill results, production data, photos, and downloadable technical documents | P0 |
| PR-04 | Optional interactive map of Bolivia showing all project locations with clickable markers | P1 |
| PR-05 | Project stage indicator (Exploration / Development / Production) | P0 |
| PR-06 | Document download section per project (NI 43-101 reports, drill results, feasibility studies) | P0 |
| PR-07 | Photo gallery per project | P1 |
| PR-08 | Charts/graphs (resource estimates, grade profiles, production timelines) embedded per project | P1 |

### 1.5.4 Investor Relations

| ID | Requirement | Priority |
|----|-------------|----------|
| IR-01 | Corporate Presentation — downloadable PDF (most recent), with version date | P0 |
| IR-02 | Capital structure table: shares outstanding, options, warrants, fully diluted count | P0 |
| IR-03 | Stock information: TSX ticker, current price widget, trading volume, 52-week range | P0 |
| IR-04 | Financial Reports archive: quarterly and annual financial statements and MD&A | P0 |
| IR-05 | SEDAR+ and EDGAR filing links | P0 |
| IR-06 | Analyst coverage list (firm names, analysts) | P1 |
| IR-07 | Events calendar: conferences, results dates, AGM | P1 |
| IR-08 | Email alert subscription | P0 |
| IR-09 | Named IR contact (name, title, phone, email) | P0 |
| IR-10 | Corporate governance documents (charter, committee mandates) | P1 |
| IR-11 | AGM materials (circular, proxy, results) | P1 |

### 1.5.5 About / Leadership

| ID | Requirement | Priority |
|----|-------------|----------|
| A-01 | Company story / mission section | P0 |
| A-02 | Executive team: 7–8 profiles with headshot, name, title, and bio | P0 |
| A-03 | Board of Directors: separate section/page with headshot, name, and bio | P0 |
| A-04 | Corporate structure and history timeline (optional) | P2 |

### 1.5.6 Sustainability / ESG

| ID | Requirement | Priority |
|----|-------------|----------|
| E-01 | ESG overview: environmental, social, and governance pillars | P0 |
| E-02 | Tree-planting partnership in Bolivia: featured callout with partner name, trees planted counter or goal, description | P0 |
| E-03 | Community engagement content (local employment, community programs) | P1 |
| E-04 | Environmental practices (water management, tailings, rehabilitation) | P1 |
| E-05 | ESG report download (if available) | P1 |
| E-06 | Certifications or awards | P2 |

### 1.5.7 News & Media

| ID | Requirement | Priority |
|----|-------------|----------|
| N-01 | Press releases archive with date, headline, and body | P0 |
| N-02 | Filter/search by year and category | P1 |
| N-03 | Individual press release detail pages (URL-shareable, printable) | P0 |
| N-04 | Media contact information | P0 |
| N-05 | Media kit download (logos, boilerplate, executive headshots) | P2 |

### 1.5.8 Careers

| ID | Requirement | Priority |
|----|-------------|----------|
| C-01 | Careers overview page describing culture and working in Bolivia | P0 |
| C-02 | Job listings with title, location, type (full-time/contract), and description | P0 |
| C-03 | Application form or link to application email | P0 |
| C-04 | CMS-managed job postings (add/remove without developer) | P0 |

### 1.5.9 Contact

| ID | Requirement | Priority |
|----|-------------|----------|
| CO-01 | Contact form (name, email, subject, message) | P0 |
| CO-02 | Office address(es) | P0 |
| CO-03 | Separate IR contact and general contact | P0 |

---

## 1.6 Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| Performance | LCP < 2.5s on 4G mobile; images served via CDN with next-gen formats (WebP/AVIF) |
| Accessibility | WCAG 2.1 AA — keyboard navigation, screen reader support, sufficient color contrast |
| Security | HTTPS enforced; no sensitive data stored client-side; form submissions via server-side API routes |
| SEO | Static generation for all public pages; structured data (Organization, BreadcrumbList); canonical URLs |
| Uptime | 99.9% availability target; AWS infrastructure with automatic failover |
| Analytics | Google Analytics 4 integration; event tracking on downloads and CTA clicks |
| Legal | Forward-looking statements disclaimer; TSX regulatory disclosure compliance |
| Browser Support | Latest 2 versions of Chrome, Firefox, Safari, Edge; IE not supported |

## 1.7 Out of Scope (v1)

- Shareholder account portal or personalized login
- Real-time drill result streaming
- E-commerce or subscription payments
- Mobile app
- Live chat / AI assistant
- Automated financial data ingestion (stock data fetched via API, not automated reporting)

---

---

# 2. Architecture Specifications

## 2.1 Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 14+ (App Router) | SSR + SSG hybrid; SEO-friendly; large ecosystem; excellent TypeScript support |
| Language | TypeScript | Type safety; maintainability |
| Styling | Tailwind CSS | Utility-first; consistent design tokens; small production bundle |
| CMS | Sanity.io | Headless CMS with real-time content updates; non-technical Studio UI; native Next.js integration; multilingual support via plugins |
| i18n | next-intl | Next.js App Router compatible; message-based translations; locale routing |
| Maps | Mapbox GL JS | Interactive Bolivia project map; smooth rendering; custom styling to match brand |
| Stock Ticker | TMX Money widget or Financial Modeling Prep API | TSX-listed stock data |
| Forms | React Hook Form + Zod | Client-side validation; server-side API route handling |
| Email | AWS SES | Newsletter subscription; contact form submissions |
| Analytics | Google Analytics 4 + Vercel Analytics (optional) | Page views, CTA tracking, download events |
| Hosting | AWS Amplify | Managed Next.js hosting; CI/CD from Git; SSR support; scales automatically |
| CDN | AWS CloudFront (built into Amplify) | Global content delivery; edge caching |
| Storage | AWS S3 | PDF documents, media assets, large downloads |
| DNS | AWS Route 53 | Domain management |

## 2.2 System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        USER                             │
│              (Browser — EN / ES / FR)                   │
└────────────────────────┬────────────────────────────────┘
                         │ HTTPS
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  AWS CloudFront CDN                     │
│         (Edge caching, SSL termination)                 │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  AWS Amplify                            │
│           Next.js Application (App Router)              │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Static Pages│  │  SSR Pages   │  │  API Routes  │  │
│  │  (Homepage,  │  │  (News,      │  │  (Contact    │  │
│  │   Projects,  │  │   Projects   │  │   Form, Sub- │  │
│  │   About, IR) │  │   dynamic)   │  │   scriptions)│  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└────────┬───────────────────┬──────────────┬────────────┘
         │                   │              │
         ▼                   ▼              ▼
┌─────────────┐   ┌──────────────────┐  ┌──────────────┐
│  Sanity.io  │   │   AWS S3 Bucket  │  │   AWS SES    │
│  (CMS/      │   │   (PDFs, Images, │  │  (Emails,    │
│   Content)  │   │    Media)        │  │   Alerts)    │
└─────────────┘   └──────────────────┘  └──────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────┐
│              Sanity Studio (CMS Editor UI)              │
│      Non-technical editors manage all content here      │
│  (Projects, News, Team, Careers, IR Documents, ESG)     │
└─────────────────────────────────────────────────────────┘
```

## 2.3 Content Delivery Strategy

| Content Type | Strategy | Rationale |
|-------------|----------|-----------|
| Homepage | ISR (Incremental Static Regeneration, 60s revalidation) | Fast load; content stays fresh |
| Project pages | ISR (5-min revalidation) | Projects change infrequently |
| News / Press Releases | ISR (60s revalidation) | Near-real-time without full SSR overhead |
| IR documents | Static (on-demand revalidation via Sanity webhook) | Changes on publish only |
| Careers | ISR (5-min revalidation) | Jobs added/removed via CMS webhook |
| Contact / Forms | SSR (API routes) | Server-side validation and email delivery |

## 2.4 Internationalization (i18n) Architecture

- **Supported locales:** `en` (English, default), `es` (Spanish), `fr` (French)
- **Routing:** `/projects` (EN), `/es/proyectos` (ES), `/fr/projets` (FR)
- **Implementation:** `next-intl` with locale-prefixed routing via Next.js App Router middleware
- **Translations:** UI strings stored in `/messages/en.json`, `es.json`, `fr.json`
- **CMS content:** Sanity documents have localized fields for all text content using `@sanity/language-filter` plugin
- **Language switcher:** Persists current page path when switching locales; falls back to homepage if translation not available
- **SEO:** `hreflang` alternate tags on all pages for all locales

## 2.5 CMS Data Model (Sanity Schemas)

```
Content Types:
├── project              (name, slug, stage, location, description, resources, documents, photos)
├── teamMember           (name, title, bio, headshot, type: executive|board)
├── pressRelease         (title, date, body, category, pdf attachment)
├── irDocument           (title, type, date, file, language)
├── jobListing           (title, location, type, description, applicationEmail, active)
├── esgInitiative        (title, description, pillar: E|S|G, metrics, partnerName)
├── siteSettings         (company name, IR contact, social links, ticker symbol)
└── pageContent          (homepage hero, about story — flexible content blocks)

All schemas include localized fields for EN / ES / FR.
```

## 2.6 AWS Infrastructure

```
AWS Services:
├── Amplify             — Next.js hosting + CI/CD (auto-deploy on Git push)
├── CloudFront          — CDN (built into Amplify; custom domain SSL)
├── S3                  — Media and document storage (private bucket, signed URLs for PDFs)
├── SES                 — Transactional email (contact form, newsletter subscriptions)
├── Route 53            — DNS management
└── IAM                 — Role-based access for Amplify, SES, S3

Environments:
├── Production          — myceliumminerals.com (main branch)
├── Staging             — staging.myceliumminerals.com (staging branch)
└── Preview             — Auto-generated per pull request (Amplify previews)
```

## 2.7 Third-Party Integrations

| Integration | Purpose | Implementation |
|-------------|---------|----------------|
| TMX Money / FMP API | TSX live stock price | Client-side React component fetching stock data on page load |
| Mapbox GL JS | Interactive Bolivia project map | Client-side map component; lazy-loaded |
| Google Analytics 4 | Page analytics and event tracking | Via `@next/third-parties/google` |
| Sanity Webhooks | Trigger ISR revalidation on CMS publish | POST to Next.js `/api/revalidate` endpoint |
| Formspree or AWS SES | Contact form delivery | API route + SES transport |

## 2.8 Security

- All environment variables server-side only (never exposed to client)
- Sanity API token with read-only access for public site; write access only from Sanity Studio
- S3 PDFs served via signed URLs with short expiry (prevents direct hotlinking)
- Contact form: rate limiting (5 submissions/IP/hour) via middleware
- CSP headers configured in `next.config.js`
- No PII stored in application — email subscriptions handled by SES/third-party list service

---

---

# 3. Design Document

## 3.1 Design Philosophy

**Bold. Modern. Honest.**

Mycelium's visual language is confident and direct — like the company itself. The design draws inspiration from Pinecone.io's aesthetic: clean white backgrounds with crisp black linear outlines, sharp geometric shapes, and high-contrast accent colors that punch through the whitespace. This is a deliberate departure from the dark-navy corporate templates typical of mining companies — Mycelium stands out as transparent, contemporary, and unafraid.

The "honest" pillar means no stock-photo gloss. Real project photos, real people, real data — presented with clarity rather than marketing veneer.

## 3.2 Color System

### Primary Palette

| Name | Hex | Usage |
|------|-----|-------|
| **White** | `#FFFFFF` | Primary background — clean, open, honest |
| **Obsidian** | `#0A0A0A` | Primary text, outlines, borders, icons |
| **Off-white** | `#F5F4F0` | Section backgrounds, cards — slight warmth |

### Accent Colors (Sharp, Contrasting)

| Name | Hex | Usage |
|------|-----|-------|
| **Mineral Gold** | `#D4A853` | Primary CTA buttons, highlights, key metrics — gold commodity link |
| **Bolivian Green** | `#2D6A4F` | ESG section, sustainability, positive indicators |
| **Copper** | `#B55A2B` | Secondary accent; hover states; project markers on map |
| **Alert Red** | `#C0392B` | Errors, warnings only |

### Usage Rules

- Backgrounds are always White or Off-white — no dark backgrounds except hero overlays
- Text is always Obsidian on light backgrounds — never grey-on-grey
- Accents are used sparingly — one accent color per section maximum
- Black outlines (1–2px) are used on cards, buttons, and graphic elements to create the linear, editorial feel

## 3.3 Typography

### Typefaces

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display / Hero | **Clash Display** | 600–700 | Bold, geometric — makes a statement; free via Fontshare |
| Headings (H2–H4) | **Inter** | 600–700 | Clean, modern, highly readable |
| Body | **Inter** | 400–500 | Consistent system with headings |
| Mono / Data | **JetBrains Mono** | 400 | Financial figures, stock prices, technical data |
| Labels / Caps | **Inter** | 700, uppercase, tracked | Section labels, navigation, tags |

### Type Scale (rem, base 16px)

| Name | Size | Usage |
|------|------|-------|
| Display | 4.5rem (72px) | Hero headlines |
| H1 | 3rem (48px) | Page titles |
| H2 | 2rem (32px) | Section titles |
| H3 | 1.5rem (24px) | Sub-sections, card titles |
| H4 | 1.25rem (20px) | Labels within cards |
| Body | 1rem (16px) | Paragraph text |
| Small | 0.875rem (14px) | Captions, metadata |
| Mono | 1rem (16px) | Financial data |

## 3.4 Spacing & Grid

- **Base unit:** 4px
- **Grid:** 12-column, max-width 1280px, 24px gutters (desktop), 16px (mobile)
- **Section padding:** 80px top/bottom (desktop), 48px (mobile)
- **Card border-radius:** 0px — sharp corners reinforce the linear aesthetic
- **Border style:** 1.5px solid `#0A0A0A` — used on cards, buttons, dividers

## 3.5 Component Library

### Buttons

```
Primary:
  background: #D4A853 (Mineral Gold)
  border: 1.5px solid #0A0A0A
  color: #0A0A0A
  border-radius: 0
  padding: 14px 28px
  font: Inter 700 uppercase, tracked
  hover: background shifts to #0A0A0A, color to #FFFFFF

Secondary (Outline):
  background: transparent
  border: 1.5px solid #0A0A0A
  color: #0A0A0A
  border-radius: 0
  hover: background #0A0A0A, color #FFFFFF

Ghost:
  No border, no background
  color: #0A0A0A
  underline on hover
  Used for: inline text links, nav items
```

### Cards

```
Project Card:
  background: #FFFFFF
  border: 1.5px solid #0A0A0A
  border-radius: 0
  Shadow: none (outline replaces shadow)
  Contains: project photo, project name (H3), commodity badge, stage badge, brief description, "View Project →" link

Team Member Card:
  Square headshot (1:1 ratio, object-fit: cover)
  Below: Name (H3), Title (small caps), Bio expandable

News Card:
  Date (mono, small, gold), Headline (H3), Excerpt (body), "Read more →"
  Left border: 3px solid #D4A853
```

### Badges / Tags

```
Stage badge (on project cards):
  background: Off-white
  border: 1.5px solid #0A0A0A
  font: Inter 700 uppercase, 11px, tracked
  No border-radius

Commodity badge:
  background: #D4A853
  color: #0A0A0A
  Same style as stage badge
```

### Navigation

```
Header (sticky):
  background: #FFFFFF with border-bottom: 1.5px solid #0A0A0A
  Logo: left-aligned
  Nav links: center or right — Inter 600 uppercase small-caps, tracked
  Stock ticker: right side — mono font, gold color
  Language switcher: EN | ES | FR — small, rightmost
  CTA button: "Investor Relations" — Primary button style

Mobile:
  Hamburger → full-screen overlay menu, black background, white text
```

### Stock Ticker Widget

```
Format: [TICKER] TSX  [PRICE]  [▲/▼ CHANGE]  [% CHANGE]
Font: JetBrains Mono
Color: Price in Mineral Gold; positive change in Bolivian Green; negative in Alert Red
Updates: on page load + every 60 seconds
```

## 3.6 Page Layouts

### Homepage

```
┌────────────────────────────────────────────────┐
│  HEADER (sticky) — Logo | Nav | Ticker | Lang  │
├────────────────────────────────────────────────┤
│                                                │
│  HERO                                          │
│  Full-width, 90vh                              │
│  Background: Real project photo with           │
│  subtle dark overlay (40%)                     │
│  Headline: "Gold & Silver. Bolivia."           │
│  Sub: Company value proposition                │
│  CTAs: [Download Presentation] [Our Projects]  │
│                                                │
├────────────────────────────────────────────────┤
│  COMPANY SNAPSHOT — 3 key stats                │
│  [X oz Au produced] [4 Projects] [TSX: MYC]   │
│  White background, large mono numbers          │
│  Outlined grid of 3 columns                   │
├────────────────────────────────────────────────┤
│  FEATURED PROJECTS — 3-column card grid        │
│  Each: photo, name, location, stage badge      │
│  [View All Projects →]                        │
├────────────────────────────────────────────────┤
│  INVESTMENT THESIS — 2-column                  │
│  Left: Bold headline + 3-4 bullet points      │
│  Right: Key financial metric highlight         │
├────────────────────────────────────────────────┤
│  LATEST NEWS — 3-column news cards             │
│  [View All News →]                            │
├────────────────────────────────────────────────┤
│  ESG CALLOUT — Full-width, Off-white bg        │
│  Tree planting partnership highlight           │
│  Green accent color section                   │
├────────────────────────────────────────────────┤
│  EMAIL SUBSCRIPTION — centered, full-width     │
│  Headline + email input + subscribe button     │
├────────────────────────────────────────────────┤
│  FOOTER                                        │
│  Logo | Nav links | IR Contact | Social        │
│  Legal disclaimer | SEDAR link | Copyright     │
└────────────────────────────────────────────────┘
```

### Project Detail Page

```
┌────────────────────────────────────────────────┐
│  HEADER                                        │
├────────────────────────────────────────────────┤
│  BREADCRUMB: Home > Projects > [Project Name]  │
├────────────────────────────────────────────────┤
│  PROJECT HERO                                  │
│  Full-width photo; project name overlay        │
│  Stage badge + Commodity badges               │
├────────────────────────────────────────────────┤
│  2-COLUMN LAYOUT                               │
│  Left (2/3): Overview, geology, description    │
│  Right (1/3): Key facts card (outlined box)   │
│    - Location, area, commodity, stage          │
│    - Production figures                        │
├────────────────────────────────────────────────┤
│  RESOURCE / RESERVE TABLE                      │
│  Full-width, clean table with black borders    │
├────────────────────────────────────────────────┤
│  LOCATION MAP                                  │
│  Mapbox map embedded; project boundary shown   │
├────────────────────────────────────────────────┤
│  DRILL RESULTS / CHARTS                        │
│  Embedded charts (Chart.js / Recharts)         │
├────────────────────────────────────────────────┤
│  PHOTO GALLERY (grid)                          │
├────────────────────────────────────────────────┤
│  DOCUMENTS (download cards)                    │
│  NI 43-101, feasibility study, drill results   │
├────────────────────────────────────────────────┤
│  FOOTER                                        │
└────────────────────────────────────────────────┘
```

### Investor Relations Page

```
┌────────────────────────────────────────────────┐
│  HEADER                                        │
├────────────────────────────────────────────────┤
│  PAGE HEADER: "Investor Relations"             │
│  Subtitle + IR contact CTA                    │
├────────────────────────────────────────────────┤
│  STOCK OVERVIEW — Full-width                   │
│  Large price display, chart, exchange details  │
├────────────────────────────────────────────────┤
│  2-COLUMN: Capital Structure | Key Highlights  │
├────────────────────────────────────────────────┤
│  CORPORATE PRESENTATION — Full-width CTA       │
│  [Download Latest Presentation (PDF)] button   │
├────────────────────────────────────────────────┤
│  FINANCIAL REPORTS — Tabbed (by year)          │
│  Q1 / Q2 / Q3 / Annual — FS + MD&A downloads  │
├────────────────────────────────────────────────┤
│  REGULATORY FILINGS                            │
│  SEDAR+ link, EDGAR link, AGM materials        │
├────────────────────────────────────────────────┤
│  ANALYST COVERAGE + EVENTS CALENDAR            │
│  Side by side                                 │
├────────────────────────────────────────────────┤
│  IR CONTACT — Named contact card               │
│  Email subscription                           │
├────────────────────────────────────────────────┤
│  FOOTER                                        │
└────────────────────────────────────────────────┘
```

## 3.7 Interactive Map Specification

- **Library:** Mapbox GL JS
- **Map style:** Mapbox Outdoors or custom style matching brand palette (white/light with gold/black markers)
- **Content:** Bolivia overview map showing all 4–5 project locations
- **Markers:** Custom SVG markers in Mineral Gold with black outline; hover shows project name tooltip
- **Click behavior:** Opens project summary card overlay with link to project detail page
- **Mobile:** Pinch to zoom; fallback to static image if JS disabled
- **Data source:** Project coordinates stored in Sanity CMS

## 3.8 Motion & Interaction

- **Scroll reveals:** Sections fade and slide up on scroll (subtle — 300ms, no jarring effects)
- **Hover transitions:** 150ms ease — buttons, cards, nav items
- **No parallax:** Avoids the dated "mining industry" feel
- **Page transitions:** Instant (Next.js app router default) — snappiness signals performance
- **Reduce motion:** All animations respect `prefers-reduced-motion` media query

## 3.9 Imagery Guidelines

- **Hero:** Real Bolivian project photography — landscape, aerial, drill rigs. No stock photos.
- **Team:** Professional headshots — consistent white or neutral background; square crop
- **Projects:** Mix of: core sample trays, drill rigs, site panoramas, geological outcrop
- **ESG:** Community photos, tree planting images — human, warm, genuine
- **Image format:** WebP (with JPEG fallback); served via Next.js `<Image>` component
- **Aspect ratios:** Heroes 16:9, team headshots 1:1, project cards 3:2

---

---

# 4. User Stories

## 4.1 Institutional Investor Stories

### IR-S01 — Download Corporate Presentation
**As an** institutional investor evaluating Mycelium,
**I want to** download the latest corporate presentation in one click,
**So that** I can review the investment thesis and share it with my team.

**Acceptance Criteria:**
- Corporate presentation PDF is downloadable from the homepage CTA and the IR page
- PDF file includes the date of the version
- Download triggers a GA4 event for tracking
- File is served from S3 via CDN for fast download

---

### IR-S02 — Review Capital Structure
**As an** institutional investor,
**I want to** see Mycelium's current capital structure (shares outstanding, fully diluted, options, warrants),
**So that** I can assess dilution risk.

**Acceptance Criteria:**
- Capital structure table is visible on the IR page without requiring a download
- Data includes: issued shares, options, warrants, fully diluted total, and as-of date
- Updated via CMS (non-technical editor can update the numbers)

---

### IR-S03 — Access SEDAR Filings
**As an** institutional investor conducting due diligence,
**I want to** access Mycelium's SEDAR+ and EDGAR filings directly from the website,
**So that** I can review official regulatory documents without searching external databases.

**Acceptance Criteria:**
- SEDAR+ and EDGAR links are prominently available on the IR page
- Links open in a new tab
- Available in all three languages with consistent placement

---

### IR-S04 — Find IR Contact
**As an** institutional investor who wants to speak to management,
**I want to** quickly find the name, direct phone number, and email of the IR contact,
**So that** I can initiate a conversation without navigating through a generic contact form.

**Acceptance Criteria:**
- IR contact (name, title, phone, email) is present on the IR page and in the footer
- Email link uses `mailto:` for one-click email
- Contact information is managed via Sanity CMS (editable without a developer)

---

## 4.2 Retail Investor Stories

### RI-S01 — Check Current Stock Price
**As a** retail investor,
**I want to** see Mycelium's current TSX stock price as soon as I land on the site,
**So that** I can quickly gauge the current trading price.

**Acceptance Criteria:**
- Live stock ticker is displayed in the site header on all pages
- Shows: ticker symbol (TSX: [MYC]), current price, change ($), change (%)
- Price refreshes every 60 seconds without full page reload
- Color-coded: green for positive, red for negative movement

---

### RI-S02 — Subscribe to News Alerts
**As a** retail investor,
**I want to** subscribe to email alerts for press releases and company news,
**So that** I am notified when Mycelium publishes important updates.

**Acceptance Criteria:**
- Email subscription form is available on the homepage and IR page
- Requires only email address to subscribe (name optional)
- Confirmation email sent via AWS SES
- PIPEDA/GDPR compliant opt-in with clear consent language
- Subscriber can unsubscribe via link in every email

---

### RI-S03 — Read Latest Press Releases
**As a** retail investor,
**I want to** browse Mycelium's press releases sorted by most recent,
**So that** I can follow news and operational updates.

**Acceptance Criteria:**
- News page lists all press releases in reverse-chronological order
- Each entry shows: date, headline, brief excerpt
- Each press release has its own shareable URL
- Filterable by year and category (Exploration Results, Financial, Corporate, ESG)
- Available in EN / ES / FR

---

### RI-S04 — Understand the Projects
**As a** retail investor new to Mycelium,
**I want to** browse all projects with clear descriptions of what each one is and where it is,
**So that** I can understand what the company actually does and produces.

**Acceptance Criteria:**
- Projects index page shows all 4–5 projects as cards
- Each card shows: project name, location in Bolivia, stage, commodity
- Clicking a card leads to the full project detail page
- Project detail page explains geology, resources, and current status in plain language

---

## 4.3 ESG / Impact Investor Stories

### ESG-S01 — Learn About Environmental Commitments
**As an** impact-oriented investor,
**I want to** read about Mycelium's environmental practices and partnerships,
**So that** I can assess whether the company meets my ESG criteria.

**Acceptance Criteria:**
- Dedicated ESG / Sustainability page with E, S, G pillars
- Tree-planting partnership section with: partner name, trees planted (or goal), impact description
- Environmental practices section covering water management, tailings, rehabilitation
- ESG report downloadable if available

---

### ESG-S02 — Share ESG Content
**As an** ESG researcher,
**I want to** share specific ESG content with colleagues,
**So that** they can review Mycelium's sustainability profile.

**Acceptance Criteria:**
- ESG page has its own canonical URL
- Open Graph tags populated for social sharing (title, description, image)
- ESG press releases are tagged and filterable in the news archive

---

## 4.4 Job Seeker Stories

### JS-S01 — Browse Open Positions
**As a** geologist looking for opportunities in Bolivia,
**I want to** browse Mycelium's open job listings,
**So that** I can identify roles I am qualified for.

**Acceptance Criteria:**
- Careers page lists all active job postings
- Each listing shows: job title, location (city + country), type (full-time / contract / field season)
- Clicking a listing shows the full job description
- Non-active listings are hidden (controlled via CMS toggle)

---

### JS-S02 — Apply for a Job
**As a** qualified candidate,
**I want to** apply for a position directly from the website,
**So that** I can submit my application without leaving the site.

**Acceptance Criteria:**
- Each job listing has a clear "Apply" CTA
- Application links to an email (`careers@myceliumminerals.com`) or an embedded application form
- Form accepts: name, email, resume upload, cover letter (optional)

---

## 4.5 Content Manager Stories

### CM-S01 — Publish a Press Release
**As a** non-technical content manager,
**I want to** publish a new press release from the CMS without developer help,
**So that** the site stays current with company news.

**Acceptance Criteria:**
- Sanity Studio has a "Press Release" content type
- Fields: title (EN/ES/FR), date, body (rich text, EN/ES/FR), category, optional PDF attachment
- On publish, the site revalidates automatically via webhook within 60 seconds
- No deployment required

---

### CM-S02 — Update Capital Structure
**As a** content manager,
**I want to** update the capital structure table after each financing,
**So that** investor data on the site is always accurate.

**Acceptance Criteria:**
- Capital structure fields are editable in Sanity Studio as plain numbers
- Includes: shares outstanding, options, warrants, fully diluted, as-of date
- Change is reflected on the IR page within 60 seconds of publishing

---

### CM-S03 — Add a New Job Listing
**As a** content manager,
**I want to** post a new job opening on the careers page,
**So that** candidates can apply without requiring a developer to update the site.

**Acceptance Criteria:**
- Sanity Studio has a "Job Listing" content type
- Fields: title, location, type, description (rich text), active toggle, application contact
- Setting active = false removes it from the public careers page immediately

---

### CM-S04 — Manage Project Documents
**As a** content manager,
**I want to** upload new technical documents (NI 43-101 reports, drill results) to a project page,
**So that** investors always have access to the latest technical data.

**Acceptance Criteria:**
- Each project in Sanity has a documents section supporting multiple file uploads
- Fields per document: title, type (NI 43-101 / Drill Results / Feasibility / Other), date, file (PDF)
- Documents appear on the project detail page in the Downloads section, sorted by date

---

## 4.6 Multilingual Stories

### ML-S01 — Switch Language
**As a** Spanish-speaking Bolivian stakeholder,
**I want to** read the site in Spanish,
**So that** I can understand the company's operations and community commitments in my language.

**Acceptance Criteria:**
- Language switcher is visible on all pages in the header
- Switching language preserves the current page (e.g., switching on a project page stays on that project)
- All UI text (navigation, buttons, labels, legal) is translated
- CMS content (news, project descriptions, team bios) has Spanish fields
- URL changes to `/es/...` prefix for Spanish

---

### ML-S02 — Search Engines Index All Languages
**As** the Mycelium marketing team,
**I want** all language versions of the site to be indexed by search engines,
**So that** Spanish and French investors can find the site in their language.

**Acceptance Criteria:**
- Every page includes `<link rel="alternate" hreflang="...">` tags for all three locales
- Each locale has its own URL structure (`/`, `/es/`, `/fr/`)
- `sitemap.xml` includes all locale variants
- Translated page titles and meta descriptions in Sanity for SEO

---

---

*Document version 1.0 — Initial draft*
*Status: Pending stakeholder review*
