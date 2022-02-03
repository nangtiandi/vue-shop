import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from  "../views/About";
import Services from  "../views/Services";
import Contact from  "../views/Contact";
import Login from  "../views/Login";
import Register from  "../views/Register";
import Cart from "../views/Cart";
import NotFound from "../views/NotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass : 'active'
});

export default router;
