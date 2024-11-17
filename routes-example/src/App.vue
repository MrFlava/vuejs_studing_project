<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/jobs">Jobs</RouterLink>
      </nav>
    </div>
  </header>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <RouterView />
</template>

<script>
export default {
  methods: {
    redirect () {
      this.$router.push({name: 'home'})
    },
    back () {
      this.$router.go(-1)
    },
    forward () {
      this.router.go(+1)
    }
  }
}
</script>

<style scoped>
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
