<template>
  <!-- Desktop & Mobile Top header -->
  <header
    :class="[
      'sticky top-0 z-[60] w-full border-b border-[var(--border)] transition-all duration-300',
      isVisible ? 'translate-y-0' : '-translate-y-full',
      isScrolled || isMenuOpen ? 'backdrop-blur-md bg-[var(--background)]/90 shadow-sm' : 'bg-[var(--background)]',
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3 shrink-0 group" @click="isMenuOpen = false">
          <img
            src="/img/BML/bodymacs-clair-final-svg.png"
            alt="BodyMacs Labs"
            class="h-9 w-auto object-contain dark:hidden transition-opacity duration-300"
          />
          <img
            src="/img/BML/bodymacs-sombre-final-svg-sans-fond.svg"
            alt="BodyMacs Labs"
            class="h-9 w-auto object-contain hidden dark:block transition-opacity duration-300"
          />
          <span class="font-semibold text-sm text-[var(--text-main)] hidden sm:block leading-tight">
            BodyMacs<br/>
            <span class="text-[10px] font-normal text-[var(--text-muted)] tracking-wide">Labs</span>
          </span>
        </RouterLink>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-1 h-full">
          <li v-for="route in navRoutes" :key="route.label">
            <button
              @click="scrollTo(route.hash)"
              class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="activeSection === route.hash ? 'text-orange-500 bg-orange-500/5' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface)]'"
            >
              <component :is="route.icon" :size="16" />
              {{ route.label }}
            </button>
          </li>
        </ul>

        <!-- Right actions -->
        <div class="flex items-center gap-2">
          <!-- Dark mode toggle -->
          <button
            @click="toggleDarkMode"
            class="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface)] transition-all duration-200"
            :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
          >
            <Sun v-if="isDark" :size="18" />
            <Moon v-else :size="18" />
          </button>

          <!-- Burger Button (Mobile Only) -->
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface)] transition-all duration-200"
          >
            <Menu v-if="!isMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>

          <button
            @click="scrollTo('#contact')"
            class="hidden md:flex items-center gap-2 px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:-translate-y-px hover:shadow-md hover:shadow-orange-500/30 transition-all duration-200"
          >
            Démarrer un projet
          </button>
        </div>
      </div>
    </nav>
  </header>

  <!-- Mobile Menu Overlay -->
  <Transition name="fade">
    <div v-if="isMenuOpen" class="fixed inset-0 z-[55] bg-[var(--background)]/80 backdrop-blur-md md:hidden" @click="isMenuOpen = false"></div>
  </Transition>

  <Transition name="slide">
    <div v-if="isMenuOpen" class="fixed top-16 right-0 z-[56] w-full max-w-sm h-[calc(100vh-64px)] bg-[var(--background)] border-l border-[var(--border)] md:hidden shadow-2xl flex flex-col">
      <div class="flex-1 overflow-y-auto py-6 px-4">
        <div class="space-y-2">
          <button
            v-for="route in navRoutes"
            :key="route.label"
            @click="scrollTo(route.hash); isMenuOpen = false"
            class="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-lg font-medium transition-all duration-200 border border-transparent"
            :class="activeSection === route.hash ? 'text-orange-500 bg-orange-500/5 border-orange-500/10' : 'text-[var(--text-muted)] hover:bg-[var(--surface)]'"
          >
            <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--surface)] border border-[var(--border)]">
              <component :is="route.icon" :size="20" />
            </div>
            {{ route.label }}
          </button>
        </div>

        <div class="mt-8 pt-8 border-t border-[var(--border)]">
          <p class="text-xs font-mono text-blue-600 mb-6 uppercase tracking-widest">// Nous trouver</p>
          <div class="space-y-4">
            <div class="flex items-center gap-3 text-[var(--text-muted)]">
              <div class="w-8 h-8 rounded-full bg-[var(--surface)] flex items-center justify-center">
                <Mail :size="14" />
              </div>
              <span class="text-sm">contact@bodymacs.com</span>
            </div>
            <div class="flex items-center gap-3 text-[var(--text-muted)]">
              <div class="w-8 h-8 rounded-full bg-[var(--surface)] flex items-center justify-center">
                <LayoutGrid :size="14" />
              </div>
              <span class="text-sm">Bafoussam, Cameroun</span>
            </div>
          </div>
        </div>
      </div>

      <div class="p-6 border-t border-[var(--border)] bg-[var(--surface)]/50">
        <button
          @click="scrollTo('#contact'); isMenuOpen = false"
          class="w-full flex items-center justify-center gap-2 px-6 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
        >
          Démarrer un projet
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useDarkMode, useLanguage } from '../../utils/composables'
import { useI18n } from 'vue-i18n'
import { Home, LayoutGrid, Briefcase, User, Mail, Moon, Sun, Menu, X } from 'lucide-vue-next'

const { isDark, toggleDarkMode } = useDarkMode()
const { language } = useLanguage()
const { locale } = useI18n()

const isVisible  = ref(true)
const isScrolled = ref(false)
const lastScrollY = ref(0)
const activeSection = ref('')
const isMenuOpen = ref(false)

// Prevent scroll when menu is open
watch(isMenuOpen, (val) => {
  if (val) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = ''
})

const handleScroll = () => {
  const current = window.pageYOffset || document.documentElement.scrollTop
  if (current < 0) return
  
  if (!isMenuOpen.value) {
    isVisible.value  = current < lastScrollY.value || current < 60
  }
  
  isScrolled.value = current > 20
  lastScrollY.value = current

  // Update active section
  const sections = ['#services', '#projets', '#apropos', '#contact']
  for (const id of sections) {
    const el = document.querySelector(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top >= 0 && rect.top <= 300) {
        activeSection.value = id
        break
      }
    }
  }
  if (current < 100) activeSection.value = ''
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})

const navRoutes = [
  { path: '/',          hash: '',          label: 'Accueil',      icon: Home },
  { path: '/',          hash: '#services', label: 'Services',     icon: LayoutGrid },
  { path: '/',          hash: '#projets',  label: 'Réalisations', icon: Briefcase },
  { path: '/',          hash: '#apropos',  label: 'À propos',     icon: User },
  { path: '/',          hash: '#contact',  label: 'Contact',      icon: Mail },
]

const scrollTo = (hash: string) => {
  if (!hash) { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }

/* Glass effect for active link */
.bg-orange-500\/5 {
  background-color: rgba(243, 146, 0, 0.05);
}
</style>
