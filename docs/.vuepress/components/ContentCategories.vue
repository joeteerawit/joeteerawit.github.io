<template>
  <div class="flex overflow-x-scroll no-scrollbar">
    <div v-for="n in 4" :key="n" class="flex-none px-2">
      <CardContent :category="category" :tag-bg-color="tagBgColor"/>
    </div>
  </div>
  <a href="" :class="['flex text-lg font-semibold justify-end p-5', textColor]">
    Read More
    <div class="self-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </div>
  </a>
</template>

<script>
import CardContent from './CardContent.vue'

export default {
  name: 'ContentCategories',
  components: { CardContent },
  props: {
    category: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
    tagBgColor: {
      type: String,
      required: true,
    },
  },
}
</script>