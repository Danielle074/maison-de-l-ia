// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/Layout.vue'
import Home from '@/views/Home.vue' 
import ObservatoireIa from '@/views/ObservatoireIa.vue'
import Kandia from '@/views/Kandia.vue'
import Projets from '@/views/Projets.vue'
import Formation from '@/views/Formation.vue'
import Construction from '@/views/construction.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      
      },
      {
        path: 'observatoire-ia',
        name: 'ObservatoireIa',
        component: ObservatoireIa
      },
      {
        path: 'kandia',
        name: 'Kandia',
        component: Kandia
      },
      {
        path: 'projets',
        name: 'Projets',
        component: Projets
      },
      {
        path: 'formation',
        name: 'Formation',
        component: Formation
      },
      {
        path: 'construction',
        name: 'Construction',
        component: Construction
      }
    ],
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})

// Bonus : titre dynamique de la page
router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ? `${title} — Maison de IA` : 'Maison de IA'
})

export default router