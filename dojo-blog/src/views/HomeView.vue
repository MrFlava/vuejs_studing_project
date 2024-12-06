<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostListView :posts="posts" v-if="showPosts"></PostListView>
    </div>
    <div v-else>
      <p>loading...</p>
    </div>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import {ref} from 'vue'
import getPosts from "@/composables/getPosts.js";
import PostListView from "@/components/PostListView.vue";


export default {
  name: "Home",
  components: { PostListView },
  setup() {
    const {posts, error, load} = getPosts()

    const showPosts = ref(true)

    load()

    return {posts, error, showPosts};
  }
}


</script>
