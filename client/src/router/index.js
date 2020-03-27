import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddorEdit from '@/components/AddorEdit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addBook',
      name: 'addBook',
      component: AddorEdit
    }
  ]
})
