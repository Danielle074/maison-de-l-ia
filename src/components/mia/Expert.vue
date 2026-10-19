<template>
  <section class="min-h-screen bg-[#FDFBF7] dark:bg-slate-950 py-16 px-6 sm:px-12 lg:px-20 text-slate-900 dark:text-slate-100 font-sans">
    <div class="max-w-7xl mx-auto space-y-16">
      
      <!-- Titre de la section -->
      <div class="space-y-2">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Nos experts
        </h2>
      </div>

      <!-- Grille des experts -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="expert in experts"
          :key="expert.id"
          class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-slate-100 dark:border-slate-800"
        >
          <!-- Conteneur de la photo -->
          <div class="h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img
              :src="expert.image"
              :alt="expert.nom"
              class="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Contenu des informations de l'expert -->
          <div class="p-6 text-left space-y-1.5 flex-1 flex flex-col justify-center">
            <h3 class="font-black text-base sm:text-lg tracking-wide text-slate-900 dark:text-white uppercase">
              {{ expert.nom }}
            </h3>
            
            <p class="text-sm font-semibold text-amber-500 dark:text-amber-400">
              {{ expert.titre }}
            </p>
            
            <p class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {{ expert.organisation }}
            </p>
          </div>
        </div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
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

// Importation des images des experts
import photoCheick from '@/assets/images/bamba.png'
import photoKouame from '@/assets/images/thibault.png'
import photoKone from '@/assets/images/kone.png'
import photoDanielle from '@/assets/images/danielle.png'
import photoBensaoud from '@/assets/images/bensaoud.png'
import photoTia from '@/assets/images/tia.png'

// Interface TypeScript pour un Expert
interface Expert {
  id: string
  nom: string
  titre: string
  organisation: string
  image: string
}

// Données des experts fidèles à l'image
const experts = ref<Expert[]>([
  {
    id: '1',
    nom: 'CHEICK BAMBA SEKOU',
    titre: 'Technologist',
    organisation: 'SCB SYSTEMS',
    image: photoCheick
  },
  {
    id: '2',
    nom: 'KOUAME SEVERIN',
    titre: 'Directeur Général',
    organisation: 'ITC',
    image: photoKouame
  },
  {
    id: '3',
    nom: 'KONE SIENDOU',
    titre: 'Expert IA',
    organisation: 'Orange Ci',
    image: photoKone
  },
  {
    id: '4',
    nom: 'DANIELLE ACHI YAO',
    titre: 'Directeur Exécutif',
    organisation: 'Université de Cocody',
    image: photoDanielle
  },
  {
    id: '5',
    nom: 'BENSAOUD RAJA',
    titre: 'Maître de Conférences',
    organisation: 'UPGC',
    image: photoBensaoud
  },
  {
    id: '6',
    nom: 'TIA FRANCK',
    titre: 'Technologist',
    organisation: 'SCB SYSTEMS',
    image: photoTia
  }
])
</script>