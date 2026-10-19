<template>
  <div class="bg-white text-gray-800">
    <!-- ============================= -->
    <!-- Hero : grande image d'entête -->
    <!-- ============================= -->
    <section class="w-full">
      <img
        :src="heroUpgc"
        alt="Entrée de l'Université Peleforo GON COULIBALY"
        class="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
      />
    </section>

    <!-- ============================= -->
    <!-- Contenu principal -->
    <!-- ============================= -->
    <section class="max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-16">
      <!-- Titre -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        À propos de l’UPGC
      </h1>

      <!-- Bloc texte + image -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Colonne texte -->
        <div class="space-y-5 text-sm sm:text-base leading-relaxed text-gray-700 text-justify">
          <p>
            Créée au cours de l'année universitaire 1996-1997, par Décret N°
            96-614 du 09 Août 1996, l'ex-Unité Régionale de l'Enseignement
            Supérieur de Korhogo, rattachée à l'ex-Université de Bouaké
            (actuelle Université Alassane Ouattara), était un établissement
            public d'enseignement supérieur à vocation agropastorale pour la
            promotion du monde rural en Côte d'Ivoire. Sa création rentre
            dans le cadre de la politique de décentralisation initiée par le
            gouvernement ivoirien. Outre sa vocation agropastorale, sa
            mission s'est élargie au développement local et communautaire.
          </p>
        </div>

        <!-- Colonne image (amphithéâtre) -->
        <div class="w-full">
          <img
            :src="amphiUpgc"
            alt="Amphithéâtre de l'UPGC"
            class="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>

      <!-- Liste des directions -->
      <div class="mt-10 space-y-5 text-sm sm:text-base leading-relaxed text-gray-700">
        <p>
          L'URES a été dirigée par cinq universitaires de rang magistral. Ce sont dans l'ordre chronologique :
        </p>
        <ul class="space-y-1">
          <li v-for="(dir, i) in directions" :key="i">
            {{ dir }}
          </li>
        </ul>

        <p>
          Le 10 octobre 2012, l'ex-URES de Korhogo s'est muée en université de plein exercice et rebaptisée « Université Peleforo GON
          COULIBALY » (UPGC). Le Professeur COULIBALY Adama est le premier président de cette université jusqu'à la date du 10 juillet
          2023.
        </p>
        <p>
          Depuis le 10 juillet 2023, l'UPGC est dirigée par Professeure COULIBALY Aoua Sougo.
        </p>
        <p>
          L'Université Peleforo GON COULIBALY (UPGC) est une Institution créée par le décret N°2012-985 du 10 octobre 2012.
        </p>
      </div>

      <!-- ============================= -->
      <!-- Nos partenaires -->
      <!-- ============================= -->
      <div class="mt-16">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Nos partenaires
        </h2>

        <div class="flex flex-wrap items-center gap-6">
          <a
            v-for="partner in partners"
            :key="partner.name"
            :href="partner.href"
            target="_blank"
            rel="noopener noreferrer"
            class="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
          >
            <img
              :src="partner.logo"
              :alt="partner.name"
              class="h-16 sm:h-20 w-auto object-contain"
            />
          </a>
        </div>
      </div>

      <!-- ============================= -->
      <!-- Bannière CTA orange -->
      <!-- ============================= -->
      <div
        class="mt-16 rounded-2xl bg-[#ED6609] text-white
               px-6 sm:px-10 md:px-12 py-10 sm:py-12 md:py-14
               shadow-lg"
      >
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-6 max-w-2xl">
          Bâtissons Ensemble l'Afrique<br class="hidden sm:block" />
          Intelligente de Demain.
        </h3>

        <RouterLink
          to="/construction"
          class="inline-flex items-center gap-2
                 bg-white text-[#ED6609] font-semibold
                 rounded-full px-5 py-2.5 text-sm
                 hover:bg-gray-100 transition-colors"
        >
          Prendre part à la révolution de l'IA
          <ArrowRight class="w-4 h-4" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

// --- IMPORTS DES IMAGES ---
import heroUpgc from '@/assets/images/headerupgc.png'
import amphiUpgc from '@/assets/images/aproposugc.png'
import artciLogo from '@/assets/images/logoartci.png'

// --- DIRECTIONS (historique) ---
const directions = [
  'De 1996 à 2000 : Professeur DAGNOGO Mamadou',
  'De 2000 à 2005 : Professeur GOURÉNÉ Germain',
  'De 2005 à 2009 : Professeur YANGNI-ANGATÉ Koffi Hervé',
  'De 2009 à 2012 : Professeur ZIGUI Koléa',
  'De 2012 à 2023 : Professeur COULIBALY Adama',
]

// --- PARTENAIRES ---
const partners = [
  {
    name: 'ARTCI — Autorité de Régulation des Télécommunications de Côte d’Ivoire',
    href: 'https://www.artci.ci',
    logo: artciLogo,
  },
]
</script>