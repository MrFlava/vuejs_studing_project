<template>
  <div class="home">
    <h1>Home</h1>
    <PostListView :posts="posts"></PostListView>
  </div>
</template>

<script>
import PostListView from "@/components/PostListView.vue";
import {ref} from 'vue'

export default {
  name: "Home",
  components: { PostListView },
  setup() {
    const posts = ref([
      {title: 'welcome to the blog', body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", id: 1},
      {title: 'tope 5 css tips', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', id: 2},
    ])

    return {posts}
  }
}
</script>
