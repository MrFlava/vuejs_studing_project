<template>
  <h1>Job Details</h1>
  <p>The job id is {{job.id}}</p>
  <p>The job details is {{job.details}}</p>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message));
  }
}

</script>

<style scoped>

</style>
