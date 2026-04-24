# Mi Voz Interpreting — Website

**Astro + Tailwind CSS + Vercel**

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Project Structure

```
mivoz-interpreting/
├── src/
│   ├── layouts/
│   │   └── Layout.astro       # Base layout (header + footer)
│   ├── pages/
│   │   ├── index.astro        # Home page
│   │   ├── services.astro     # Services page
│   │   ├── providers.astro    # For Providers page
│   │   ├── about.astro        # About Michelle
│   │   ├── contact.astro      # Contact & Book
│   │   └── thank-you.astro    # Form confirmation
│   └── styles/
│       └── global.css         # Tailwind base styles
├── CLAUDE.md                  # Project brief for Claude Code
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Brand colors & fonts
├── vercel.json                # Vercel deployment config
└── package.json
```

## Brand Colors

| Name         | Hex       | Use                    |
|--------------|-----------|------------------------|
| Deep Forest  | #1E3D2A   | Primary dark/headers   |
| Forest       | #3D6B4F   | Mid green              |
| Sage         | #7A9E7E   | Soft accents           |
| Clay         | #C4956A   | CTAs, highlights       |
| Cream        | #F5F0E8   | Light backgrounds      |
| Warm White   | #FDFAF5   | Page background        |
| Bark         | #4A3728   | Body text              |
| Mist         | #D4E4D6   | Subtle green tint      |

## Fonts

- **Playfair Display** — Display/headlines (Google Fonts)
- **DM Sans** — Body/UI text (Google Fonts)

## Deployment to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
```
Follow the prompts. Vercel auto-detects Astro.

### Option B — GitHub + Vercel Dashboard
1. `git init && git add . && git commit -m "Initial commit"`
2. Push to GitHub: create a repo at github.com, then:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/mivoz-interpreting.git
   git push -u origin main
   ```
3. Go to vercel.com → New Project → Import from GitHub
4. Select the repo — Vercel auto-detects Astro
5. Click Deploy ✓

## To Do Before Launch
- [ ] Add Michelle's photo to About page and Home teaser
- [ ] Update phone number and email in Layout.astro footer and contact page
- [ ] Update service area in contact.astro
- [ ] Add real testimonials to home page testimonials section
- [ ] Connect contact form (Netlify Forms, Formspree, or EmailJS)
- [ ] Add favicon.svg
- [ ] Set up custom domain (mivozinterpreting.com) in Vercel dashboard
- [ ] Add Google Analytics or Plausible for traffic tracking

## Using Claude Code

To continue building with Claude Code, run:
```bash
claude
```

Claude Code will read CLAUDE.md for full project context. You can ask it to:
- Add new pages or sections
- Improve mobile responsiveness
- Add animations or interactions
- Build the scheduling/booking app
- Set up a blog or resources section
