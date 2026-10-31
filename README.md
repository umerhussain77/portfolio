# Umer Hussain – Web Developer Portfolio

A React + Vite + Tailwind CSS portfolio with a homepage and a Case Studies section. Content is kept in `src/data/` so you can update it without touching components.

## 1. Setup

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # local development at http://localhost:5173
npm run build      # production build in dist/
npm run preview    # preview the production build at http://localhost:4173
```

## 2. Project structure

```
public/
  Umer-Hussain-CV                     Downloadable resume (replace this file to update it)
  images/profile.jpg             Profile photo used in the About section
  case-studies/<project>/        Screenshots for each case study (see section 5)
  _redirects, vercel.json        Routing rules so deep links like /case-studies/... work after deploy
src/
  data/                          All text, skills, links, and case study content
  components/                    Reusable UI pieces (cards, buttons, navbar, gallery, etc.)
  sections/                      Homepage sections (Hero, About, Skills, Projects, ...)
  pages/                         Route pages (Home, Case Studies list, Case Study, 404)
  lib/                           Helpers (SEO meta hook, icon map)
  App.jsx, main.jsx, index.css   App shell, entry point, global styles and theme colors
```

## 3. Updating personal details

Edit `src/data/profile.js`:

- **name, title, specialty, headline, intro, about**: text shown in the hero and About section.
- **stats**: the numbers in the About section. Only use figures you can support.
- **email, phone, whatsapp, linkedin, github**: contact details. Leave `github` as `""` to hide the GitHub link.
- **whatsapp**: a `wa.me` link using the phone number in international format with no `+` or dashes.

Replace the profile photo at `public/images/profile.jpg`. A square image works best.

## 4. Skills, experience, services

- `src/data/skills.js`: skill groups and their items.
- `src/data/experience.js`: job history and education.
- `src/data/services.js`: service cards and "Why Work With Me" items.
- `src/data/navigation.js`: menu links.

## 5. Case studies

All case studies live in `src/data/caseStudies.js`. Each entry has the same fields, so you can add a new project by copying an existing one and changing the values.

Key fields:

- `slug`: the URL path, for example `jacks-bbq-location-menu` gives `/case-studies/jacks-bbq-location-menu`.
- `folder`: the folder name under `public/case-studies/` for that project's images.
- `category`: used for the filter buttons on the Case Studies page. Filters are created automatically from these values.
- `liveUrl` and `sourceUrl`: when set, the buttons appear. When empty, the live link is hidden and a placeholder note appears. Leave `sourceUrl` empty for private or confidential work.
- `screenshots`: each item has a `label`, a `src` path, and a `type` (`desktop` or `mobile`).

**Placeholders:** any text wrapped in square brackets, such as `"[Add project duration]"`, appears highlighted in amber on the site. Replace every placeholder with verified information before publishing. Search the file for `[` to find them all.

### Screenshot files

Place images in `public/case-studies/<folder>/` using the paths listed in `caseStudies.js`. For example, the Jack's BBQ cover goes in `public/case-studies/jacks-bbq/cover.jpg`. Until an image exists, the site shows a labeled placeholder frame instead of a broken image.

Recommended sizes: cover and desktop screenshots at 1600×1000 px (16:10), mobile screenshots at 800×1000 px or similar. Keep files under about 300 KB each by compressing JPG or WebP images.

## 6. Contact form

The contact form validates input and then opens the visitor's email app with the message filled in. No server or third-party form service is connected, so nothing is sent from the website itself. If you want form submissions to arrive directly on your site, connect a form service (for example Formspree or Web3Forms) and replace the submit handler in `src/sections/Contact.jsx`.

## 7. Deployment

The site is a single-page app. Configure a rewrite so that every route serves `index.html`.

- **Netlify:** `public/_redirects` is already included.
- **Vercel:** `vercel.json` is already included.
- **Other hosts:** add a rule that sends unmatched paths to `/index.html`.

## 8. Before publishing checklist

- [ ] Replace every amber `[placeholder]` with verified information, or remove the line.
- [ ] Add screenshots for each case study and check that they look correct on mobile.
- [ ] Confirm you have permission to show each client's name and work publicly.
- [ ] Add the live URL for each project that is public.
- [ ] Confirm the WhatsApp link and phone number are correct.
- [ ] Replace `public/Umer-Hussain-CV` with the latest version if needed.
- [ ] Run `npm run build` and check the site on a phone-sized screen.

## Accessibility and performance notes

- Animations respect the reduced-motion setting in the operating system.
- Navigation is keyboard accessible, and the mobile menu closes with the Escape key.
- The lightbox closes with the Escape key and has a labeled close button.
- Images load lazily, and missing images fall back to a placeholder.
=======
# portfolio
