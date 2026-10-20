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
        <!-- Logos MIA + ARTCI -->
        <RouterLink to="/" class="flex items-center gap-3 sm:gap-4 shrink-0">
          <img
            :src="miaLogo"
            alt="MIA — La Maison de l'Intelligence Artificielle"
            class="h-9 sm:h-11 md:h-12 w-auto object-contain"
          />
          
          <!-- Séparateur visuel (optionnel mais propre) -->
          <div class="h-6 sm:h-8 w-px bg-gray-200"></div>

          <img
            :src="artciLogo"
            alt="ARTCI — Autorité de Régulation des Télécommunications"
            class="h-7 sm:h-9 md:h-10 w-auto object-contain"
          />
        </RouterLink>

        <!-- ============================= -->
        <!-- Navigation Desktop -->
        <!-- ============================= -->
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

            <!-- Dropdown Desktop -->
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
        <!-- Header du drawer avec les deux logos -->
        <div class="flex items-center justify-between px-5 h-16 border-b">
          <div class="flex items-center gap-2">
            <img
              :src="miaLogo"
              alt="MIA"
              class="h-8 w-auto object-contain"
            />
            <div class="h-5 w-px bg-gray-200"></div>
            <img
              :src="artciLogo"
              alt="ARTCI"
              class="h-6 w-auto object-contain"
            />
          </div>
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
              <!-- Lien avec sous-menu (accordéon) -->
              <template v-if="link.hasDropdown && link.children?.length">
                <button
                  type="button"
                  class="w-full flex items-center justify-between
                         px-3 py-3 rounded-lg text-left text-sm font-medium
                         text-gray-700 hover:bg-gray-50 hover:text-[#ED6609]
                         transition-colors"
                  @click="toggleMobileSubmenu(link.name)"
                >
                  <span>{{ link.name }}</span>
                  <ChevronDown
                    class="w-4 h-4 text-gray-500 transition-transform duration-200"
                    :class="{ 'rotate-180': openMobileSubmenu === link.name }"
                  />
                </button>

                <!-- Sous-menu -->
                <Transition
                  enter-active-class="transition-all duration-200 overflow-hidden"
                  enter-from-class="max-h-0 opacity-0"
                  enter-to-class="max-h-96 opacity-100"
                  leave-active-class="transition-all duration-200 overflow-hidden"
                  leave-from-class="max-h-96 opacity-100"
                  leave-to-class="max-h-0 opacity-0"
                >
                  <ul
                    v-if="openMobileSubmenu === link.name"
                    class="mt-1 ml-3 pl-3 border-l-2 border-[#ED6609]/30 space-y-1"
                  >
                    <li v-for="child in link.children" :key="child.name">
                      <RouterLink
                        :to="child.href"
                        class="block px-3 py-2 rounded-md text-sm
                               text-gray-600 hover:bg-gray-50 hover:text-[#ED6609]
                               transition-colors"
                        @click="isMobileMenuOpen = false"
                      >
                        {{ child.name }}
                      </RouterLink>
                    </li>
                  </ul>
                </Transition>
              </template>

              <!-- Lien simple -->
              <RouterLink
                v-else
                :to="link.href"
                class="block px-3 py-3 rounded-lg text-sm font-medium
                       text-gray-700 hover:bg-gray-50 hover:text-[#ED6609]
                       transition-colors"
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
    <footer class="bg-green-900 text-white">
      <div class="max-w-[1200px] mx-auto px-4 md:px-6 pt-14 pb-8">
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
import { ref, watch } from 'vue'
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
  Menu,
  X,
} from 'lucide-vue-next'

// --- IMPORTS DES LOGOS ---
import miaLogo from '@/assets/images/logomia.png'
import artciLogo from '@/assets/images/logoartci.png' // <--- AJOUT ICI

// --- ÉTAT DU MENU MOBILE ---
const isMobileMenuOpen = ref(false)
const openMobileSubmenu = ref<string | null>(null)

const toggleMobileSubmenu = (name: string) => {
  openMobileSubmenu.value = openMobileSubmenu.value === name ? null : name
}

// Bloquer le scroll du body quand le menu est ouvert
watch(isMobileMenuOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

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
      { name: 'Notre équipe', href: '/mia/equipe' },
      { name: 'Nos experts', href: '/mia/experts' },
    ],
  },
  { name: 'Kand’IA local', href: '/kandia-local/kandia', hasDropdown: false },
  { name: 'Projets', href: '/projets', hasDropdown: false },
  {
    name: 'Publications',
    href: '/publications',
    hasDropdown: true,
    children: [
      { name: 'Nos livres', href: '/publications/livres' },
      { name: 'Nos rapports', href: '/publications/rapports' },
      { name: 'Articles scientifiques', href: '/publications/articles-scientifiques' },
    ],
  },
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