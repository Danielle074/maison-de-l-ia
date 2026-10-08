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

        <!-- Logos (MIA + partenaire) -->
        <RouterLink
          to="/"
          class="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0"
        >
          <!-- Logo 1 : MIA -->
          <img
            :src="miaLogo"
            alt="MIA — La Maison de l'Intelligence Artificielle"
            class="h-9 sm:h-11 md:h-12 lg:h-14 w-auto object-contain"
          />

          <!-- Séparateur vertical (masqué sur très petit écran) -->
          <span
            class="hidden sm:block h-6 md:h-8 w-px bg-gray-200"
            aria-hidden="true"
          ></span>

          <!-- Logo 2 : Partenaire -->
          <img
            :src="partnerLogo"
            alt="Logo partenaire"
            class="h-8 sm:h-10 md:h-11 lg:h-12 w-auto object-contain"
          />
        </RouterLink>

        <!-- Navigation Links -->
        <nav class="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <RouterLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="transition-colors hover:text-[#ED6609] text-gray-700"
          >
            {{ link.name }}
          </RouterLink>
        </nav>

        <!-- CTA Button -->
        <div class="flex items-center space-x-4 shrink-0">
          <Button
            as-child
            class="bg-[#ED6609] hover:bg-[#ED6609]/90
                   text-white font-medium rounded-full
                   px-4 sm:px-6 py-2 text-xs sm:text-sm shadow-sm"
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
    <footer class="border-t bg-gray-50 text-gray-600">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

          <!-- Branding Column -->
          <div class="space-y-4">
            <RouterLink
              to="/"
              class="inline-flex items-center gap-3 sm:gap-4"
            >
              <!-- Logo 1 -->
              <img
                :src="miaLogo"
                alt="MIA — La Maison de l'Intelligence Artificielle"
                class="h-12 sm:h-14 w-auto object-contain"
              />

              <!-- Séparateur -->
              <span
                class="h-8 w-px bg-gray-200"
                aria-hidden="true"
              ></span>

              <!-- Logo 2 -->
              <img
                :src="partnerLogo"
                alt="Logo partenaire"
                class="h-10 sm:h-12 w-auto object-contain"
              />
            </RouterLink>

            <p class="text-xs text-gray-500">
              La Maison de l'Intelligence Artificielle de Côte d'Ivoire.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul class="space-y-2 text-sm">
              <li v-for="link in navLinks.slice(0, 4)" :key="link.name">
                <RouterLink
                  :to="link.href"
                  class="hover:text-[#ED6609] transition-colors"
                >
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Ressources</h4>
            <ul class="space-y-2 text-sm">
              <li v-for="link in navLinks.slice(4)" :key="link.name">
                <RouterLink
                  :to="link.href"
                  class="hover:text-[#ED6609] transition-colors"
                >
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Contact & Legal -->
          <div>
            <h4 class="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <p class="text-sm text-gray-500 mb-2">Abidjan, Côte d'Ivoire</p>
            <a
              href="mailto:contact@mia.ci"
              class="text-sm text-gray-500 hover:text-[#ED6609] transition-colors"
            >
              contact@mia.ci
            </a>
          </div>

        </div>

        <div class="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
          © {{ new Date().getFullYear() }} MIA Côte d'Ivoire. Tous droits réservés.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

// --- IMPORTS DES LOGOS ---
import miaLogo from '@/assets/images/logomia.png'
import partnerLogo from '@/assets/images/logokandia.png'

const navLinks = [
  { name: 'MIA Côte d’Ivoire', href: '/' },
  { name: 'Kand’IA local', href: '/kandia' },
  { name: 'Projets', href: '/projets' },
  { name: 'Formation', href: '/formation' },
  { name: 'Observatoire IA', href: '/observatoire-ia' },
  { name: 'Events', href: '/construction' },
  { name: 'Contact', href: '/construction' },
]
</script>