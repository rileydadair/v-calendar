import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    days: [
      new Date(2020, 11, 17),
      new Date(2020, 11, 18),
      new Date(2020, 11, 19),
      new Date(2020, 11, 21),
      new Date(2020, 11, 22),
      new Date(2020, 11, 23),
      new Date(2020, 11, 24),
      new Date(2020, 11, 25),
      new Date(2020, 11, 26),
      new Date(2020, 11, 28),
      new Date(2020, 11, 29),
      new Date(2020, 11, 30),
      new Date(2020, 11, 31),
      new Date(2021, 0, 1),
      new Date(2021, 0, 2),
      new Date(2021, 0, 3),
      new Date(2021, 0, 4),
      new Date(2021, 0, 5),
    ],
    selectedId: null,
    selectedDate: null,
    selectedCalendarId: null,
    selectedDatePickerId: null
  },
  mutations: {
    updateSelectedId: (state, id) => {
      state.selectedId = id;
    },
    updateCalendarId: (state, id) => {
      state.selectedCalendarId = id;
      state.selectedId = id;
    },
    updateDatePickerId: (state, id) => {
      state.selectedDatePickerId = id;
      state.selectedId = id;
    },
  },
  actions: {
  }
})
