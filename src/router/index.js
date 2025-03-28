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
      props: true,
    }
  ],
})

router.beforeEach((to, from) => {
  // Store the previous route in the target route's meta
  if (from.name) {
    to.meta.fromRoute = {
      name: from.name,
      path: from.path,
      params: from.params,
      query: from.query
    }
  }
  return true
})

export default router
