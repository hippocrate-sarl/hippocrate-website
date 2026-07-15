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
nos-solutions.html         Solutions page — presents Sigmund, links out to sigmund.lu (no CNS/métier detail — that's sigmund.lu's job)
equipe.html                Team page — founders' bios + LinkedIn, Person schema
contactus.html             Contact page
cookies.html               Cookie policy (noindex)
mentions-legales.html      Legal notice (noindex)

assets/css/hippocrate.css  All custom styles (shared by all pages)
assets/js/main.js          Active nav-link highlight
assets/images/             All images (webp + svg)

favicon.ico                black icon, transparent background — light-theme browser tabs
favicon-white.ico           white icon, transparent background — dark-theme browser tabs (prefers-color-scheme)
robots.txt
sitemap.xml
llms.txt
CNAME
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

All custom classes use the `hp-` prefix. **No inline styles, no `<style>` blocks:** never use `style="..."` attributes or `<style>` blocks when creating or modifying pages. All styles — including page-specific ones — must go in `hippocrate.css`.

## Key components (hippocrate.css)

Deliberately mirrors sigmund-website's design language (two-column gradient hero, uppercase tracked section titles, gradient CTA band, hover-lift cards) rather than the original Odoo site's photo-cover treatment — recolored to Hippocrate's own brand color throughout.

- **`.hp-navbar`** — sticky top navbar; active link gets `class="nav-link active"`
- **`.btn-hp-primary`** / **`.btn-hp-outline`** — pill-shaped CTA buttons (primary = main action; outline = secondary, e.g. "Découvrir Sigmund" next to the hero's primary CTA)
- **`.hp-benefit-list`** — checkmark-style benefit list (`nos-solutions.html`)
- **`.hp-hero`** — two-column gradient hero (soft `--hp-hero-from`→`--hp-hero-to`), colored bold H1, `.hp-hero-facts` icon row, `.hp-hero-img` on the right (rounded, shadowed)
- **`.hp-section-title`** — uppercase, letter-spaced, matches sigmund's `.sg-section-title` exactly in treatment
- **`.hp-cta-section`** / **`.hp-cta-title`** / **`.hp-cta-lead`** — gradient CTA band (mid-page "Contactez-nous" banner), same pattern as sigmund's CTA sections
- **`.hp-team-card`** — team member photo + name + `.role` tag + bio + `.btn-linkedin`, hover-lift
- **`.hp-callout-img`** / **`.hp-callout-logo`** — Sigmund product callout section
- **`.hp-legal-header`** — gradient page header with icon (legal, cookies, contact)
- **`.hp-toc`** / **`.hp-toc-links`** — "on this page" chip links (legal notice)
- **`.hp-info-card`** — labeled info block (legal notice)
- **`.hp-legal-content`** — typography for legal/cookie page bodies
- **`.hp-contact-form`** / **`.hp-form-panel`** / **`.hp-field-error`** / **`.hp-honeypot`** — contact page form
- **`.hp-footer`** — dark footer (`#1B1319`, the brand's near-black)

## Navbar

3 items on all pages: `Accueil | Nos solutions | Contactez-nous`. `equipe.html` and legal/cookie pages are footer-only, not in the navbar — same precedent as sigmund-website (its own `equipe.html` isn't in its navbar either).

## Footer structure

Three columns on all pages:
1. **Liens utiles** — Page d'accueil, Nos solutions, Notre équipe, Sigmund (external, sigmund.lu), Cookies, Mentions légales
2. **À propos d'Hippocrate** — company registration paragraph (RCS number, registered office)
3. **Contactez-nous** — email, two phone numbers, LinkedIn (company page, shared with sigmund-website's footer: `https://lu.linkedin.com/company/hippocrate-sarl`)

## Important domain knowledge

- Hippocrate Sàrl is the **publisher/holding company**; **Sigmund** is its SaaS product, marketed on its own separate site (`sigmund-website` repo, sigmund.lu). This site is the company's own corporate presence — team, contact, legal — not a product marketing site.
- Legal entity: Hippocrate Sàrl, RCS Luxembourg B282221, VAT LU35353830, registered office 11 rue des Aubépines, L-8052 Bertrange, Luxembourg (confirmed correct — do not change to the "rue des Mérovingiens" address an SEO audit once flagged as a possible discrepancy). Director of publication: Sylvain Perez.
- Team: Sylvain, Franck, Guillaume. `index.html` uses their shorter, more personal bios (original hippocrate.lu homepage tone); `equipe.html` uses the fuller professional bios + LinkedIn links + Person schema, matching `sigmund-website`'s own `equipe.html` content.
- No cookie consent banner needed site-wide (only essential cookies are used) — matches the original site's behavior.
- **Editor positioning (SEO golden rule):** anything that sells the product goes on sigmund.lu; anything about the company goes on hippocrate.lu. `nos-solutions.html` deliberately stays short and non-technical, always deferring to sigmund.lu for CNS/métier detail — don't let it grow into a duplicate of sigmund.lu's content, that would cannibalize its ranking.

## What to watch out for

- The contact form's submission backend needs to be decided (Brevo form, mailto fallback, or another service) — see conversation history / ask before treating `contactus.html`'s form as production-ready.
- The Hippocrate logo's original source asset (downloaded from hippocrate.lu) is solid white with a transparent background, meant to sit over a dark hero image. `logo-hippocrate.svg` is a recolored copy (fill swapped to `--hp-primary`) so it's visible on the white navbar — no white variant is kept since nothing on the site currently needs it.
- `favicon.ico` / `favicon-white.ico`: the original favicon had an opaque white square background; both variants now have a transparent background instead (built via luminance-as-alpha, since the source icon is pure grayscale — black icon on white). Every page links both via `media="(prefers-color-scheme: light|dark)"` so the icon stays visible against both light and dark browser tab bars. Browser support for favicon-switching via that media query is inconsistent across browsers — this is a best-effort progressive enhancement, not a guarantee.
- No build step — push to `main` branch deploys to GitHub Pages automatically.
- `robots.txt` disallows `cookies.html` and `mentions-legales.html` — do not add other pages to the disallow list without reason.
- Cross-site entity consistency with `sigmund-website` (same company name/description everywhere, sigmund.lu's schema declaring Hippocrate as `parentOrganization`, footer cross-links both ways) is a known open item from the July 2026 SEO audit — not yet done, touches the sibling repo.

## Before proposing a commit

Always verify these files are up to date before staging a commit:

- **`sitemap.xml`** — add any new indexable page. Do not add legal/cookie pages (they are `noindex`). Bump `<lastmod>` to today's date for any existing indexable page whose rendered content changed.
- **`robots.txt`** — check that no new indexable page is accidentally disallowed, and that no new legal/policy page needs to be added to the disallow list.
- **`llms.txt`** — update if the company description, product links, or site structure changed.
- **`README.md`** — update the pages table if a new page was added or removed.
