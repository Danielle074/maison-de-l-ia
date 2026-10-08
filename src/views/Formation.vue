<template>
  <div class="min-h-screen bg-[#FDFBF9] text-slate-800 font-sans pb-20">

    <!-- ============================= -->
    <!-- HEADER / HERO -->
    <!-- ============================= -->
    <header
      class="relative overflow-hidden border-b border-slate-100
             bg-cover bg-center bg-no-repeat
             py-16 md:py-20 px-6 lg:px-20"
      :style="{ backgroundImage: `url(${headerBg})` }"
    >
      <!-- Overlay dégradé pour lisibilité -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>

      <!-- Forme décorative lime -->
      <div class="absolute -top-20 -right-20 w-80 h-80 bg-lime-300/30 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">

        <!-- Texte -->
        <div class="space-y-5 max-w-2xl text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5
                      bg-lime-100 text-lime-900 rounded-full
                      text-xs font-semibold tracking-wide">
            <span class="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
            Développement des Compétences &amp; IA
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold
                     text-slate-900 tracking-tight leading-[1.1]">
            Catalogue des
            <span class="text-[#65A30D]">Formations</span>
          </h1>

          <p class="text-slate-600 max-w-xl text-base md:text-lg leading-relaxed">
            Renforcez vos capacités grâce à nos programmes certifiants en
            données ouvertes, intelligence artificielle et technologies
            émergentes.
          </p>

          <!-- Petits badges de confiance -->
          <div class="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
            <span class="inline-flex items-center gap-1.5 text-xs font-medium
                         text-slate-600 bg-white/70 backdrop-blur
                         px-3 py-1.5 rounded-full border border-slate-200">
              ✓ Certifiant
            </span>
            <span class="inline-flex items-center gap-1.5 text-xs font-medium
                         text-slate-600 bg-white/70 backdrop-blur
                         px-3 py-1.5 rounded-full border border-slate-200">
              ✓ 100% en ligne
            </span>
            <span class="inline-flex items-center gap-1.5 text-xs font-medium
                         text-slate-600 bg-white/70 backdrop-blur
                         px-3 py-1.5 rounded-full border border-slate-200">
              ✓ Mentorat inclus
            </span>
          </div>
        </div>

        <!-- Illustration Carte Afrique -->
        <div class="relative flex items-center justify-center
                    w-48 h-48 md:w-56 md:h-56
                    rounded-3xl bg-white/80 backdrop-blur
                    border border-dashed border-lime-400/70
                    shadow-[0_8px_30px_rgba(132,204,22,0.15)]
                    flex-shrink-0">
          <!-- Halo animé -->
          <div class="absolute inset-0 rounded-3xl bg-lime-300/20 blur-2xl"></div>

          <img
            :src="africaMap"
            alt="Afrique et Madagascar"
            class="relative w-full h-full object-contain p-4"
          />
        </div>

      </div>
    </header>


    <!-- ============================= -->
    <!-- MAIN -->
    <!-- ============================= -->
    <main class="max-w-7xl mx-auto px-6 lg:px-20 mt-12 space-y-12">

      <!-- ============================= -->
      <!-- KPIs -->
      <!-- ============================= -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="group relative bg-white p-5 md:p-6
                 rounded-2xl border border-slate-100
                 shadow-sm hover:shadow-lg hover:-translate-y-1
                 transition-all duration-300
                 flex flex-col justify-between overflow-hidden"
        >
          <!-- Barre colorée en haut -->
          <span
            class="absolute top-0 left-0 h-1 w-full
                   bg-gradient-to-r from-[#84CC16] to-[#65A30D]
                   scale-x-0 group-hover:scale-x-100
                   origin-left transition-transform duration-500"
          ></span>

          <span class="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
            {{ stat.label }}
          </span>

          <div class="text-3xl md:text-4xl font-extrabold text-[#65A30D] mt-3">
            {{ stat.value }}
          </div>
        </div>
      </div>


      <!-- ============================= -->
      <!-- RECHERCHE + FILTRES -->
      <!-- ============================= -->
      <div class="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm
                  flex flex-col md:flex-row items-center justify-between gap-4">

        <!-- Recherche -->
        <div class="relative w-full md:w-96">
          <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            v-model="searchQuery"
            placeholder="Rechercher une formation..."
            class="pl-11 h-11 rounded-full bg-slate-50 border-slate-200
                   focus:bg-white focus-visible:ring-[#84CC16]/40
                   transition-all"
          />
        </div>

        <!-- Filtres -->
        <div class="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
          <Button
            v-for="filter in filters"
            :key="filter"
            @click="selectedFilter = filter"
            class="rounded-full text-xs font-semibold px-4 py-2 h-9 whitespace-nowrap
                   transition-all duration-200"
            :class="selectedFilter === filter
              ? 'bg-[#84CC16] hover:bg-[#65A30D] text-white shadow-md shadow-lime-200'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'"
          >
            {{ filter }}
          </Button>
        </div>
      </div>


      <!-- ============================= -->
      <!-- TITRE SECTION -->
      <!-- ============================= -->
      <div class="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Liste des Formations
          </h2>
          <p class="text-sm text-slate-500 mt-1">
            <span class="font-semibold text-[#65A30D]">{{ filteredFormations.length }}</span>
            formation{{ filteredFormations.length > 1 ? 's' : '' }} disponible{{ filteredFormations.length > 1 ? 's' : '' }}
          </p>
        </div>

        <RouterLink
          to="/formations/toutes"
          class="text-sm font-semibold text-[#F28C00] hover:text-[#d97d00]
                 inline-flex items-center gap-1.5 transition-colors"
        >
          Voir tout
          <ArrowRight class="w-4 h-4" />
        </RouterLink>
      </div>


      <!-- ============================= -->
      <!-- GRILLE DE CARTES -->
      <!-- ============================= -->
      <div
        v-if="filteredFormations.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <article
          v-for="formation in filteredFormations"
          :key="formation.id"
          class="group bg-white rounded-2xl overflow-hidden
                 border border-slate-100 shadow-sm
                 hover:shadow-xl hover:-translate-y-1.5
                 transition-all duration-300
                 flex flex-col justify-between"
        >

          <!-- En-tête lime de la carte -->
          <div class="relative h-32 w-full
                      bg-gradient-to-br from-[#84CC16] to-[#65A30D]
                      p-5 flex flex-col justify-between overflow-hidden">

            <!-- Forme décorative -->
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>

            <span class="relative self-start text-[11px] font-bold
                         px-2.5 py-1 rounded-full
                         bg-white/25 text-white backdrop-blur-sm">
              {{ formation.category }}
            </span>

            <div class="relative flex items-center gap-2 text-white/95 text-xs font-medium">
              <Clock class="w-3.5 h-3.5" />
              <span>{{ formation.duration }}</span>
              <span class="opacity-60">•</span>
              <span>{{ formation.level }}</span>
            </div>
          </div>

          <!-- Corps -->
          <div class="p-6 flex-1 flex flex-col justify-between space-y-6">
            <div class="space-y-2.5">
              <h3 class="text-base font-bold text-slate-900
                         group-hover:text-[#65A30D] transition-colors
                         leading-snug">
                {{ formation.title }}
              </h3>
              <p class="text-xs text-slate-500 leading-relaxed">
                {{ formation.description }}
              </p>
            </div>

            <!-- Action -->
            <div class="pt-4 border-t border-slate-50 flex items-center justify-between">
              <span class="text-[11px] font-medium text-slate-400">
                Certificat inclus
              </span>

              <RouterLink
                :to="`/formations/${formation.id}`"
                class="inline-flex items-center gap-2 text-xs font-bold
                       text-[#F28C00] hover:text-[#d97d00] transition-all
                       group-hover:gap-3 duration-200"
              >
                <span>Joindre la formation</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </RouterLink>
            </div>
          </div>
        </article>
      </div>

      <!-- Aucun résultat -->
      <div
        v-else
        class="bg-white rounded-2xl border border-dashed border-slate-200
               py-16 px-6 text-center"
      >
        <div class="w-16 h-16 mx-auto rounded-full bg-lime-50
                    flex items-center justify-center mb-4">
          <Search class="w-6 h-6 text-[#84CC16]" />
        </div>
        <h3 class="text-base font-bold text-slate-800 mb-1">
          Aucune formation trouvée
        </h3>
        <p class="text-sm text-slate-500">
          Essayez de modifier votre recherche ou vos filtres.
        </p>
      </div>


      <!-- ============================= -->
      <!-- PAGINATION -->
      <!-- ============================= -->
      <div class="flex items-center justify-center gap-2 pt-8">
        <Button variant="outline" size="sm"
                class="rounded-full px-4 border-slate-200 hover:bg-slate-50">
          ← Précédent
        </Button>
        <Button size="sm"
                class="rounded-full bg-[#84CC16] hover:bg-[#65A30D] text-white px-4 shadow-md shadow-lime-200">
          1
        </Button>
        <Button variant="outline" size="sm"
                class="rounded-full px-4 border-slate-200 hover:bg-slate-50">
          2
        </Button>
        <Button variant="outline" size="sm"
                class="rounded-full px-4 border-slate-200 hover:bg-slate-50">
          3
        </Button>
        <Button variant="outline" size="sm"
                class="rounded-full px-4 border-slate-200 hover:bg-slate-50">
          Suivant →
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

        <!-- Formes décoratives -->
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
            Rejoignez des milliers de professionnels, chercheurs et
            entrepreneurs qui façonnent l'IA souveraine du continent.
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
import { ref, computed } from 'vue'

// Importation des images
import africaMap from '@/assets/images/cartedafrique.png'
import headerBg from '@/assets/images/headerdeobservatoire.png'

// Composants UI
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, ArrowRight, Clock } from 'lucide-vue-next'

// Statistiques
const stats = [
  { label: 'Formations Dispo.', value: '18+' },
  { label: 'Apprenants', value: '3 400+' },
  { label: 'Taux de réussite', value: '98%' },
  { label: 'Certifications', value: '12' }
]

// Filtres
const filters = ['Toutes', 'Data Science', 'IA & Machine Learning', 'Gouvernance Data']
const selectedFilter = ref('Toutes')
const searchQuery = ref('')

interface Formation {
  id: number
  title: string
  description: string
  category: string
  duration: string
  level: string
}

const formations = ref<Formation[]>([
  {
    id: 1,
    title: 'Gouvernance des Données Ouvertes',
    description:
      'Introduction aux principes fondamentaux de la gouvernance des données ouvertes et leur impact stratégique.',
    category: 'Gouvernance Data',
    duration: '6 semaines',
    level: 'Débutant'
  },
  {
    id: 2,
    title: 'Machine Learning Appliqué',
    description:
      'Maîtrisez les algorithmes de Machine Learning appliqués à la résolution de problématiques régionales.',
    category: 'IA & Machine Learning',
    duration: '8 semaines',
    level: 'Intermédiaire'
  },
  {
    id: 3,
    title: 'Analyse & Visualisation de Données',
    description:
      "Techniques avancées d'analyse de données publiques et de visualisation interactive pour la décision.",
    category: 'Data Science',
    duration: '4 semaines',
    level: 'Avancé'
  },
  {
    id: 4,
    title: 'Éthique & Protection des Données',
    description:
      'Éthique, protection des données à caractère personnel et cadres réglementaires africains.',
    category: 'Gouvernance Data',
    duration: '5 semaines',
    level: 'Débutant'
  },
  {
    id: 5,
    title: 'Deep Learning & NLP',
    description:
      'Développement de modèles de Deep Learning et traitement automatique du langage naturel (NLP).',
    category: 'IA & Machine Learning',
    duration: '10 semaines',
    level: 'Avancé'
  },
  {
    id: 6,
    title: 'Architectures Cloud Sécurisées',
    description:
      "Conception d'architectures cloud sécurisées pour l'hébergement de données de santé et d'éducation.",
    category: 'Data Science',
    duration: '6 semaines',
    level: 'Intermédiaire'
  }
])

const filteredFormations = computed(() => {
  return formations.value.filter(item => {
    const q = searchQuery.value.toLowerCase()
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    const matchesFilter =
      selectedFilter.value === 'Toutes' ||
      item.category === selectedFilter.value
    return matchesSearch && matchesFilter
  })
})
</script>

<style scoped>
/* Masquer la scrollbar sur les filtres horizontaux (mobile) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>