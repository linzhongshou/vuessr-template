import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {path: '/', component: () => import('../views/Home.vue')},
      {path: '/about', component: () => import('../views/About.vue')}
    ]
  })
}
