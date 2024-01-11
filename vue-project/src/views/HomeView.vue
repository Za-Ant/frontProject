<template>
  <div class="home">
    <h1>Villa</h1>
    <div class="destinations">
      <div v-for="destination in destinations">
        <h2>{{ destination.name }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
// import dataDestinations from '../data.json'
// export default {
//   data() {
//     return {
//       destinations: dataDestinations.destinations,
//     }
//   },
// }
</script>