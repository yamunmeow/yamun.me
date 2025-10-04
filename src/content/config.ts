import { defineCollection, z } from 'astro:content';

// Add this line at the top
export const SITE_TITLE = 'Yamun Sharma - Anthropology & Education Research';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};