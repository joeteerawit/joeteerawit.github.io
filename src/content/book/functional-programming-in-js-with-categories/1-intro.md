---
title: 'intro'
description: 'intro'
pubDate: 'Feb 19 2025'
heroImage: '/2025/3a913882-55a4-4629-9ef0-08a299843dc6.jpg'
---
| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is | left-aligned  | $1600 |
| col 2 is |   centered    |   $12 |
| col 3 is | right-aligned |    $1 |

```javascript
export const sortBooksByDate = (
  books: BookCollection[],
  order: 'asc' | 'desc' = 'desc'
): BookCollection[] => {
  return [...books].sort((a, b) => {
    const dateA = a.pubDate instanceof Date ? a.pubDate : new Date(a.pubDate)
    const dateB = b.pubDate instanceof Date ? b.pubDate : new Date(b.pubDate)

    return order === 'asc'
      ? dateA.getTime() - dateB.getTime()
      : dateB.getTime() - dateA.getTime()
  })
}
```