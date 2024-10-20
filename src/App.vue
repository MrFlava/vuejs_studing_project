<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Modal from "@/components/Modal.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <p>Welcome...</p>
      <teleport to=".modals" v-if="showModal">
        <Modal theme="sale" @close="toggleModal">
          <template v-slot:links>
            <a href="https://google.com">Sign up now</a>
            <br>
            <a href="https://google.com">More info</a>
          </template>
          <h1>Sign up for the Giveavay</h1>
          <p>Grab the suit for the halfprice</p>
        </Modal>
      </teleport>
    </div>
    <button @click.shift="toggleModal">Open modal (shift)</button>
  </header>

  <main>
  </main>
</template>

<script>
export default {
  data(){
    return {
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
