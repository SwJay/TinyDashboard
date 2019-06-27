import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import q1 from '@/components/q1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/q1',
      name: 'q1',
      component: q1
    }
  ]
})
