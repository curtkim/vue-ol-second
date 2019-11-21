import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BaseMap from '../views/BaseMap.vue'
import VectorMap from '../views/VectorMap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/base_map',
    name: 'base_map',
    component: BaseMap
  },  
  {
    path: '/vector_map',
    name: 'vector_map',
    component: VectorMap
  },  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
