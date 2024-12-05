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
import PostListView from "@/components/PostListView.vue";
import {ref} from 'vue'

export default {
  name: "Home",
  components: { PostListView },
  setup() {
    const posts = ref([])
    const showPosts = ref(true)
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts');
        if (!data.ok) {
          throw Error('Failed to fetch posts.');
        }
        posts.value = await data.json()
      }
      catch (err) {
        error.value = err.message;
        console.log(err.message);
      }
    }
    load()

    return {posts, error, showPosts};
  }
}


</script>
