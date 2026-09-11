import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { locales, type Locale } from '../i18n/locales';
import { getHomePath, getSectionPath, getStoryPath } from '../i18n/paths';
import { sectionIds } from '../i18n/sections';

// Hand-rolled instead of @astrojs/sitemap: this site's i18n routing is
// hand-rolled too (see repo CLAUDE.md), and a story doesn't necessarily
// exist in all 3 locales — the stock integration's i18n option assumes
// Astro's built-in i18n config, which this project doesn't use. Building
// it directly off the same path helpers (src/i18n/paths.ts) and content
// collection everything else uses keeps it guaranteed correct.

interface Alternate {
  hreflang: string;
  href: string;
}

interface UrlEntry {
  loc: string;
  alternates: Alternate[];
  lastmod: string;
}

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('astro.config.mjs `site` must be set to generate a sitemap.');
  }

  const abs = (path: string) => new URL(path, site).toString();
  const today = new Date().toISOString().slice(0, 10);
  const entries: UrlEntry[] = [];

  // Homepage — exists in every locale.
  const homeAlternates: Alternate[] = [
    ...locales.map((l) => ({ hreflang: l, href: abs(getHomePath(l)) })),
    { hreflang: 'x-default', href: abs(getHomePath('en')) },
  ];
  for (const l of locales) {
    entries.push({ loc: abs(getHomePath(l)), alternates: homeAlternates, lastmod: today });
  }

  // Section pages — sections are a fixed taxonomy, present in every locale.
  for (const id of sectionIds) {
    const alternates: Alternate[] = [
      ...locales.map((l) => ({ hreflang: l, href: abs(getSectionPath(l, id)) })),
      { hreflang: 'x-default', href: abs(getSectionPath('en', id)) },
    ];
    for (const l of locales) {
      entries.push({ loc: abs(getSectionPath(l, id)), alternates, lastmod: today });
    }
  }

  // Story pages — grouped by slug, only across the locales that slug
  // actually has a translation in (a story need not exist in all 3).
  const stories = await getCollection('stories');
  const bySlug = new Map<string, { locale: Locale; date: Date }[]>();
  for (const entry of stories) {
    const locale = entry.id.split('/')[0] as Locale;
    const slug = entry.id.slice(locale.length + 1);
    const list = bySlug.get(slug) ?? [];
    list.push({ locale, date: entry.data.date });
    bySlug.set(slug, list);
  }
  for (const [slug, versions] of bySlug) {
    const alternates: Alternate[] = versions.map(({ locale }) => ({
      hreflang: locale,
      href: abs(getStoryPath(locale, slug)),
    }));
    if (versions.some((v) => v.locale === 'en')) {
      alternates.push({ hreflang: 'x-default', href: abs(getStoryPath('en', slug)) });
    }
    for (const { locale, date } of versions) {
      entries.push({
        loc: abs(getStoryPath(locale, slug)),
        alternates,
        lastmod: date.toISOString().slice(0, 10),
      });
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
${e.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`).join('\n')}
    <lastmod>${e.lastmod}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
