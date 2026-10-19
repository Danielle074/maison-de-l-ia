<template>
  <div class="bg-white text-gray-800 min-h-screen">
    <section class="max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-16">

      <!-- ============================= -->
      <!-- Titre -->
      <!-- ============================= -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Liste des projets
      </h1>

      <!-- ============================= -->
      <!-- Grille de projets -->
      <!-- ============================= -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <article
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
        >
          <!-- Image du projet -->
          <div class="w-full aspect-[16/10] overflow-hidden bg-gray-100">
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Contenu -->
          <div class="p-5">
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-1">
              {{ project.name }}
            </h3>

            <p class="text-sm text-gray-500 mb-4">
              {{ project.date }}
            </p>

            <!-- Membres de l'équipe -->
            <div class="flex items-center gap-2">
              <div class="flex -space-x-2">
                <img
                  v-for="(member, i) in project.members.slice(0, 4)"
                  :key="i"
                  :src="member"
                  alt="Membre de l'équipe"
                  class="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
              </div>
              <span
                v-if="project.extraMembers > 0"
                class="text-xs text-gray-500 font-medium"
              >
                +{{ project.extraMembers }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- ============================= -->
      <!-- Bouton "Voir plus" -->
      <!-- ============================= -->
      <div class="flex justify-center mt-12 md:mt-16">
        <button
          type="button"
          class="inline-flex items-center gap-2
                 bg-[#ED6609] hover:bg-[#E0941B]
                 text-white font-semibold
                 rounded-xl px-6 py-3 text-sm
                 transition-colors shadow-sm"
        >
          Voir plus
          <ArrowRight class="w-4 h-4" />
        </button>
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

// --- IMPORTS DES IMAGES DES PROJETS ---
import projectImage from '@/assets/images/eventskandia-1.png'

// --- IMPORTS DES AVATARS DES MEMBRES ---
import avatar1 from '@/assets/images/photo-1.jpg'
import avatar2 from '@/assets/images/photo-2.jpg'
import avatar3 from '@/assets/images/photo-3.jpg'
import avatar4 from '@/assets/images/photo-4.png'

// --- DONNÉES DES PROJETS ---
const projectTemplate = {
  name: 'Project Name',
  date: '1 Oct 2025 - 30 Oct 2026',
  image: projectImage,
  members: [avatar1, avatar2, avatar3, avatar4],
  extraMembers: 1,
}

const projects = Array.from({ length: 6 }, () => ({ ...projectTemplate }))
</script>