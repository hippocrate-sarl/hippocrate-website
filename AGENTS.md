# Hippocrate Website

Static marketing website for **www.hippocrate.lu** — the corporate site of **Hippocrate Sàrl** (Bertrange, Luxembourg), publisher of administrative-management software for medical and paramedical professions, including **Sigmund** (marketed separately at sigmund.lu, see the sibling `sigmund-website` repo).

Trilingual: French (default/primary) + English + German. The original pre-rebuild site was French only; English and German were added later, mirroring `sigmund-website`'s file-per-language architecture. See "Trilingual structure" below.

## Tech stack

- Plain HTML/CSS/JS — no build tool, no framework, no bundler
- **Bootstrap 5.3** (CDN) — layout and components
- **Bootstrap Icons 1.11** (CDN) — icons via `<i class="bi bi-*">`
- **flag-icons 7.2** (CDN) — language switcher flags (`fi-fr`/`fi-gb`/`fi-de`) via `<span class="fi fi-*">`
- **Google Fonts** — Inter (300/400/500/600/700/800)
- **Jekyll** (GitHub Pages default) — used only for the `jekyll-redirect-from` plugin (`_config.yml`), so legacy/short URLs (`/legal`, `/cookies`, `/contactus`) still resolve after pages were renamed to French slugs

## File structure

