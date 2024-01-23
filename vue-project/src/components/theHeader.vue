<template>
    <div class="page-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <span class="breadcrumb"><RouterLink :to="{ name: 'villa' }">Home</RouterLink> / {{ title }}</span>
            <h3>{{ title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    components: { RouterLink },
  
    props: {
      // page title
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  