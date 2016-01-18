<template>
  <input type="text" v-model="todo.title" @keyup.enter="addTodo(todo.title)">

</template>

<style lang="sass">
  input {
    margin-top: 200px;


  }
</style>


<script>
  import store from '../store/index.js'
  export default {
    data() {
      return {
        todo: {}
      }
    },
    methods: {
      addTodo(todo){
        todo = {title: todo, completed: false};
        store.actions.add_todo(todo);
      }
    }
  }
</script>
