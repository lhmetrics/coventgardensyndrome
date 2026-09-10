# Covent Garden Syndrome

A personal journal of stories and photographs, built with [Astro](https://astro.build)
and published on GitHub Pages at [coventgardensyndrome.com](https://coventgardensyndrome.com).

## Languages

The site is in English by default, with Spanish and Russian available via
the language switcher in the top-right corner (`/es/`, `/ru/`). UI text
lives in [`src/i18n/ui.ts`](src/i18n/ui.ts).

## Adding a story

1. Add a markdown file under `src/content/stories/en/`, e.g.
   `src/content/stories/en/my-story.md`, with frontmatter:

   ```md
   ---
   title: "Story title"
   date: 2026-09-10
   excerpt: "One line shown on the homepage card."
   cover: "/photos/my-story-cover.jpg" # optional
   ---

   The story text goes here. Standard markdown, including `## headings`
   and `![](/photos/another.jpg)` images.
   ```

   The language is decided by the folder (`en/`, `es/`, `ru/`), not by
   anything in the frontmatter. To publish a Spanish or Russian version of
   the same story, add a file with the same slug under
   `src/content/stories/es/` or `src/content/stories/ru/` — a story only
   needs to exist in the languages it's actually translated into.

2. Put any photos it uses in `public/photos/`.
3. Commit and push to `main` — the site rebuilds and deploys automatically.

The `TMP/` folder (untracked, see its own README) is just a local scratch
space for dropping raw photos/text before they're turned into a story.

## Local development

Requires Node.js 20.3+ or 22+.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages.

One-time setup in the GitHub repo: **Settings → Pages → Build and deployment
→ Source: GitHub Actions**.

### Custom domain (Cloudflare DNS)

The domain `coventgardensyndrome.com` is registered on Cloudflare. The
`public/CNAME` file tells GitHub Pages to serve the site on that domain; on
the Cloudflare side, add these DNS records (proxy status: **DNS only**, not
proxied — GitHub Pages needs to terminate TLS itself for the custom domain
to verify and get its certificate):

| Type  | Name  | Content                     |
|-------|-------|------------------------------|
| A     | @     | 185.199.108.153              |
| A     | @     | 185.199.109.153               |
| A     | @     | 185.199.110.153               |
| A     | @     | 185.199.111.153               |
| CNAME | www   | `lhmetrics.github.io`          |

Then in the GitHub repo **Settings → Pages**, set the custom domain to
`coventgardensyndrome.com` and enable **Enforce HTTPS** once the certificate
is issued (can take a few minutes to a few hours after DNS propagates).
