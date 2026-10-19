<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-800">
    <!-- ============================= -->
    <!-- En-tête / Titre de la page -->
    <!-- ============================= -->
    <section class="py-8 md:py-12 bg-white border-b border-gray-100">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6">
        <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Liste des Universités
        </h1>
        <p class="text-xs sm:text-sm text-gray-500">
          Universités publiques de Côte d'Ivoire
        </p>
      </div>
    </section>

    <!-- ============================= -->
    <!-- Grille des Universités -->
    <!-- ============================= -->
    <section class="py-10 md:py-16 bg-white flex-1">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Carte Université -->
          <div 
            v-for="(uni, index) in universities" 
            :key="index"
            class="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <!-- Nom de l'université -->
            <h3 class="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-6 pr-4">
              {{ uni.name }}
            </h3>

            <!-- Bas de carte : Flèche et Logo identique importé -->
            <div class="flex items-end justify-between">
              <RouterLink 
                :to="uni.link"
                class="text-[#ED6609] hover:translate-x-1 transition-transform duration-200 text-lg font-bold"
                aria-label="Voir les détails"
              >
                →
              </RouterLink>

              <div class="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                <img 
                  :src="uni.logo" 
                  :alt="uni.name" 
                  class="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- Section Bannière de bas de page -->
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
            <RouterLink 
              to="/construction" 
              class="inline-flex items-center justify-center gap-2 bg-white text-[#035E32] hover:bg-gray-100 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow transition-all"
            >
              <span>Prendre part à la révolution de l'IA</span>
              <span class="text-[#ED6609] font-bold">→</span>
            </RouterLink>

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
// --- IMPORT DU LOGO DANS LE SCRIPT ---
import upgcLogo from '@/assets/images/logokandia.png' // Remplacez par le nom exact de votre fichier image du logo UPGC

// --- LISTE DES UNIVERSITÉS PUBLIQUES (avec le même logo importé pour chacune) ---
const universities = [
  {
    name: 'Université Peleforo Gon Coulibaly de Korhogo (UPGC)',
    logo: upgcLogo,
    link: '/kandia-local/upgc'
  },
  {
    name: 'Université Peleforo Gon Coulibaly de Korhogo (UPGC)',
    logo: upgcLogo,
    link: '/kandia-local/upgc'
  },
  {
    name: 'Université Peleforo Gon Coulibaly de Korhogo (UPGC)',
    logo: upgcLogo,
    link: '/kandia-local/upgc'
  },
  {
    name: 'Université Peleforo Gon Coulibaly de Korhogo (UPGC)',
    logo: upgcLogo,
    link: '/kandia-local/upgc'
  },
  {
    name: 'Université Peleforo Gon Coulibaly de Korhogo (UPGC)',
    logo: upgcLogo,
    link: '/kandia-local/upgc'
  },
  {
    name: 'Université Peleforo Gon Coulibaly de Korhogo (UPGC)',
    logo: upgcLogo,
    link: '/kandia-local/upgc'
  },
  {
    name: 'Université Peleforo Gon Coulibaly de Korhogo (UPGC)',
    logo: upgcLogo,
    link: '/kandia-local/upgc'
  },
  {
    name: 'Université Peleforo Gon Coulibaly de Korhogo (UPGC)',
    logo: upgcLogo,
    link: '/kandia-local/upgc'
  },
  {
    name: 'Université Peleforo Gon Coulibaly de Korhogo (UPGC)',
    logo: upgcLogo,
    link: '/kandia-local/upgc'
  },
]
</script>