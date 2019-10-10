import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignIn from "./views/SignInFlow/SignIn.vue";
import Request from "./views/SignInFlow/Request.vue";
import Recovered from "./views/SignInFlow/Recovered.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/recovered",
      name: "recovered",
      component: Recovered
    },
    {
      path: "/request",
      name: "request",
      component: Request
    },
    {
      path: "/team",
      name: "team",
      // route level code-splitting
      // this generates a separate chunk (team.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "team" */ "./views/Team.vue")
    }
  ]
});
