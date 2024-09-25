<template>
  <div
    class="relative max-w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <div class="relative">
        <img class="max-h-64 rounded-t-lg" src="https://picsum.photos/360/250" alt="" />
        <!-- Overlay text on the image -->
        <div
          :class="['absolute rounded-r-2xl top-10 left-0 flex items-center justify-center w-32 h-8 text-white text-xs font-bold', tagBgColor]">
          {{ category }}
        </div>
      </div>
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
          acquisitions 2021</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CardContent',
  props: {
    category: {
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