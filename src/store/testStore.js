import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  reservation: {

  },

  locations: [],
  dates: [],
  timeslots: []

};

const mutations = {
  GET_LOCATIONS (state, response) {

    // populates locations array with data from GET request to api for all locations
    state.locations.$set('locations', response);

  },

  SET_LOCATION (state, location) {
    state.reservation.$set('location_id', location.id)
  },

  GET_DATES(state, response) {
    state.dates.$set('dates', response);
  },

  SET_DATE(state, date) {
    state.reservation.$set('date_id', date);
  },

  GET_TIMESLOTS(state, response) {
    state.timeslots.$set('timeslots', response);
  },

  SET_TIMESLOT(state, timeslot) {
    state.reservation.$set('timeslot_id', timeslot);
  },

  SET_INFO(state, info) {
    state.reservation.$set('name', info.name);
    state.reservation.$set('email', info.email);
    state.reservation.$set('party_size', info.party_size)
  },

};

const actions =  {
  get_locations(store) {
    return Vue.http.get('api/locations').then((response)=> {
      store.dispatch('GET_LOCATIONS', response.data);
    });
  },

  set_location(store, location){
    return store.dispatch('SET_LOCATION', location);
  } ,
  //insert location_id from component
  get_dates(store, location_id) {
    return Vue.http.get('api/location/' + location_id + "/dates").then((response) => {
      store.dispatch('GET_DATES', response.data);
    });

  },
  set_date(store, date) {
    return store.dispatch('SET_DATE', date.id);
  },
  get_timeslot(store, date_id) {
    return Vue.http.get('/api/date/' + date_id + '/timeslots').then((response) => {
      store.dispatch('GET_TIMESLOTS', response.data);
    });
  },
  set_timeslot(store, timeslot) {
    return store.dispatch('SET_TIMESLOT', timeslot.id)
  },

}
