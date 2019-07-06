import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "vue-school-active-class",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/details/:id",
      name: "DestinationDetails",
      component: () =>
        import(/* webpackChunkName: "DestinationDetails"*/ "./views/DestinationDetails")
    }
  ]
});
