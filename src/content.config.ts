import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Short teaser shown on the homepage card.
    excerpt: z.string().optional(),
    // Path to a cover photo under /public, e.g. "/photos/example.jpg".
    // Leave unset to fall back to a plain placeholder tile.
    cover: z.string().optional(),
  }),
});

export const collections = { stories };
