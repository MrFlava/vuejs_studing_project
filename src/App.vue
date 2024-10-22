<script setup>
</script>

<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start">Play</button>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      delay: null
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      console.log(this.delay)
    }
  }
}
</script>

<style scoped>
</style>
