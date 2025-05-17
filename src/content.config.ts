import { file, glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./essays" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const tags = defineCollection({
  loader: file("./tags/tags.json"),
  schema: z.object({
    id: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog, tags };
