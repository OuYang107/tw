import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

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
      name: "mian",
      component: () => import("../views/Mian.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/Home.vue")
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/About.vue")
        },
        {
          path: "/from",
          name: "from",
          component: () => import("../views/From.vue")
        },
        {
          path: "/videoMange",
          name: "videoMange",
          component: () => import("../views/VideoMange.vue")
        },
        {
          path: "/otherone",
          name: "otherone",
          component: () => import("../views/Other/OtherOne.vue")
        },
        {
          path: "/othertwo",
          name: "othertwo",
          component: () => import("../views/Other/OtherTwo.vue")
        },
        {
          path: "/otherthree",
          name: "otherthree",
          component: () => import("../views/Other/Otherthree.vue")
        },
        {
          path: "/pageone",
          name: "pageone",
          component: () => import("../views/Page/PageOne.vue")
        },
        {
          path: "/pagethree",
          name: "pagethree",
          component: () => import("../views/Page/Pagethree.vue")
        }
      ]
    }

    // {
    //   path: "/pagetwo",
    //   component: () => import("../views/Page/PageTwo.vue")
    // }
  ]
});
// export default routes;
