
<template>
  <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <span class="breadcrumb">VILLA / HOME</span>
          <h3>Properties</h3>
        </div>
      </div>
    </div>
  </div>

  <div class="section properties">
    <div class="container">
      <div class="row properties-box">
        <PropertyCard v-for="property in properties" :property="property" :key="property.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';

import {useProperties} from '@/stores/properties'
import PropertyCard from '@/components/PropertyCard.vue';

export default {
  components: {
    PropertyCard
  },

  computed: {
    ...mapState(useProperties, ['properties'])
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
