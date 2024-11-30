<script setup>
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
    <!--    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>-->
<!--    <button @click="handleClick">Click me</button>-->
<!--    <button @click="age++">add 1 to age</button>-->
<!--    <input type="text" v-model="name" />-->
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  // name: "Home",
  setup() {
    const ninjaOne = ref({name: 'mario', age: 12})
    const ninjaTwo = reactive({name: 'maka', age: 24})

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 50
    }
    // console.log(this)
    //
    // const p = ref(null)
    //
    // const name =ref('mairo')
    // const age = ref(30)
    //
    // const handleClick = () => {
    //   name.value = 'luigi'
    //   age.value = 45
      // p.value.classList.add('test')
      // console.log(p, p.value)
      // p.value.textContent = 'helloooooooooooaaa'
    return {ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, nameTwo}
    // return{name, age, handleClick, p}
  }
}
</script>