```
index.html                Homepage (FR)
nos-solutions.html         Solutions page (FR) — presents Sigmund, links out to sigmund.lu (no CNS/métier detail — that's sigmund.lu's job)
equipe.html                Team page (FR) — founders' bios + LinkedIn, Person schema
nous-contacter.html        Contact page (FR)
politique-en-matiere-de-cookies.html  Cookie policy (FR, noindex)
politique-relative-aux-donnees-personnelles.html  Personal data policy (FR, noindex) — contact form data processed via Brevo
mentions-legales.html      Legal notice (FR, noindex)

en/index.html              Homepage (EN)
en/our-solutions.html      Solutions page (EN)
en/team.html               Team page (EN) — no navbar entry, same as equipe.html
en/contact-us.html         Contact page (EN)
en/cookie-policy.html      Cookie policy (EN, noindex)
en/privacy-policy.html     Personal data policy (EN, noindex)
en/legal-notice.html       Legal notice (EN, noindex)

de/index.html              Homepage (DE)
de/unsere-loesungen.html   Solutions page (DE)
de/team.html               Team page (DE) — no navbar entry, same as equipe.html
de/kontakt.html            Contact page (DE)
de/cookie-richtlinie.html  Cookie policy (DE, noindex)
de/datenschutz.html        Personal data policy (DE, noindex)
de/impressum.html          Legal notice (DE, noindex)

assets/css/hippocrate.css  All custom styles (shared by all pages, all languages)
assets/js/main.js          Active nav-link highlight
assets/js/contact.js       Contact form validation/submit (data-attribute driven — no hardcoded language strings)
assets/js/legal-toc.js     Sidebar TOC active-link highlight + mobile accordion (privacy-policy pages only)
assets/images/             All images (webp + svg), shared by FR/EN/DE pages via relative paths

favicon.ico                black icon, transparent background — light-theme browser tabs
favicon-white.ico           white icon, transparent background — dark-theme browser tabs (prefers-color-scheme)
en/favicon.ico              identical copy of the root favicon.ico
en/favicon-white.ico        identical copy of the root favicon-white.ico
de/favicon.ico              identical copy of the root favicon.ico
de/favicon-white.ico        identical copy of the root favicon-white.ico
_config.yml                Jekyll config — enables jekyll-redirect-from only
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
- **`.hp-lang-switch`** — FR/EN/DE language switcher (flag icons in the navbar, `Français | English (UK) | Deutsch` text links in the footer bottom row), mirrors sigmund-website's `.sg-lang-switch` exactly
- **`.btn-hp-primary`** / **`.btn-hp-outline`** — pill-shaped CTA buttons (primary = main action; outline = secondary, e.g. "Découvrir Sigmund" next to the hero's primary CTA)
- **`.hp-benefit-list`** — checkmark-style benefit list (`nos-solutions.html`)
- **`.hp-hero`** — two-column gradient hero (soft `--hp-hero-from`→`--hp-hero-to`), colored bold H1, `.hp-hero-facts` icon row, `.hp-hero-img` on the right (rounded, shadowed)
- **`.hp-section-title`** — uppercase, letter-spaced, matches sigmund's `.sg-section-title` exactly in treatment
- **`.hp-cta-section`** / **`.hp-cta-title`** / **`.hp-cta-lead`** — gradient CTA band (mid-page "Contactez-nous" banner), same pattern as sigmund's CTA sections
- **`.hp-team-card`** — team member photo + name + `.role` tag + bio + `.btn-linkedin`, hover-lift
- **`.hp-callout-img`** — Sigmund product callout image (rounded, shadowed)
- **`.hp-callout-eyebrow`** / **`.hp-callout-heading`** / **`.hp-callout-logo`** — Sigmund callout label + icon + title row (icon is transparent-background, `#303030` glyph, 56px, no badge/background)
- **`.hp-page-intro`** / **`.hp-page-intro-lg`** — page intro paragraph; `-lg` variant is the bigger bold "lead statement" style (`nos-solutions.html`, `nous-contacter.html`)
- **`.hp-roadmap-note`** — centered bordered card with an icon, used for "more coming soon"-style notes
- **`.hp-legal-header`** — gradient page header with icon (legal, cookies, contact, privacy)
- **`.hp-toc`** / **`.hp-toc-links`** — "on this page" chip links (legal notice, cookie policy)
- **`.hp-sidebar-toc`** / **`.hp-mob-toc-btn`** / **`.hp-mob-toc-body`** — sticky left sidebar TOC (desktop) + collapsible accordion TOC (mobile), used on the privacy-policy pages only; active-section highlighting is handled by `assets/js/legal-toc.js`
- **`.hp-info-card`** — labeled info block (legal notice)
- **`.hp-provider-card`** — sub-processor info block (privacy policy, e.g. the Brevo card)
- **`.hp-update-badge`** — "last updated" pill (privacy policy)
- **`.hp-alert-note`** — left-accent-border postal address block (privacy policy)
- **`.hp-translation-note`** / **`.hp-legal-note`** — small helper text styles for legal pages (e.g. the "only the French version is legally binding" note on `en/privacy-policy.html` and `de/datenschutz.html`)
- **`.hp-legal-content`** — typography for legal/cookie page bodies
- **`.hp-contact-form`** / **`.hp-form-panel`** / **`.hp-field-error`** / **`.hp-honeypot`** — contact page form
- **`.hp-footer`** — dark footer (`#1B1319`, the brand's near-black)

## Navbar

3 items on all pages: `Accueil | Nos solutions | Contactez-nous` (FR) / `Home | Our solutions | Contact us` (EN) / `Startseite | Unsere Lösungen | Kontaktieren Sie uns` (DE). `equipe.html`/`en/team.html`/`de/team.html` and legal/cookie pages are footer-only, not in the navbar — same precedent as sigmund-website (its own `equipe.html` isn't in its navbar either). The language switcher (flags) sits at the right of the navbar, next to the phone numbers.

## Footer structure

Three columns on all pages:
1. **Liens utiles / Useful links / Nützliche Links** — Notre équipe / Our team / Unser Team, Cookies / Cookie Policy / Cookie-Richtlinie, Politique relative aux données personnelles / Privacy Policy / Datenschutzerklärung, Mentions légales / Legal notice / Impressum, then a **Ressources / Resources / Ressourcen** sub-heading (same column) with Nos solutions / Our solutions / Unsere Lösungen, Sigmund (external, sigmund.lu)
2. **À propos d'Hippocrate / About Hippocrate / Über Hippocrate** — company registration paragraph (RCS number, registered office)
3. **Contactez-nous / Contact us / Kontaktieren Sie uns** — email, two phone numbers, LinkedIn (company page, shared with sigmund-website's footer: `https://lu.linkedin.com/company/hippocrate-sarl`)

The footer's bottom row (`d-flex justify-content-between`) has the copyright line on the left and the text-based language switcher (`Français | English (UK) | Deutsch`) on the right.

## Trilingual structure

Every page has an FR, an EN and a DE counterpart. Language switcher in navbar and footer links between them (flags in the navbar, text in the footer).

FR pages: assets at `assets/`, links relative from root (e.g. `href="en/index.html"`, `href="de/index.html"`).
EN pages: assets at `../assets/`, links relative from `en/` (e.g. `href="../index.html"`, `href="../de/index.html"`).
DE pages: assets at `../assets/`, links relative from `de/` (e.g. `href="../index.html"`, `href="../en/index.html"`).

EN/DE filenames are translations, not transliterations, of the FR names (e.g. `en/our-solutions.html`/`de/unsere-loesungen.html`, not `en/nos-solutions.html`/`de/nos-solutions.html`; `en/team.html`/`de/team.html`, not `en/equipe.html`/`de/equipe.html`; `de/kontakt.html`, not `de/nous-contacter.html`) — see the FR | EN | DE table in `README.md` for the full page mapping. Every page declares reciprocal `<link rel="alternate" hreflang="fr|en|de">` tags pointing at all three versions.

DE legal-page filenames reuse sigmund-website's own established German slugs exactly (`impressum.html`, `datenschutz.html`, `cookie-richtlinie.html`, `team.html`) since they're the same company and the same legal facts — only `unsere-loesungen.html` and `kontakt.html` are Hippocrate-specific (sigmund-website has no equivalent generic "solutions" or contact-form page).

Contact form field `name` attributes (`NOM`, `TELEPHONE`, `EMAIL`, `SUJET`, `MESSAGE`) stay identical across all three languages — they're the Brevo backend contract, not UI text. Only labels/placeholders/`data-error-*` attributes are translated; the hidden `locale` field is `"fr"`, `"en"` or `"de"` accordingly. `assets/js/contact.js` is shared unmodified across all language versions. All three contact forms currently point at the same Brevo form action URL.

`en/privacy-policy.html` and `de/datenschutz.html` each carry a `.hp-translation-note` stating the French version is the legally binding one — keep this note if the policy is ever restructured.

## Important domain knowledge

- Hippocrate Sàrl is the **publisher/holding company**; **Sigmund** is its SaaS product, marketed on its own separate site (`sigmund-website` repo, sigmund.lu). This site is the company's own corporate presence — team, contact, legal — not a product marketing site.
- Legal entity: Hippocrate Sàrl, RCS Luxembourg B282221, VAT LU35353830, registered office 11 rue des Aubépines, L-8052 Bertrange, Luxembourg (confirmed correct — do not change to the "rue des Mérovingiens" address an SEO audit once flagged as a possible discrepancy). Director of publication: Sylvain Perez.
- Team: Sylvain Perez, Guillaume Desrat, Franck Amouyal. `index.html`'s team cards are identical in content to `equipe.html`'s (same bios, LinkedIn links) — keep them in sync if either changes, in all three languages (`en/index.html`/`en/team.html`, `de/index.html`/`de/team.html` too). Only `equipe.html`/`en/team.html`/`de/team.html` additionally carry the Person schema.
- No cookie consent banner needed site-wide (only essential cookies are used) — matches the original site's behavior.
- **Editor positioning (SEO golden rule):** anything that sells the product goes on sigmund.lu; anything about the company goes on hippocrate.lu. `nos-solutions.html` deliberately stays short and non-technical, always deferring to sigmund.lu for CNS/métier detail — don't let it grow into a duplicate of sigmund.lu's content, that would cannibalize its ranking.

## What to watch out for

- The contact form's submission backend needs to be decided (Brevo form, mailto fallback, or another service) — see conversation history / ask before treating `nous-contacter.html`'s form as production-ready.
- The Hippocrate logo's original source asset (downloaded from hippocrate.lu) is solid white with a transparent background, meant to sit over a dark hero image. `logo-hippocrate.svg` is a recolored copy (fill swapped to `--hp-primary`) so it's visible on the white navbar — no white variant is kept since nothing on the site currently needs it.
- `favicon.ico` / `favicon-white.ico`: the original favicon had an opaque white square background; both variants now have a transparent background instead (built via luminance-as-alpha, since the source icon is pure grayscale — black icon on white). Every page links both via `media="(prefers-color-scheme: light|dark)"` so the icon stays visible against both light and dark browser tab bars. Browser support for favicon-switching via that media query is inconsistent across browsers — this is a best-effort progressive enhancement, not a guarantee.
- Both favicon files also had the icon artwork rescaled to fill ~90-95% of the canvas at every embedded resolution (16 to 256px) — the original had inconsistent, sometimes as low as ~59% at 256px, leaving a lot of dead margin and making the icon look small/faint in tabs.
- `favicon.ico`/`favicon-white.ico` are duplicated at the repo root and inside `en/` and `de/` (identical bytes). EN/DE pages' `<link rel="icon">` tags already point up via `../favicon.ico`, which is all real browsers need — the `en/`/`de/` copies exist only so a page-relative `favicon.ico` lookup (some crawlers/audit tools do this instead of following `<link>` tags, or instead of the browser's own root-relative fallback convention) also resolves. If you regenerate the favicon, update all three copies.
- No build step — push to `main` branch deploys to GitHub Pages automatically.
- `robots.txt` disallows the noindex legal/cookie/privacy pages in all three languages (`mentions-legales.html`/`en/legal-notice.html`/`de/impressum.html`, `politique-en-matiere-de-cookies.html`/`en/cookie-policy.html`/`de/cookie-richtlinie.html`, `politique-relative-aux-donnees-personnelles.html`/`en/privacy-policy.html`/`de/datenschutz.html`) — do not add other pages to the disallow list without reason.
- Cross-site entity consistency with `sigmund-website` (same company name/description everywhere, sigmund.lu's schema declaring Hippocrate as `parentOrganization`, footer cross-links both ways) is a known open item from the July 2026 SEO audit — not yet done, touches the sibling repo.
- Any FR content change (copy, layout, new section) needs its EN and DE counterparts updated too — check the FR | EN | DE table in `README.md` to find the matching files. Don't let the languages drift.

## Before proposing a commit

Always verify these files are up to date before staging a commit:

- **`sitemap.xml`** — add any new indexable page, in all three languages, each with reciprocal `xhtml:link hreflang` alternates. Do not add legal/cookie pages (they are `noindex`). Bump `<lastmod>` to today's date for any existing indexable page whose rendered content changed — across all languages if the change applies to all of them.
- **`robots.txt`** — check that no new indexable page is accidentally disallowed, and that no new legal/policy page (any language) needs to be added to the disallow list.
- **`llms.txt`** — update if the company description, product links, or site structure changed (it's a single trilingual FR/EN/DE file, not split per language).
- **`README.md`** — update the FR | EN | DE pages table if a page was added or removed.
