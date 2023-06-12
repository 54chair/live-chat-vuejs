import { createRouter, createWebHashHistory } from 'vue-router'

import WelcomePage from '../views/WelcomePage'
import ChatroomPage from '../views/ChatroomPage'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatroomPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
