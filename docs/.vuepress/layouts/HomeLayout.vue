<template>
  <div>
    <div class="md:pb-10">
      <Navbar />
    </div>
    <div class="container mx-auto">
      <ContentCategories category="Technology" text-color="hover:text-blue-400" tag-bg-color="bg-blue-400" />
      <ContentCategories category="Liftstyle" text-color="hover:text-red-400" tag-bg-color="bg-red-400" />
    </div>
  </div>
</template>

<script>
import ContentCategories from '../components/ContentCategories.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'HomeLayout',
  components: {
    ContentCategories,
    Navbar,
  },
};
</script>