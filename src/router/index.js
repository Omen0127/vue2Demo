import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/login/index.vue";
import LayoutView from "../views/layout/index.vue";
import HomeView from "../views/home/index.vue";
import { bindBeforeEach } from "./utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/homeLayout",
    name: "LayoutHomeView",
    component: LayoutView,
    children: [
      {
        path: "/home",
        name: "Home",
        meta: {
          title: "首页",
        },
        component: HomeView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

bindBeforeEach(router);

export default router;
