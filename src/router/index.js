import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/mainPage.vue')
    }, {
      path: '/create',
      name: 'createNew',
      component: () => import('@/views/createPage.vue')
    }
  ]
})

export default router
