<template>
  <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <span class="breadcrumb">VILLA / Schedule</span>
          <h3>Schedule</h3>
        </div>
      </div>
    </div>
  </div>
  <v-calendar v-model="value" />
</template>
  
<script>
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
        }
      ]
    }
  }
}
</script>