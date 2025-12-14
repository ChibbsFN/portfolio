// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";

const diary = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/diary" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.object({
      url: z.string().optional(),
      alt: z.string().optional()
    }).optional()
  }),
});

export const collections = { diary };
