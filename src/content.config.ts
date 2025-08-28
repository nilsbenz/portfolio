import { glob } from "astro/loaders";
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
    }),
});

export const collections = { projects };
