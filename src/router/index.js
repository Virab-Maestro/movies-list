import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/movies',
    },

    {
      path: '/movies',
      name: 'movies',
      component: () => import('@/views/MoviesView.vue'),
    },

    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('@/views/MoviesSingleView.vue'),
    }
  ],
})

export default router
