<template>
  <!-- <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <span class="breadcrumb">VILLA / Schedule</span>
          <h3>Schedule</h3>
        </div>
      </div>
    </div>
  </div> -->
  <TheHeader title="Schedule" />
  <v-calendar v-model="value" :events="events"/>
</template>
  
<script>
import TheHeader from '../components/theHeader.vue';
export default {
  name: 'page',
  data() {
    return {
      value: [
        new Date()
      ],
      events: [
        {
          title: "Event 1",
          start: new Date(),
          end: new Date(),
          color: "red",
        },
        {
          title: "Event 2",
          start: new Date("January 17, 2024 03:24:00"),
          end: new Date("2024-01-25"),
          color: 'blue'
        }
      ]
    }
  },
  components: {
    TheHeader,
  }
};
</script>