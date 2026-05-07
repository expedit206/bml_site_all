<template>
  <section ref="heroRef" class="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-10">
    <div class="relative z-10 max-w-7xl mx-auto px-4 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- LEFT: Text content -->
        <div class="space-y-8 scroll-reveal">
          <p class="font-mono text-sm text-blue-600 mb-2">// 01. INNOVATION DIGITALE</p>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[var(--text-main)]">
            Concevons ensemble <br />
            <span class="text-orange-500">votre futur numérique</span>
          </h1>
          <p class="text-lg max-w-lg leading-relaxed text-[var(--text-muted)]">
            Nous accompagnons les entreprises ambitieuses dans la création de solutions technologiques sur mesure, pensées pour l'utilisateur et taillées pour la performance.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <RouterLink to="/contact" class="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all shadow-sm">
              Démarrer un projet <ArrowRight :size="18" />
            </RouterLink>
            <RouterLink to="/realisations" class="px-6 py-3 border border-[var(--border)] text-[var(--text-main)] font-medium rounded-lg flex items-center justify-center gap-2 hover:border-orange-500 transition-colors bg-[var(--surface)]">
              Découvrir nos travaux <ExternalLink :size="16" />
            </RouterLink>
          </div>
        </div>

        <!-- RIGHT: Ecosystem -->
        <div class="scroll-reveal">
          <div class="logo-ecosystem relative border border-[var(--border)] rounded-[1.5rem] bg-gradient-to-br from-[var(--surface)] to-[var(--background)] shadow-sm overflow-hidden h-[320px] md:h-[420px]">

            <!-- SVG layer - Full container size -->
            <svg ref="svgRef" class="absolute inset-0 w-full h-full pointer-events-none" :viewBox="`0 0 ${W} ${H}`">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#f39200" stop-opacity="0.8"/>
                  <stop offset="100%" stop-color="#0a1b9e" stop-opacity="0.3"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <!-- Animated particle markers -->
                <marker id="dot" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="6" markerHeight="6">
                  <circle cx="3" cy="3" r="2" fill="#f39200"/>
                </marker>
              </defs>

              <!-- Decorative background waves (static, subtle) -->
              <path d="M0,100 Q100,80 200,120 T400,100 T600,120" stroke="#f39200" stroke-opacity="0.05" stroke-width="2" fill="none"/>
              <path d="M0,200 Q100,180 200,220 T400,200 T600,220" stroke="#0a1b9e" stroke-opacity="0.04" stroke-width="2" fill="none"/>
              <path d="M0,320 Q100,300 200,340 T400,320 T600,340" stroke="#f39200" stroke-opacity="0.04" stroke-width="2" fill="none"/>

              <!-- Connecting branches: center → each logo -->
              <g v-for="(logo, i) in logos" :key="`branch-${i}`">
                <!-- Outer glow path (thicker, transparent) -->
                <path
                  :d="branchPath(logo)"
                  stroke="#f39200" stroke-opacity="0.08" stroke-width="6" fill="none"
                />
                <!-- Main path -->
                <path
                  :ref="el => { if (el) branchEls[i] = el as SVGPathElement }"
                  :d="branchPath(logo)"
                  stroke="url(#lineGrad)" stroke-width="1.5" fill="none"
                  filter="url(#glow)"
                  class="branch-main"
                />
                <!-- Animated travelling dot -->
                <circle r="3" fill="#f39200" filter="url(#glow)" :class="`travel-dot-${i}`" opacity="0"/>
              </g>
            </svg>

            <!-- Center BML logo -->
            <div class="absolute z-10 flex items-center justify-center" :style="centerStyle">
              <!-- Outer pulse rings -->
              <div class="absolute rounded-full border border-orange-500/20 animate-ping" style="width:90px;height:90px;animation-duration:3s;"></div>
              <div class="absolute rounded-full border border-orange-500/10 animate-ping" style="width:120px;height:120px;animation-duration:3s;animation-delay:1s;"></div>
              <!-- Logo -->
              <div class="relative w-16 h-16  flex items-center justify-center overflow-hidden">
                <img src="/img/BML/bodymacs-clair-final-svg.svg" alt="BML" class="w-full h-full object-contain dark:hidden p-1"/>
                <img src="/img/BML/bodymacs-sombre-final-svg-sans-fond.svg" alt="BML" class="w-full h-full object-contain hidden dark:block"/>
              </div>
            </div>

            <!-- Tech Logos (positioned absolutely, same grid as SVG coords) -->
            <button
              v-for="(logo, i) in logos"
              :key="logo.name"
              class="absolute z-20 flex flex-col items-center gap-1.5 group transition-all duration-300 hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              :style="logoStyle(logo)"
              @click="activeTechTab = i"
            >
              <div
                class="p-2.5 bg-[var(--background)] border rounded-full transition-all duration-300 shadow-sm"
                :class="activeTechTab === i ? 'border-orange-500 rounded-full shadow-orange-500/20 shadow-md' : 'border-[var(--border)] group-hover:border-blue-400'"
              >
                <img :src="logo.src" :alt="logo.name" class="w-7 h-7 object-contain"/>
              </div>
              <span class="text-[11px] font-medium transition-colors" :class="activeTechTab === i ? 'text-orange-500' : 'text-[var(--text-muted)]'">
                {{ logo.name }}
              </span>
            </button>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, ExternalLink } from 'lucide-vue-next'
