# Phoenix Academy — Website

A single-page marketing website for **Phoenix Academy**, a professional **career-development and
training brand**. The site focuses on interview preparation, career coaching, job-readiness,
business-migration readiness, and entrepreneurship education.

Phoenix Academy is positioned as an education brand and is **a division of Phonix Advisory** (the
parent migration-advisory company, referenced only in the footer).

Built with **React 18 + Vite**. The page is composed of independent sections, each living in its own
folder under `src/components/`.

> **Design note:** the visual design (navy + gold palette, Playfair Display headings, DM Sans body,
> card layouts) is intentionally **unchanged** from the original comp — only the *content* differs.
> Several section components keep their original file names but have been **repurposed** to host
> Academy content; this is noted per section below.

---

## Tech stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI components |
| **Vite 5** | Dev server + production bundler |
| **Plain CSS** (per-section files) | Styling — no CSS framework |
| **Google Fonts** | `Playfair Display` (headings) + `DM Sans` (body) |

### Design tokens

| Token | Value | Used for |
|-------|-------|----------|
| Cream background | `#F5F0E8` | Page / light sections |
| Off-white | `#FAFAF5` | Nav, About, Learning Process |
| Navy (ink) | `#0A1420` | Headings, dark sections, buttons |
| Gold accent | `#c4882f` | Eyebrows, links, CTA background, numbers |
| Light gold | `#D4A856` | Stat numbers on dark backgrounds |

> The layout is **desktop-only** by design (`body { min-width: 1260px }`). No mobile breakpoint yet.

---

## Running the project

```bash
npm install      # install dependencies (first time only)
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

---

## Project structure

```
.
├── index.html                  # Vite shell + SEO <title>/<meta>
├── package.json
├── vite.config.js
├── public/
│   └── images/                 # Photos for the image sections (served at /images/…)
└── src/
    ├── main.jsx                # React entry; loads global + utilities CSS
    ├── App.jsx                 # Composes all sections in page order
    ├── data.js                 # ALL editable text content (single source of truth)
    ├── styles/
    │   ├── global.css          # Reset, fonts, base elements, .dot wordmark
    │   └── utilities.css       # Shared .eyebrow label variants
    └── components/
        ├── common/icons.jsx    # Reusable SVG icon components
        ├── TopBar/             # Utility bar
        ├── Nav/                # Navigation
        ├── Hero/               # Hero
        ├── Services/           # "What We Offer" (focus areas)
        ├── Practice/           # "About Phoenix Academy"      (repurposed)
        ├── WhyChooseUs/        # "Why Choose Us"
        ├── VisaPrograms/       # "Our Programs"               (repurposed)
        ├── Academy/            # "How It Works" / steps       (repurposed)
        ├── SuccessMetrics/     # "Empowering Future Professionals" stats
        ├── Band/               # Divider strip
        ├── Testimonials/       # Testimonials
        ├── CTA/                # Final call-to-action
        └── Footer/             # Footer + SEO text
```

Each section folder contains `Section.jsx` (markup), `Section.css` (scoped styles), and `index.js`
(barrel export).

### Where to edit what

- **Wording, programs, testimonials, stats, focus areas** → `src/data.js`
- **A section's markup** → that section's `.jsx`
- **A section's styling** → that section's `.css`
- **Colours / fonts globally** → `src/styles/global.css`
- **SEO title / meta / keywords** → `index.html`

---

## Sections (in page order)

### 1. `TopBar`
Thin navy utility bar. Gold **NOW ENROLLING** badge + *"Career training, interview prep & mentorship —
speak to an advisor 7 days"*, plus two click-to-call phone numbers (**placeholders**).

### 2. `Nav`
Sticky top navigation. **Phoenix.** wordmark + "Academy" sub-label, links to **Programs**
(`#programs`), **How It Works** (`#process`), **Success** (`#metrics`), **About Us** (`#about`), and a
**Book Consultation** button (`#contact`).

### 3. `Hero`
Centered hero.
- Eyebrow: *"Career Development • Interview Preparation • Global Opportunities"*
- Headline: *"Build the skills. Gain the confidence. **Achieve your goals.**"*
- Lead: the Phoenix Academy intro paragraph.
- Buttons: **Start Your Journey** (`#contact`) and **Explore Programs** (`#programs`).
- Social-proof row: initial avatars + a **4.9/5 · From 1000+ learners** pill.

### 4. `Services` — *"What We Offer"*
Three-column block (dark text card + two decorative panels).
- Heading *"Career & business training, all in one place."*
- Lists the **8 focus areas** (`focusTags`): Interview Preparation · Career Coaching · Job Readiness
  Programs · Business Migration Readiness · International Career Guidance · Soft Skills &
  Communication · Resume & LinkedIn Optimization · Entrepreneurship & Global Business.
- Panels show **8 Focus Areas** and **4 Training Programs**.

