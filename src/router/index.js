import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Welcome from '../views/welcome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
