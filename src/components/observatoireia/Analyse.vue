<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-800">
    <!-- ============================= -->
    <!-- En-tête / Header de la page avec fond texturé -->
    <!-- ============================= -->
    <section class="relative w-full py-8 md:py-12 bg-white overflow-hidden border-b border-gray-100">
      <!-- Image d'arrière-plan texturée -->
      <div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img :src="headerBg" alt="Background pattern" class="w-full h-full object-cover" />
      </div>

      <div class="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6">
        <!-- Fil d'Ariane -->
        <nav class="flex items-center gap-2 text-xs sm:text-sm mb-4 text-gray-500 font-medium">
          <RouterLink to="/observatoire-ia" class="hover:text-[#ED6609] transition-colors">
            Observatoire IA
          </RouterLink>
          <span class="text-gray-400">›</span>
          <span class="text-[#ED6609]">Analyses</span>
        </nav>

        <!-- Titre principal -->
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Actualités sur l’IA
        </h1>
      </div>
    </section>

    <!-- ============================= -->
    <!-- Grille des articles / Analyses -->
    <!-- ============================= -->
    <section class="py-10 md:py-16 bg-white flex-1">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          <!-- Carte Article -->
          <article 
            v-for="(article, index) in articles" 
            :key="index"
            class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden p-4"
          >
            <!-- Image de l'article -->
            <div class="w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-gray-100 mb-4">
              <img 
                :src="article.image" 
                :alt="article.title" 
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <!-- Contenu textuel -->
            <div class="flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 class="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-2 line-clamp-2">
                  {{ article.title }}
                </h3>
                <p class="text-xs sm:text-sm text-gray-500 line-clamp-2">
                  {{ article.description }}
                </p>
              </div>

              <!-- Bouton / Lien "Lire l'article" -->
              <div class="pt-2">
                <RouterLink 
                  :to="article.link"
                  class="inline-block bg-[#ED6609] hover:bg-[#ED6609]/90 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm transition-colors"
                >
                  Lire l'article
                </RouterLink>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- ============================= -->
    <!-- Section CTA / Bannière de bas de page -->
    <!-- ============================= -->
    <section class="py-12 md:py-16 bg-white">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6">
        <div class="bg-[#ED6609] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          
          <div class="space-y-3 text-center md:text-left max-w-xl">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Bâtissons Ensemble l'Afrique Intelligente de Demain.
            </h2>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <!-- Bouton 1 avec flèche -->
            <RouterLink 
              to="/construction" 
              class="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow transition-all"
            >
              <span>Prendre part à la révolution de l'IA</span>
              <span class="text-[#ED6609] font-bold">→</span>
            </RouterLink>

            <!-- Bouton 2 contour -->
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

// Imports des images des 6 cartes d'articles (ajustez les chemins selon votre dossier assets)
import articleImg1 from '@/assets/images/photo-1.jpg'
import articleImg2 from '@/assets/images/photo-2.jpg'
import articleImg3 from '@/assets/images/photo-3.jpg'
import articleImg4 from '@/assets/images/photo-4.png'
import articleImg5 from '@/assets/images/photo-5.jpg'
import articleImg6 from '@/assets/images/photo-6.jpg'

// --- LISTE DES ARTICLES AVEC LEURS LIENS ---
const articles = [
  {
    title: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital Infrastructure Roadmap',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of',
    image: articleImg1,
    link: '/analyses/mirg-icair-2025-1'
  },
  {
    title: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital Infrastructure Roadmap',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of',
    image: articleImg2,
    link: '/analyses/mirg-icair-2025-2'
  },
  {
    title: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital Infrastructure Roadmap',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of',
    image: articleImg3,
    link: '/analyses/mirg-icair-2025-3'
  },
  {
    title: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital Infrastructure Roadmap',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of',
    image: articleImg4,
    link: '/analyses/mirg-icair-2025-4'
  },
  {
    title: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital Infrastructure Roadmap',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of',
    image: articleImg5,
    link: '/analyses/mirg-icair-2025-5'
  },
  {
    title: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital Infrastructure Roadmap',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of',
    image: articleImg6,
    link: '/analyses/mirg-icair-2025-6'
  },
]
</script>