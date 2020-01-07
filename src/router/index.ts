import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { IonicVueRouter } from '@ionic/vue'

// Vue.use(VueRouter)
Vue.use(IonicVueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create_book',
    name: 'create_book',
    component: () => import('../views/CreateBook.vue')
  }
]

// const router = new VueRouter({
const router = new IonicVueRouter({
  mode: 'history',
  routes
})

export default router
