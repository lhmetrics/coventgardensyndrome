# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"Covent Garden Syndrome" — a personal journal of stories and photographs
about a house ("Home") full of vintage/eccentric objects, narrated in part
through a house mascot (a teddy bear). Manifesto/voice: whimsical, warm,
literary first-person essays, not a generic blog. The owner (Elena) writes
in Russian and sometimes supplies her own English/Spanish text directly —
treat her own wording as authoritative over any translation Claude drafts.
Published at **coventgardensyndrome.com** (domain on Cloudflare), built
with Astro, hosted on GitHub Pages (repo: `lhmetrics/coventgardensyndrome`).

## Commands

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

No test suite, linter, or formatter is configured.

**Node version:** requires Node 20.3+ or 22+. The Astro version is pinned
to `^5.18.2` deliberately — Astro 7 requires Node ≥22.12, but the local
machine runs Node 20.20.1 (a Node 22 install exists via Homebrew at
`/usr/local/Cellar/node@22` but isn't the linked/active `node`). Don't
bump the astro dependency to 7.x without checking the active Node version
first.

**npm cache permissions:** the global npm cache (`~/.npm`) has root-owned
files from a past `sudo npm` invocation, so a plain `npm install` fails
with `EACCES`. Pass a writable cache dir instead of fixing it globally,
e.g. `npm install --cache /tmp/some-writable-dir`, unless the user asks
to fix it permanently (`sudo chown -R $(whoami) ~/.npm`).

## Architecture

Static Astro site (no server, no client JS to speak of). The i18n layer is
hand-rolled, not Astro's built-in `i18n` routing config.

- **Languages:** English is the default and lives unprefixed at the root
  (`/`); Spanish and Russian are prefixed (`/es/`, `/ru/`). Which locale a
  page belongs to is a routing/file-layout decision, not a config option.
- **Shared view components carry the markup once:**
  [`HomeView.astro`](src/components/HomeView.astro) and
  [`StoryDetail.astro`](src/components/StoryDetail.astro) render a given
  `lang`. The actual routed pages are thin wrappers: `src/pages/index.astro`
  calls `<HomeView lang="en" />`, `src/pages/es/index.astro` calls
  `<HomeView lang="es" />`, etc. — same pattern for
  `src/pages/{,es/,ru/}stories/[slug].astro`. When changing the homepage or
  story-page layout/styles, edit the shared component, not the per-locale
  page files.
- **UI strings** (kicker, tagline, manifesto paragraphs, empty-state text,
  footer) live in [`src/i18n/ui.ts`](src/i18n/ui.ts), keyed by locale.
  Path-building helpers (`getHomePath`, `getStoryPath`) live in
  [`src/i18n/paths.ts`](src/i18n/paths.ts) — always use these instead of
  hand-writing `/es/...` strings, so locale prefixing stays in one place.
- **Content collection:** stories are markdown files under
  `src/content/stories/<lang>/<slug>.md` (schema in
  [`src/content.config.ts`](src/content.config.ts)). The language comes
  from which folder a file lives in — there is no `lang` frontmatter
  field. Each per-locale `[slug].astro` page filters the collection by
  `id.startsWith('<lang>/')` and strips that prefix to get the route slug.
  A story does not need to exist in all three languages; the language
  switcher ([`LangSwitcher.astro`](src/components/LangSwitcher.astro)) on a
  story page deep-links to that same slug's translation when it exists
  (checked at build time against the collection) and falls back to that
  locale's homepage only when the translation is missing. On section pages
  it always deep-links to the section (sections are a fixed taxonomy that
  exists in every locale, unlike stories).
- **Photos** go in `public/photos/`, referenced as absolute paths
  (`/photos/foo.jpg`) — both as a story's optional `cover` frontmatter
  field and inline in markdown body.
- **`TMP/`** (git-ignored, not published) is where the owner drops raw
  photos/text before they get turned into a story or the homepage hero
  image — check it when asked to "use the new photo from TMP" or similar.
- **Design tokens** live as CSS custom properties in
  [`Layout.astro`](src/layouts/Layout.astro)'s global `:root` (`--bg`,
  `--ink`, `--accent` gold, `--turquoise`, `--serif`/`--sans`/`--script`).
  The brand name is set in `--script` (currently `'Apple Chancery', ...`
  system-font cursive stack — a Google Fonts swap (Petit Formal Script)
  was tried and explicitly reverted, so don't re-suggest a web-font
  replacement for it without being asked).

## Deployment

Push to `main` → [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
(`withastro/action` + `actions/deploy-pages`) builds and publishes to
GitHub Pages automatically. No PR review gate — this repo is solo-owned,
changes normally go straight to `main`.

GitHub Pages itself (custom domain, HTTPS enforcement) is configured via
the API, not a repo file — there's no Pages UI setting checked into
version control:

```sh
gh api -X PUT repos/lhmetrics/coventgardensyndrome/pages -f "cname=coventgardensyndrome.com"
gh api -X PUT repos/lhmetrics/coventgardensyndrome/pages -F "https_enforced=true"   # -F, not -f — must be a real boolean
```

`public/CNAME` (committed) only affects classic branch-based Pages builds;
this repo uses the Actions build type, so the custom domain must be set
via that API call (or the Settings → Pages UI) — it does **not** get
picked up automatically from the `CNAME` file in the built artifact.

DNS for `coventgardensyndrome.com` is on Cloudflare and already configured
(4 `A` records to GitHub Pages' IPs `185.199.108/109/110/111.153`, `CNAME
www` → `lhmetrics.github.io`, proxy status **DNS only** — GitHub needs to
terminate TLS itself). Full record table is in the README if it ever
needs re-creating.

**No Cloudflare API/MCP access is configured in this environment** — DNS
changes there need the owner to do them manually in the dashboard.

## Content editor (Sveltia CMS)

`public/admin/index.html` + `public/admin/config.yml` set up
[Sveltia CMS](https://github.com/sveltia/sveltia-cms) (an actively
maintained, Decap-CMS-compatible drop-in — Decap itself has unpatched
known vulnerabilities as of 2026, don't switch back to it) as a
form-based `/admin/` editor, so a non-technical collaborator (Elena's
spouse) can add/edit stories and photos from a browser and have it commit
straight to `main` under their own GitHub account — no terminal, no git.
The config defines one folder collection per locale (`stories_ru`,
`stories_en`, `stories_es`), matching the `src/content/stories/<lang>/`
layout; it does **not** cover the homepage manifesto/UI copy
(`src/i18n/ui.ts`) or design changes — those still go through Claude Code.

This needs two pieces of external, one-time setup that live outside the
repo (only recreate if the login flow breaks):

1. A **GitHub OAuth App** (github.com/settings/developers, owned by the
   `lhmetrics` account), with its callback URL pointing at
   `https://cms-auth.coventgardensyndrome.com/callback`.
2. A **Cloudflare Worker** running an OAuth proxy (e.g.
   [`sveltia/sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth)),
   with the OAuth App's client ID/secret set as Worker secrets, and a
   custom domain `cms-auth.coventgardensyndrome.com` attached to it (DNS
   for this is handled automatically by Cloudflare once that custom
   domain is added in the Worker's settings — no manual DNS record needed,
   unlike the apex/`www` records for the main site).

Repo access for editors is a plain GitHub collaborator invite
(`gh api -X PUT repos/lhmetrics/coventgardensyndrome/collaborators/<user> -f "permission=push"`),
not tied to the CMS setup itself.
