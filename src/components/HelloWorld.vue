<template>
  <h1 class="text-2xl pb-2">{{ msg }}</h1>

  <p class="pb-2">
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button
    class="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
    @click="state.count++"
  >
    count is: {{ state.count }}
  </button>
  <p class="p-2">
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  props: {
    msg: { type: String, default: undefined },
  },
  setup(): Record<string, unknown> {
    const state = reactive({ count: 0 })

    return { state }
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
