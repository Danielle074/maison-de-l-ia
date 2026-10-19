<template>
  <section class="min-h-screen bg-[#FDFBF7] dark:bg-slate-950 py-16 px-6 sm:px-12 lg:px-20 text-slate-900 dark:text-slate-100 font-sans">
    <div class="max-w-7xl mx-auto space-y-16">
      
      <!-- Titre de la section -->
      <div class="space-y-2">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Nos rapports
        </h2>
      </div>

      <!-- Grille des rapports -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="rapport in rapports"
          :key="rapport.id"
          class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-slate-100 dark:border-slate-800 p-4"
        >
          <!-- Vignette de couverture Vert Foncé avec Icône Document / Graphique -->
          <div class="h-48 w-full rounded-xl bg-[#035E38] flex items-center justify-center text-white">
            <FileBarChart class="w-16 h-16 stroke-[1.5]" />
          </div>

          <!-- Titre du rapport -->
          <div class="pt-5 pb-2 px-2 text-left">
            <h3 class="font-bold text-base text-slate-900 dark:text-white">
              {{ rapport.titre }}
            </h3>
          </div>
        </div>
      </div>

      <!-- Bouton "Voir plus" central -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-2.5 rounded-full text-sm inline-flex items-center gap-2 shadow-sm transition-all"
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

            <!-- Bouton secondaire -->
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

// Importation des icônes Lucide adaptées aux rapports
import { FileBarChart, ArrowRight } from 'lucide-vue-next'

// Interface TypeScript pour la structure d'un rapport
interface Rapport {
  id: string
  titre: string
}

// Données des rapports
const rapports = ref<Rapport[]>([
  { id: '1', titre: 'Titre du rapport' },
  { id: '2', titre: 'Titre du rapport' },
  { id: '3', titre: 'Titre du rapport' },
  { id: '4', titre: 'Titre du rapport' },
  { id: '5', titre: 'Titre du rapport' },
  { id: '6', titre: 'Titre du rapport' }
])
</script>