<template>
  <div class="min-h-screen bg-[#FDFBF7] dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
    
    <!-- En-tête avec fond en filigrane ondulé -->
    <header
      class="relative bg-cover bg-center pt-10 pb-12 px-6 sm:px-12 lg:px-20 border-b border-slate-100 dark:border-slate-800"
      :style="{ backgroundImage: `url(${headerBgImg})` }"
    >
      <div class="max-w-7xl mx-auto space-y-4">
        
        <!-- Fil d'Ariane (Breadcrumb) avec liens cliquables -->
        <nav class="flex items-center gap-2 text-xs sm:text-sm font-medium">
          <router-link
            to="/observatoire"
            class="text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors"
          >
            Observatoire IA
          </router-link>
          
          <ChevronRight class="w-3.5 h-3.5 text-slate-400" />
          
          <router-link
            to="/mia-index"
            class="text-amber-500 font-semibold hover:underline"
          >
            MIA Index
          </router-link>
        </nav>

        <!-- Titre principal -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Comparaison des Pays Africains
        </h1>
      </div>
    </header>

    <!-- Contenu des Filtres et Sélections -->
    <main class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12 space-y-10">
      
      <!-- Sélection de l'année -->
      <div class="flex items-center gap-4">
        <label for="annee-select" class="text-sm font-medium text-slate-700 dark:text-slate-300">
          Année
        </label>
        <div class="relative">
          <select
            id="annee-select"
            v-model="anneeSelectionnee"
            class="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 pr-10 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
          >
            <option v-for="annee in annees" :key="annee" :value="annee">
              {{ annee }}
            </option>
          </select>
          <ChevronDown class="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <!-- Sélection des critères -->
      <div class="space-y-3">
        <div>
          <h2 class="text-base font-bold text-slate-900 dark:text-white">
            Sélection des critères
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Sélectionnez au moins 3 critères pour voir le graphique radar
          </p>
        </div>

        <!-- Badges / Pill Buttons de Sélection des Critères -->
        <div class="flex flex-wrap items-center gap-3">
          <button
            v-for="critere in criteres"
            :key="critere.id"
            @click="toggleCritere(critere.id)"
            :class="[
              'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm',
              criteresSelectionnes.includes(critere.id)
                ? 'bg-[#035E38] text-white shadow'
                : 'bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            ]"
          >
            {{ critere.libelle }}
          </button>
        </div>

        <!-- Message d'avertissement nombre minimum de critères -->
        <p class="text-xs font-medium text-slate-500 dark:text-slate-400">
          {{ criteresSelectionnes.length }} critères sélectionnés
          <span class="text-red-500 font-semibold">(Minimum 3 requis)</span>
        </p>
      </div>

      <!-- Sélection des pays -->
      <div class="space-y-3">
        <div>
          <h2 class="text-base font-bold text-slate-900 dark:text-white">
            Sélection des pays
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Sélectionnez au plus 5 pays pour la comparaison
          </p>
        </div>

        <!-- Selects déroulants pour le choix des pays -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- CORRECTION ICI : remplacement de (pays, index) par (_, index) -->
          <div
            v-for="(_, index) in paysSelectionnes"
            :key="index"
            class="relative"
          >
            <select
              v-model="paysSelectionnes[index]"
              class="w-full appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2.5 pr-10 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              <option value="" disabled selected>Sélectionner un pays</option>
              <option v-for="p in listePays" :key="p" :value="p">
                {{ p }}
              </option>
            </select>
            <ChevronDown class="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <!-- Bannière Call To Action (CTA) -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 p-8 sm:p-12 lg:p-16 text-white shadow-xl mt-72">
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

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Importation des icônes Lucide
import { ChevronRight, ChevronDown, ArrowRight } from 'lucide-vue-next'

// Importation de l'image de fond du header
import headerBgImg from '@/assets/images/headerdeobservatoire.png'

// Structure d'un critère
interface Critere {
  id: string
  libelle: string
}

// Données d'années
const annees = ref<number[]>([2026, 2025, 2024, 2023])
const anneeSelectionnee = ref<number>(2026)

// Liste des critères disponibles
const criteres = ref<Critere[]>([
  { id: '1', libelle: 'Infrastructures et calculs' },
  { id: '2', libelle: 'Infrastructures et calculs' },
  { id: '3', libelle: 'Infrastructures et calculs' },
  { id: '4', libelle: 'Infrastructures et calculs' }
])

// État des critères sélectionnés (par défaut le premier)
const criteresSelectionnes = ref<string[]>(['1'])

const toggleCritere = (id: string) => {
  const index = criteresSelectionnes.value.indexOf(id)
  if (index === -1) {
    criteresSelectionnes.value.push(id)
  } else {
    criteresSelectionnes.value.splice(index, 1)
  }
}

// Liste des pays disponibles
const listePays = ref<string[]>([
  'Côte d’Ivoire',
  'Sénégal',
  'Nigéria',
  'Kenya',
  'Afrique du Sud',
  'Maroc',
  'Égypte',
  'Cameroun',
  'Rwanda'
])

// Slots des 4 sélecteurs de pays
const paysSelectionnes = ref<string[]>(['', '', '', ''])
</script>