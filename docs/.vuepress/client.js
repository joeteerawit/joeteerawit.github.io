import { defineClientConfig } from 'vuepress/client'
import Article from './layouts/Article.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'
import DevOps from './layouts/DevOps.vue'
import HomeLayout from './layouts/HomeLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import Programming from './layouts/Programming.vue'

import './styles/index.css';

export default defineClientConfig({
  // we provide some blog layouts
  layouts: {
    DevOps,
    HomeLayout,
    MainLayout,
    Programming,
    Article,
    Category,
    Tag,
    Timeline,
  },
})
