<script setup>
</script>

<template>
  <div class="home">
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    console.log('setup')

    let name = 'mairo'
    let age = 30

    const handleClick = () => {
      console.log('clicked me')
    }

    return{name, age, handleClick}
  }
}
</script>
