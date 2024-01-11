<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/theNavigation.vue';
</script>

<template>
  <TheNavigation />

  <div class="container">
    <RouterView />
  </div>
</template>