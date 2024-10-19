<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Modal from "@/components/Modal.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <p>Welcome...</p>
      <div v-if="showModal">
        <Modal :header="header" :text="text" theme="sale" @close="toggleModal"></Modal>
      </div>
    </div>
    <button @click="toggleModal">Open modal</button>
  </header>

  <main>
  </main>
</template>

<script>
export default {
  data(){
    return {
      header: "Sign up for the Giveavay",
      text: "Grab the suit for the halfprice",
      showModal: false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style scoped>
</style>
