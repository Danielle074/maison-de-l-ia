

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Layouts
import Layout from '@/layouts/Layout.vue'
import Layout2 from '@/layouts/Layout2.vue'

// Pages principales
import Home from '@/views/Home.vue'
import ObservatoireIa from '@/views/ObservatoireIa.vue'
import Projets from '@/views/Projets.vue'
import Formation from '@/views/Formation.vue'
import Construction from '@/views/construction.vue'
import Kandia from '@/views/Kandia.vue'

// Pages de l'Observatoire IA
import Analyse from '@/components/observatoireia/Analyse.vue'
import MiaIndex from '@/components/observatoireia/MiaIndex.vue'

const routes: RouteRecordRaw[] = [
  // Site principal : Maison de l'IA
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: 'Accueil',
        },
      },
      {
        path: 'observatoire-ia',
        name: 'ObservatoireIa',
        component: ObservatoireIa,
        meta: {
          title: 'Observatoire IA',
        },
      },
      {
        path: 'observatoire-ia/analyse',
        name: 'Analyse',
        component: Analyse,
        meta: {
          title: 'Analyse',
        },
      },
      {
        path: 'observatoire-ia/mia-index',
        name: 'MiaIndex',
        component: MiaIndex,
        meta: {
          title: 'MIA Index',
        },
      },
      {
        path: 'projets',
        name: 'Projets',
        component: Projets,
        meta: {
          title: 'Nos projets',
        },
      },
      {
        path: 'formation',
        name: 'Formation',
        component: Formation,
        meta: {
          title: 'Formations',
        },
      },
      {
        path: 'construction',
        name: 'Construction',
        component: Construction,
        meta: {
          title: 'En construction',
        },
      },
    ],
  },

  // Espace Kandia : layout indépendant
  {
    path: '/kandia-local',
    component: Layout2,
    children: [
      {
        path: '',
        redirect: '/kandia-local/kandia',
      },
      {
        path: 'kandia',
        name: 'Kandia',
        component: Kandia,
        meta: {
          title: 'Kandia',
        },
      },
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

// Titre dynamique de chaque page
router.afterEach((to) => {
  const title = to.meta.title as string | undefined

  document.title = title
    ? `${title} — Maison de l'IA`
    : "Maison de l'IA"
})

export default router
