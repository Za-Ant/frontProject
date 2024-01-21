<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/theNavigation.vue';
import theFooter from './components/theFooter.vue';

</script>

<template>
  <TheNavigation />

  <div class="container">
    <RouterView />
  </div>

  <theFooter />
</template>