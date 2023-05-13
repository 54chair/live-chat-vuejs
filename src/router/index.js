import { createRouter, createWebHashHistory } from 'vue-router'

import WelcomePage from '../views/WelcomePage'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
