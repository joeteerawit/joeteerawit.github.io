/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/.vuepress/**/*.vue',
    './docs/**/*.md',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
