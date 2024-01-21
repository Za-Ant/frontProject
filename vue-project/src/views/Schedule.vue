<template>
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