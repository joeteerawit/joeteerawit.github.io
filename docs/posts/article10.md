---
date: 2022-01-10
category:
  - CategoryA
  - CategoryB
tag:
  - tag C
  - tag D
---

# Article 10

## Heading 2

Here is the content.

### Heading 3

Here is the content.

```ts {1,7-9}
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```