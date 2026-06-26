# DESIGN SYSTEM — Michael Lurie Video & Photography

## Visual Identity

The website must feel cinematic, dark, and luxury. Think high-end fashion editorial meets wedding film. Every design decision should make the photography the hero. Nothing competes with the images.

---

## Color Palette

| Name       | Hex       | Usage                                      |
|------------|-----------|--------------------------------------------|
| Black      | `#0A0A0A` | Main background, dominant color            |
| Charcoal   | `#1C1C1C` | Cards, section backgrounds, subtle layers  |
| Gray       | `#6B6B6B` | Secondary text, captions, meta info        |
| Gold       | `#C9B89A` | Accent only — CTAs, dividers, hover states |
| White      | `#FFFFFF` | Primary text, logo, headlines              |

**Rule:** Gold is used sparingly. It's the accent, not a background. Never fill large areas with gold.

---

## Typography

### Hebrew Headlines
- Font: `Frank Ruhl Libre` (Google Fonts) — elegant Hebrew serif
- Weight: 300 (light)
- Size: Large, commanding. Minimum 48px for section titles, 72px+ for hero
- Style: Thin and refined, never bold or heavy

### Hebrew Body Text
- Font: `Heebo` (Google Fonts) — clean modern Hebrew sans-serif
- Weight: 300–400
- Size: 15–17px
- Line height: 1.8
- Color: `#6B6B6B` for body, `#FFFFFF` for important text

### English / Logo Text (decorative only)
- Font: `Cormorant Garamond` (Google Fonts) — for any English accents or eyebrow text
- Weight: 300, italic

---

## Layout

- **Direction:** RTL (Right to Left) — Hebrew site
- **Max width:** 1440px centered
- **Padding:** 80px sides on desktop, 24px on mobile
- **Grid:** 12-column CSS grid
- **Spacing system:** multiples of 8px (8, 16, 24, 32, 48, 64, 80, 120)

---

## Animations & Motion

- All animations must feel **slow and cinematic** — nothing fast or bouncy
- Scroll-triggered fade-ups: `opacity 0→1`, `translateY 30px→0`, duration `0.9s`, easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Hero video: autoplay, muted, loop, no controls
- Image hover: subtle scale `1.0→1.04`, duration `0.7s`
- Gold underline CTAs: `scaleX 0→1` on hover, origin left (or right for RTL)
- Page load: fade in entire page from black, duration `0.6s`

---

## Components

### Navigation
- Fixed top, transparent background with gradient fade to transparent
- Logo left (in RTL: right side), nav links right (in RTL: left side)
- Nav links: 11px, letter-spacing 0.2em, uppercase, color `rgba(255,255,255,0.7)`
- On hover: color transitions to `#C9B89A`
- Smooth scroll to sections on click

### Hero Section
- Full viewport height (100vh)
- Video background: autoplay muted loop, `object-fit: cover`
- Dark overlay: `linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)`
- Headline: large Frank Ruhl Libre, white, bottom-left positioned (RTL: bottom-right)
- Single CTA: WhatsApp button styled as gold-border text link

### Section Headers
- Small gold eyebrow text above (e.g. "צילום") — 10px, spaced letters
- Large serif headline below
- Thin horizontal line extending from headline to edge

### Photo Grid (Gallery Section)
- Asymmetric editorial layout — not a uniform grid
- Mix of portrait and landscape orientations
- Gap: 8–10px between images
- Images: `brightness(0.88)` default, `brightness(1.0)` on hover
- No captions, no borders, no rounded corners — clean and raw

### Video Section
- Dark charcoal background `#1C1C1C`
- YouTube embeds in 16:9 ratio, max 2–3 videos
- Minimal styling, let the videos speak

### Testimonials
- Large opening quote mark in gold (decorative)
- Quote text in Frank Ruhl Libre italic, large
- Name below in small Heebo, gold color
- Max 3 testimonials, displayed horizontally on desktop

### Contact / Footer CTA
- Full-width dark section with a background photo (darkened)
- Large headline, WhatsApp button as primary CTA
- Phone number, Instagram, Facebook, Vimeo links
- Michael Lurie logo centered at bottom

---

## Photography Art Direction

- Never crop faces awkwardly
- Always show the full editorial feel — dark images look better here than bright ones
- Portrait orientation images get more visual weight in the grid
- The silhouette photo and the ring photos are signature shots — feature them prominently

---

## What This Site Must NOT Look Like

- No white backgrounds **on the website UI itself** (sections, cards, nav, footer etc.) — the site background stays dark at all times
- Photos may be bright or dark — do not filter or darken the actual photos, display them as-is. Bright outdoor photos look great against the dark UI background.
- No colorful buttons
- No rounded corners on images
- No stock-looking fonts (no Roboto, no Open Sans)
- No generic Elementor/Wix template energy
- No centered-everything layout (use tension and asymmetry)
- No busy backgrounds behind text