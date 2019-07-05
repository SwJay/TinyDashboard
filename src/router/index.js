import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import q1 from '@/components/q1'
import q2 from '@/components/q2'
import q4 from '@/components/q4'
import q7 from '@/components/q7'

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
    },
    {
      path: '/q2',
      name: 'q2',
      component: q2
    },
    {
      path: '/q4',
      name: 'q4',
      component: q4
    },
    {
      path: '/q7',
      name: 'q7',
      component: q7
    }
  ]
})
