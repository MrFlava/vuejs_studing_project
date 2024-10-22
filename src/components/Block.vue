<script setup>
defineProps({
  delay: {
    type: Number,
    required: true,
  }
})
</script>

<template>
  <div class="block">
    <p>Click me</p>
  </div>
</template>

<style scoped>
.block {
  width: 480px;
  border-radius: 20px;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>