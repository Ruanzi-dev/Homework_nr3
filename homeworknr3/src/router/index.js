import { createRouter, createWebHashHistory } from 'vue-router'
import SignUp from '../views/Signup.vue'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path:'/',
    redirect: '/signup'
  },

  {
    path: '/home',
    name: 'homeview',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:SignUp
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
