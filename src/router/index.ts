
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router'

// =====================================================
// LAYOUTS
// =====================================================
import Layout from '@/layouts/Layout.vue'
import Layout2 from '@/layouts/Layout2.vue'

// =====================================================
// PAGES PRINCIPALES — MAISON DE L'IA
// =====================================================
import Home from '@/views/Home.vue'
import ObservatoireIa from '@/views/ObservatoireIa.vue'
import Projets from '@/views/Projets.vue'
import Formation from '@/views/Formation.vue'
import Construction from '@/views/construction.vue'
import Equipe from '@/components/mia/Equipe.vue'
import Expert from '@/components/mia/Expert.vue'
import Livres from '@/components/publications/Livres.vue'
import Rapports from '@/components/publications/Rapports.vue'
import ArticlesScientifiques from '@/components/publications/ArticlesScientifiques.vue'

// =====================================================
// ESPACE KANDIA
// =====================================================
import Kandia from '@/views/Kandia.vue'
import Upgc from '@/components/Upgc.vue'
import ProjetsKandia from '@/components/kandia/Projets.vue'
import FormationsKandia from '@/components/kandia/Formations.vue'
import EventsKandia from '@/components/kandia/Events.vue'

// =====================================================
// COMPOSANTS DE L'OBSERVATOIRE IA
// =====================================================
import Analyse from '@/components/observatoireia/Analyse.vue'
import MiaIndex from '@/components/observatoireia/MiaIndex.vue'
import Comparaison from '@/components/observatoireia/Comparaison.vue'

// =====================================================
// CONFIGURATION DES ROUTES
// =====================================================
const routes: RouteRecordRaw[] = [
  // ---------------------------------------------------
  // SITE PRINCIPAL : MAISON DE L'IA
  // ---------------------------------------------------
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
        path: 'observatoire-ia/comparaison',
        name: 'Comparaison',
        component: Comparaison,
        meta: {
          title: 'Comparaison',
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
      {
        path: 'mia/equipe',
        name: 'Equipe',
        component: Equipe,
        meta: {
          title: 'Notre Équipe',
        },
      },
      {
        path: 'mia/experts',
        name: 'Experts',
        component: Expert,
        meta: {
          title: 'Nos Experts',
        },
      },
      {
        path: 'publications/livres',
        name: 'Livres',
        component: Livres,
        meta: {
          title: 'Nos Livres',
        },
      },
      {
        path: 'publications/rapports',
        name: 'Rapports',
        component: Rapports,
        meta: {
          title: 'Nos Rapports',
        },
      },
      {
        path: 'publications/articles-scientifiques',
        name: 'ArticlesScientifiques',
        component: ArticlesScientifiques,
        meta: {
          title: 'Articles Scientifiques',
        },
      }
    ],
  },

  // ---------------------------------------------------
  // ESPACE KANDIA : LAYOUT INDÉPENDANT
  // ---------------------------------------------------
  {
    path: '/kandia-local',
    component: Layout2,
    children: [
      {
        path: '',
        redirect: { name: 'Kandia' },
      },
      {
        path: 'kandia',
        name: 'Kandia',
        component: Kandia,
        meta: {
          title: 'Kandia',
        },
      },
      {
        path: 'upgc',
        name: 'Upgc',
        component: Upgc,
        meta: {
          title: 'UPGC',
        },
      },
      {
        path: 'projets-kandia',
        name: 'ProjetsKandia',
        component: ProjetsKandia,
        meta: {
          title: 'Projets Kandia',
        },
      },
      {
        path: 'formations-kandia',
        name: 'FormationsKandia',
        component: FormationsKandia,
        meta: {
          title: 'Formations Kandia',
        },
      },
      {
        path: 'evenements-kandia',
        name: 'EventsKandia',
        component: EventsKandia,
        meta: {
          title: 'Événements Kandia',
        },
      },
    ],
  },

  // ---------------------------------------------------
  // PAGE 404 — ROUTE INCONNUE
  // ---------------------------------------------------
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

// =====================================================
// CRÉATION DU ROUTEUR
// =====================================================
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  // Restaurer la position ou revenir en haut de page
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})

// =====================================================
// GESTION DU TITRE DES PAGES
// =====================================================
router.afterEach((to) => {
  const title = to.meta.title as string | undefined

  document.title = title
    ? `${title} — Maison de l'IA`
    : "Maison de l'IA"
})

// =====================================================
// EXPORT DU ROUTEUR
// =====================================================
export default router
