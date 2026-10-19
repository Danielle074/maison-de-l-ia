<template>
  <div class="min-h-screen bg-[#FDFBF9] text-slate-800 font-sans
              flex items-center justify-center
              px-6 py-16
              relative overflow-hidden">

    <!-- ============================= -->
    <!-- DÉCORATIONS DE FOND -->
    <!-- ============================= -->
    <div class="absolute -top-32 -right-32 w-96 h-96
                bg-orange-300/30 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -left-32 w-96 h-96
                bg-emerald-300/30 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2
                w-[600px] h-[600px]
                bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>

    <!-- ============================= -->
    <!-- CARTE PRINCIPALE -->
    <!-- ============================= -->
    <div class="relative z-10 max-w-3xl w-full
                text-center
                bg-white/70 backdrop-blur-md
                rounded-3xl
                border border-white/80
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                px-6 py-12 md:px-14 md:py-16">

      <!-- Logo MIA -->
      <RouterLink to="/" class="inline-flex items-center mb-8">
        <img
          :src="miaLogo"
          alt="MIA — La Maison de l'Intelligence Artificielle"
          class="h-14 md:h-16 w-auto object-contain mx-auto"
        />
      </RouterLink>

      <!-- Badge -->
      <div class="inline-flex items-center gap-2
                  px-4 py-1.5 mb-6
                  bg-amber-100 text-amber-800
                  rounded-full text-xs font-bold
                  tracking-wide uppercase">
      
        En construction
      </div>

      <!-- Icône animée (marteau / engrenage) -->
      <div class="relative flex items-center justify-center mb-8">
        <div class="absolute w-32 h-32 rounded-full
                    bg-gradient-to-br from-[#F28C00]/20 to-[#007A3D]/20
                    blur-2xl"></div>

        <div class="relative flex items-center justify-center
                    w-24 h-24 md:w-28 md:h-28
                    rounded-3xl
                    bg-gradient-to-br from-[#F28C00] to-[#d97d00]
                    shadow-lg shadow-orange-200/50
                    rotate-3 hover:rotate-0 transition-transform duration-500">
          <Hammer class="w-12 h-12 md:w-14 md:h-14 text-white
                        animate-[wiggle_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <!-- Titre -->
      <h1 class="text-3xl md:text-5xl lg:text-6xl
                 font-extrabold text-slate-900
                 tracking-tight leading-[1.1]
                 mb-5">
        Page en
        <span class="text-[#F28C00]">construction</span>
      </h1>

      <!-- Sous-titre -->
      <p class="text-slate-600 text-base md:text-lg
                leading-relaxed max-w-xl mx-auto mb-8">
        Nous préparons quelque chose de grand pour vous. Notre équipe
        travaille activement pour vous offrir une expérience à la hauteur
        de vos attentes. Revenez très bientôt !
      </p>

      <!-- Barre de progression (décorative) -->
      <div class="max-w-md mx-auto mb-8">
        <div class="flex items-center justify-between
                    text-xs font-semibold text-slate-500 mb-2">
          <span>Progression</span>
          <span class="text-[#F28C00]">72%</span>
        </div>
        <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div class="h-full w-[72%]
                      bg-gradient-to-r from-[#F28C00] to-[#007A3D]
                      rounded-full
                      relative
                      overflow-hidden">
            <div class="absolute inset-0
                        bg-gradient-to-r from-transparent via-white/40 to-transparent
                        animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-10">
        <Button
          as-child
          class="bg-[#F28C00] hover:bg-[#d97d00] text-white
                 rounded-full px-6 py-3 h-auto
                 font-semibold flex items-center gap-2
                 shadow-md hover:shadow-lg
                 transition-all hover:-translate-y-0.5"
        >
          <RouterLink to="/">
            <Home class="w-4 h-4" />
            Retour à l'accueil
          </RouterLink>
        </Button>

        <Button
          as-child
          variant="outline"
          class="border-2 border-[#007A3D] text-[#007A3D]
                 hover:bg-[#007A3D]/5
                 rounded-full px-6 py-3 h-auto
                 font-semibold flex items-center gap-2
                 transition-all hover:-translate-y-0.5"
        >
          <RouterLink to="/contact">
            <Mail class="w-4 h-4" />
            Nous contacter
          </RouterLink>
        </Button>
      </div>

      <!-- Séparateur -->
      <div class="flex items-center gap-4 mb-8">
        <div class="flex-1 h-px bg-slate-200"></div>
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Restez informé
        </span>
        <div class="flex-1 h-px bg-slate-200"></div>
      </div>

      <!-- Réseaux sociaux -->
      <div class="flex items-center justify-center gap-3">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener"
          :aria-label="social.name"
          class="group w-11 h-11 rounded-full
                 bg-white border border-slate-200
                 flex items-center justify-center
                 text-slate-500
                 hover:bg-[#F28C00] hover:text-white hover:border-[#F28C00]
                 hover:-translate-y-1
                 transition-all duration-300
                 shadow-sm hover:shadow-md"
        >
          <component :is="social.icon" class="w-4 h-4" />
        </a>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Hammer,
  Home,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-vue-next'

// Import du logo MIA
import miaLogo from '@/assets/images/logomia.png'

// Réseaux sociaux
const socials = [
  { name: 'Facebook', url: 'https://facebook.com', icon: Facebook },
  { name: 'Twitter / X', url: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'YouTube', url: 'https://youtube.com', icon: Youtube }
]
</script>

<style scoped>
/* Animation du marteau (wiggle) */
@keyframes wiggle {
  0%, 100% { transform: rotate(-10deg); }
  50%      { transform: rotate(10deg); }
}

/* Animation de brillance sur la barre de progression */
@keyframes shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>