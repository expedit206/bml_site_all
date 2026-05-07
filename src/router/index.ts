import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
  },
  // Toutes les anciennes routes redirigent vers la home (single landing page)
  { path: '/services',     redirect: '/' },
  { path: '/realisations', redirect: '/' },
  { path: '/about',        redirect: '/' },
  { path: '/contact',      redirect: '/' },
  { path: '/faq',          redirect: '/' },
  // Catch-all
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
