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
        <li v-for="book in books" v-bind:class="{ fav: book.isFav }" @click="toggleFav(book)">
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
        {"title": "name", "author": "ocolesdf", "isFav": false},
        {"title": "asd", "author": "ocolesdf", "isFav": true},
        {"title": "dsgfewrg", "author": "rewfef", "isFav": false},
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
    },
    toggleShowBooks(){
      this.ShowBooks = !this.showBooks

    },
    toggleFav(book){
      book.isFav = !book.isFav
    }
  }
}
</script>

<style scoped>
  body {
    background: #eee;
    max-width: 960px;
    margin: 20px auto;
  }
  p, h3, ul{
     margin: 0;
     padding: 0;
  }
  li{
    list-style: none;
    background: #fff;
    margin: 20px auto;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li.fav {
    background: #ff9ed2;
    color: #fff;
  }
</style>
