<template>
  <section class="min-h-screen bg-[#FDFBF7] dark:bg-slate-950 py-16 px-6 sm:px-12 lg:px-20 text-slate-900 dark:text-slate-100 font-sans">
    <div class="max-w-7xl mx-auto space-y-16">
      
      <!-- Titre de la section -->
      <div class="space-y-2">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Notre équipe
        </h2>
      </div>

      <!-- Grille des membres de l'équipe -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="membre in membres"
          :key="membre.id"
          class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-slate-100 dark:border-slate-800"
        >
          <!-- Conteneur de l'image -->
          <div class="h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img
              :src="membre.image"
              :alt="membre.nom"
              class="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Contenu explicatif & Titres -->
          <div class="p-6 text-center space-y-3 flex-1 flex flex-col justify-center items-center">
            <h3 class="font-black text-base sm:text-lg tracking-wide text-slate-900 dark:text-white uppercase">
              {{ membre.nom }}
            </h3>
            
            <!-- Ligne orange decorative sous le nom -->
            <div class="w-12 h-1 bg-amber-500 rounded-full"></div>
            
            <p class="text-sm font-medium text-slate-600 dark:text-slate-400">
              {{ membre.role }}
            </p>
          </div>
        </div>
      </div>

      <!-- Bannière CTA / Call To Action en bas -->
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

// Importation des images des membres de l'équipe
import photoCheick from '@/assets/images/bamba.png'
import photoArouna from '@/assets/images/arouna.png'
import photoThibault from '@/assets/images/thibault.png'
import photoKonan from '@/assets/images/konan.png'
import photoImane from '@/assets/images/imane.png'
import photoIlhame from '@/assets/images/ilhame.png'

// Interface TypeScript
interface MembreEquipe {
  id: string
  nom: string
  role: string
  image: string
}

// Données des membres
const membres = ref<MembreEquipe[]>([
  {
    id: '1',
    nom: 'CHEICK BAMBA SEKOU',
    role: 'Président',
    image: photoCheick
  },
  {
    id: '2',
    nom: 'AROUNA NDAM NJOYA',
    role: 'Parrain',
    image: photoArouna
  },
  {
    id: '3',
    nom: 'THIBAULT KOUAME',
    role: 'Parrain',
    image: photoThibault
  },
  {
    id: '4',
    nom: 'KONAN HERVE',
    role: 'Vice-Président',
    image: photoKonan
  },
  {
    id: '5',
    nom: 'IMANE HMIDOU',
    role: 'Sécrétaire générale',
    image: photoImane
  },
  {
    id: '6',
    nom: 'ILHAME EL FARISSI',
    role: 'Trésarières',
    image: photoIlhame
  }
])
</script>