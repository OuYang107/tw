import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default {
  // namespaced: true,
  state: {
    menu: [],
    currentMenu: []
  },
  mutations: {
    selectMenu(state, val) {
      if (val.name !== "home") {
        state.currentMenu = val;
      } else {
        state.currentMenu = "";
      }
    }
  },
  actions: {}
};
