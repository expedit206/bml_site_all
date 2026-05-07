<template>
  <section id="apropos" class="py-24 bg-[var(--background)] border-t border-[var(--border)] relative overflow-hidden">
    <!-- Subtle grid background -->
    <div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(var(--border) 1px, transparent 1px); background-size: 40px 40px; opacity: 0.4;"></div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">

      <!-- Header -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
        <div class="scroll-reveal">
          <p class="font-mono text-sm text-blue-600 mb-3">// 06. À PROPOS</p>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-main)] leading-tight">
            Une équipe de bâtisseurs <br/>
            <span class="text-orange-500">numériques passionnés</span>
          </h2>
        </div>
        <div class="scroll-reveal">
          <p class="text-lg text-[var(--text-muted)] leading-relaxed">
            Fondée en 2018 à Bafoussam, BodyMacs Labs a accompagné plus de 60 organisations africaines dans leur transformation numérique. Nous croyons que la technologie, bien pensée, est le levier le plus puissant du développement.
          </p>
        </div>
      </div>

      <!-- Values cards (horizontal scroll on mobile) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div v-for="(v, i) in values" :key="v.title" class="scroll-reveal value-card group p-7 border border-[var(--border)] bg-[var(--surface)] rounded-2xl hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-orange-500" :style="{ background: v.bg }">
            <component :is="v.icon" :size="22" stroke-width="1.8"/>
          </div>
          <h3 class="font-semibold text-lg text-[var(--text-main)] mb-2">{{ v.title }}</h3>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed">{{ v.desc }}</p>
        </div>
      </div>

      <!-- Numbers row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 scroll-reveal">
        <div v-for="s in stats" :key="s.label" class="text-center p-6 border border-[var(--border)] rounded-xl bg-[var(--surface)]">
          <div class="text-4xl font-bold text-orange-500 mb-1">{{ s.value }}</div>
          <p class="text-sm text-[var(--text-muted)]">{{ s.label }}</p>
        </div>
      </div>

      <!-- Team section: Scrolling Rows Layout -->
      <div class="scroll-reveal mb-24 -mx-4 overflow-hidden">
        <p class="font-mono text-sm text-blue-600 mb-8 px-4">// L'équipe fondatrice</p>
        
        <div class="space-y-6">
          <!-- Row 1: Scrolling Right -->
          <div class="flex marquee-container relative">
            <div class="flex gap-4 marquee-content animate-scroll-right">
              <div v-for="(member, i) in [...team.slice(0, 4), ...team.slice(0, 4)]" :key="`r1-${i}`" 
                   class="team-scroll-card group relative w-56 h-64 bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shrink-0">
                <img :src="member.image" :alt="member.name" class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div class="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 class="text-white font-bold text-lg leading-tight">{{ member.name }}</h3>
                  <p class="text-orange-500 text-[10px] font-bold uppercase tracking-wider">{{ member.role }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Row 2: Scrolling Left -->
          <div class="flex marquee-container relative">
            <div class="flex gap-4 marquee-content animate-scroll-left">
              <div v-for="(member, i) in [...team.slice(4, 8), ...team.slice(4, 8)]" :key="`r2-${i}`" 
                   class="team-scroll-card group relative w-56 h-64 bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shrink-0">
                <img :src="member.image" :alt="member.name" class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div class="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 class="text-white font-bold text-lg leading-tight">{{ member.name }}</h3>
                  <p class="text-orange-500 text-[10px] font-bold uppercase tracking-wider">{{ member.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Process timeline -->
      <div class="scroll-reveal">
        <p class="font-mono text-sm text-blue-600 mb-8">// Notre processus</p>
        <div class="relative">
          <!-- Timeline line (desktop) -->
          <div class="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"></div>
          <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div v-for="(step, i) in process" :key="step.title" class="flex flex-col items-center text-center relative">
              <div class="w-16 h-16 rounded-full border-2 bg-[var(--background)] flex items-center justify-center mb-4 relative z-10 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/5"
                   :class="i === 0 ? 'border-orange-500' : 'border-[var(--border)]'">
                <span class="font-mono text-sm font-bold" :class="i === 0 ? 'text-orange-500' : 'text-[var(--text-muted)]'">{{ String(i + 1).padStart(2, '0') }}</span>
              </div>
              <h4 class="font-semibold text-sm text-[var(--text-main)] mb-1">{{ step.title }}</h4>
              <p class="text-xs text-[var(--text-muted)] leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Target, Zap, Shield, Heart, Code2, Users } from 'lucide-vue-next'

const values = [
  {
    icon: Target,
    title: 'Orientés résultats',
    desc: 'Chaque décision technique est guidée par l\'impact réel sur votre activité et vos utilisateurs finaux.',
    bg: 'rgba(243,146,0,.1)',
  },
  {
    icon: Code2,
    title: 'Artisans du code',
    desc: 'Nous écrivons du code maintenable, testé et documenté. Pas de dette technique invisible.',
    bg: 'rgba(10,27,158,.08)',
  },
  {
    icon: Shield,
    title: 'Fiabilité avant tout',
    desc: 'Nos architectures sont conçues pour résister à la montée en charge et aux pannes imprévues.',
    bg: 'rgba(40,200,80,.08)',
  },
]

const stats = [
  { value: '60+',  label: 'Projets livrés' },
  { value: '40+',  label: 'Clients satisfaits' },
  { value: '7 ans', label: 'D\'expérience' },
  { value: '95%',  label: 'Taux de satisfaction' },
]

const team = [
  { name: 'Boris', role: 'Designer UI/UX', image: '/img/equipe/boris.png' },
  { name: 'Dominique', role: 'Architecte Front', image: '/img/equipe/expeditdominique.jpg' },
  { name: 'Parfait', role: 'Développeur Fullstack', image: '/img/equipe/parfait.png' },
  { name: 'Yannick', role: 'Fondateur & Lead Dev', image: '/img/equipe/yannick.png' },
  { name: 'Aubin', role: 'DevOps', image: '/img/equipe/aubin.png' },
  { name: 'Stephie', role: 'Infographe', image: '/img/equipe/stephie.jpeg' },
  { name: 'Waffo Rostand', role: 'Responsable Technique', image: '/img/equipe/waffo rostand.png' },
]

const process = [
  { title: 'Découverte',   desc: 'Analyse des besoins, audit technique et définition du périmètre.' },
  { title: 'Conception',   desc: 'Architecture, maquettes UX/UI et validation avec les parties prenantes.' },
  { title: 'Développement', desc: 'Sprints agiles, livraisons itératives et revues de code continues.' },
  { title: 'Recette',      desc: 'Tests QA, corrections et validation finale avec le client.' },
  { title: 'Production',   desc: 'Déploiement sécurisé, monitoring 24/7 et support technique.' },
]
</script>

<style scoped>
.scroll-reveal { opacity: 0; transform: translateY(30px); transition: opacity .7s ease, transform .7s ease; }
.scroll-reveal.is-visible { opacity: 1; transform: none; }

.marquee-container {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-content {
  width: max-content;
}

.animate-scroll-right {
  animation: scroll-right 30s linear infinite;
}

.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}

.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}

@keyframes scroll-left {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-50% - 1rem)); }
}

@keyframes scroll-right {
  from { transform: translateX(calc(-50% - 1rem)); }
  to { transform: translateX(0); }
}

.team-scroll-card {
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.team-scroll-card:hover {
  border-color: rgba(243, 146, 0, 0.4);
  transform: translateY(-4px);
}
</style>
