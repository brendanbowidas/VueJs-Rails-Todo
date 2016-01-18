import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(VueResource);




const state = {
  count: 5,
  people: [],
  filteredPeople: [],
  todos: [],

}


const mutations = {
  INCREMENT(state) {
      state.count++
      limitCount();
    },
    DECREMENT(state) {

      if (state.count > 0) {
        state.count--
        limitCount();
      }
    },
    ADD_PERSON(state, person) {
    state.people[0].push(person)
    limitCount();
  },
  REMOVE_PERSON(state, person){
    state.people[0].$remove(person);
    limitCount();
  },
  POPULATE_PEOPLE(state, response){

    state.people.$set('people', response)
    limitCount();

  },
  POPULATE_TODOS(state, response){
    state.todos.$set('todos', response);
  },

  ADD_TODO(state, todo){
    state.todos.push(todo)

  },


}

function limitCount(){
  state.filteredPeople.$set('filteredPeople', state.people[0].slice(0, state.count));

}

const actions = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
  add_person (store, person) {
    store.dispatch('ADD_PERSON', person)
  },
  remove_person (store, person) {
    store.dispatch('REMOVE_PERSON', person)
  },
  populate_people(store) {
    Vue.http.get('http://homestead.app/api/product').then((response) => {

      return store.dispatch('POPULATE_PEOPLE', response.data);
    });
  },
  populate_todos(store){
    Vue.http.get('http://localhost:3000/todos').then((response) => {

      return store.dispatch('POPULATE_TODOS', response.data);
    });

  },
  add_todo(store, todo){
    Vue.http.post('http://localhost:3000/todos', todo).then((response) => {
      return actions.populate_todos(store);
    });
  },
  update_todo(store, todo){
    Vue.http.put('http://localhost:3000/todos/'+ todo.id, todo).then((response) => {
        return actions.populate_todos(store);
    });
  },
  delete_todo(store, todo) {
    Vue.http.delete('http://localhost:3000/todos/'+ todo.id, todo).then((response) => {
        return actions.populate_todos(store);
    });
  }

}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
