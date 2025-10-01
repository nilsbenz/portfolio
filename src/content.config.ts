import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      icon: image(),
      description: z.string(),
      thumbnail: image(),
      featured: z.boolean(),
      ogImage: image(),
    }),
});

const films = defineCollection({
  loader: file("src/content/films.json"),
  schema: z.object({
    title: z.string(),
    seoDescription: z.string(),
    embed: z.string(),
    rewrite: z.string().optional(),
    aspectRatio: z.string().optional(),
  }),
});

export const collections = { projects, films };
