import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: ()=> import('../views/Home.vue')
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
    path: '/crear',
    name: 'Crear',
    component: () => import('../views/FormCrear.vue')
  },
  {
    path: '/editar',
    name: 'Editar',
    component: () => import('../views/FormEdit.vue')
  },
  {
    path: '/buscar',
    name: 'Buscar',
    component: () => import('../views/FormBuscar.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
