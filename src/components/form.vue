<template>
  <input v-model="person.name" type="text"  placeholder="name">

  <button @click="submit(person)">Submit</button>
</template>


<script>
  import store from '../store/index.js'

  export default {
        data() {
          return {
            person: {}
          }
        },
        methods: {
          submit (person) {
            person = {name: (this.person.name)}
             store.actions.add_person(person);

          }
        }
      }

</script>
