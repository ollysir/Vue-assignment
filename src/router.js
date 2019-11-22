import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register'
import Adminboard from './views/Adminboard'
import Reviews from './views/Reviews'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/adminboard',
      name: 'adminboard',
      component: Adminboard
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews
    }
  ]
})
