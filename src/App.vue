<script setup>
import Click_counter from "@/components/Click_counter.vue";
import HelloWorld from "@/components/HelloWorld.vue";


// const hello_world = HelloWorld()
// export default {
//   name: "app",
//   components: {
//     hello_world
//   }
// };
</script>

<template>
  <header>
    <h1>Here is a child component!</h1>
  </header>
  <Click_counter />
  <HelloWorld />

</template>
