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

// const blog = defineCollection({
//   // Load Markdown and MDX files in the `src/content/blog/` directory.
//   loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
//   // Type-check frontmatter using a schema
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     // Transform string to Date object
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//     heroImage: z.string().optional(),
//     draft: z.boolean().optional(),
//   }),
// })

export const collections = { blog, book, tutorial }
