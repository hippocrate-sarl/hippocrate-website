# Hippocrate Website

Static marketing website for **www.hippocrate.lu** — the corporate site of **Hippocrate Sàrl** (Bertrange, Luxembourg), publisher of administrative-management software for medical and paramedical professions, including **Sigmund** (marketed separately at sigmund.lu, see the sibling `sigmund-website` repo).

French only — the original site has no other language versions.

## Tech stack

- Plain HTML/CSS/JS — no build tool, no framework, no bundler
- **Bootstrap 5.3** (CDN) — layout and components
- **Bootstrap Icons 1.11** (CDN) — icons via `<i class="bi bi-*">`
- **Google Fonts** — Inter (300/400/500/600/700/800)

## File structure

```
index.html                Homepage
contactus.html             Contact page
cookies.html               Cookie policy (noindex)
mentions-legales.html      Legal notice (noindex)

assets/css/hippocrate.css  All custom styles (shared by all pages)
assets/js/main.js          Active nav-link highlight
assets/images/             All images (webp + svg)

favicon.ico
robots.txt
sitemap.xml
llms.txt
CNAME

odoo-mirror/                Reference snapshot of the original Odoo-hosted site (not part of the live site — see its own README.md)
```

## CSS conventions

Custom CSS lives exclusively in `assets/css/hippocrate.css`. CSS variables are defined in `:root`:

```css
--hp-primary:    #65435C   /* brand color, taken from the original Odoo theme's --o-color-1 */
--hp-primary-lt: #8a6a80
--hp-dark:       #1B1319
--hp-light-bg:   #f5eff2
--hp-hero-from:  #e7dce4
--hp-hero-to:    #f8f6f7
--hp-white:      #ffffff
--hp-border:     #e5d9e1
--hp-shadow:     0 4px 24px rgba(101,67,92,.15)
--hp-gradient:   linear-gradient(135deg, #65435C 0%, #442c3d 100%)
```

All custom classes use the `hp-` prefix. **No inline styles, no `<style>` blocks:** never use `style="..."` attributes (other than the one-off `background-image` on `.hp-cover` sections, which is intentional and page-specific) or `<style>` blocks. All other styles must go in `hippocrate.css`.

## Key components (hippocrate.css)

Deliberately mirrors sigmund-website's design language (two-column gradient hero, uppercase tracked section titles, gradient CTA band, hover-lift cards) rather than the original Odoo site's photo-cover treatment — recolored to Hippocrate's own brand color throughout.

- **`.hp-navbar`** — sticky top navbar; active link gets `class="nav-link active"`
- **`.btn-hp-primary`** — pill-shaped CTA button (the only button style — no outline variant exists; add one back only if a real secondary-action need shows up)
- **`.hp-hero`** — two-column gradient hero (soft `--hp-hero-from`→`--hp-hero-to`), colored bold H1, `.hp-hero-facts` icon row, `.hp-hero-img` on the right (rounded, shadowed)
- **`.hp-section-title`** — uppercase, letter-spaced, matches sigmund's `.sg-section-title` exactly in treatment
- **`.hp-cta-section`** / **`.hp-cta-title`** / **`.hp-cta-lead`** — gradient CTA band (mid-page "Contactez-nous" banner), same pattern as sigmund's CTA sections
- **`.hp-team-card`** — team member photo + name + `.role` tag + bio, hover-lift
- **`.hp-callout-img`** / **`.hp-callout-logo`** — Sigmund product callout section
- **`.hp-legal-header`** — gradient page header with icon (legal, cookies, contact)
- **`.hp-toc`** / **`.hp-toc-links`** — "on this page" chip links (legal notice)
- **`.hp-info-card`** — labeled info block (legal notice)
- **`.hp-legal-content`** — typography for legal/cookie page bodies
- **`.hp-contact-form`** / **`.hp-form-panel`** / **`.hp-field-error`** / **`.hp-honeypot`** — contact page form
- **`.hp-footer`** — dark footer (`#1B1319`, the brand's near-black)

## Navbar

2 items on all pages: `Accueil | Contactez-nous`. Legal/cookie pages are footer-only, not in the navbar.

## Footer structure

Three columns on all pages:
1. **Liens utiles** — Page d'accueil, Sigmund (external, sigmund.lu), Cookies, Mentions légales
2. **À propos d'Hippocrate** — company registration paragraph (RCS number, registered office)
3. **Contactez-nous** — email, two phone numbers, LinkedIn (company page, shared with sigmund-website's footer: `https://lu.linkedin.com/company/hippocrate-sarl`)

## Important domain knowledge

- Hippocrate Sàrl is the **publisher/holding company**; **Sigmund** is its SaaS product, marketed on its own separate site (`sigmund-website` repo, sigmund.lu). This site is the company's own corporate presence — team, contact, legal — not a product marketing site.
- Legal entity: Hippocrate Sàrl, RCS Luxembourg B282221, VAT LU35353830, registered office 11 rue des Aubépines, L-8052 Bertrange, Luxembourg. Director of publication: Sylvain Perez.
- Team: Sylvain, Franck, Guillaume — same three co-founders as on `sigmund-website`'s `equipe.html`, but with the shorter, more personal bios used on the original hippocrate.lu homepage (not the longer professional bios from sigmund.lu's team page).
- No cookie consent banner needed site-wide (only essential cookies are used) — matches the original site's behavior.

## What to watch out for

- The contact form's submission backend needs to be decided (Brevo form, mailto fallback, or another service) — see conversation history / ask before treating `contactus.html`'s form as production-ready.
- `odoo-mirror/` is a reference snapshot only, not linked from any live page — do not treat it as source of truth for current site behavior, only for original content/imagery.
- The Hippocrate logo's original source asset (downloaded from hippocrate.lu) is solid white with a transparent background, meant to sit over a dark hero image. `logo-hippocrate.svg` is a recolored copy (fill swapped to `--hp-primary`) so it's visible on the white navbar — no white variant is kept since nothing on the site currently needs it.
- No build step — push to `main` branch deploys to GitHub Pages automatically.
- `robots.txt` disallows `cookies.html` and `mentions-legales.html` — do not add other pages to the disallow list without reason.

## Before proposing a commit

Always verify these files are up to date before staging a commit:

- **`sitemap.xml`** — add any new indexable page. Do not add legal/cookie pages (they are `noindex`). Bump `<lastmod>` to today's date for any existing indexable page whose rendered content changed.
- **`robots.txt`** — check that no new indexable page is accidentally disallowed, and that no new legal/policy page needs to be added to the disallow list.
- **`llms.txt`** — update if the company description, product links, or site structure changed.
- **`README.md`** — update the pages table if a new page was added or removed.
