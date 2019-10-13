import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignIn from "./views/SignInFlow/SignIn.vue";
import Request from "./views/SignInFlow/Request.vue";
import Recover from "./views/SignInFlow/Recover.vue";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/recover",
      name: "recover",
      component: Recover
    },
    {
      path: "/request",
      name: "request",
      component: Request
    },
    {
      path: "/team",
      name: "team",
      meta: {
        requiresAuth: true
      },
      // route level code-splitting
      // this generates a separate chunk (team.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "team" */ "./views/Team.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("signin");
  else next();
});

export default router;
