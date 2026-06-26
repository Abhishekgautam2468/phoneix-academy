# Phoenix Academy — Website

A single-page marketing website for **Phoenix Academy**, the **visa-interview preparation and
migration-readiness training arm of Phoenix Business Advisory**.

Phoenix Academy works exclusively with **established business owners, directors, and investors** who
are migrating their business abroad, and prepares them to **pass their migration visa interview** —
through coaching, realistic mock interviews, business-case preparation, and documentation readiness —
across the four destination markets served by the parent practice: **USA, Australia, New Zealand, and
the European Union**.

Built with **React 18 + Vite**. The page is composed of independent sections, each in its own folder
under `src/components/`.

> **Design note:** the visual identity (cream/navy/gold palette, Playfair Display + DM Sans, layered
> cards) is intentional and consistent throughout. Several section components keep their original file
> names but have been **repurposed**; this is noted per section below.

---

## Tech stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI components |
| **Vite 5** | Dev server + production bundler |
| **Plain CSS** (per-section files) | Styling — no CSS framework |
| **lucide-react** | Icon set (logo, UI, program icons) |
| **Google Fonts** | `Playfair Display` (headings) + `DM Sans` (body) |

### Design tokens

| Token | Value | Used for |
|-------|-------|----------|
| Cream | `#F5F0E8` | Page / light sections |
| Off-white | `#FAFAF5` | Nav, media strip, About, process |
| Navy (ink) | `#0A1420` | Headings, dark sections, buttons |
| Gold accent | `#c4882f` | Eyebrows, links, CTA background, numbers |
| Light gold | `#D4A856` | Stat numbers / emphasis on dark backgrounds |

---

## Running the project

```bash
npm install      # install dependencies (first time only)
npm run dev      # dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

---

## Project structure

```
.
├── index.html                  # Vite shell + SEO <title>/<meta>
├── public/images/              # Photos for the image sections (served at /images/…)
└── src/
    ├── main.jsx                # React entry; loads global/utilities/interactions/responsive CSS
    ├── App.jsx                 # Composes all sections in page order
    ├── data.js                 # ALL editable text content (single source of truth)
    ├── styles/                 # global · utilities · interactions · responsive
    └── components/
        ├── common/icons.jsx    # Shared SVG icon wrappers (around lucide-react)
        ├── TopBar/             # Utility bar
        ├── Nav/                # Navigation (with mobile hamburger menu)
        ├── Hero/               # Hero (split layout + layered showcase image)
        ├── MediaStrip/         # "As featured in" press logos
        ├── Services/           # "What We Offer" — focus areas + 2 image cards
        ├── Practice/           # "About Phoenix Academy"            (repurposed)
        ├── BackedBy/           # "Backed by Phoenix Business Advisory"
        ├── WhyChooseUs/        # "Why business owners choose us"
        ├── VisaPrograms/       # "Our Programs" — 4 prep programs    (repurposed)
        ├── Academy/            # "How It Works" — 5 steps            (repurposed)
        ├── SuccessMetrics/     # Stats band
        ├── Band/               # Free-masterclass CTA strip
        ├── Testimonials/       # Client testimonials
        ├── CTA/                # Final call-to-action
        └── Footer/             # Footer + SEO text
```

### Where to edit what

- **All copy** (focus areas, programs, steps, testimonials, stats, parent stats, media outlets) → `src/data.js`
- **A section's markup / headings** → that section's `.jsx`
- **A section's styling** → that section's `.css`
- **Colours / fonts globally** → `src/styles/global.css`
- **Responsive breakpoints / widths** → `src/styles/responsive.css`
- **SEO title / meta / keywords** → `index.html`

---

## Sections (in page order)

1. **TopBar** — "VISA INTERVIEW?" badge + advisor availability + two phone numbers.
2. **Nav** — Phoenix. Academy wordmark; links to Programs / How It Works / Success / About + "Book Consultation". Collapses to a hamburger menu on mobile.
3. **Hero** — split layout. Headline *"Your business is ready. Now ace the visa interview."*, lead, **Book a Mock Interview** / **Explore Programs**, a trust row (avatars + 4.9/5 + "1000+ business owners"), and a layered coaching photo with a floating "98% visa interview success rate" card.
4. **MediaStrip** — "As featured in" → Forbes, Bloomberg, CNBC, Times of India, Yahoo, Khaleej Times (`mediaOutlets`).
5. **Services** — "What We Offer": the 8 focus areas (`focusTags`) + two photo cards (mock interviews · 98% success; documents & business case · 1000+ owners).
6. **Practice → About** *(repurposed)* — *"More than paperwork. Real interview readiness."* Positions the Academy as the interview-prep arm of Phoenix Business Advisory.
7. **BackedBy** — navy authority section: parent stats (`parentStats`: $170M+ mobilized · 700+ businesses · 300+ jobs) + credentials (MARN 1383279 · MIA 6408 · NZ Licence 202506918).
8. **WhyChooseUs** — 4 cards (`features`): Real Interview Simulation · Mentors Who Know the Process · Your Business, Clearly Presented · Country-Specific Preparation.
9. **VisaPrograms → Programs** *(repurposed)* — 4 prep programs (`programs`), each a card with a Key-Areas list + art panel:
   - **Visa Interview Mastery** (mock interviews, Q&A drills, confidence)
   - **Business Case Presentation** (business story, investment narrative, genuine intent)
   - **Documentation Readiness** (document walkthrough, consistency, evidence)
   - **Country-Specific Briefing** (USA L-1 · Australia NIV · NZ Investor · EU CBI)
10. **Academy → How It Works** *(repurposed)* — 5 steps (`processSteps`): Assessment → Personalized Prep Plan → Coaching & Drills → Mock Interviews → Interview Day.
11. **SuccessMetrics** — "Trusted by business owners worldwide" (`metrics`): 1000+ coached · 98% success · 2500+ mock interviews · 4 destinations.
12. **Band** — free-masterclass CTA strip: *"Ace Your Business Migration Visa Interview — limited seats"* + Register.
13. **Testimonials** — 3 client quotes (`testimonials`), tagged by visa/destination (USA L-1 · Australia NIV · EU Citizenship).
14. **CTA** — *"Walk into your interview ready to win."* Book a consultation / Explore programs / Call.
15. **Footer** — brand + socials, Programs / Company / Contact columns, SEO paragraph, "A division of Phonix Advisory", legal links.

---

## Placeholder data to replace before launch

- **Phone numbers** — `+1 (800) 123-4567` etc. (TopBar, CTA, Footer).
- **Testimonials** — names, roles, and quotes in `data.js` are placeholders; replace with real clients (and their destination/visa).
- **Stats** — `metrics` (98% success, 2500+ mock interviews, etc.) and the program stat badges are illustrative; confirm real figures. `parentStats` and credentials come from the parent site — verify they're current.
- **Buttons** — *Book a Free Consultation* / *Register* link to `#`/`#contact`; wire them to a real booking tool (e.g. Calendly, like the parent).
- **Images** — `public/images/` are stock placeholders (Unsplash). Replace with real Phoenix photography; keep the same filenames or update paths in `Hero.jsx`, `Practice.jsx`, `Services.css`, `VisaPrograms.css`.

## Reference

Content and credibility cues are modelled on the parent site,
**Phoenix Business Advisory** (phoenixbusinessadvisory.com) — "The Most Trusted Name in Business
Migration" — including its four visa pathways, media features, stats, and credentials.
