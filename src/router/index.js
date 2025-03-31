import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shops',
    name: 'shops',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopsView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactsView.vue')
  },
  {
    path: '/arenda',
    name: 'arenda',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArendaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
