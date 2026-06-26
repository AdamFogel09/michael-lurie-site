# PROJECT — Michael Lurie Video & Photography Website

## Overview

A premium one-page scrolling website for Michael Lurie, an Israeli wedding photographer and videographer based in Israel. The goal is to position him at the top of the market — the site must feel like a 10,000₪+ offering and reflect the cinematic quality of his work.

His current site (michael-lurie.co.il/wedding) is built on WordPress/Elementor and does not represent his work well. This is a full redesign as a standalone HTML/CSS/JS file.

---

## Client

- **Name:** Michael Lurie (מיכאל לוריה)
- **Business:** Video & Photography — weddings and events
- **Experience:** Since 1992, 5,000+ events
- **Phone:** 054-218-6017
- **Email:** Misha.lurie@gmail.com
- **WhatsApp:** https://api.whatsapp.com/send?phone=972542186017&text=היי! אשמח לקבל פרטים לגבי צילומי וידאו/סטילס.
- **Instagram:** https://www.instagram.com/michael_lurie_/
- **Facebook:** https://www.facebook.com/MichaelLurie.photographer
- **Vimeo:** https://vimeo.com/michaellurie

---

## Technical Specs

- **Type:** Single HTML file (index.html) with embedded CSS and JS
- **Language:** Hebrew — RTL layout (`dir="rtl"`)
- **No frameworks:** Pure HTML, CSS, JavaScript only
- **No dependencies:** Everything self-contained, fonts loaded from Google Fonts
- **Responsive:** Must work on desktop, tablet, and mobile
- **Performance:** Images should be referenced from local `assets/images/` folder

---

## File Structure

```
michael-lurie-site/
  index.html
  assets/
    images/
      hero/
        bride-silhouette.jpg
      about/
        michael-portrait.jpg
      gallery/
        photo-1.jpg
        photo-2.jpg
        photo-3.jpg
        photo-4.jpg
        photo-5.jpg
        photo-6.jpg
        photo-7.jpg
        photo-8.jpg
      logo/
        logo.png
    videos/
      hero-bg.mp4
  DESIGN.md
  PROJECT.md
```

---

## Page Sections (in order)

### 1. Navigation
Fixed top bar. Logo on the right (RTL). Nav links on the left (RTL).
Links scroll smoothly to each section.

Nav links (Hebrew):
- גלריה → #gallery
- וידאו → #video
- אודות → #about
- המלצות → #testimonials
- צור קשר → #contact

### 2. Hero
- Full screen (100vh)
- Background: `assets/videos/hero-bg.mp4` — autoplay, muted, loop
- Overlay: dark gradient bottom-up
- Headline (H1): "כל רגע הוא סיפור בפני עצמו."
- Subheadline: "צילום וידאו וסטילס לחתונות"
- CTA Button: WhatsApp — "בואו נדבר" linking to WhatsApp

### 3. About (אודות)
- Two column layout: image left (in RTL: left), text right
- Image: `assets/images/about/michael-portrait.jpg`
- Eyebrow text: "קצת עליי"
- Headline: "נעים להכיר, אני מיכאל."
- Body text (from his current site, translated/kept in Hebrew):
  "צלם אירועים משנת 1992. צילמתי כבר למעלה מ-5,000 אירועים מכל סוג אפשרי, החל מבריתות אינטימיות בבית ועד לאירועים ססגוניים ויוקרתיים בניו-יורק. אני צלם וידאו, אך בארבע השנים האחרונות אני מצלם גם בסטילס, ומביא את הידע, הניסיון וההבנה שתמונה תופסת רגע תיעודי, טבעי, רגע שנעדר מגבולות של זמן ומרחב, ושאפשר להתבונן בו שוב ושוב."

### 4. Photography Gallery (גלריה)
- Eyebrow: "עבודות נבחרות"
- Headline: "גלריית תמונות"
- Asymmetric editorial photo grid
- Images from `assets/images/gallery/`
- Mix of portrait and landscape
- No captions

### 5. Video (וידאו)
- Eyebrow: "סרטי חתונה"
- Headline: "וידאו"
- Dark charcoal background
- 2–3 embedded YouTube/Vimeo iframes
- **Note:** Insert actual video embed URLs before delivery

### 6. Testimonials (המלצות)
- Eyebrow: "זוגות משתפים"
- Headline: "מה אומרים עלינו"
- Use these 3 testimonials from his site:

**Testimonial 1 — אטל:**
"מיכאל הוא צלם שבה לעבוד. הוא היה יסודי הסביר הכל ונתן לנו הרגשה שאנחנו בידיים טובות. מאוד ממליצה לתת לו לעשות את העבודה שלו ולא להתערב יותר מדי כי הוא יודע הכי טוב 😉"

**Testimonial 2 — סתיו:**
"צלם טוב נמדד ביכולת שלו לתפוס רגעים ספונטניים אבל בלתי נשכחים. מיכאל פשוט אמן בלצלם רגעים קסומים ולא מתוכננים, להוציא את הפריים הכי טוב שממחיש את הקסם האותנטי ובעיקר לערוך את התמונות ברמה הכי גבוהה ומקצועיות שיש."

**Testimonial 3 — אלינור:**
"מיכאל פשוט קסם של אדם, נהנינו ממנו מאוד באירוע, הוא הגיע בזמן, עשה לנו וידיאו נדיר ואפילו באותו לילה הכין לנו את ההיטלייטס של האירוע."

### 7. Contact (צור קשר)
- Full width dark section with background image (darkened overlay)
- Headline: "בואו נדבר"
- Subtext: "כל סיפור אהבה ראוי לצלם שיודע לספר אותו."
- Primary CTA: WhatsApp button
- Secondary: Phone number 054-218-6017
- Social icons: Instagram, Facebook, Vimeo
- Logo at bottom center

---

## Copy Notes

- All text is in Hebrew
- Tone: Warm, personal, premium — not corporate
- Keep sentences short and punchy
- The site sells emotion, not features

---

## Delivery Notes

- Final file: `index.html` — must open directly in browser with no server needed
- All assets referenced with relative paths (`./assets/images/...`)
- Test on Chrome, Safari, mobile
- WhatsApp link must work on mobile
- Video must autoplay on mobile (use `playsinline` attribute)