import { animate } from 'animejs'
import { activeTechTab } from '../../utils/techState'

// SVG viewbox dimensions
const W = 600
const H = 420

// Center point (exact middle of the container)
const CX = W / 2    // 300
const CY = H / 2    // 210

const heroRef = ref<HTMLElement | null>(null)
const svgRef = ref<SVGElement | null>(null)
const branchEls = ref<SVGPathElement[]>([])

// Logo data with precise SVG coordinates (% of W/H)
const logos = [
  { name: 'Vue.js',   src: '/img/logo/vue-js-seeklogo.svg',       x: 0.12, y: 0.12, filename: 'App.vue',    code: vueCode()   },
  { name: 'React',    src: '/img/logo/react-seeklogo.svg',         x: 0.88, y: 0.12, filename: 'App.jsx',    code: reactCode() },
  { name: 'Node.js',  src: '/img/logo/node-js-seeklogo.svg',       x: 0.08, y: 0.50, filename: 'server.js',  code: nodeCode()  },
  { name: 'Python',   src: '/img/logo/python-seeklogo.svg',         x: 0.20, y: 0.88, filename: 'model.py',   code: pythonCode()},
  { name: 'Tailwind', src: '/img/logo/tailwind-css-seeklogo.svg',   x: 0.80, y: 0.88, filename: 'style.css',  code: tailwindCode()},
]

// Convert logo coord to actual SVG px
const lx = (logo: typeof logos[0]) => logo.x * W
const ly = (logo: typeof logos[0]) => logo.y * H

// CSS style to position each logo button absolutely (centre of the button on the point)
const logoStyle = (logo: typeof logos[0]) => ({
  left: `${logo.x * 100}%`,
  top: `${logo.y * 100}%`,
})

const centerStyle = computed(() => ({
  left: `${(CX / W) * 100}%`,
  top: `${(CY / H) * 100}%`,
  transform: 'translate(-50%, -50%)',
  width: '64px',
  height: '64px',
}))

// Build a smooth cubic bezier path from center → logo
// Control points curve away from a straight line for elegance
const branchPath = (logo: typeof logos[0]) => {
  const x2 = lx(logo)
  const y2 = ly(logo)

  // Midpoint
  const mx = (CX + x2) / 2
  const my = (CY + y2) / 2

  // Perpendicular offset to bend the branch
  const dx = x2 - CX
  const dy = y2 - CY
  const len = Math.sqrt(dx * dx + dy * dy)
  const perp = { x: -dy / len, y: dx / len }
  const bend = len * 0.2

  const cp1x = CX + dx * 0.3 + perp.x * bend
  const cp1y = CY + dy * 0.3 + perp.y * bend
  const cp2x = x2 - dx * 0.3 + perp.x * bend
  const cp2y = y2 - dy * 0.3 + perp.y * bend

  return `M${CX},${CY} C${cp1x},${cp1y} ${cp2x},${cp2y} ${x2},${y2}`
}

// Animate travelling dot along a path
const animateTravelDot = (pathEl: SVGPathElement, dotClass: string, delay: number) => {
  const len = pathEl.getTotalLength()
  const dot = document.querySelector<SVGCircleElement>(`.${dotClass}`)
  if (!dot) return

  const loop = () => {
    animate(dot, {
      opacity: [0, 1, 1, 0],
      motionPath: { path: pathEl, align: pathEl },
      duration: 2500,
      delay,
      ease: 'linear',
      complete: loop
    })
  }

  // Fallback: manual position update using offset approach
  let t = 0
  const step = () => {
    t = (t + 0.004) % 1
    const pt = pathEl.getPointAtLength(t * len)
    dot.setAttribute('cx', String(pt.x))
    dot.setAttribute('cy', String(pt.y))
    dot.setAttribute('opacity', String(t < 0.05 || t > 0.95 ? Math.min(t / 0.05, (1 - t) / 0.05) : 1))
    requestAnimationFrame(step)
  }
  setTimeout(step, delay)
}

onMounted(() => {
  setTimeout(() => {
    // Draw branches with stroke animation
    branchEls.value.forEach((path, i) => {
      if (!path) return
      const len = path.getTotalLength()
      path.style.strokeDasharray = String(len)
      path.style.strokeDashoffset = String(len)
      animate(path, {
        strokeDashoffset: [len, 0],
        duration: 1800,
        delay: i * 200,
        ease: 'inOutSine',
      })
      // Start travelling dot
      animateTravelDot(path, `travel-dot-${i}`, 2000 + i * 300)
    })
  }, 400)
})

// Code snippets
function vueCode() {
  return [
    `<span class="text-[#ff7b72]">&lt;script setup&gt;</span>`,
    `  <span class="text-[#ff7b72]">import</span> { ref } <span class="text-[#ff7b72]">from</span> <span class="text-[#a5d6ff]">'vue'</span>`,
    `  <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">agency</span> = ref(<span class="text-[#a5d6ff]">'BodyMacs Labs'</span>)`,
    `<span class="text-[#ff7b72]">&lt;/script&gt;</span>`,
    `<span class="text-[#ff7b72]">&lt;template&gt;</span>`,
    `  <span class="text-[#79c0ff]">&lt;h1&gt;</span>{{ agency }} propulse vos idées<span class="text-[#79c0ff]">&lt;/h1&gt;</span>`,
    `<span class="text-[#ff7b72]">&lt;/template&gt;</span>`,
  ]
}
function reactCode() {
  return [
    `<span class="text-[#ff7b72]">import</span> { useState } <span class="text-[#ff7b72]">from</span> <span class="text-[#a5d6ff]">'react'</span>;`,
    `<span class="text-[#ff7b72]">export default function</span> <span class="text-[#d2a8ff]">App</span>() {`,
    `  <span class="text-[#ff7b72]">const</span> [partner] = <span class="text-[#d2a8ff]">useState</span>(<span class="text-[#a5d6ff]">'BodyMacs'</span>);`,
    `  <span class="text-[#ff7b72]">return</span> (`,
    `    <span class="text-[#79c0ff]">&lt;div&gt;</span>Partenaire: {partner}<span class="text-[#79c0ff]">&lt;/div&gt;</span>`,
    `  );`,
    `}`,
  ]
}
function nodeCode() {
  return [
    `<span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">express</span> = <span class="text-[#d2a8ff]">require</span>(<span class="text-[#a5d6ff]">'express'</span>);`,
    `<span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">app</span> = <span class="text-[#d2a8ff]">express</span>();`,
    `<span class="text-[#79c0ff]">app</span>.<span class="text-[#d2a8ff]">get</span>(<span class="text-[#a5d6ff]">'/api/health'</span>, (req, res) => {`,
    `  res.<span class="text-[#d2a8ff]">json</span>({ <span class="text-[#79c0ff]">status</span>: <span class="text-[#a5d6ff]">'optimal'</span>, <span class="text-[#79c0ff]">uptime</span>: <span class="text-[#79c0ff]">99.99</span> });`,
    `});`,
    `<span class="text-[#79c0ff]">app</span>.<span class="text-[#d2a8ff]">listen</span>(<span class="text-[#79c0ff]">3000</span>);`,
  ]
}
function pythonCode() {
  return [
    `<span class="text-[#ff7b72]">import</span> pandas <span class="text-[#ff7b72]">as</span> pd`,
    `<span class="text-[#ff7b72]">from</span> sklearn <span class="text-[#ff7b72]">import</span> train_test_split`,
    `<span class="text-[#8b949e]"># Analyse prédictive</span>`,
    `<span class="text-[#79c0ff]">data</span> = pd.<span class="text-[#d2a8ff]">read_csv</span>(<span class="text-[#a5d6ff]">'data.csv'</span>)`,
    `<span class="text-[#79c0ff]">model</span> = <span class="text-[#d2a8ff]">train_model</span>(data)`,
    `<span class="text-[#d2a8ff]">print</span>(<span class="text-[#a5d6ff]">'Précision:'</span>, model.score)`,
  ]
}
function tailwindCode() {
  return [
    `<span class="text-[#ff7b72]">@tailwind</span> base;`,
    `<span class="text-[#ff7b72]">@tailwind</span> components;`,
    `<span class="text-[#ff7b72]">@tailwind</span> utilities;`,
    ``,
    `<span class="text-[#8b949e]">/* Composant bouton */</span>`,
    `<span class="text-[#79c0ff]">.btn-primary</span> {`,
    `  <span class="text-[#ff7b72]">@apply</span> bg-orange-500 text-white px-6 py-2 rounded-lg;`,
    `}`,
  ]
}

// Export logos for use in Home.vue editor section
defineExpose({ logos })
</script>
