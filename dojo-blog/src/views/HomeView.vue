<script setup>
</script>

<template>
  <div class="home">
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Home",
  setup() {
    console.log(this)

    const p = ref(null)

    const name =ref('mairo')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 45
      // p.value.classList.add('test')
      // console.log(p, p.value)
      // p.value.textContent = 'helloooooooooooaaa'
    }

    return{name, age, handleClick, p}
  },

  data() {
    return {
      score: 5
    }
  }
}
</script>
