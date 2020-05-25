import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Index from "../views/Index.vue";
import SginUp from "../views/SginUp.vue";
import Product from "../views/Product.vue";
import PersonalCenter from "../views/PersonalCenter.vue";
import test from "../views/test.vue";

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
      },
      {
        path: '/product/:id',
        name: 'product',
        component: Product
      }
    ]
  },
  {
    path: "/test",
    name: "test",
    component: test
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
