<script setup>
defineProps({
  score: {
    type: Number,
    required: true,
  }
})
</script>

<template>
  <p>Reaction time - {{score}}</p>
</template>

<style scoped>

</style>