
// import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '@/views/index.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test.vue')
  }

]
