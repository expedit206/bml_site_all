<template>
  <section ref="sectionRef" class="py-20 bg-[var(--background)] relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <p class="font-mono text-sm text-blue-600 mb-2">// 04. NOS RÉALISATIONS</p>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-main)]">
          Parcourez nos <span class="text-orange-500">derniers succès</span>
        </h2>
      </div>

      <!-- Tree structure -->
      <div ref="treeRef" class="relative tree-container" :style="{ minHeight: treeH + 'px' }">

        <!-- SVG overlay: trunk + branches -->
        <svg class="absolute left-1/2 -translate-x-1/2 pointer-events-none top-0 tree-svg"
             :width="svgW" :height="treeH"
             :viewBox="`0 0 ${svgW} ${treeH}`">
          <defs>
            <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0%" stop-color="#f39200"/>
              <stop offset="100%" stop-color="#0a1b9e"/>
            </linearGradient>
            <filter id="gl"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>

          <!-- Trunk glow background -->
          <line :x1="cx" y1="0" :x2="cx" :y2="treeH" stroke="#f39200" stroke-width="8" stroke-opacity="0.05"/>

          <!-- Animated trunk (grows with scroll) -->
          <line :x1="cx" y1="0" :x2="cx" :y2="treeH"
                stroke="url(#tg)" stroke-width="2"
                filter="url(#gl)"
                :stroke-dasharray="treeH"
                :stroke-dashoffset="treeH - trunkDrawn"/>

          <!-- Branches per project -->
          <g v-for="(p, i) in projects" :key="`b${i}`">
            <line :x1="cx" :y1="nodeY(i)"
                  :x2="i%2===0 ? cx+branchLen : cx-branchLen"
                  :y2="nodeY(i)"
                  stroke="#f39200" stroke-width="1.5"
                  :stroke-dasharray="branchLen"
                  :stroke-dashoffset="branchDrawn[i] ? 0 : branchLen"
                  style="transition: stroke-dashoffset 0.7s ease"/>
            <!-- Trunk node dot -->
            <circle :cx="cx" :cy="nodeY(i)" r="4"
                    fill="#f39200" filter="url(#gl)"
                    :opacity="branchDrawn[i] ? 1 : 0"
                    style="transition: opacity 0.3s ease"/>
          </g>

          <!-- Travelling sparkle dot -->
          <circle :cx="cx" :cy="sparkleY" r="4" fill="#f39200" filter="url(#gl)" opacity="0.9"/>
        </svg>

        <!-- Project cards (absolutely positioned alongside branches) -->
        <div v-for="(p, i) in projects" :key="p.name"
             class="absolute w-[42%] transition-all duration-700 project-card-wrapper"
             :style="cardStyle(i)"
             :class="branchDrawn[i] ? 'opacity-100 translate-x-0' : i%2===0 ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8'">
          <article class="group bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10">
            <div class="relative h-44 overflow-hidden">
              <img :src="p.image" :alt="p.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <!-- Unified color treatment -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div class="absolute inset-0 bg-orange-500/10 mix-blend-overlay"></div>
              <span class="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 bg-black/50 text-white/90 backdrop-blur-sm">{{ p.category }}</span>
              <a v-if="p.link" :href="p.link" target="_blank" rel="noopener"
                 class="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </a>
            </div>
            <div class="p-5">
              <h3 class="font-semibold text-[var(--text-main)] mb-1.5">{{ p.name }}</h3>
              <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-3">{{ p.result }}</p>
              
              <!-- 2D tags (hidden since we use 3D shapes, or kept as fallback) -->
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span v-for="t in p.tech" :key="t" class="text-xs px-2 py-0.5 bg-[var(--background)] border border-[var(--border)] text-[var(--text-muted)]">{{ t }}</span>
              </div>

              <!-- 3D Tech representation -->
              <div class="w-full h-16 border-t border-[var(--border)] pt-2 mt-auto">
                <Tech3DShapes :techs="p.tech" />
              </div>
            </div>
          </article>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Tech3DShapes from '../ui/Tech3DShapes.vue'

const sectionRef = ref<HTMLElement | null>(null)
const treeRef    = ref<HTMLElement | null>(null)

const projects = [
  { image: '/img/acadecol.png',    name: 'Acadecol',    category: 'EdTech',     result: 'Plateforme de gestion scolaire utilisée à l\'échelle nationale.',  tech: ['Laravel', 'Vue.js'],      link: 'https://acadecol.com' },
  { image: '/img/Boris-Tech.png',  name: 'Boris Tech',  category: 'PME',        result: 'Automatisation des processus et services informatiques pour PME.',  tech: ['React', 'Node.js'],       link: 'https://boristech.cm' },
  { image: '/img/Stella-Wabo.png', name: 'Stella Wabo', category: 'Portfolio',  result: 'Identité visuelle et portfolio haut de gamme sur-mesure.',           tech: ['WordPress', 'SEO'],       link: 'https://stellawabo.com' },
  { image: '/img/abec.png',        name: 'ABEC',        category: 'Bien-être',  result: 'Application de bien-être avec un impact international mesurable.',   tech: ['Laravel', 'MySQL'],       link: 'https://universalwelfare.org/' },
  { image: '/img/studenapp.png',   name: 'StudentApp',  category: 'Académique', result: 'Gestion académique pour plus de 50 000 étudiants inscrits.',         tech: ['Inertia.js', 'Tailwind'], link: 'https://studentapp.espacecameroun.com/' },
]

// Layout constants
const svgW     = 120   // SVG is narrow, centered — just for trunk + branch endpoints
const cx       = 60    // center x of trunk in SVG
const branchLen = 55   // branch length in SVG px (connects to card)
const nodeSpacing = 220
const treeH    = computed(() => projects.length * nodeSpacing + 80)

const nodeY  = (i: number) => 60 + i * nodeSpacing
const sparkleY = ref(0)
const trunkDrawn = ref(0)
const branchDrawn = ref<boolean[]>(projects.map(() => false))

// Card CSS positioning
const cardStyle = (i: number) => {
  const side   = i % 2 === 0 ? 'right' : 'left'
  const top    = nodeY(i) - 100  // vertically centered on node
  if (side === 'right') return { top: `${top}px`, right: '0', left: 'auto' }
  return { top: `${top}px`, left: '0', right: 'auto' }
}

const handleScroll = () => {
  if (!treeRef.value) return
  const rect   = treeRef.value.getBoundingClientRect()
  const vh     = window.innerHeight
  // Progress: 0 when tree-top hits viewport bottom, 1 when tree-bottom at viewport top
  const progress = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh)))

  trunkDrawn.value = progress * treeH.value
  sparkleY.value   = Math.min(trunkDrawn.value, treeH.value - 5)

  // Reveal branches when trunk reaches their Y
  projects.forEach((_, i) => {
    if (trunkDrawn.value >= nodeY(i) - 10) {
      branchDrawn.value[i] = true
    } else {
      branchDrawn.value[i] = false
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.scroll-reveal { opacity: 0; transform: translateY(30px); transition: opacity .7s ease, transform .7s ease; }
.scroll-reveal.is-visible { opacity: 1; transform: none; }

@media (max-width: 768px) {
  .tree-container {
    min-height: auto !important;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2rem;
  }
  .tree-svg {
    display: none;
  }
  .project-card-wrapper {
    position: relative !important;
    width: 100% !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>
