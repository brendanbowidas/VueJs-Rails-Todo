<template>
  <ul>
    <li @dblclick="removePerson(person)" v-for="person in people[0]">{{person.name}}</li>
  </ul>
</template>


<script>

  import store from '../store/index.js'

  export default {

    compiled() {
      store.actions.populate_people();

    },
    computed: {
      people() {
        return store.state.filteredPeople
      }
    },
    methods: {
      removePerson(person){
        return store.actions.remove_person(person);
      }
    }
  }

</script>
