<template>
  <section class="py-16 relative bg-[var(--background)]">
    <div class="max-w-5xl mx-auto px-4">
      <div class="text-center mb-12 scroll-reveal">
        <p class="font-mono text-sm text-blue-600 mb-2">// 03. NOTRE EXPERTISE</p>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-main)] leading-tight">
          Des solutions sur mesure pour <br/>
          <span class="text-orange-500">propulser votre vision</span>
        </h2>
        <p class="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
          Nous combinons innovation technologique et design centré sur l'utilisateur pour créer des produits numériques d'exception.
        </p>
      </div>

      <div class="relative w-full pb-16">
        <div v-for="(service, i) in services" :key="service.title" 
          class="sticky w-full transition-all duration-500"
          :style="{ top: `${80 + i * 20}px`, zIndex: i }"
        >
          <div class="bg-[var(--surface)] border border-[var(--border)] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-center justify-between transition-transform duration-500"
               :style="{ transform: `scale(${1 - (services.length - i - 1) * 0.02})`, transformOrigin: 'top center' }">
            
            <div class="flex-1 space-y-6">
              <div class="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                <component :is="service.icon" :size="32" stroke-width="1.5" />
              </div>
              <h3 class="text-3xl font-bold text-[var(--text-main)]">{{ service.title }}</h3>
              <p class="text-[var(--text-muted)] text-lg leading-relaxed">{{ service.desc }}</p>
              <div class="flex flex-wrap gap-2 pt-4">
                <span v-for="tag in service.tags" :key="tag" class="px-4 py-2 rounded-full border border-[var(--border)] text-sm font-medium bg-[var(--background)]">{{ tag }}</span>
              </div>
            </div>

            <div class="hidden md:flex w-1/3 aspect-square rounded-2xl bg-[var(--background)] border border-[var(--border)] items-center justify-center overflow-hidden relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-600/5"></div>
              <component :is="service.icon" :size="120" class="text-[var(--border)] group-hover:text-orange-500/20 transition-colors duration-500" stroke-width="0.5" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Globe, Smartphone, Palette, Cpu } from 'lucide-vue-next'

const services = [
  {
    icon: Globe,
    title: 'Développement Web & Plateformes',
    desc: 'Nous concevons des écosystèmes web robustes, de la vitrine interactive aux plateformes SaaS complexes, en privilégiant la performance et la sécurité.',
    tags: ['Vue.js', 'React', 'Laravel', 'Node.js'],
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles Innovantes',
    desc: 'Des expériences mobiles fluides sur iOS et Android. Nous créons des applications intuitives qui tirent le meilleur parti des fonctionnalités natives.',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    icon: Palette,
    title: 'Design UI/UX & Stratégie',
    desc: 'Nous transformons vos idées en interfaces mémorables. Notre approche centrée sur l\'utilisateur garantit une adoption maximale et une expérience fluide.',
    tags: ['Figma', 'Prototypage', 'User Research', 'Branding'],
  },
  {
    icon: Cpu,
    title: 'IA, Data & Automatisation',
    desc: 'Exploitez la puissance de vos données. Nous intégrons des solutions d\'Intelligence Artificielle et d\'automatisation pour optimiser vos processus métier.',
    tags: ['Machine Learning', 'Python', 'NLP', 'Data Analysis'],
  }
]
</script>
