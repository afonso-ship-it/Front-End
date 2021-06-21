import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Admin from '../views/Admin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Registo',
    name: 'Registo',
    component: () => import('../views/Registo.vue')
  },

  {
    path: '/Produto',
    name: 'Produto',
    component: () => import('../views/Produto.vue')
  },

  {
    path: '*',
    name: 'Erro',
    component: () => import('../views/Erro.vue')
  },

  {
    path: '/Generos',
    name: 'Generos',
    component: () => import('../views/Generos.vue')
  },
  {
    path:'/Admin',
    name: 'Admin',
    // component: Admin,
    // meta: {
    //   requireAuth: true,
    // },
    component: () => import('../views/Admin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// router.beforeEach((to, from, next) => {
//   const requireAuth = to.matched.some(record => record.meta.requireAuth);
//   if(requireAuth) {   next('/Admin');}}
// );

// firebase.auth().signOut().then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });