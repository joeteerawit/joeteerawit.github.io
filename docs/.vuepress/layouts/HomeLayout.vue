<template>
  <MainLayout>
    <ContentCategories category="Programming" text-color="hover:text-blue-400" tag-bg-color="bg-blue-400" />
    <ContentCategories category="Liftstyle" text-color="hover:text-red-400" tag-bg-color="bg-red-400" />
  </MainLayout>
</template>

<script setup>
import ContentCategories from '../components/ContentCategories.vue'
import MainLayout from './MainLayout.vue'
</script>