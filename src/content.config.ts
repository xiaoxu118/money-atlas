import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const topics = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/topics' }),
  schema: z.object({
    id: z.string().regex(/^[a-z][a-z0-9-]+$/),
    slug: z.string().regex(/^[a-z][a-z0-9-]+$/),
    title: z.string(),
    navTitle: z.string().min(2).max(12),
    module: z.enum(['macro', 'investing']),
    group: z.string(),
    displayOrder: z.number().int(),
    summary: z.string(),
    concepts: z.array(z.string()).default([]),
    status: z.enum(['draft', 'published']),
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url() }))
      .min(1),
  }),
});
export const collections = { topics };
