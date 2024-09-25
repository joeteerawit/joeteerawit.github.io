<template>
  <MainLayout>
    <ArticleList :items="articles.items" />
  </MainLayout>
</template>

<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ArticleList from '../components/ArticleList.vue'
import MainLayout from './MainLayout.vue';

const articles = useBlogType('timeline')
</script>