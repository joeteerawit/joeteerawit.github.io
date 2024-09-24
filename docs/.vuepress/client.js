import { defineClientConfig } from 'vuepress/client'
import Article from './layouts/Article.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'
import HomeLayout from './layouts/HomeLayout.vue'

export default defineClientConfig({
  // we provide some blog layouts
  layouts: {
    HomeLayout,
    Article,
    Category,
    Tag,
    Timeline,
  },
})
