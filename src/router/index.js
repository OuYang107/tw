import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
//点击两次路由，将错误抛出
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function push(location) {
  return originalReplace.call(this, location).catch(err => err);
};

export default new Router({
  routes: [
    {
      path: "/navigation",
      name: "navigation",
      component: () => import("../views/navigation.vue")
    },
    {
      path: "/",
      name: "administration",
      component: () => import("../views/administration.vue")
    },
    {
      path: "/help",
      name: "help",
      component: () => import("../views/help.vue")
    }
  ]
});
// export default routes;
