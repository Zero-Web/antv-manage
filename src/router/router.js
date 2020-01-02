import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import BasicLayout from './../layout/BasicLayout.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BasicLayout,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          hideInMenu: true,
          component: Home
        },
        {
          path: '/a',
          name: 'a',
          component: () => import('./../views/A.vue')
        },
        {
          path: '/b',
          name: 'b',
          redirect: '/b/b1',
          component: { render: (h) => h('router-view') },
          children: [
            {
              path: '/b/b1',
              name: 'b1',
              component: () => import('./../views/B/B1.vue')
            },
            {
              path: '/b/b2',
              name: 'b2',
              component: () => import('./../views/B/B2.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
