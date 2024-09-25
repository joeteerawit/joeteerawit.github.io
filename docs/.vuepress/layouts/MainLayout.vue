<template>
  <div class="md:pb-10">
    <Navbar />
  </div>
  <main class="container mx-auto">
    <slot />
  </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>