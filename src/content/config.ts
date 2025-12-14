import { defineCollection, z } from "astro:content";

const diary = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(), // e.g. "/uploads/cover.jpg"
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { diary, projects };
