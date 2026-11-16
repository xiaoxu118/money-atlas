import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const topics = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/topics' }),
  schema: z.object({
    id: z.string().regex(/^[a-z][a-z0-9-]+$/),
    slug: z.string().regex(/^[a-z][a-z0-9-]+$/),
    title: z.string(),
    module: z.enum(['macro', 'investing']),
    displayOrder: z.number().int(),
    summary: z.string(),
    concepts: z.array(z.string()).default([]),
    updatedAt: z.coerce.date(),
    status: z.enum(['draft', 'published']),
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url() }))
      .min(1),
  }),
});
export const collections = { topics };
