import { createWebHistory, createRouter } from 'vue-router'
import pages from 'voie-pages'
import Home from './../views/Home.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/:pathMatch(.*)', component: PageNotFound },
  ...pages,
]

const router = createRouter({
  history: createWebHistory('/cookbook-pwa/'),
  routes,
})

export default router
