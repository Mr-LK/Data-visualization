import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/overview'
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import('../views/Overview.vue')
  },
  {
    path: '/output-value',
    name: 'outputvalue',
    component: () => import('../views/Outvalue.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/pedestrian',
    name: 'pedestrian',
    component: () => import('../views/Pedestrian.vue')
  },
  {
    path: '/parking-space',
    name: 'parkingspace',
    component: () => import('../views/Parkingspace.vue')
  },
  {
    path: '/enterprise',
    name: 'enterprise',
    component: () => import('../views/Enterprise.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
