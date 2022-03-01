import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home/Home.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/discounts',
    name: 'Discounts',
    component: () => import('../views/discounts/Discounts.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/store/Store.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Porfile.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
