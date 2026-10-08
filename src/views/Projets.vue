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
      <!-- Overlay dégradé -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>

      <!-- Halo décoratif -->
      <div class="absolute -top-20 -right-20 w-80 h-80 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">

        <!-- Texte -->
        <div class="space-y-5 max-w-2xl text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5
                      bg-amber-100 text-amber-800 rounded-full
                      text-xs font-semibold tracking-wide">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Portfolio &amp; Initiatives
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold
                     text-slate-900 tracking-tight leading-[1.1]">
            Liste des
            <span class="text-[#007A3D]">Projets</span>
          </h1>

          <p class="text-slate-600 max-w-xl text-base md:text-lg leading-relaxed">
            Découvrez les projets technologiques, de recherche et
            d'innovation en cours développés pour l'Afrique de demain.
          </p>

          <!-- Badges -->
          <div class="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
            <span class="inline-flex items-center gap-1.5 text-xs font-medium
                         text-slate-600 bg-white/70 backdrop-blur
                         px-3 py-1.5 rounded-full border border-slate-200">
              ✓ 24 projets actifs
            </span>
            <span class="inline-flex items-center gap-1.5 text-xs font-medium
                         text-slate-600 bg-white/70 backdrop-blur
                         px-3 py-1.5 rounded-full border border-slate-200">
              ✓ 18 pays
            </span>
            <span class="inline-flex items-center gap-1.5 text-xs font-medium
                         text-slate-600 bg-white/70 backdrop-blur
                         px-3 py-1.5 rounded-full border border-slate-200">
              ✓ Open source
            </span>
          </div>
        </div>

        <!-- Illustration Carte Afrique -->
        <div class="relative flex items-center justify-center
                    w-48 h-48 md:w-56 md:h-56
                    rounded-3xl bg-white/80 backdrop-blur
                    border border-dashed border-amber-400/70
                    shadow-[0_8px_30px_rgba(242,140,0,0.15)]
                    flex-shrink-0">
          <div class="absolute inset-0 rounded-3xl bg-amber-300/20 blur-2xl"></div>

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
          <span
            class="absolute top-0 left-0 h-1 w-full
                   bg-gradient-to-r from-[#007A3D] to-[#F28C00]
                   scale-x-0 group-hover:scale-x-100
                   origin-left transition-transform duration-500"
          ></span>

          <span class="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
            {{ stat.label }}
          </span>

          <div class="text-3xl md:text-4xl font-extrabold text-[#007A3D] mt-3">
            {{ stat.value }}
          </div>
        </div>
      </div>


      <!-- ============================= -->
      <!-- RECHERCHE + FILTRES -->
      <!-- ============================= -->
      <div class="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm
                  flex flex-col md:flex-row items-center justify-between gap-4">

        <div class="relative w-full md:w-96">
          <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            v-model="searchQuery"
            placeholder="Rechercher un projet..."
            class="pl-11 h-11 rounded-full bg-slate-50 border-slate-200
                   focus:bg-white focus-visible:ring-[#007A3D]/30
                   transition-all"
          />
        </div>

        <div class="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
          <Button
            v-for="filter in filters"
            :key="filter"
            @click="selectedFilter = filter"
            class="rounded-full text-xs font-semibold px-4 py-2 h-9 whitespace-nowrap
                   transition-all duration-200"
            :class="selectedFilter === filter
              ? 'bg-[#007A3D] hover:bg-[#006130] text-white shadow-md shadow-emerald-200'
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
            Projets récents
          </h2>
          <p class="text-sm text-slate-500 mt-1">
            <span class="font-semibold text-[#007A3D]">{{ filteredProjects.length }}</span>
            projet{{ filteredProjects.length > 1 ? 's' : '' }} trouvé{{ filteredProjects.length > 1 ? 's' : '' }}
          </p>
        </div>

        <RouterLink
          to="/projets/tous"
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
        v-if="filteredProjects.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="group bg-white rounded-2xl overflow-hidden
                 border border-slate-100 shadow-sm
                 hover:shadow-xl hover:-translate-y-1.5
                 transition-all duration-300
                 flex flex-col justify-between"
        >

          <!-- Image Banner -->
          <div class="relative h-44 w-full bg-slate-900 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover
                     group-hover:scale-105 transition-transform duration-500
                     opacity-90"
            />

            <!-- Overlay dégradé pour lisibilité du badge -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            <!-- Badge statut -->
            <span
              class="absolute top-3 right-3 text-[11px] font-bold
                     px-3 py-1 rounded-full shadow-sm
                     backdrop-blur-sm inline-flex items-center gap-1.5"
              :class="{
                'bg-emerald-500/95 text-white': project.status === 'En cours',
                'bg-amber-500/95 text-white': project.status === 'En planification',
                'bg-blue-500/95 text-white': project.status === 'Terminé'
              }"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              {{ project.status }}
            </span>

            <!-- Catégorie en bas à gauche -->
            <span
              class="absolute bottom-3 left-3 text-[10px] font-bold uppercase
                     tracking-wider text-white/90
                     bg-white/10 backdrop-blur-sm
                     px-2.5 py-1 rounded-full"
            >
              {{ project.category }}
            </span>
          </div>

          <!-- Corps de la carte -->
          <div class="p-5 flex-1 flex flex-col justify-between space-y-5">
            <div class="space-y-2">
              <h3 class="text-base font-bold text-slate-900
                         group-hover:text-[#007A3D] transition-colors
                         leading-snug">
                {{ project.title }}
              </h3>

              <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">
                {{ project.description }}
              </p>

              <p class="text-[11px] text-slate-400 font-medium
                         inline-flex items-center gap-1.5 pt-1">
                <Calendar class="w-3 h-3" />
                {{ project.dateRange }}
              </p>
            </div>

            <!-- Bas de carte : Avatars & Membres -->
            <div class="pt-4 border-t border-slate-50
                        flex items-center justify-between">
              <div class="flex items-center -space-x-2">
                <Avatar
                  v-for="(member, idx) in project.members"
                  :key="idx"
                  class="w-8 h-8 border-2 border-white shadow-sm
                         hover:scale-110 hover:z-10 transition-transform"
                >
                  <AvatarImage :src="member.avatar" :alt="member.name" />
                  <AvatarFallback class="text-[10px] bg-slate-200 font-bold">
                    {{ member.initials }}
                  </AvatarFallback>
                </Avatar>

                <span
                  v-if="project.extraMembers > 0"
                  class="inline-flex items-center justify-center
                         w-8 h-8 rounded-full border-2 border-white
                         bg-slate-100 text-[10px] font-bold text-slate-500"
                >
                  +{{ project.extraMembers }}
                </span>
              </div>

              <RouterLink
                :to="`/projets/${project.id}`"
                class="inline-flex items-center gap-1.5
                       text-xs font-bold text-[#F28C00] hover:text-[#d97d00]
                       group-hover:gap-2.5 transition-all duration-200"
              >
                Détails
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
        <div class="w-16 h-16 mx-auto rounded-full bg-emerald-50
                    flex items-center justify-center mb-4">
          <Search class="w-6 h-6 text-[#007A3D]" />
        </div>
        <h3 class="text-base font-bold text-slate-800 mb-1">
          Aucun projet trouvé
        </h3>
        <p class="text-sm text-slate-500">
          Essayez de modifier votre recherche ou vos filtres.
        </p>
      </div>


      <!-- ============================= -->
      <!-- BOUTON VOIR PLUS -->
      <!-- ============================= -->
      <div class="flex justify-center pt-6">
        <Button
          as-child
          class="bg-[#F28C00] hover:bg-[#d97d00] text-white
                 rounded-full px-8 py-3 h-auto
                 font-semibold flex items-center gap-2
                 shadow-md hover:shadow-lg
                 transition-all hover:-translate-y-0.5"
        >
          <RouterLink to="/projets/tous">
            Voir plus de projets
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
            Contribuez à nos projets, proposez les vôtres et participez
            à la construction d'une IA souveraine pour le continent.
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
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Search, ArrowRight, Calendar } from 'lucide-vue-next'

// Statistiques
const stats = [
  { label: 'Projets Actifs', value: '24' },
  { label: 'Pays Impactés', value: '18' },
  { label: 'Contributeurs', value: '140+' },
  { label: 'Taux de Réussite', value: '94%' }
]

// Filtres
const filters = ['Tous', 'En cours', 'En planification', 'Terminé']
const selectedFilter = ref('Tous')
const searchQuery = ref('')

interface Member {
  name: string
  avatar: string
  initials: string
}

interface Project {
  id: number
  title: string
  description: string
  category: string
  dateRange: string
  status: 'En cours' | 'En planification' | 'Terminé'
  image: string
  members: Member[]
  extraMembers: number
}

// Image par défaut
const defaultProjectImage =
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Plateforme IA Santé Côte d\'Ivoire',
    description:
      'Système de pré-diagnostic pour les centres hospitaliers régionaux utilisant le deep learning.',
    category: 'IA Santé',
    dateRange: '1 Oct 2024 – 30 Oct 2026',
    status: 'En cours',
    image: defaultProjectImage,
    members: [
      { name: 'Alice', avatar: 'https://i.pravatar.cc/100?img=1', initials: 'AL' },
      { name: 'Bob', avatar: 'https://i.pravatar.cc/100?img=2', initials: 'BO' },
      { name: 'Charlie', avatar: 'https://i.pravatar.cc/100?img=3', initials: 'CH' }
    ],
    extraMembers: 2
  },
  {
    id: 2,
    title: 'Kand\'IA Local — Traduction Baoulé',
    description:
      'Modèle de langage open source entraîné sur les langues maternelles ivoiriennes.',
    category: 'NLP',
    dateRange: '1 Oct 2024 – 30 Oct 2026',
    status: 'En cours',
    image: defaultProjectImage,
    members: [
      { name: 'David', avatar: 'https://i.pravatar.cc/100?img=4', initials: 'DA' },
      { name: 'Emma', avatar: 'https://i.pravatar.cc/100?img=5', initials: 'EM' }
    ],
    extraMembers: 4
  },
  {
    id: 3,
    title: 'Smart Abidjan Trafic',
    description:
      'Gestion adaptative des feux tricolores et détection automatique des incidents routiers.',
    category: 'Smart City',
    dateRange: '1 Oct 2024 – 30 Oct 2026',
    status: 'En planification',
    image: defaultProjectImage,
    members: [
      { name: 'Frank', avatar: 'https://i.pravatar.cc/100?img=6', initials: 'FR' },
      { name: 'Grace', avatar: 'https://i.pravatar.cc/100?img=7', initials: 'GR' },
      { name: 'Hugo', avatar: 'https://i.pravatar.cc/100?img=8', initials: 'HU' }
    ],
    extraMembers: 1
  },
  {
    id: 4,
    title: 'AgriProject — Détection Moniliose',
    description:
      'Vision par ordinateur pour détecter les maladies du cacao 14 jours avant les signes visibles.',
    category: 'AgriTech',
    dateRange: '1 Oct 2024 – 30 Oct 2026',
    status: 'En cours',
    image: defaultProjectImage,
    members: [
      { name: 'Ian', avatar: 'https://i.pravatar.cc/100?img=9', initials: 'IA' },
      { name: 'Julie', avatar: 'https://i.pravatar.cc/100?img=10', initials: 'JU' }
    ],
    extraMembers: 3
  },
  {
    id: 5,
    title: 'Open Data Observatory CI',
    description:
      'Tableau de bord national de suivi des indicateurs de données ouvertes.',
    category: 'Gouvernance',
    dateRange: '1 Oct 2024 – 30 Oct 2026',
    status: 'Terminé',
    image: defaultProjectImage,
    members: [
      { name: 'Kevin', avatar: 'https://i.pravatar.cc/100?img=11', initials: 'KE' },
      { name: 'Laura', avatar: 'https://i.pravatar.cc/100?img=12', initials: 'LA' }
    ],
    extraMembers: 5
  },
  {
    id: 6,
    title: 'Formation IA pour Enseignants',
    description:
      'Programme national de montée en compétences des enseignants du secondaire à l\'IA.',
    category: 'Éducation',
    dateRange: '1 Oct 2024 – 30 Oct 2026',
    status: 'En cours',
    image: defaultProjectImage,
    members: [
      { name: 'Marc', avatar: 'https://i.pravatar.cc/100?img=13', initials: 'MA' },
      { name: 'Nina', avatar: 'https://i.pravatar.cc/100?img=14', initials: 'NI' }
    ],
    extraMembers: 2
  }
])

const filteredProjects = computed(() => {
  const q = searchQuery.value.toLowerCase()
  return projects.value.filter(project => {
    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.category.toLowerCase().includes(q)

    const matchesFilter =
      selectedFilter.value === 'Tous' ||
      project.status === selectedFilter.value

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

/* Tronquer les descriptions à 2 lignes */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>