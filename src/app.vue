<template>

  <add></add>
  <todos></todos>

</template>


<style lang="sass">

</style>


<script>
    require('./scss/main.scss');
    import Counter from './components/counter.vue'
    import personForm from './components/form.vue'
    import People from './components/people.vue'
    import Todos from './components/todos.vue'
    import add from './components/addTodo.vue'

    export default {

        data() {
                return {
                    msg: 'hello'
                }
            },

            components: {
              Counter,
              personForm,
              People,
              Todos,
              add


            }

    }
</script>
