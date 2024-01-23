<template>
    <div class="about" v-if="destination">
      <h1>{{ slug }}</h1>
      <div class="destination-details">
        <div>{{ destination.description }}</div>
      </div>
        <div class="experiences">
          <RouterLink v-for="experiences in destination.experiences" :key="experiences.slug"
            :to="{ name: 'exp', params: { exp: experiences.slug } }">
            <div class="card">
              <p class="card__text">
                {{ experiences.name }}
  
              </p>
  
            </div>
          </RouterLink>
        </div>
  
  
  
        <RouterView />
    </div>
  </template>
  
  <script>
  import { RouterLink, RouterView } from 'vue-router';
  
  import dataDestinations from '../data.json'
  
  export default {
    components: { RouterLink, RouterView },
    props: {
      slug: String
    },
  
    data() {
      return {
        destination: null
      }
    },
    
    methods: {
      getDestinationBySlug() {
        this.destination = dataDestinations.destinations.find(d => d.slug === this.slug)
      }
    },
  
    watch: {
      slug() {
        this.getDestinationBySlug()
      }
    },
  
    mounted() {
      console.log('slug', this.slug);
      this.getDestinationBySlug()
    }
  }
  </script>