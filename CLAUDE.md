# Mi Voz Interpreting — Website Project

## Project Overview
Website for **Mi Voz Interpreting**, a Spanish medical interpreting business owned by Michelle.
Built with **Astro + Tailwind CSS**, deployed to **Vercel**.

## Brand
- **Name:** Mi Voz Interpreting
- **Domain:** mivozinterpreting.com
- **Tagline:** "Your voice. Their care."
- **Mission:** Give Spanish-speaking patients a voice in their own healthcare
- **Owner:** Michelle (certified medical interpreter, formerly at Language World agency)

## Color Palette (CSS Variables)
```
--deep-forest:  #1E3D2A  (primary dark, backgrounds)
--forest:       #3D6B4F  (primary mid-green)
--sage:         #7A9E7E  (soft green, accents)
--clay:         #C4956A  (warm accent/CTA)
--earth:        #8B6F47  (secondary warm)
--cream:        #F5F0E8  (light background)
--warm-white:   #FDFAF5  (page background)
--bark:         #4A3728  (body text)
--mist:         #D4E4D6  (soft green tint)
```

## Typography
- **Display/Headlines:** Playfair Display (serif) — italic for taglines
- **Body/UI:** DM Sans (sans-serif)
- Load from Google Fonts

## Dual Audience Strategy
The brand speaks to TWO audiences simultaneously:
1. **Healthcare Providers** (hospitals, clinics, agencies, staffing firms) — professional, compliance-focused, cost-effective
2. **Spanish-Speaking Patients & Community** — warm, empathetic, mission-driven

## Tech Stack
- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Forms:** Netlify Forms OR simple mailto fallback
- **Fonts:** Google Fonts (Playfair Display + DM Sans)

## Commands
```
npm run dev      # Start dev server (localhost:4321)
npm run build    # Production build to ./dist
npm run preview  # Preview production build
```

## Site Structure — 5 Pages

### 1. Home (/)
- Hero: Big headline "Your voice. Their care." with subheadline about mission
- Two-column CTA: "I'm a healthcare provider" / "I'm a patient or family member"
- Services overview (3 cards: On-Site, Video, Phone + Document Translation)
- Why Mi Voz (4 differentiators)
- Short "About Michelle" teaser with photo placeholder
- Testimonials section (placeholder)
- CTA banner: "Ready to work together?"

### 2. Services (/services)
- Hero with services overview
- Detailed cards for each service:
  - On-Site Interpreting
  - Video Remote Interpreting (VRI)
  - Over-the-Phone Interpreting (OPI)
  - Document & Digital Translation
- For Providers section: compliance, HIPAA, rates
- For Patients section: compassionate, accessible

### 3. About (/about)
- Michelle's story and mission
- Her background (Language World trained)
- Certifications & credentials (placeholder)
- Personal "why" — she loves giving patients their voice
- Photo placeholder

### 4. For Providers (/providers)
- Targeted page for hospitals, clinics, agencies, staffing firms
- Language access compliance section (legal requirements)
- Pricing advantage vs large agencies
- Service modalities
- How to partner / contract with Mi Voz
- Contact form / inquiry form

### 5. Contact (/contact)
- Contact form (name, organization, service needed, message)
- Phone + email placeholders
- Service area note
- Schedule a consultation CTA

## Components to Build
- `Header.astro` — Nav with logo + CTA button
- `Footer.astro` — Logo, nav links, tagline, social placeholders
- `Hero.astro` — Reusable hero section
- `ServiceCard.astro` — Individual service cards
- `DualCTA.astro` — Two-column provider vs patient CTA
- `TestimonialCard.astro` — Testimonial placeholder
- `ContactForm.astro` — Contact/inquiry form

## Logo Treatment
The logo uses two fonts:
- *"Mi"* — Playfair Display Italic, clay color (#C4956A)
- **"Voz"** — Playfair Display Bold, cream/dark depending on bg
- "INTERPRETING" — DM Sans, uppercase, letter-spaced, sage color

## Key Messaging (use throughout site)

### For Providers:
- "HIPAA-compliant & certified"
- "Agency-trained expertise at independent pricing"
- "One dedicated interpreter — not a random dispatch"
- "Meet your language access obligations"
- "On-site, video, and phone interpreting available"

### For Patients:
- "Every patient deserves to be heard"
- "Language should never stand between you and your care"
- "A voice when you need one most"
- "Compassionate, certified Spanish interpreting"

### Brand Story Quote (use as pull quote):
"Mi Voz means My Voice — the voice Michelle lends to patients who can't advocate for themselves."

## Deployment — Vercel
1. Initialize git repo: `git init && git add . && git commit -m "Initial commit"`
2. Push to GitHub
3. Connect repo to Vercel at vercel.com
4. Set framework preset to **Astro**
5. Deploy — no env vars needed for static site

## Notes
- Mobile-first responsive design
- Accessible (WCAG AA)
- SEO meta tags on every page
- No unnecessary animations — clean and professional
- All images use placeholders (unsplash or placeholder.com) for now
