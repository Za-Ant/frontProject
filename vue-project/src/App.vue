<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/theNavigation.vue';
import theFooter from './components/theFooter.vue';
import theHeader from './components/theHeader.vue';

</script>

<template>
  <TheNavigation />
  <theHeader />

  <div class="container">
    <RouterView />
  </div>

  <theFooter />
</template>