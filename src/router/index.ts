import { createWebHistory, createRouter } from 'vue-router'
import pages from 'voie-pages'
import Home from './../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...pages,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
