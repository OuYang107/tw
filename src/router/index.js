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
      path: "/",
      name: "index",
      component: () => import("../views/index.vue")
    }

    // {
    //   path: "/navigation",
    //   name: "navigation",
    //   component: () => import("../views/navigation.vue")
    // },
    // {
    //   path: "/administration",
    //   name: "administration",
    //   component: () => import("../views/administration.vue")
    // },
    // {
    //   path: "/help",
    //   name: "help",
    //   component: () => import("../views/help.vue")
    // },
    // {
    //   path: "/",
    //   name: "login",
    //   component: () => import("../views/login.vue")
    // }
  ]
});
// export default routes;
