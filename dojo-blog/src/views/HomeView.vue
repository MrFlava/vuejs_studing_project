<script setup>
</script>

<template>
  <div class="home">
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Home",
  setup() {
    console.log(this)

    const p = ref(null)

    let name = 'mairo'
    let age = 30

    const handleClick = () => {
      p.value.classList.add('test')
      console.log(p, p.value)
      p.value.textContent = 'helloooooooooooaaa'
    }

    return{name, age, handleClick, p}
  }
}
</script>
