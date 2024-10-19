<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Modal from "@/components/Modal.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Modal :header="header" :text="text" theme="sale"></Modal>
    </div>
  </header>

  <main>
  </main>
</template>

<script>
export default {
  data(){
    return {
      header: "Sign up for the Giveavay",
      text: "Grab the suit for the halfprice"
    }
  }
}
</script>

<style scoped>
</style>
