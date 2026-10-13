<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-800">
    <!-- ============================= -->
    <!-- Header / Navbar -->
    <!-- ============================= -->
    <header class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div
        class="max-w-[1200px] mx-auto px-4 md:px-6
               h-16 sm:h-20
               flex items-center justify-between gap-3 sm:gap-4"
      >
        <!-- Logo MIA -->
        <RouterLink to="/" class="flex items-center shrink-0">
          <img
            :src="miaLogo"
            alt="MIA — La Maison de l'Intelligence Artificielle"
            class="h-9 sm:h-11 md:h-12 w-auto object-contain"
          />
        </RouterLink>

        <!-- Navigation Links -->
        <nav class="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <div
            v-for="link in navLinks"
            :key="link.name"
            class="relative group"
          >
            <RouterLink
              :to="link.href"
              class="flex items-center gap-1.5 transition-colors hover:text-[#ED6609] text-gray-700"
            >
              <span>{{ link.name }}</span>

              <ChevronDown
                v-if="link.hasDropdown && link.children?.length"
                class="w-4 h-4 text-gray-500 transition-transform duration-200 group-hover:rotate-180"
              />
            </RouterLink>

            <!-- Dropdown -->
            <div
              v-if="link.hasDropdown && link.children?.length"
              class="absolute left-0 top-full mt-2 w-56 rounded-lg border border-gray-100 bg-white shadow-lg
                     opacity-0 invisible translate-y-1
                     group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                     transition-all duration-200 z-50"
            >
              <ul class="py-2">
                <li v-for="child in link.children" :key="child.name">
                  <RouterLink
                    :to="child.href"
                    class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#ED6609] transition-colors"
                  >
                    {{ child.name }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <!-- CTA Button -->
        <div class="flex items-center space-x-4 shrink-0">
          <Button
            as-child
            class="bg-[#ED6609] hover:bg-[#ED6609]/90
                   text-white font-medium rounded-full
                   px-6 py-2.5 text-xs sm:text-sm shadow-sm transition-all"
          >
            <RouterLink to="/construction">Connexion</RouterLink>
          </Button>
        </div>
      </div>
    </header>

    <!-- ============================= -->
    <!-- Main Content Area -->
    <!-- ============================= -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- ============================= -->
    <!-- Footer -->
    <!-- ============================= -->
    <footer class="bg-green-900 text-white">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6 pt-14 pb-8">
        <!-- Grille principale -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <!-- Branding Column -->
          <div class="lg:col-span-4 space-y-5">
            <RouterLink to="/" class="inline-flex items-center">
              <img
                :src="miaLogo"
                alt="MIA — La Maison de l'Intelligence Artificielle"
                class="h-12 sm:h-14 w-auto object-contain brightness-0 invert"
              />
            </RouterLink>

            <p class="text-sm text-white leading-relaxed max-w-sm">
              La Maison de l'Intelligence Artificielle de Côte d'Ivoire.
              Un écosystème dédié à l'innovation, la recherche et le
              développement des talents en IA.
            </p>

            <!-- Réseaux sociaux -->
            <div class="flex items-center gap-3 pt-2">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.name"
                class="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ED6609]
                       flex items-center justify-center
                       text-gray-400 hover:text-white
                       transition-all duration-200 hover:scale-110"
              >
                <component :is="social.icon" class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div class="lg:col-span-2">
            <h4 class="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul class="space-y-3 text-sm">
              <li v-for="link in navLinks.slice(0, 4)" :key="link.name">
                <RouterLink
                  :to="link.href"
                  class="text-white hover:text-[#ED6609] transition-colors inline-flex items-center gap-1 group/link"
                >
                  <span class="w-0 group-hover/link:w-2 h-px bg-[#ED6609] transition-all duration-200"></span>
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Ressources -->
          <div class="lg:col-span-2">
            <h4 class="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Ressources
            </h4>
            <ul class="space-y-3 text-sm">
              <li v-for="link in navLinks.slice(4)" :key="link.name">
                <RouterLink
                  :to="link.href"
                  class="text-white hover:text-[#ED6609] transition-colors inline-flex items-center gap-1 group/link"
                >
                  <span class="w-0 group-hover/link:w-2 h-px bg-[#ED6609] transition-all duration-200"></span>
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="lg:col-span-4">
            <h4 class="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start gap-3 text-white">
                <MapPin class="w-4 h-4 mt-0.5 text-[#ED6609] shrink-0" />
                <span>Abidjan, Côte d'Ivoire</span>
              </li>
              <li class="flex items-start gap-3">
                <Mail class="w-4 h-4 mt-0.5 text-[#ED6609] shrink-0" />
                <a
                  href="mailto:contact@mia.ci"
                  class="text-white hover:text-[#ED6609] transition-colors"
                >
                  contact@mia.ci
                </a>
              </li>
              <li class="flex items-start gap-3">
                <Phone class="w-4 h-4 mt-0.5 text-[#ED6609] shrink-0" />
                <a
                  href="tel:+22500000000"
                  class="text-white hover:text-[#ED6609] transition-colors"
                >
                  +225 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Séparateur -->
        <div class="mt-10 pt-8 border-t border-white/10">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-xs text-white text-center sm:text-left">
              © {{ new Date().getFullYear() }} MIA Côte d'Ivoire. Tous droits réservés.
            </p>
            <div class="flex items-center gap-6 text-xs text-white">
              <RouterLink to="/construction" class="hover:text-[#ED6609] transition-colors">
                Mentions légales
              </RouterLink>
              <RouterLink to="/construction" class="hover:text-[#ED6609] transition-colors">
                Politique de confidentialité
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  ChevronDown,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-vue-next'

// --- IMPORTS DES LOGOS ---
import miaLogo from '@/assets/images/logomia.png'

// --- RÉSEAUX SOCIAUX ---
const socials = [
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'Twitter / X', href: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
]

// --- NAVIGATION ---
const navLinks = [
  {
    name: 'MIA Côte d’Ivoire',
    href: '/',
    hasDropdown: true,
    children: [
      { name: 'Notre équipe', href: '/notre-equipe' },
      { name: 'Nos experts', href: '/nos-experts' },
    ],
  },
  { name: 'Kand’IA local', href: '/kandia-local/kandia', hasDropdown: false },
  { name: 'Projets', href: '/projets', hasDropdown: false },
  { name: 'Publications', href: '/publications', hasDropdown: false },
  {
    name: 'Observatoire IA',
    href: '/observatoire-ia',
    hasDropdown: true,
    children: [
      { name: 'Analyse', href: '/observatoire-ia/analyse' },
      { name: 'MIA Index', href: '/observatoire-ia/mia-index' },
    ],
  },
  { name: 'Events', href: '/construction', hasDropdown: false },
  { name: 'Contact', href: '/construction', hasDropdown: false },
]
</script>