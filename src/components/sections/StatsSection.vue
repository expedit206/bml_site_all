<template>
  <section ref="sectionRef" class="stats-section py-24 relative overflow-hidden">
    <!-- Animated lines background -->
    <div class="lines-bg absolute inset-0 pointer-events-none">
      <div v-for="n in 8" :key="n" class="h-line" :style="`top:${n*12}%;animation-delay:${n*0.4}s`"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x stat-dividers">
        <div
          v-for="(s, i) in stats"
          :key="s.label"
          class="stat-block flex flex-col items-center justify-center py-10 px-8 group"
          style="opacity:0"
        >
          <div class="stat-icon mb-4 w-12 h-12 rounded-xl flex items-center justify-center">
            <component :is="s.icon" :size="24" class="stat-icon-inner transition-transform group-hover:scale-125 duration-300" />
          </div>
          <div class="stat-number text-5xl md:text-6xl font-bold tracking-tight mb-2">
            {{ s.current }}<span class="stat-suffix text-3xl">{{ s.suffix }}</span>
          </div>
          <p class="stat-label text-sm font-medium tracking-wide text-center">{{ s.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Briefcase, Users, Clock } from 'lucide-vue-next'
import { animate, stagger } from 'animejs'

const sectionRef = ref<HTMLElement | null>(null)

const stats = ref([
  { label: 'Projets livrés',  value: 60, current: 0, suffix: '+', icon: Briefcase },
  { label: 'Clients heureux', value: 40, current: 0, suffix: '+', icon: Users },
  { label: "D'expertise",     value: 7,  current: 0, suffix: 'ans', icon: Clock },
])

let animated = false
onMounted(() => {
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true
      animate('.stat-block', {
        opacity: [0, 1],
        translateY: [40, 0],
        delay: stagger(150),
        duration: 700,
        ease: 'outExpo',
      })
      stats.value.forEach((s) => {
        animate(s, {
          current: s.value,
          round: 1,
          duration: 2200,
          ease: 'outExpo',
        })
      })
      obs.disconnect()
    }
  }, { threshold: 0.5 })
  if (sectionRef.value) obs.observe(sectionRef.value)
})
</script>

<style scoped>
.stats-section {
  background: linear-gradient(135deg, #0a1b9e08 0%, var(--background) 50%, rgba(243,146,0,.05) 100%);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.lines-bg { overflow: hidden; }
.h-line {
  position: absolute; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(243,146,0,.12), transparent);
  animation: moveLine 6s linear infinite;
}
@keyframes moveLine {
  from { transform: translateX(-100%); }
  to   { transform: translateX(100%); }
}

.stat-dividers { border-color: var(--border); }
.stat-block { transition: background .3s; }
.stat-block:hover { background: rgba(243,146,0,.03); }

.stat-icon { background: rgba(243,146,0,.1); }
.stat-icon-inner { color: var(--primary); }
.stat-number { color: var(--primary); }
.stat-suffix { color: var(--primary); }
.stat-label { color: var(--text-muted); }
</style>
