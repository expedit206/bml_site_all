<template>
  <footer class="bg-secondary-900 dark:bg-black text-white">
    <div class="max-w-7xl mx-auto px-4 py-16">
      <!-- Main Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">BM</span>
            </div>
            <div>
              <div class="text-lg font-bold">BodyMac</div>
              <div class="text-xs text-primary-400 font-semibold">Labs</div>
            </div>
          </div>
          <p class="text-secondary-400 text-sm">Créons ensemble des solutions innovantes pour votre entreprise</p>
        </div>

        <!-- Product -->
        <div>
          <h4 class="text-lg font-bold mb-4 text-white">Produits</h4>
          <ul class="space-y-2 text-secondary-400 text-sm">
            <li><a href="#" class="hover:text-primary-400 transition-colors">Services</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors">Réalisations</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors">Solutions</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-lg font-bold mb-4 text-white">Entreprise</h4>
          <ul class="space-y-2 text-secondary-400 text-sm">
            <li><a href="#" class="hover:text-primary-400 transition-colors">À propos</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors">Carrières</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="text-lg font-bold mb-4 text-white">Support</h4>
          <ul class="space-y-2 text-secondary-400 text-sm">
            <li><a href="#" class="hover:text-primary-400 transition-colors">Contactez-nous</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors">Documentation</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-secondary-800 pt-8">
        <!-- Bottom Section -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p class="text-secondary-400 text-sm">{{ $t('footer.copyright') }}</p>
          <div class="flex gap-6">
            <a href="#" class="text-secondary-400 hover:text-primary-400 transition-colors">
              <span class="sr-only">Twitter</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" class="text-secondary-400 hover:text-primary-400 transition-colors">
              <span class="sr-only">GitHub</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.192 20 14.435 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="text-secondary-400 hover:text-primary-400 transition-colors">
              <span class="sr-only">LinkedIn</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.337 1.318H3.663C2.379 1.318 1.318 2.379 1.318 3.663v12.674c0 1.284 1.061 2.345 2.345 2.345h12.674c1.284 0 2.345-1.061 2.345-2.345V3.663c0-1.284-1.061-2.345-2.345-2.345zM5.577 16.404H2.94V7.63h2.637v8.774zM4.258 6.476c-.846 0-1.531-.685-1.531-1.531s.685-1.531 1.531-1.531 1.531.685 1.531 1.531-.685 1.531-1.531 1.531zM17.06 16.404h-2.637V12.08c0-1.044-.018-2.386-1.454-2.386-1.454 0-1.677 1.135-1.677 2.31v4.4h-2.637V7.63h2.532v1.164h.036c.353-.669 1.215-1.375 2.5-1.375 2.674 0 3.166 1.759 3.166 4.07v4.915z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()
</script>
