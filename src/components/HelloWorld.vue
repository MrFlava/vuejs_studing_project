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
      <!--   Change events   -->
      <div class="box" @mouseover="handleEvent($event, 5)">mouseover (enter)</div>
      <div class="box" @mouseover="handleEvent">mouseleave</div>
      <div class="box" @dblclick="handleEvent">double click</div>
      <div class="box" @mousemove="handleMouseMove">position - {{x}} {{y}}</div>
    </div>
    <!--  attribute binding  -->
    <div>
      <a :href="url">Yep, another google link</a>
    </div>
    <!--   Outprinitng lists   -->
    <div v-if="showBooks">
      <ul>
        <li v-for="book in books">
          <h3>{{book.title}}</h3>
          <p>{{book.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      "url": "https://google.com",
      "title": "hey",
      "age": 100,
      "x": 0,
      "y": 0,
      "showBooks": true,
      "books": [
        {"title": "name", "author": "ocolesdf"},
        {"title": "asd", "author": "ocolesdf"},
        {"title": "dsgfewrg", "author": "rewfef"},
      ]
    }
  },
  methods: {
    changeTitle(title){
      this.title = title
    },
    handleEvent(event, data){
      console.log(event, event.type)
      if (data) {
        console.log(data)
      }
    },
    handleMouseMove(event){
        this.x = event.offsetX
        this.y = event.offsetY
    }
  }
}
</script>

<style scoped>
  .box {
    padding: 100px 0;
    width: 400px;
    text-align: center;
    background: #ddd;
    margin: 20px;
    display: inline-block;
  }
</style>
