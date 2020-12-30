import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Full from "../views/Full.vue";
import Home from "../views/Home.vue";
import Privacidad from "../views/Privacidad.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Full',
    redirect: '/home',
    component: Full,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'privacidad',
        name: 'Privacidad',
        component: Privacidad
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: '',
  scrollBehavior: () => ({y: 0, x: 0}),
  routes
});

export default router;
