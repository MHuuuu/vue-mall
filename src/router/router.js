
<<<<<<< HEAD
// import Home from '@/views/Home.vue'
=======
import Home from './views/Home.vue'
>>>>>>> 7f6383a3e68d90d11a05cfdc855c192ecf590698

export default [
  {
    path: '/',
<<<<<<< HEAD
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '@/views/index.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test.vue')
  }

=======
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
>>>>>>> 7f6383a3e68d90d11a05cfdc855c192ecf590698
]
