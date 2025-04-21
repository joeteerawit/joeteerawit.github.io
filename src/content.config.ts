import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const createCollection = (basePath: string) => {
  return defineCollection({
    loader: glob({ base: basePath, pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      draft: z.boolean().optional(),
    }),
  })
}

const blog = createCollection('./src/content/blog')
const book = createCollection('./src/content/book')
const tutorial = createCollection('./src/content/tutorial')

export const collections = { blog, book, tutorial }
