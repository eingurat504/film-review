import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: () => import(/* webpackChunkName: "about" */ '../views/movie/Upcoming.vue')
  },
  {
    path: '/top_rated',
    name: 'Toprated',
    component: () => import(/* webpackChunkName: "about" */ '../views/movie/Top_rated.vue')
  },
  {
    path: '/now_playing',
    name: 'Nowplaying',
    component: () => import(/* webpackChunkName: "about" */ '../views/movie/Playing.vue')
  },
  {
    path: '/popular',
    name: 'Popular',
    component: () => import('../views/movie/Popular.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
