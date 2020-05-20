import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import SginUp from "../views/SginUp.vue";
import PersonalCenter from "../views/PersonalCenter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "index",
    //子路由
    children: [
      {
        path: "/index",
        name: "index",
        component: Index
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/sginup",
    name: "SginUp",
    component: SginUp
  },
  {
    path: "/personalcenter",
    name: "PersonalCenter",
    component: PersonalCenter
  }
];

const router = new VueRouter({
  routes
});

export default router;
