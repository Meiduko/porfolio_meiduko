import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";
import { TECHENUM } from "@/utils/select_icon"

const projects = defineCollection({
  loader: glob({pattern: '**/content/projects/*.md'}),
  schema: z.object({
    name: z.string(),
    description: z.object({
      es: z.string(),
      en: z.string(),
      gl: z.string()
    }),
    thumbnailPath: z.string(),
    technologies: z.array(z.enum(TECHENUM)),
    Url: z.string().url().optional(),
    repo: z.string().url()
  })
})

export const collections = { projects }