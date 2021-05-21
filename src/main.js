import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import echarts from "echarts";
// import store from "./store/index";
// import Mock from "./mock";
// import axios from "axios";
// Vue.prototype.$axios = axios;

// Vue.prototype.$echarts = echarts;
// Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(Mock);
new Vue({
  // store,
  router,

  render: h => h(App)
}).$mount("#app");
