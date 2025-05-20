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
// const book = createCollection('./src/content/book')
const book = defineCollection({
  loader: glob({ base: './src/content/book', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    bookTitle: z.string().optional(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
})
const tutorial = defineCollection({
  loader: glob({ base: './src/content/tutorial', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    bookTitle: z.string().optional(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
})

export const collections = { blog, book, tutorial }
