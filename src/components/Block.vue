<script setup>
defineProps({
  delay: {
    type: Number,
    required: true,
  }
})
</script>

<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    <p>Click me</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    }
  },
  mounted() {
    console.log('component mounted');
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer()
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)
    },
    stopTimer() {
      clearInterval(this.timer)
      this.$emit('end', this.reactionTime)
    }
  },
  updated() {
    console.log('component updated')
  },
  unmounted() {
    console.log('component unmounted')
  }
}
</script>

<style scoped>
.block {
  width: 480px;
  border-radius: 20px;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>