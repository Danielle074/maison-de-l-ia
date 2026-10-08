<template>
  <div class="min-h-screen bg-[#FFFDFB] text-gray-800 font-sans">

    <!-- ============================= -->
    <!-- HERO -->
    <!-- ============================= -->
    <section class="w-full bg-white">
      <div
        class="max-w-[1120px] mx-auto px-5 md:px-8
               min-h-[400px] py-12 lg:py-16
               grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]
               gap-10 lg:gap-6 items-center"
      >
        <!-- Contenu -->
        <div class="max-w-[590px]">
          <h1
            class="text-[30px] sm:text-[34px] lg:text-[36px]
                   font-extrabold tracking-[-0.8px]
                   leading-[1.08] text-[#14263D]"
          >
            Propulser l’Avenir Technologique
            Ivoirien par
            <span class="text-[#ED6609]">
              l’Intelligence Artificielle
            </span>
          </h1>

          <p
            class="mt-5 max-w-[560px]
                   text-sm sm:text-[15px]
                   leading-[1.6] text-[#252525]"
          >
            La Maison de l'IA fédère l'État, les chercheurs de pointe,
            les champions industriels et les startups ivoiriennes pour
            concevoir une IA souveraine, éthique et au service du progrès
            socio-économique durable de la Côte d'Ivoire.
          </p>

          <!-- Boutons -->
          <div class="flex flex-wrap items-center gap-3 mt-6">
            <Button
              as-child
              class="h-[40px] px-4
                     bg-[#ED6609] hover:bg-[#d95700]
                     text-white text-sm font-medium
                     rounded-[11px] shadow-none"
            >
              <RouterLink to="/programmes">
                Explorer nos programmes
                <span class="ml-2 text-base">→</span>
              </RouterLink>
            </Button>

            <Button
              as-child
              variant="outline"
              class="h-[40px] px-4
                     border-[#ED6609] text-[#ED6609]
                     hover:bg-[#ED6609]/5
                     text-sm font-medium
                     rounded-[11px] shadow-none"
            >
              <RouterLink to="/laboratoire">
                Laboratoire et Visions
              </RouterLink>
            </Button>
          </div>
        </div>

        <!-- Illustration IA -->
        <div class="relative flex items-center justify-center lg:justify-end">
          <img
            :src="heroAiImage"
            alt="Illustration Intelligence Artificielle"
            class="w-[300px] sm:w-[340px] lg:w-[390px]
                   max-w-full object-contain"
          />
        </div>
      </div>
    </section>


    <!-- ============================= -->
    <!-- SOLUTIONS CONCRÈTES -->
    <!-- ============================= -->
    <section class="py-14 md:py-16">
      <div class="max-w-[1120px] mx-auto px-5 md:px-8">

        <!-- Titre -->
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
            Des Solutions <span class="text-[#ED6609]">Concrètes</span>
            pour le Rayonnement
            <span class="text-[#ED6609]">Ivoirien</span> &amp;
            <span class="text-[#ED6609]">Africain</span>.
          </h2>
        </div>

        <!-- Cartes -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          <div
            v-for="(card, index) in featureCards"
            :key="card.title"
            :class="[
              card.bgClass,
              'min-h-[175px] p-5 lg:p-6 rounded-[14px] border border-gray-100 flex flex-col justify-between shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]',
              index === 0 ? 'lg:rotate-[-4deg] lg:scale-[1.02] lg:origin-center' : ''
            ]"
          >
            <div>
              <!-- Icône -->
              <div class="mb-4">
                <component
                  :is="card.icon"
                  :class="[card.iconClass, 'w-[20px] h-[20px]']"
                />
              </div>

              <!-- Titre -->
              <h3
                :class="[
                  card.titleClass,
                  'text-sm lg:text-[15px] font-bold mb-2'
                ]"
              >
                {{ card.title }}
              </h3>

              <!-- Description -->
              <p
                :class="[
                  card.descClass,
                  'text-xs lg:text-[13px] leading-[1.55]'
                ]"
              >
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ============================= -->
    <!-- PROJETS NATIONAUX -->
    <!-- ============================= -->
    <section class="bg-[#faf9f7] py-14 md:py-16">
      <div class="max-w-[1120px] mx-auto px-5 md:px-8">

        <!-- Titre -->
        <div class="text-center mb-10">
          <h2 class="text-[25px] md:text-[28px] font-semibold tracking-tight text-[#111111]">
            Projets Nationaux à fort
            <span class="text-[#ED6609]">Impact</span>
          </h2>
        </div>

        <!-- Grille -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-5">

          <!-- PROJET 1 : AGRIPROJECT -->
          <article
            class="md:col-span-3 min-h-[220px] bg-white rounded-[15px]
                   shadow-[0_2px_10px_rgba(0,0,0,0.06)]
                   px-5 py-5 flex flex-col justify-between"
          >
            <div class="flex flex-col sm:flex-row gap-5 h-full">

              <!-- Contenu -->
              <div class="flex-1 flex flex-col">
                <h3 class="text-sm font-semibold text-[#ED6609] mb-3">
                  AgriProject
                </h3>

                <p class="text-[13px] leading-[1.6] text-[#303030] max-w-[280px]">
                  Système de vision par ordinateur sur smartphone analysant en
                  temps réel les feuilles et cabosses de cacao pour détecter la
                  moniliose et la pourriture brune 14 jours avant les signes visibles.
                </p>

                <!-- Statistiques -->
                <div class="flex items-start gap-8 mt-auto pt-4">
                  <div>
                    <div class="text-[14px] font-bold text-[#008751]">
                      12.400+
                    </div>
                    <div class="text-[11px] text-gray-500 mt-0.5">
                      Producteurs connectés
                    </div>
                  </div>

                  <div>
                    <div class="text-[14px] font-bold text-[#ED6609]">
                      94.8%
                    </div>
                    <div class="text-[11px] text-gray-500 mt-0.5">
                      Diagnostic fiable
                    </div>
                  </div>
                </div>
              </div>

              <!-- Image -->
              <div class="relative w-full sm:w-[200px] shrink-0">
                <img
                  :src="agriProjectImage"
                  alt="AgriProject Cacao"
                  class="w-full h-[130px] sm:h-[128px] object-cover rounded-[14px]"
                />

                <!-- Bouton -->
                <RouterLink
                  to="/projets/agriproject"
                  class="absolute -bottom-5 -right-1 w-9 h-9 rounded-full
                         bg-[#ED6609] text-white flex items-center justify-center
                         text-xl font-light shadow-sm transition hover:scale-105"
                >
                  <span class="relative -top-[1px]">→</span>
                </RouterLink>
              </div>

            </div>
          </article>


          <!-- PROJET 2 : AfriIluBaoulé -->
          <article
            class="md:col-span-2 min-h-[220px] bg-white rounded-[15px]
                   shadow-[0_2px_10px_rgba(0,0,0,0.06)]
                   px-5 py-5 flex flex-col justify-between"
          >
            <div>
              <h3 class="text-sm font-semibold text-[#ED6609] mb-3">
                AfriIluBaoulé
              </h3>

              <p class="text-[13px] leading-[1.65] text-[#303030]">
                Premier grand modèle de langage open-source entraîné sur des
                corpus vocaux et textuels des langues maternelles ivoiriennes
                pour digitaliser les services publics.
              </p>
            </div>

            <div class="text-right mt-5">
              <RouterLink
                to="/projets/afriilubaoule"
                class="text-xs text-[#ED6609] underline underline-offset-2 hover:no-underline"
              >
                Détails du Modèle →
              </RouterLink>
            </div>
          </article>


          <!-- PROJET 3 : IvorianHealth Triage AI -->
          <article
            class="md:col-span-2 min-h-[220px] bg-white rounded-[15px]
                   shadow-[0_2px_10px_rgba(0,0,0,0.06)]
                   px-5 py-5 flex flex-col justify-between"
          >
            <div>
              <h3 class="text-sm font-semibold text-[#ED6609] mb-3">
                IvorianHealth Triage AI
              </h3>

              <p class="text-[13px] leading-[1.65] text-[#303030]">
                Assistance au pré-diagnostic et priorisation des urgences
                médicales dans les centres hospitaliers régionaux
                (CHR de Man, Korhogo, Daloa).
              </p>

              <div
                class="inline-flex items-center mt-5 px-3 py-2 rounded-full
                       border border-[#8dc9a9] text-[#008751]
                       text-[11px] font-medium"
              >
                <span class="font-bold mr-1">−42%</span>
                de délai d'attente pour les urgences vitales
              </div>
            </div>

            <div class="mt-3">
              <span class="text-[11px] text-[#ED6609]">
                Déployé avec le ministère de la santé
              </span>
            </div>
          </article>


          <!-- PROJET 4 : Smart Abidjan Trafic -->
          <article
            class="md:col-span-3 min-h-[220px] bg-white rounded-[15px]
                   shadow-[0_2px_10px_rgba(0,0,0,0.06)]
                   px-5 py-5 flex flex-col justify-between"
          >
            <div class="flex flex-col sm:flex-row gap-5">
              <div class="flex-1">
                <h3 class="text-sm font-semibold text-[#ED6609] mb-3">
                  Smart Abidjan Trafic
                </h3>

                <p class="text-[13px] leading-[1.65] text-[#303030] max-w-[360px]">
                  Gestion adaptative des feux tricolores et détection automatique
                  des incidents sur les axes majeurs (Pont HKB, Boulevard VGE,
                  Yopougon).
                </p>

                <div
                  class="inline-flex items-center mt-5 px-3 py-2 rounded-full
                         border border-[#8dc9a9] text-[#008751]
                         text-[11px] font-medium"
                >
                  <span class="font-bold mr-1">−18%</span>
                  d'émissions de CO2 liées aux congestions routières dans les zones pilotes.
                </div>
              </div>

              <div class="w-full sm:w-[220px] shrink-0">
                <img
                  :src="trafficImage"
                  alt="Smart Abidjan Trafic"
                  class="w-full h-[120px] object-cover rounded-[14px]"
                />
              </div>
            </div>

            <div class="mt-3">
              <span class="text-[11px] text-[#ED6609]">
                District Autonome d'Abidjan
              </span>
            </div>
          </article>

        </div>
      </div>
    </section>


    <!-- ============================= -->
    <!-- PROCESSUS -->
    <!-- ============================= -->
    <section class="bg-[#0b0b0b] text-white py-14 md:py-16 relative overflow-hidden">
      <div
        class="absolute top-0 left-0 w-[420px] h-[250px]
               bg-[#ED6609]/10 blur-[100px] rounded-full pointer-events-none"
      ></div>

      <div class="max-w-[1120px] mx-auto px-5 md:px-8 relative z-10">

        <!-- Étapes -->
        <div
          class="grid grid-cols-1 md:grid-cols-3
                 gap-10 md:gap-8
                 text-center
                 max-w-[900px] mx-auto
                 mb-10 md:mb-9"
        >
          <!-- Étape 01 -->
          <div class="relative">
            <div class="text-[42px] md:text-[46px] leading-none font-extrabold text-[#ED6609]">
              01
            </div>
            <div class="w-2.5 h-2.5 bg-[#008751] rounded-full mx-auto mt-2 mb-2"></div>
            <h3 class="text-sm md:text-[15px] font-semibold text-[#ED6609]">
              Identification &amp; Besoins
            </h3>
            <p class="text-xs text-gray-300 leading-[1.5] max-w-[220px] mx-auto mt-2">
              Cartographie des défis critiques des filières ivoiriennes
              et qualification des jeux de données exploitables.
            </p>
          </div>

          <!-- Étape 02 -->
          <div class="relative">
            <div class="text-[42px] md:text-[46px] leading-none font-extrabold text-[#ED6609]">
              02
            </div>
            <div class="w-2.5 h-2.5 bg-[#008751] rounded-full mx-auto mt-2 mb-2"></div>
            <h3 class="text-sm md:text-[15px] font-semibold text-[#ED6609]">
              Recherche et Prototypage
            </h3>
            <p class="text-xs text-gray-300 leading-[1.5] max-w-[230px] mx-auto mt-2">
              Expérimentation rapide par nos chercheurs et ingénieurs
              sur notre cluster d'entraînement haute performance.
            </p>
          </div>

          <!-- Étape 03 -->
          <div class="relative">
            <div class="text-[42px] md:text-[46px] leading-none font-extrabold text-[#ED6609]">
              03
            </div>
            <div class="w-2.5 h-2.5 bg-[#008751] rounded-full mx-auto mt-2 mb-2"></div>
            <h3 class="text-sm md:text-[15px] font-semibold text-[#ED6609]">
              Validation Terrain
            </h3>
            <p class="text-xs text-gray-300 leading-[1.5] max-w-[230px] mx-auto mt-2">
              Tests in situ avec les coopératives, hôpitaux ou ministères
              partenaires afin de mesurer l'impact réel.
            </p>
          </div>
        </div>


        <!-- Banner chiffres -->
        <div
          class="max-w-[900px] mx-auto
                 bg-gradient-to-r from-[#ff6500] to-[#e88b00]
                 rounded-[12px]
                 px-6 py-7 md:px-10 md:py-8
                 grid grid-cols-2 md:grid-cols-4
                 gap-y-7 md:gap-y-0
                 text-center"
        >
          <div>
            <div class="text-xl md:text-[22px] font-medium leading-none">
              10.000+
            </div>
            <div class="text-[11px] md:text-xs text-white mt-1.5">
              Talents à former d'ici 2027
            </div>
          </div>

          <div>
            <div class="text-xl md:text-[22px] font-medium leading-none">
              85+
            </div>
            <div class="text-[11px] md:text-xs text-white mt-1.5">
              StartUp incubées
            </div>
          </div>

          <div>
            <div class="text-xl md:text-[22px] font-medium leading-none">
              5
            </div>
            <div class="text-[11px] md:text-xs text-white mt-1.5">
              Pôles régionaux
            </div>
          </div>

          <div>
            <div class="text-xl md:text-[22px] font-medium leading-none">
              98%
            </div>
            <div class="text-[11px] md:text-xs text-white mt-1.5">
              Taux d'insertion
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ============================= -->
    <!-- TÉMOIGNAGES + CTA -->
    <!-- ============================= -->
    <section class="bg-[#fafafa] py-16 md:py-20">
      <div class="max-w-[1120px] mx-auto px-5 md:px-8">

        <!-- Titre -->
        <div class="text-center mb-10 md:mb-12">
          <h2 class="text-[22px] md:text-[24px] font-semibold text-gray-900">
            Ce Que Disent les
            <span class="text-[#ED6609]">Acteurs</span>
            du Changement
          </h2>
        </div>

        <!-- Témoignages -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          <div
            v-for="(testimonial, idx) in testimonials"
            :key="idx"
            class="bg-white
                   border border-[#ED6609]/25
                   rounded-[12px]
                   px-5 py-5
                   min-h-[130px]
                   flex flex-col justify-between"
          >
            <div>
              <div class="text-[#ED6609] text-[24px] font-serif font-bold leading-none mb-2">
                “
              </div>
              <p class="text-xs text-gray-700 leading-[1.55]">
                {{ testimonial.quote }}
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-gray-100">
              <span class="text-[11px] font-semibold text-[#ED6609]">
                {{ testimonial.author }}
              </span>
              <span class="text-[11px] text-gray-500">
                | {{ testimonial.role }}
              </span>
            </div>
          </div>
        </div>


        <!-- CTA FINAL -->
        <div
          class="max-w-[900px] mx-auto mt-16
                 bg-gradient-to-r from-[#ff6500] to-[#e88b00]
                 rounded-[12px]
                 px-8 py-8 md:px-12 md:py-10
                 text-white"
        >
          <div class="max-w-[620px]">
            <h2 class="text-[22px] md:text-[26px] leading-[1.2] font-semibold">
              Bâtissons Ensemble l'Afrique
              <br class="hidden md:block" />
              Intelligente de Demain.
            </h2>

            <div class="flex flex-wrap gap-3 mt-6">
              <Button
                as-child
                class="bg-white text-[#008751] hover:bg-gray-100
                       text-xs font-medium rounded-full px-5 py-2.5 h-auto"
              >
                <RouterLink to="/rejoindre">
                  Prendre part à la révolution de l'IA
                  <span class="ml-1">→</span>
                </RouterLink>
              </Button>

              <Button
                as-child
                variant="outline"
                class="border-white text-black hover:bg-white/10
                       text-xs font-medium rounded-full px-5 py-2.5 h-auto"
              >
                <RouterLink to="/laboratoire">
                  Laboratoire et Visions
                </RouterLink>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  GraduationCap,
  Microscope,
  Rocket,
  ShieldCheck,
  Users,
  Lock
} from 'lucide-vue-next'

// --- IMPORTS DES IMAGES ---
import heroAiImage from '@/assets/images/hero.png'
import agriProjectImage from '@/assets/images/hero.png'
import trafficImage from '@/assets/images/hero.png'

// Cartes de la section "Solutions Concrètes"
const featureCards = [
  {
    title: 'Formation et Talents',
    description:
      "Immersion dans les questions à fort impact et accompagnement de haut niveau sur les métiers de l'IA.",
    icon: GraduationCap,
    bgClass: 'bg-[#ED6609] text-white border-[#ED6609]',
    titleClass: 'text-white',
    descClass: 'text-white/90',
    iconClass: 'text-white'
  },
  {
    title: 'R & D Appliquée',
    description:
      "Chaque projet scientifique se termine avec des licences d'exploitation accordées aux entreprises d'ici.",
    icon: Microscope,
    bgClass: 'bg-white text-gray-800 border-gray-100',
    titleClass: 'text-emerald-800',
    descClass: 'text-gray-600',
    iconClass: 'text-[#008751]'
  },
  {
    title: 'Accélération Startup',
    description:
      "Financement d'amorçage, hébergement, guichet unique et réseau qualifié d'experts.",
    icon: Rocket,
    bgClass: 'bg-white text-gray-800 border-gray-100',
    titleClass: 'text-emerald-800',
    descClass: 'text-gray-600',
    iconClass: 'text-[#008751]'
  },
  {
    title: 'Éthique et Souveraineté',
    description:
      "Gouvernance IA : offre de solutions éthiques et réutilisables prêtes à appliquer.",
    icon: ShieldCheck,
    bgClass: 'bg-white text-gray-800 border-gray-100',
    titleClass: 'text-emerald-800',
    descClass: 'text-gray-600',
    iconClass: 'text-[#008751]'
  },
  {
    title: 'Vivier de Talents',
    description:
      "Créer un vivier continu de candidats haut niveau et d'analystes prêts à l'emploi.",
    icon: Users,
    bgClass: 'bg-white text-gray-800 border-gray-100',
    titleClass: 'text-emerald-800',
    descClass: 'text-gray-600',
    iconClass: 'text-[#008751]'
  },
  {
    title: 'Données Protégées',
    description:
      "Vos données et transcriptions sont chiffrées sur un hébergement RGPD.",
    icon: Lock,
    bgClass: 'bg-white text-gray-800 border-gray-100',
    titleClass: 'text-emerald-800',
    descClass: 'text-gray-600',
    iconClass: 'text-[#008751]'
  }
]

// Témoignages
const testimonials = [
  {
    quote:
      "La Maison de l'IA a permis à nos chercheurs d'accéder à des capacités de calcul jusqu'alors inaccessibles en Afrique.",
    author: 'Kouassi A.',
    role: 'Chercheur en IA Médicale'
  },
  {
    quote:
      "Grâce au bootcamp accéléré en GenAI, j'ai pu accélérer notre modèle de détection de maladies d'avocatiers développé en langues locales.",
    author: 'Kouao B.',
    role: 'DRH CoopIvoire'
  },
  {
    quote:
      "Le vivier de talents rencontré a fait évoluer nos projets vers des cas d'IA prêts et à forts rendements.",
    author: 'Yao B.',
    role: 'Data Analyst'
  }
]
</script>