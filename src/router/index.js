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
    path: '/tv/latest',
    name: 'Latest',
    component: () => import(/* webpackChunkName: "about" */ '../views/tv/Latest.vue')
  },
  {
    path: '/tv/upcoming',
    name: 'Upcoming',
    component: () => import(/* webpackChunkName: "about" */ '../views/tv/Upcoming.vue')
  },
  {
    path: '/tv/top_rated',
    name: 'Toprated',
    component: () => import(/* webpackChunkName: "about" */ '../views/tv/Top_rated.vue')
  },
  {
    path: '/tv/on_the_air',
    name: 'OnAir',
    component: () => import(/* webpackChunkName: "about" */ '../views/tv/Playing.vue')
  },
  {
    path: '/tv/popular',
    name: 'Popular',
    component: () => import('../views/movie/Popular.vue')
  },

   //  MOVIES
  {
    path: '/movie/latest',
    name: 'Latest',
    component: () => import(/* webpackChunkName: "about" */ '../views/movie/Latest.vue')
  },
  {
    path: '/movie/upcoming',
    name: 'Upcoming',
    component: () => import(/* webpackChunkName: "about" */ '../views/movie/Upcoming.vue')
  },
  {
    path: '/movie/top_rated',
    name: 'Toprated',
    component: () => import(/* webpackChunkName: "about" */ '../views/movie/Top_rated.vue')
  },
  {
    path: '/movie/now_playing',
    name: 'Nowplaying',
    component: () => import(/* webpackChunkName: "about" */ '../views/movie/Playing.vue')
  },
  {
    path: '/movie/popular',
    name: 'Popular',
    component: () => import('../views/movie/Popular.vue')
  },
    {
    path: '/recommendations',
    name: 'Recommend',
    component: () => import('../views/movie/Recommend.vue')
  },
    {
    path: '/movie/:id/rating',
    name: 'Rating',
    component: () => import('../views/movie/Rating.vue')
  },
    {
    path: '/movie/:id/watch/providers',
    name: 'Provider',
    component: () => import('../views/movie/Provider.vue')
  },
    {
    path: '/movies/:id/videos',
    name: 'Video',
    component: () => import('../views/movie/Video.vue')
  },
    {
    path: '/movies/:id/translations',
    name: 'Translation',
    component: () => import('../views/movie/Translation.vue')
  },
    {
    path: '/movies/:id/similar',
    name: 'Similar',
    component: () => import('../views/movie/Similar.vue')
  },
    {
    path: '/movies/:id/reviews',
    name: 'Review',
    component: () => import('../views/movie/Review.vue')
  },
    {
    path: '/movies/:id/release_dates',
    name: 'Release_date',
    component: () => import('../views/movie/Release_date.vue')
  },
    {
    path: '/movies/:id/lists',
    name: 'List',
    component: () => import('../views/movie/List.vue')
  },
  {
    path: '/:id/images',
    name: 'Image',
    component: () => import('../views/movie/Image.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
