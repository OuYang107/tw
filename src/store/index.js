import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import tab from "./tab";
export default new Vuex.Store({
  modules: {
    tab
  },
  state: { count: 0 },
  // <button @click="handleAddClick(5)">加加</button>
  // <button @click="handleReduceClick(1)">减减</button>
  // handleAddClick(n) {
  //   this.$store.commit("add", n);
  // },
  // handleReduceClick(n) {
  //   this.$store.commit("reduce", n);
  // },
  //
  // muations:{ add(state,n) return (state.count =+ n); }}
  //muations{reduce(state,n) return (state.count -= n); }}
  mutations: {
    add(state, n) {
      return (state.count += n);
    },
    reduce(state, n) {
      return (state.count -= n);
    }
  }
});
// state: { count: [], serlermuec: [] }
