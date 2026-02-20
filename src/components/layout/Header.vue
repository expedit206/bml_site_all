<template>
  <header class="sticky top-0 z-50">
    <nav class="bg-white dark:bg-secondary-900 border-b border-secondary-100 dark:border-secondary-800">
      <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <span class="text-white font-bold text-lg">BM</span>
          </div>
          <div>
            <div class="text-lg font-bold text-secondary-900 dark:text-white">BodyMac</div>
            <div class="text-xs text-primary-500 font-semibold">Labs</div>
          </div>
        </RouterLink>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-1">
          <li v-for="route in navRoutes" :key="route.name">
            <RouterLink
              :to="route.path"
              class="px-4 py-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors relative group"
            >
              {{ $t(`nav.${route.label}`) }}
              <span class="absolute bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </RouterLink>
          </li>
        </ul>

        <!-- Right Actions -->
        <div class="flex items-center gap-4">
          <button
            @click="toggleDarkMode"
            class="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            :aria-label="isDark ? 'Dark mode' : 'Light mode'"
          >
            <svg v-if="!isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 13.536l.707-.707a1 1 0 001.414-1.414L5.757 11.12zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z"></path>
            </svg>
          </button>

          <select
            v-model="language"
            @change="changeLanguage"
            class="px-3 py-2 text-sm font-medium text-secondary-700 dark:text-secondary-300 bg-secondary-100 dark:bg-secondary-800 rounded-lg border-0 cursor-pointer hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="md:hidden p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden border-t border-secondary-100 dark:border-secondary-800 bg-white dark:bg-secondary-900">
        <div class="px-4 py-4 space-y-2">
          <RouterLink
            v-for="route in navRoutes"
            :key="route.name"
            :to="route.path"
            class="block px-4 py-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg transition-colors"
            @click="isMenuOpen = false"
          >
            {{ $t(`nav.${route.label}`) }}
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useDarkMode, useLanguage } from '../../utils/composables'
import { useI18n } from 'vue-i18n'

const { isDark, toggleDarkMode } = useDarkMode()
const { language } = useLanguage()
const { locale } = useI18n()

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navRoutes = [
  { path: '/', name: 'home', label: 'home' },
  { path: '/services', name: 'services', label: 'services' },
  { path: '/realisations', name: 'realisations', label: 'realisations' },
  { path: '/about', name: 'about', label: 'about' },
  { path: '/contact', name: 'contact', label: 'contact' },
]

const changeLanguage = () => {
  locale.value = language.value
}
</script>
