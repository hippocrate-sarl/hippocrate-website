# hippocrate-website

Static marketing website for **[www.hippocrate.lu](https://www.hippocrate.lu)** — the corporate site of **Hippocrate Sàrl**, a Luxembourg company publishing administrative-management software for medical and paramedical professions. Its main product is [Sigmund](https://www.sigmund.lu), a practice-management app for psychiatrists, psychotherapists and psychologists.

Rebuilt from the original Odoo-hosted site, following the same static-site approach used for [`sigmund-website`](https://github.com/hippocrate-sarl/sigmund-website).

---

## Overview

Hippocrate Sàrl's own site is a small, French-only, 4-page presentation of the company and its team, with a link out to Sigmund (the actual SaaS product, marketed on its own site) and a contact form.

---

## Running locally

No build step required. Open any HTML file directly in a browser.

---

## Pages

| Page | Description |
|---|---|
| `index.html` | Homepage |
| `nos-solutions.html` | Solutions page — presents Sigmund as Hippocrate's product, links out to sigmund.lu for detail |
| `equipe.html` | Team page — founders' bios + LinkedIn (E-E-A-T) |
| `contactus.html` | Contact page |
| `cookies.html` | Cookie policy (noindex) |
| `politique-relative-aux-donnees-personnelles.html` | Personal data policy — contact form data processed via Brevo (noindex) |
| `mentions-legales.html` | Legal notice (noindex) |

---

## Assets

```
assets/
├── css/
│   └── hippocrate.css        All custom styles shared by every page
├── js/
│   └── main.js                Active nav-link highlight
└── images/
    ├── logo-hippocrate.svg                                Logo (recolored to brand color for the white navbar;
    │                                                       original asset was solid white, unmodified otherwise)
    ├── hippocrate-hero.webp                               Homepage hero background
    ├── keyboard.jpg                                        CTA section background
    ├── montre-gousset.webp                                "Le temps de soigner" illustration
    ├── psychotherapeute.webp                               Sigmund product callout illustration
    ├── logo-sigmund-alone.svg                              Small Sigmund logo inside the product callout
    └── team-sylvain-perez.webp / team-franck-amouyal.webp / team-guillaume-desrat.webp   Team photos
```

`odoo-mirror/` at the repo root is a reference snapshot of the original Odoo-hosted site (raw HTML, images, framework CSS/JS), captured 2026-07-14 — kept for content reference only, not part of the live site.

---

## Tech stack

All dependencies are loaded from CDN — nothing to install.

| Library | Version | Purpose |
|---|---|---|
| Bootstrap | 5.3.3 | Layout, navbar, grid, utilities |
| Bootstrap Icons | 1.11.3 | Icons (`bi bi-*`) |
| Google Fonts — Inter | — | Body font (300–800) |

---

## Deployment

The site is hosted on **GitHub Pages**. Deploy by pushing to the `main` branch — no build, no compilation.

---

## Legal

- **Publisher:** Hippocrate Sàrl — RCS Luxembourg B282221
- **Director of publication:** Sylvain Perez
- **VAT:** LU35353830
- **Registered office:** 11 rue des Aubépines, L-8052 Bertrange, Luxembourg
- **Hosting (website):** GitHub Pages — GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA
- Copyright 2024–2026 © Hippocrate Sàrl — All rights reserved
