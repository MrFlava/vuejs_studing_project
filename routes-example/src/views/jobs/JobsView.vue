<script setup>

</script>

<template>
<h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{job.title}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {title: 'Test', id: 1, details: "lorem"},
        {title: 'Test1', id: 2, details: "lorem"},
        {title: 'Test2', id: 3, details: "lorem"}
      ]
    }
  }
}
</script>

<style scoped>

</style>
