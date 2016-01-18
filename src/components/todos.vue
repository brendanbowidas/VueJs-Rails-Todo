<template>
  <ul>
    <li v-for="todo in todos" @dblclick="toggleComplete(todo)" v-bind:class="{'complete': todo.completed}">{{todo.title}} <span @click="deleteTodo(todo)">x</span></li>
  </ul>
</template>

<style lang="sass">
 li {
   color: $color;
   line-height: 1.4;
   &:hover {
     cursor: pointer;
   }
   span {
     padding-left: 10px;
     color: black;

   }
 }
.complete {

  text-decoration: line-through;
  color: black;

}
</style>

<script>
  import store from '../store/index.js'

  export default {
    ready() {
      store.actions.populate_todos();

    },
    computed: {
      todos() {
        return store.state.todos[0];
      }
    },
    methods: {
      toggleComplete(todo) {
        todo.completed = !todo.completed;
        return store.actions.update_todo(todo);

      },
      deleteTodo(todo) {
        return store.actions.delete_todo(todo);
      }
    }
  }
</script>
