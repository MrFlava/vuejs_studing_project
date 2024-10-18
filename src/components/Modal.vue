<script setup>
defineProps({
  header: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="backdrop">
    <div class="modal">
      <h1>{{header}}</h1>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<style scoped>
.modal{
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
h1{
  color: cornflowerblue;
}
.modal p{
  font-style: normal;
}
</style>