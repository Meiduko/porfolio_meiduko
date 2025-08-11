import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";
import { TECHENUM } from "@/utils/select_icon"

const projects = defineCollection({
  loader: glob({pattern: '**/content/projects/*.md'}),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    thumbnailPath: z.string(),
    technologies: z.array(z.enum(TECHENUM)),
  })
})

export const collections = { projects }