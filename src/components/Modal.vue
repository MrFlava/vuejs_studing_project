<script setup>
defineProps({
  header: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale'}">
      <h1>{{header}}</h1>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal(){
      this.$emit('close');
    }
  }
}
</script>

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

.modal.sale {
  background: crimson;
  color: #fff;
}

.modal.sale h1{
  color: #fff;
}
</style>