// @ts-check
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://joewalker.xzy',
  integrations: [mdx(), sitemap()],
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
