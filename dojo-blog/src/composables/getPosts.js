import {ref} from "vue";

const getPosts = function() {
  const posts = ref([])
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

  return {posts, error, load}
}

export default getPosts;
