<template>
  <section class="min-h-screen bg-[#FDFBF7] dark:bg-slate-950 py-16 px-6 sm:px-12 lg:px-20 text-slate-900 dark:text-slate-100 font-sans">
    <div class="max-w-7xl mx-auto space-y-16">
      
      <!-- Titre de la section -->
      <div class="space-y-2">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Articles scientifiques
        </h2>
      </div>

      <!-- Grille des articles scientifiques -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="article in articles"
          :key="article.id"
          class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-slate-100 dark:border-slate-800 p-4"
        >
          <!-- Vignette Orange/Ambre avec Icône Flacon/Fiole Lucide -->
          <div class="h-48 w-full rounded-xl bg-[#EE8B00] flex items-center justify-center text-white">
            <FlaskConical class="w-16 h-16 stroke-[1.5]" />
          </div>

          <!-- Contenu de l'article -->
          <div class="pt-5 pb-2 px-2 text-left space-y-2 flex-1 flex flex-col justify-between">
            <div class="space-y-1.5">
              <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                {{ article.titre }}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {{ article.description }}
              </p>
            </div>

            <!-- Bouton "Lire l'article" -->
            <div class="pt-4">
              <button
                class="bg-[#EE8B00] hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-full text-xs transition-all shadow-sm"
              >
                Lire l'article
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bouton "Voir plus" central -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-[#EE8B00] hover:bg-amber-600 text-white font-medium px-6 py-2.5 rounded-full text-sm inline-flex items-center gap-2 shadow-sm transition-all"
        >
          <span>Voir plus</span>
          <ArrowRight class="w-4 h-4" />
        </button>
      </div>

      <!-- Bannière Call To Action (CTA) -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 p-8 sm:p-12 lg:p-16 text-white shadow-xl">
        <div class="max-w-3xl space-y-8 relative z-10">
          <h3 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Bâtissons Ensemble l'Afrique Intelligente de Demain.
          </h3>
          
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <!-- Bouton principal -->
            <button
              class="bg-white text-emerald-800 hover:bg-slate-100 font-semibold px-6 py-3.5 rounded-full text-sm transition-all shadow-md inline-flex items-center gap-2 group"
            >
              <span>Prendre part à la révolution de l'IA</span>
              <ArrowRight class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <!-- Bouton secondaire contourisé -->
            <button
              class="border border-white/80 hover:bg-white/10 text-white font-medium px-6 py-3.5 rounded-full text-sm transition-all"
            >
              Laboratoire et Visions
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Importation des icônes Lucide pour la science et les flèches
import { FlaskConical, ArrowRight } from 'lucide-vue-next'

// Interface TypeScript pour la structure d'un article scientifique
interface ArticleScientifique {
  id: string
  titre: string
  description: string
}

// Données des articles selon la maquette
const articles = ref<ArticleScientifique[]>([
  {
    id: '1',
    titre: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of'
  },
  {
    id: '2',
    titre: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of'
  },
  {
    id: '3',
    titre: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of'
  },
  {
    id: '4',
    titre: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of'
  },
  {
    id: '5',
    titre: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of'
  },
  {
    id: '6',
    titre: 'MIRG-ICAIR 2025: African AI Leaders Converge at UNILAG to Chart Sustainable Digital',
    description: 'UNILAG Hosts International AI and Robotics Conference The University of'
  }
])
</script>