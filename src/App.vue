<script setup>
import Block from "@/components/Block.vue";
import Results from "@/components/Results.vue";
</script>

<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"></Block>
  <Results v-if="showResults" :score="score"></Results>

<!--  <Results></Results>-->
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style scoped>
</style>
