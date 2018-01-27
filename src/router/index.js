import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NumberOne from '@/components/NumberOne'
import NumberTwo from '@/components/NumberTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/one',
      name: 'NumberOne',
      component: NumberOne
    },
    {
      path: '/two',
      name: 'NumberTwo',
      component: NumberTwo
    }
  ]
})
