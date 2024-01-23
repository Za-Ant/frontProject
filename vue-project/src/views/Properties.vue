
<template>
  <TheHeader title="Properties" />
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
import TheHeader from '../components/theHeader.vue';

export default {
  components: {
    TheHeader,
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
