// @ts-check
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import rehypeMermaid from 'rehype-mermaid'

import { transformerMetaHighlight, transformerNotationDiff, transformerNotationFocus } from '@shikijs/transformers'
import { defineConfig } from 'astro/config'

// https://astro.build/config
// https://docs.astro.build/en/guides/styling/#markdown-styling
export default defineConfig({
  site: 'https://www.joewalker.xzy',
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid', 'math'],
    },
    rehypePlugins: [rehypeMermaid],
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
      transformers: [
        transformerMetaHighlight(),
        transformerNotationDiff(),
        transformerNotationFocus(),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // This is the key part that enables CSS inlining
      cssCodeSplit: false,
      // Force inlining of CSS for all chunks
      assetsInlineLimit: 100000000,
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
})
