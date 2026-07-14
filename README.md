# Eurasia Palace — Demo Website

A luxury hotel/banquet demo site — 8 pages, one shared design system.

## What's inside
```
index.html        → Homepage
rooms.html         → Rooms & Suites
restaurant.html     → Dining
weddings.html       → Weddings (with enquiry form)
banquet.html        → Banquet Hall (with enquiry form)
conference.html     → Conference & Corporate (with enquiry form)
gallery.html        → Filterable photo gallery
contact.html        → General contact + enquiry form
css/style.css       → Shared design system (colors, type, layout)
js/main.js          → Shared behavior (nav, scroll reveal, gallery filter, forms)
```

## How to deploy
1. Create a new GitHub repo (e.g. `eurasia-palace-demo`)
2. Upload this whole folder — keep the `css/` and `js/` subfolders intact
3. Go to vercel.com → New Project → Import your GitHub repo
4. Leave build settings blank (it's static HTML, no build step needed) → Deploy
5. Vercel gives you a live URL instantly (e.g. `eurasia-palace-demo.vercel.app`)

## Before showing this to the client
- **All photos are stock placeholders** (Unsplash) — swap for real property photos before/after the pitch. This matters a lot for a luxury positioning; stock photos won't match the actual property.
- **Phone number, email, and WhatsApp number are placeholders** (`+91 00000 00000`) — find & replace across all files with the real numbers.
- **Enquiry forms are demo-only** — they show a confirmation message but don't save anywhere yet. Wiring to Supabase (so submissions land in a real admin panel + trigger an email) is the next step once the client says yes — see the comment block at the bottom of `js/main.js` for exactly how that wiring will work.
- **Pricing shown on rooms.html is placeholder** — replace with real rates.

## Design notes
- Palette: charcoal, warm ivory, antique gold, deep emerald accent
- Typography: Cormorant Garamond (display) + Jost (body)
- Signature element: the arch motif (image frames, dividers, icons) — a nod to palace architecture, used consistently across all pages
