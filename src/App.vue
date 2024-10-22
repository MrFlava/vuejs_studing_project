<script setup>
import Block from "@/components/Block.vue";
</script>

<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start">Play</button>
  <Block :delay="this.delay"></Block>
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
