<template>
    {{count}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</template>

<script>
  import Store from '../store/index.js'

  export default {
   
    computed: {
      count() {
        return Store.state.count
      }
    },

    methods: {
      increment: Store.actions.increment,
      decrement: Store.actions.decrement,
      limitCount: Store.actions.limitCount
    }

  }
</script>
