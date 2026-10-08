<template>
  <div class="min-h-screen bg-[#FDFBF9] text-slate-800 font-sans pb-20">

    <!-- ============================= -->
    <!-- HEADER / HERO -->
    <!-- ============================= -->
    <header
      class="relative overflow-hidden
             bg-cover bg-center bg-no-repeat
             py-16 md:py-20 px-6 lg:px-20
             border-b border-slate-100"
      :style="{ backgroundImage: `url(${headerBg})` }"
    >
      <!-- Overlay dégradé -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>

      <!-- Halos décoratifs -->
      <div class="absolute -top-20 -right-20 w-80 h-80 bg-orange-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10
                  flex flex-col lg:flex-row items-center justify-between gap-10">

        <!-- Texte + CTA -->
        <div class="max-w-2xl space-y-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5
                      bg-orange-100 text-orange-800 rounded-full
                      text-xs font-semibold tracking-wide
                      mx-auto lg:mx-0">
            <span class="w-1.5 h-1.5 rounded-full bg-[#F28C00]"></span>
            Observatoire IA — Afrique
          </div>

          <h1 class="text-3xl md:text-5xl lg:text-[56px] font-extrabold
                     text-slate-900 leading-[1.08] tracking-tight">
            Découvrez le classement des pays africains par
            <span class="text-[#F28C00]">données ouvertes</span>
            et plus
          </h1>

          <p class="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Explorez les performances des 54 pays africains grâce à notre
            carte interactive et nos outils de comparaison.
          </p>

          <!-- CTA -->
          <div class="flex flex-wrap items-center gap-3 pt-2 justify-center lg:justify-start">
            <Button
              as-child
              class="bg-[#F28C00] hover:bg-[#d97d00] text-white
                     rounded-full px-6 py-2.5 h-auto
                     font-medium shadow-sm hover:shadow-md
                     transition-all hover:-translate-y-0.5"
            >
              <RouterLink to="/observatoire/carte">
                <MapIcon class="w-4 h-4 mr-2" />
                Explorer la carte
              </RouterLink>
            </Button>

            <Button
              as-child
              class="bg-[#F28C00] hover:bg-[#d97d00] text-white
                     rounded-full px-6 py-2.5 h-auto
                     font-medium shadow-sm hover:shadow-md
                     transition-all hover:-translate-y-0.5"
            >
              <RouterLink to="/observatoire/comparaisons">
                <BarChart3 class="w-4 h-4 mr-2" />
                Voir les comparaisons
              </RouterLink>
            </Button>

            <Button
              as-child
              class="bg-[#007A3D] hover:bg-[#006331] text-white
                     rounded-full px-6 py-2.5 h-auto
                     font-medium shadow-sm hover:shadow-md
                     transition-all hover:-translate-y-0.5"
            >
              <RouterLink to="/observatoire/classement">
                <Trophy class="w-4 h-4 mr-2" />
                Voir le classement
              </RouterLink>
            </Button>
          </div>
        </div>

        <!-- Illustration carte Afrique -->
        <div class="relative flex flex-col items-center justify-center
                    w-56 h-56 md:w-64 md:h-64 flex-shrink-0">
          <div class="absolute inset-0 rounded-full bg-orange-300/30 blur-3xl"></div>

          <img
            :src="africaMap"
            alt="Carte de l'Afrique et Madagascar"
            class="relative w-full h-full object-contain
                   drop-shadow-[0_10px_30px_rgba(242,140,0,0.25)]"
          />
        </div>

      </div>
    </header>


    <!-- ============================= -->
    <!-- SECTION CRITÈRES -->
    <!-- ============================= -->
    <main class="max-w-7xl mx-auto px-6 lg:px-20 mt-20">

      <!-- Titre -->
      <div class="text-center mb-14">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5
                    bg-emerald-50 text-emerald-700 rounded-full
                    text-xs font-semibold tracking-wide mb-4
                    border border-emerald-100">
          <span class="w-1.5 h-1.5 rounded-full bg-[#007A3D]"></span>
          9 indicateurs clés
        </div>

        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Critères d'<span class="text-[#007A3D]">évaluation</span>
        </h2>

        <p class="text-slate-500 text-sm md:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
          Notre méthodologie s'appuie sur des sources internationales
          reconnues (ITU, ONU, CNUCED, Oxford, Open Data Watch) pour
          mesurer la maturité numérique et IA de chaque pays.
        </p>
      </div>

      <!-- Grille des critères -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <article
          v-for="(item, index) in criteria"
          :key="item.id"
          class="group relative bg-white rounded-2xl
                 border border-slate-100 shadow-sm
                 hover:shadow-xl hover:-translate-y-1.5
                 hover:border-[#F28C00]/30
                 transition-all duration-300
                 p-6 flex flex-col justify-between
                 overflow-hidden"
        >
          <!-- Bande verticale orange décorative -->
          <span
            class="absolute top-0 left-0 h-full w-1
                   bg-gradient-to-b from-[#F28C00] to-[#007A3D]
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-300"
          ></span>

          <!-- Numéro en filigrane -->
          <span
            class="absolute top-3 right-4
                   text-5xl font-black text-slate-100
                   group-hover:text-[#F28C00]/10
                   transition-colors duration-300
                   select-none pointer-events-none leading-none"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <!-- Contenu -->
          <div class="relative space-y-3 pr-10">
            <!-- Icône + numéro badge -->
            <div class="flex items-center gap-3">
              <span
                class="inline-flex items-center justify-center
                       w-9 h-9 rounded-xl
                       bg-orange-50 text-[#F28C00]
                       group-hover:bg-[#F28C00] group-hover:text-white
                       transition-all duration-300"
              >
                <component :is="item.icon" class="w-4 h-4" />
              </span>

              <span class="text-[11px] font-bold uppercase tracking-wider
                           text-slate-400">
                Critère {{ String(index + 1).padStart(2, '0') }}
              </span>
            </div>

            <h3 class="text-base font-bold text-slate-900
                       group-hover:text-[#F28C00] transition-colors
                       leading-snug">
              {{ item.title }}
            </h3>

            <p class="text-sm text-slate-600 leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <!-- Pied de carte -->
          <div class="relative mt-5 pt-4 border-t border-slate-50
                      flex items-center justify-between">
            <span class="text-[11px] font-medium text-slate-400">
              {{ item.source }}
            </span>

            <RouterLink
              :to="`/observatoire/criteres/${item.id}`"
              class="inline-flex items-center gap-1.5
                     text-xs font-bold text-[#F28C00] hover:text-[#d97d00]
                     group-hover:gap-2.5 transition-all duration-200"
            >
              En savoir plus
              <ArrowRight class="w-3.5 h-3.5" />
            </RouterLink>
          </div>
        </article>
      </div>

      <!-- Bouton Voir plus -->
      <div class="flex justify-center mt-12">
        <Button
          as-child
          class="bg-[#F28C00] hover:bg-[#d97d00] text-white
                 rounded-full px-8 py-3 h-auto
                 font-semibold flex items-center gap-2
                 shadow-md hover:shadow-lg
                 transition-all hover:-translate-y-0.5"
        >
          <RouterLink to="/observatoire/criteres">
            Voir tous les critères
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </Button>
      </div>

    </main>


    <!-- ============================= -->
    <!-- CTA FINAL ORANGE -->
    <!-- ============================= -->
    <section class="max-w-7xl mx-auto px-6 lg:px-20 mt-24">
      <div class="relative overflow-hidden
                  bg-gradient-to-br from-[#E67300] via-[#F28C00] to-[#d97d00]
                  rounded-3xl p-8 md:p-14
                  text-white shadow-2xl shadow-orange-200/50">

        <div class="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
        <div class="absolute -bottom-32 -left-16 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        <div class="relative z-10 flex flex-col space-y-8 max-w-4xl">
          <div class="inline-flex items-center gap-2 self-start
                      px-3.5 py-1.5 bg-white/15 backdrop-blur
                      rounded-full text-xs font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            Rejoignez le mouvement
          </div>

          <h2 class="text-3xl md:text-5xl lg:text-6xl font-extrabold
                     leading-[1.1] tracking-tight">
            Bâtissons Ensemble l'Afrique
            <span class="block md:inline">Intelligente de Demain.</span>
          </h2>

          <p class="text-white/85 text-base md:text-lg max-w-2xl leading-relaxed">
            Contribuez à l'observatoire, partagez vos données et
            participez à la construction d'une IA souveraine pour
            le continent.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <Button
              as-child
              class="bg-white text-[#007A3D] hover:bg-slate-100
                     rounded-full px-7 py-3 h-auto
                     font-semibold flex items-center gap-2
                     shadow-lg hover:shadow-xl transition-all
                     hover:-translate-y-0.5"
            >
              <RouterLink to="/rejoindre">
                Prendre part à la révolution de l'IA
                <ArrowRight class="w-4 h-4" />
              </RouterLink>
            </Button>

            <Button
              as-child
              variant="outline"
              class="border-2 border-white text-white hover:bg-white/10
                     bg-transparent rounded-full px-7 py-3 h-auto
                     font-semibold transition-all hover:-translate-y-0.5"
            >
              <RouterLink to="/laboratoire">
                Laboratoire et Visions
              </RouterLink>
            </Button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// Importation des images
import africaMap from '@/assets/images/cartedafrique.png'
import headerBg from '@/assets/images/headerdeobservatoire.png'

// Composants UI
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Map as MapIcon,
  BarChart3,
  Trophy,
  Zap,
  Wifi,
  Server,
  ShieldCheck,
  ShoppingCart,
  Globe,
  Brain,
  Lock,
  Database
} from 'lucide-vue-next'

// Interface pour les critères
interface Criterion {
  id: number
  title: string
  description: string
  source: string
  icon: any
}

// Liste des critères
const criteria: Criterion[] = [
  {
    id: 1,
    title: 'Stabilité énergétique',
    description:
      "% de la population avec accès à l'électricité. Prérequis absolu à toute infrastructure numérique et IA.",
    source: 'Banque Mondiale',
    icon: Zap
  },
  {
    id: 2,
    title: 'Abordabilité Internet',
    description:
      "Coût d'un forfait mobile 5 Go (USD). Score inversé : un prix bas donne un meilleur score.",
    source: 'ITU',
    icon: Wifi
  },
  {
    id: 3,
    title: 'Serveurs Internet sécurisés',
    description:
      "Nombre de serveurs HTTPS par million d'habitants. Proxy de la densité cloud et de la maturité réseau d'un pays.",
    source: 'Banque Mondiale',
    icon: Server
  },
  {
    id: 4,
    title: 'Cybersécurité (GCI)',
    description:
      "Score ITU Global Cybersecurity Index. Mesure la résilience nationale face aux cybermenaces sur 100.",
    source: 'ITU',
    icon: ShieldCheck
  },
  {
    id: 5,
    title: 'Maturité Économie Numérique',
    description:
      "Existence d'une loi sur le e-commerce (CNUCED). Grille qualitative : loi=1, projet=0.5, aucune=0.",
    source: 'CNUCED',
    icon: ShoppingCart
  },
  {
    id: 6,
    title: 'Services en ligne (EGDI)',
    description:
      "Score ONU sur la qualité des services publics numériques et la connectivité administrative.",
    source: 'ONU',
    icon: Globe
  },
  {
    id: 7,
    title: 'Vision Stratégique IA',
    description:
      "Score Oxford AI Readiness Index. Évalue l'existence et la maturité d'une politique IA nationale formelle.",
    source: 'Oxford Insights',
    icon: Brain
  },
  {
    id: 8,
    title: 'Protection des données',
    description:
      "Existence d'une loi sur la protection des données (type RGPD). Grille CNUCED : loi=1, projet=0.5, aucune=0.",
    source: 'CNUCED',
    icon: Lock
  },
  {
    id: 9,
    title: 'Open Data (ODIN)',
    description:
      "Score Open Data Watch. Mesure l'ouverture, la qualité et la couverture des données publiques nationales.",
    source: 'Open Data Watch',
    icon: Database
  }
]
</script>

<style scoped>
/* Styles additionnels si nécessaire */
</style>