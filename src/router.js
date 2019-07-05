import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Brazil from "./views/Brazil";
import Hawaii from "./views/Hawaii";
import Panama from "./views/Panama";
import Jamaica from "./views/Jamaica";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/brazil",
      name: "brazil",
      component: Brazil
    },
    {
      path: "/hawaii",
      name: "hawaii",
      component: Hawaii
    },
    {
      path: "/panama",
      name: "panama",
      component: Panama
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: Jamaica
    }
  ]
});
