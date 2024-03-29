import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Books from '@/components/Books'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
