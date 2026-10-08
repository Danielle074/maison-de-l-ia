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

      <!-- Halo décoratif vert -->
      <div class="absolute -top-20 -right-20 w-80 h-80 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">

        <!-- Texte -->
        <div class="space-y-5 max-w-2xl text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5
                      bg-amber-100 text-amber-800 rounded-full
                      text-xs font-semibold tracking-wide">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Enseignement Supérieur &amp; Recherche
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold
                     text-slate-900 tracking-tight leading-[1.1]">
            Répertoire des
            <span class="text-[#007A3D]">Universités</span>
          </h1>

          <p class="text-slate-600 max-w-xl text-base md:text-lg leading-relaxed">
            Explorez la liste des institutions universitaires, leurs
            implantations régionales et leurs écosystèmes d'innovation.
          </p>

          <!-- Badges de confiance -->
          <div class="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
            <span class="inline-flex items-center gap-1.5 text-xs font-medium
                         text-slate-600 bg-white/70 backdrop-blur
                         px-3 py-1.5 rounded-full border border-slate-200">
              ✓ 18+ institutions
            </span>
            <span class="inline-flex items-center gap-1.5 text-xs font-medium
                         text-slate-600 bg-white/70 backdrop-blur
                         px-3 py-1.5 rounded-full border border-slate-200">
              ✓ 12 villes
            </span>
            <span class="inline-flex items-center gap-1.5 text-xs font-medium
                         text-slate-600 bg-white/70 backdrop-blur
                         px-3 py-1.5 rounded-full border border-slate-200">
              ✓ Réseau national
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

        <!-- Recherche -->
        <div class="relative w-full md:w-96">
          <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            v-model="searchQuery"
            placeholder="Rechercher une université, une ville..."
            class="pl-11 h-11 rounded-full bg-slate-50 border-slate-200
                   focus:bg-white focus-visible:ring-[#007A3D]/30
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
            Liste des Universités
          </h2>
          <p class="text-sm text-slate-500 mt-1">
            <span class="font-semibold text-[#007A3D]">{{ filteredUniversities.length }}</span>
            institution{{ filteredUniversities.length > 1 ? 's' : '' }} trouvée{{ filteredUniversities.length > 1 ? 's' : '' }}
          </p>
        </div>

        <RouterLink
          to="/universites/toutes"
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
        v-if="filteredUniversities.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <article
          v-for="university in filteredUniversities"
          :key="university.id"
          class="group relative bg-white rounded-2xl
                 border border-slate-100 shadow-sm
                 hover:shadow-xl hover:-translate-y-1.5
                 hover:border-[#007A3D]/30
                 transition-all duration-300
                 p-6 flex flex-col justify-between
                 overflow-hidden"
        >
          <!-- Bande verticale verte décorative -->
          <span
            class="absolute top-0 left-0 h-full w-1
                   bg-gradient-to-b from-[#007A3D] to-[#F28C00]
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-300"
          ></span>

          <!-- Contenu supérieur -->
          <div class="space-y-4">
            <div class="flex items-start justify-between gap-3">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1
                           text-[11px] font-bold rounded-md
                           bg-emerald-50 text-emerald-700
                           border border-emerald-100">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {{ university.type }}
              </span>

              <span class="text-xs text-slate-400 font-medium inline-flex items-center gap-1">
                <MapPin class="w-3 h-3" />
                {{ university.city }}
              </span>
            </div>

            <h3 class="text-base font-bold text-slate-900 leading-snug
                       group-hover:text-[#007A3D] transition-colors
                       pr-2">
              {{ university.name }}
            </h3>

            <p class="text-xs text-slate-500 leading-relaxed">
              {{ university.description }}
            </p>
          </div>

          <!-- Logo & Bouton Action -->
          <div class="flex items-end justify-between mt-8 pt-4 border-t border-slate-50">
            <RouterLink
              :to="`/universites/${university.id}`"
              class="inline-flex items-center gap-2 text-xs font-bold
                     text-[#F28C00] hover:text-[#d97d00]
                     group-hover:gap-3 transition-all duration-200"
            >
              <span>Découvrir</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </RouterLink>

            <div class="w-16 h-16 rounded-full bg-slate-50 p-2.5
                        border border-slate-100
                        flex items-center justify-center flex-shrink-0
                        group-hover:scale-105 group-hover:border-[#007A3D]/20
                        transition-all duration-300">
              <img
                :src="university.logo"
                :alt="university.name"
                class="w-full h-full object-contain"
              />
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
          Aucune université trouvée
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
                class="rounded-full bg-[#007A3D] hover:bg-[#006130] text-white px-4 shadow-md shadow-emerald-200">
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
            Collaborez avec les universités, les chercheurs et les
            innovateurs qui façonnent l'IA souveraine du continent.
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
import { Search, ArrowRight, MapPin } from 'lucide-vue-next'

// Statistiques
const stats = [
  { label: 'Universités', value: '18+' },
  { label: 'Villes Couvertes', value: '12' },
  { label: 'Programmes IA', value: '45+' },
  { label: 'Chercheurs', value: '1 200+' }
]

// Filtres
const filters = ['Toutes', 'Publiques', 'Privées', "Centres d'Excellence"]
const selectedFilter = ref('Toutes')
const searchQuery = ref('')

interface University {
  id: number
  name: string
  city: string
  type: string
  description: string
  logo: string
}

const universities = ref<University[]>([
  {
    id: 1,
    name: 'Université Peleforo Gon Coulibaly (UPGC)',
    city: 'Korhogo',
    type: 'Publique',
    description: 'Pôle universitaire du Nord ivoirien, acteur clé de la recherche en agronomie et sciences appliquées.',
    logo: africaMap
  },
  {
    id: 2,
    name: 'Université Félix Houphouët-Boigny',
    city: 'Abidjan',
    type: 'Publique',
    description: 'Plus ancienne université du pays, référence en lettres, sciences humaines et droit.',
    logo: africaMap
  },
  {
    id: 3,
    name: 'Université Nangui Abrogoua',
    city: 'Abidjan',
    type: 'Publique',
    description: 'Spécialisée en sciences de la nature, sciences et technologies des aliments.',
    logo: africaMap
  },
  {
    id: 4,
    name: 'INP-HB Yamoussoukro',
    city: 'Yamoussoukro',
    type: "Centres d'Excellence",
    description: 'Institut National Polytechnique — référence en ingénierie et technologies appliquées.',
    logo: africaMap
  },
  {
    id: 5,
    name: 'Université Alassane Ouattara',
    city: 'Bouaké',
    type: 'Publique',
    description: 'Deuxième pôle universitaire du pays, forte orientation scientifique et médicale.',
    logo: africaMap
  },
  {
    id: 6,
    name: 'Université Jean Lorougnon Guédé',
    city: 'Daloa',
    type: 'Publique',
    description: 'Université de l\'Ouest ivoirien, spécialisée en agroforesterie et environnement.',
    logo: africaMap
  },
  {
    id: 7,
    name: 'Université Virtuelle de Côte d\'Ivoire',
    city: 'Abidjan',
    type: 'Publique',
    description: 'Établissement 100% en ligne pour la formation continue et à distance.',
    logo: africaMap
  },
  {
    id: 8,
    name: 'Université Méthodiste de Côte d\'Ivoire',
    city: 'Abidjan',
    type: 'Privée',
    description: 'Université privée confessionnelle reconnue par l\'État, ouverte aux sciences et gestion.',
    logo: africaMap
  },
  {
    id: 9,
    name: 'Université Internationale de Grand-Bassam',
    city: 'Grand-Bassam',
    type: 'Privée',
    description: 'Institution privée tournée vers les relations internationales et le développement durable.',
    logo: africaMap
  }
])

// Filtrage : recherche + type
const filteredUniversities = computed(() => {
  const q = searchQuery.value.toLowerCase()
  return universities.value.filter(uni => {
    const matchesSearch =
      uni.name.toLowerCase().includes(q) ||
      uni.city.toLowerCase().includes(q) ||
      uni.description.toLowerCase().includes(q)

    const matchesFilter =
      selectedFilter.value === 'Toutes' ||
      uni.type === selectedFilter.value

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