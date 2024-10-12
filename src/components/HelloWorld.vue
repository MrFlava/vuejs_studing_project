<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Yes It's working
    </h3>
    <p>{{ age }}</p>
    <p>{{title}}</p>
    <div id="click-event">
      <button v-on:click="age++">Add stuff</button>
      <button v-on:click="age--">Remove stuff</button>
      <div @click="changeTitle('interesting')">Change message</div>

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      "title": "hey",
      "age": 100,
    }
  },
  methods: {
    changeTitle(title){
      this.title = title
    }
  }
}
</script>

<style scoped>
</style>
