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
        <RouterLink
          to="/"
          class="flex items-center shrink-0"
        >
          <img
            :src="miaLogo"
            alt="MIA — La Maison de l'Intelligence Artificielle"
            class="h-9 sm:h-11 md:h-12 w-auto object-contain"
          />
        </RouterLink>

        <!-- ============================= -->
        <!-- Navigation Desktop -->
        <!-- ============================= -->
        <nav class="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <RouterLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="transition-colors hover:text-[#ED6609]"
            :class="[
              link.active ? 'text-[#ED6609] font-semibold' : 'text-gray-700'
            ]"
          >
            {{ link.name }}
          </RouterLink>
        </nav>

        <!-- ============================= -->
        <!-- CTA Desktop + Burger Mobile -->
        <!-- ============================= -->
        <div class="flex items-center gap-3 shrink-0">
          <!-- CTA visible uniquement desktop -->
          <Button
            as-child
            class="hidden lg:inline-flex
                   bg-[#ED6609] hover:bg-[#ED6609]/90
                   text-white font-medium rounded-full
                   px-6 py-2.5 text-xs sm:text-sm shadow-sm transition-all"
          >
            <RouterLink to="/construction">Connexion</RouterLink>
          </Button>

          <!-- Burger Mobile -->
          <button
            type="button"
            class="lg:hidden inline-flex items-center justify-center
                   w-10 h-10 rounded-lg text-gray-700
                   hover:bg-gray-100 transition-colors"
            aria-label="Ouvrir le menu"
            @click="isMobileMenuOpen = true"
          >
            <Menu class="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>

    <!-- ============================= -->
    <!-- Drawer Mobile -->
    <!-- ============================= -->
    <!-- Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-[60] bg-black/50 lg:hidden"
        @click="isMobileMenuOpen = false"
      ></div>
    </Transition>

    <!-- Panneau latéral -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="isMobileMenuOpen"
        class="fixed top-0 right-0 z-[70] h-full w-[85%] max-w-sm
               bg-white shadow-2xl lg:hidden
               flex flex-col"
      >
        <!-- Header du drawer -->
        <div class="flex items-center justify-between px-5 h-16 border-b">
          <img
            :src="miaLogo"
            alt="MIA"
            class="h-9 w-auto object-contain"
          />
          <button
            type="button"
            class="inline-flex items-center justify-center
                   w-10 h-10 rounded-lg text-gray-700
                   hover:bg-gray-100 transition-colors"
            aria-label="Fermer le menu"
            @click="isMobileMenuOpen = false"
          >
            <X class="w-6 h-6" />
          </button>
        </div>

        <!-- Liens -->
        <nav class="flex-1 overflow-y-auto px-5 py-4">
          <ul class="space-y-1">
            <li v-for="link in navLinks" :key="link.name">
              <RouterLink
                :to="link.href"
                class="block px-3 py-3 rounded-lg text-sm font-medium
                       transition-colors"
                :class="[
                  link.active
                    ? 'bg-[#ED6609]/10 text-[#ED6609] font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#ED6609]'
                ]"
                @click="isMobileMenuOpen = false"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- CTA en bas du drawer -->
        <div class="p-5 border-t">
          <Button
            as-child
            class="w-full bg-[#ED6609] hover:bg-[#ED6609]/90
                   text-white font-medium rounded-full
                   px-6 py-3 text-sm shadow-sm transition-all"
          >
            <RouterLink
              to="/construction"
              @click="isMobileMenuOpen = false"
            >
              Connexion
            </RouterLink>
          </Button>
        </div>
      </aside>
    </Transition>

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
              <img
                :src="miaLogo"
                alt="MIA — La Maison de l'Intelligence Artificielle"
                class="h-12 sm:h-14 w-auto object-contain"
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
              <li v-for="link in navLinks.slice(0, 3)" :key="link.name">
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
              <li v-for="link in navLinks.slice(3)" :key="link.name">
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
import { ref, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-vue-next'

// --- IMPORT DU LOGO DANS LE SCRIPT ---
import miaLogo from '@/assets/images/logomia.png'

// --- ÉTAT DU MENU MOBILE ---
const isMobileMenuOpen = ref(false)

// Bloquer le scroll du body quand le menu est ouvert
watch(isMobileMenuOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

// --- LIENS DE NAVIGATION DU LAYOUT 2 ---
const navLinks = [
  { name: 'Notre Kand’IA', href: '/kandia', active: true },
  { name: 'Projets', href: '/kandia-local/projets-kandia', active: false },
  { name: 'Formations', href: '/kandia-local/formations-kandia', active: false },
  { name: 'Events', href: '/kandia-local/evenements-kandia', active: false },
  { name: 'Contact', href: '/construction', active: false },
]
</script>