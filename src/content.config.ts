import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { sectionIds } from './i18n/sections';

const stories = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/stories',
    // Story filenames ARE the URL slug (lowercase-kebab-case, derived from
    // the title, e.g. "the-bear-who-knows-too-much.md" — see project memory
    // "story-slug-convention"). Use the filename as-is (still prefixed by
    // its locale folder, e.g. "en/the-bear-who-knows-too-much") instead of
    // Astro's default github-slugger id generation, so renaming a file is
    // guaranteed to produce exactly the slug it's named, with no surprise
    // rewriting.
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Short teaser shown on the homepage card.
    excerpt: z.string().optional(),
    // Path to a cover photo under /public, e.g. "/photos/example.jpg".
    // Leave unset to fall back to a plain placeholder tile.
    cover: z.string().optional(),
    // Which of the site's recurring sections (src/i18n/sections.ts) this
    // story belongs to. Optional and gradual by design — sections fill in
    // over time, and older/miscellaneous stories may stay unsectioned.
    section: z.enum(sectionIds).optional(),
    // Optional swipeable photo gallery, rendered at the end of the post
    // (src/components/Gallery.astro) — a reusable block for posts with a
    // handful of extra photos that don't need individual placement in the
    // body text. `alt` is per-locale like everything else in this file.
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = { stories };