### 5. `Practice` — *"About Phoenix Academy"*  *(repurposed)*
Two-column layout (image placeholder + text). Anchored at `#about`.
- Eyebrow *"About Us"*, heading *"More than training. **A pathway to success.**"*
- Two paragraphs on the mission, plus a bullet list (`aboutPoints`) and a **Start Your Journey** link.

### 6. `WhyChooseUs` — *"Why Choose Us"*
Four stacked feature cards (`features`):
1. 🎯 **Industry-Focused Learning**
2. 👨‍🏫 **Expert Mentorship**
3. 🛠️ **Practical Skill Development**
4. 🤝 **Personalized Career Support**

### 7. `VisaPrograms` — *"Our Programs"*  *(repurposed)*
The four core programs, anchored at `#programs`. Each program is one large card with a text body
(title, tagline, description, a **Key Areas** list, and an enroll button) plus a gradient art panel
(icon, name, and a stat). Driven by the `programs` array:
1. 🎤 **Interview Mastery Program** — Interview Techniques, Communication Skills, Confidence Building,
   Mock Interviews, Personal Branding.
2. 🚀 **Career Acceleration Program** — Resume Building, LinkedIn Optimization, Networking Strategies,
   Job Search Planning, Career Roadmapping.
3. 🌍 **Business Migration Readiness** — Business Planning, Global Market Awareness, Compliance
   Fundamentals, Investment Readiness, Expansion Strategy.
4. 💡 **Entrepreneurship Development** — Business Foundations, Growth Strategy, Market Research, Sales
   Fundamentals, Leadership Development.

> Sub-components `VisaArt.jsx` and `VisaBody.jsx` (same folder) render the art panel and text body.

### 8. `Academy` — *"How It Works"*  *(repurposed)*
Five-card grid showing the learning process (`processSteps`), anchored at `#process`. Each card has a
numbered badge, title, and description:
1. **Assessment** · 2. **Personalized Learning Plan** · 3. **Expert Training** ·
4. **Mentorship & Feedback** · 5. **Career & Business Readiness**.

### 9. `SuccessMetrics` — *"Empowering Future Professionals"*
Four stat cards (`metrics`), anchored at `#metrics`:
**1000+** Learners Trained · **95%** Program Satisfaction Rate · **500+** Mock Interviews Conducted ·
**100+** Career Mentoring Sessions.

### 10. `Band`
Thin navy divider strip: *"Ready to grow your career? Book a free consultation today."* +
*"Open 7 days · Mon–Sat, 9am–7pm"*.

### 11. `Testimonials`
Dark section, three quote cards (`testimonials`). Heading *"Real growth. Real results."*
**Names and roles are placeholders** — replace with real learners:
- Ananya Sharma — Software Engineer — Interview Mastery
- Daniel Okafor — Marketing Professional — Career Acceleration
- Priya Menon — Aspiring Entrepreneur — Entrepreneurship Development

### 12. `CTA` — *"Ready to unlock your potential?"*
Gold call-to-action, anchored at `#contact`. Heading *"Take the next step **toward your future.**"*
Three buttons: **Book a Free Consultation**, **Explore Training Programs** (`#programs`), and a phone
**Call us** button.

### 13. `Footer`
Dark footer with the SEO paragraph, the **Phoenix.** wordmark + *"A division of Phonix Advisory"*,
copyright, and Terms / Privacy links.

---

## Shared building blocks

- **`src/components/common/icons.jsx`** — reusable SVG icons: `LogoIcon`, `ArrowIcon`,
  `StarIcon`/`Stars`, `GlobeIcon`, `CalendarIcon`, `PhoneIcon`.
- **`src/data.js`** — exported content arrays: `avatars`, `focusTags`, `features`, `testimonials`,
  `aboutPoints`, `programs`, `processSteps`, `metrics`.
- **Styling convention** — each section imports its own `.css`; shared rules live in `src/styles/`.
  Class names are BEM-style and global, namespaced by section.

---

## Placeholder data to replace before launch

- **Phone numbers** — `+1 (800) 123-4567` (in `TopBar`, `CTA`).
- **Review rating / learner count** — `4.9/5`, `1000+ learners` (in `Hero`).
- **Testimonials** — names, roles, and quotes in `data.js`.
- **Stats** — the figures in `metrics` and the program stat badges.
- **Buttons** — *Book a Free Consultation* links to `#`; wire it to a real form or scheduling tool.
- **Images** — the photos in `public/images/` are stock photography (Unsplash) used as
  placeholders. Replace them with your own brand photography (keep the same file names, or update the
  paths in `Practice.jsx`, `Services.css`, and `VisaPrograms.css`). The image areas are: the About
  photo, the two Services panels, and the four Program art panels.

### SEO keywords covered (in `index.html` meta + footer copy)

Interview Preparation · Career Coaching · Professional Development · Job Readiness Training · Mock
Interview Program · Resume Building Services · LinkedIn Optimization · Career Guidance ·
Entrepreneurship Training · Business Readiness Program · Leadership Development · Employability Skills
Training · Professional Skill Development · Global Career Opportunities.
