<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-800">
    <!-- ============================= -->
    <!-- En-tête / Hero Section avec fond texturé -->
    <!-- ============================= -->
    <section class="relative w-full py-10 md:py-16 bg-white overflow-hidden border-b border-gray-100">
      <!-- Image de fond avec motif texturé -->
      <div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img :src="headerBg" alt="Arrière-plan motif" class="w-full h-full object-cover" />
      </div>

      <div class="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6">
        <!-- Fil d'Ariane avec liens -->
        <nav class="flex items-center gap-2 text-xs sm:text-sm mb-6 text-gray-500 font-medium">
          <RouterLink to="/observatoire-ia" class="hover:text-[#ED6609] transition-colors">
            Observatoire IA
          </RouterLink>
          <span class="text-gray-400">›</span>
          <RouterLink to="/observatoire-ia/mia-index" class="text-[#ED6609] hover:underline">
            MIA index
          </RouterLink>
        </nav>

        <!-- Titre & Carte de l'Afrique -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <!-- Textes et Boutons CTA -->
          <div class="md:col-span-8 space-y-4">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Découvrez le classement des pays africains par données ouvertes et plus
            </h1>
            <p class="text-xs sm:text-sm text-gray-600 max-w-2xl">
              Explorez les performances des 54 pays africains avec notre carte interactive et nos outils de comparaison
            </p>

            <!-- Groupe de boutons d'actions -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <RouterLink
                to="/construction"
                class="bg-[#ED6609] hover:bg-[#ED6609]/90 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors shadow-sm"
              >
                Explorer la carte
              </RouterLink>

              <RouterLink
                to="/observatoire-ia/comparaison"
                class="bg-[#E08328] hover:bg-[#E08328]/90 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors shadow-sm"
              >
                Voir les comparaisons
              </RouterLink>

              <RouterLink
                to="/construction"
                class="bg-[#035E32] hover:bg-[#035E32]/90 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors shadow-sm"
              >
                Voir le classement
              </RouterLink>
            </div>
          </div>

          <!-- Illustration Carte de l'Afrique -->
          <div class="md:col-span-4 flex justify-center md:justify-end">
            <img
              :src="africaMap"
              alt="Carte de l'Afrique MIA Index"
              class="h-40 sm:h-48 md:h-56 w-auto object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- Section Critères d'évaluation -->
    <!-- ============================= -->
    <section class="py-12 md:py-16 bg-white flex-1">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6">
        
        <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
          Critères d'évaluation
        </h2>

        <!-- Grille des 9 critères -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(criterium, index) in criteria"
            :key="index"
            class="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 class="font-bold text-[#035E32] text-base mb-2">
                {{ criterium.title }}
              </h3>
              <p class="text-xs text-gray-500 leading-relaxed">
                {{ criterium.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Bouton Voir Plus -->
        <div class="mt-10 flex justify-center">
          <RouterLink
            to="/observatoire-ia/criteres"
            class="inline-flex items-center gap-2 bg-[#ED6609] hover:bg-[#ED6609]/90 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all"
          >
            <span>Voir plus</span>
            <span class="text-sm">→</span>
          </RouterLink>
        </div>

      </div>
    </section>

    <!-- ============================= -->
    <!-- Section Banner CTA de bas de page -->
    <!-- ============================= -->
    <section class="pb-12 md:pb-16 bg-white">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6">
        <div class="bg-[#ED6609] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          
          <div class="space-y-3 text-center md:text-left max-w-xl">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Bâtissons Ensemble l'Afrique Intelligente de Demain.
            </h2>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <!-- Bouton Blanc -->
            <RouterLink 
              to="/construction" 
              class="inline-flex items-center justify-center gap-2 bg-white text-[#035E32] hover:bg-gray-100 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow transition-all"
            >
              <span>Prendre part à la révolution de l'IA</span>
              <span class="text-[#ED6609] font-bold">→</span>
            </RouterLink>

            <!-- Bouton Contour -->
            <RouterLink 
              to="/construction" 
              class="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white/40 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all"
            >
              Laboratoire et Visions
            </RouterLink>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// --- IMPORTS DES IMAGES DANS LE SCRIPT ---
import headerBg from '@/assets/images/headerdeobservatoire.png'
import africaMap from '@/assets/images/cartedafrique.png'

// --- LISTE DES CRITÈRES D'ÉVALUATION ---
const criteria = [
  {
    title: 'Stabilité énergétique',
    description: '% de la population avec accès à l\'électricité. Prérequis absolu à toute infrastructure numérique et IA.'
  },
  {
    title: 'Abordabilité Internet',
    description: 'Coût d\'un forfait mobile 5 Go (USD). Score inversé : un prix bas donne un meilleur score.'
  },
  {
    title: 'Serveurs Internet sécurisés',
    description: 'Nombre de serveurs HTTPS par million d\'habitants. Proxy de la densité cloud et de la maturité réseau d\'un pays.'
  },
  {
    title: 'Cybersécurité (GCI)',
    description: 'Score ITU Global Cybersecurity Index. Mesure la résilience nationale face aux cybermenaces sur 100.'
  },
  {
    title: 'Maturité Économie Numérique',
    description: 'Existence d\'une loi sur le e-commerce (CNUCED). Grille qualitative : loi=1, projet=0,5, aucune=0.'
  },
  {
    title: 'Services en ligne (EGDI)',
    description: 'Score ONU sur la qualité des services publics numériques et la connectivité administrative.'
  },
  {
    title: 'Vision Stratégique IA',
    description: 'Score Oxford AI Readiness Index. Évalue l\'existence et la maturité d\'une politique IA nationale formelle.'
  },
  {
    title: 'Protection des données',
    description: 'Existence d\'une loi sur la protection des données (type RGPD). Grille CNUCED : loi=1, projet=0,5, aucune=0.'
  },
  {
    title: 'Open Data (ODIN)',
    description: 'Score Open Data Watch. Mesure l\'ouverture, la qualité et la couverture des données publiques nationales.'
  }
]
</script>