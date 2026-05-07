<template>
  <main class="relative bg-[var(--background)]">
    <!-- ─── Background: vertical twinkling lines ─── -->
    <div class="fixed inset-0 pointer-events-none z-0 flex justify-around" aria-hidden="true">
      <div v-for="n in 6" :key="n" class="w-px h-full bg-[var(--border)] relative overflow-hidden opacity-40">
        <div class="twinkle-drop absolute top-0 w-full"
             :style="{ animationDelay: `${n * 0.55}s`, animationDuration: `${3.5 + n * 0.4}s` }"></div>
      </div>
    </div>

    <!-- ─── Scroll progress bar ─── -->
    <div class="fixed top-0 left-0 h-[2px] z-50 transition-all duration-100 progress-bar"
         :style="{ width: scrollPct + '%' }" aria-hidden="true"></div>

    <!-- ─── Floating ambient orbs (infinite subtle movement) ─── -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <div class="relative z-10">
      <!-- 01. HERO -->
      <section id="accueil">
        <HeroSection />
      </section>

      <!-- 02. INTERACTIVE CODE EDITOR -->
      <section id="services" class="py-14 bg-[var(--surface)] border-y border-[var(--border)]">
        <div class="max-w-5xl mx-auto px-4">
          <div class="flex items-center gap-4 mb-8 scroll-reveal">
            <p class="font-mono text-sm text-blue-600 shrink-0">// 02. NOTRE STACK</p>
            <div class="h-px bg-[var(--border)] flex-1"></div>
            <span class="text-xs text-[var(--text-muted)] font-mono shrink-0">Cliquez sur un logo pour explorer</span>
          </div>
          <div class="flex gap-2 flex-wrap mb-4 scroll-reveal">
            <button
              v-for="(logo, i) in techLogosData"
              :key="logo.name"
              class="flex items-center gap-2 px-3 py-1.5 border text-xs font-medium transition-all duration-200"
              :class="activeTechTab === i
                ? 'border-orange-500 text-orange-500 bg-orange-500/5'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:border-blue-400 hover:text-blue-400'"
              @click="activeTechTab = i"
            >
              <img :src="logo.src" :alt="logo.name" class="w-4 h-4 object-contain" />
              {{ logo.name }}
            </button>
          </div>
          <div class="scroll-reveal">
            <CodeEditor
              :filename="techLogosData[activeTechTab].filename"
              :language="techLogosData[activeTechTab].language"
              :lines="techLogosData[activeTechTab].code"
            />
          </div>
        </div>
      </section>

      <!-- 03. EXPERTISE -->
      <div id="expertise"><ServicesSection /></div>

      <!-- 04. PORTFOLIO -->
      <div id="projets"><ProjectsSection /></div>

      <!-- 05. METHODOLOGY + TYPING EDITOR -->
      <section class="py-24 relative overflow-hidden bg-[var(--background)]">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Text side -->
          <div class="space-y-6 scroll-reveal">
            <p class="font-mono text-sm text-blue-600">// 05. MÉTHODOLOGIE</p>
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-main)]">
              Un code propre pour des <br/>
              <span class="text-orange-500">résultats concrets</span>
            </h2>
            <p class="text-lg leading-relaxed text-[var(--text-muted)]">
              Chaque ligne de code que nous écrivons est pensée pour la performance, la maintenabilité et la scalabilité. Nos solutions s'adaptent à la croissance de votre entreprise.
            </p>
            <ul class="space-y-3 pt-2">
              <li v-for="item in stackItems" :key="item" class="flex items-center gap-3">
                <div class="w-5 h-5 rounded flex items-center justify-center bg-blue-500/10 text-blue-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span class="text-[var(--text-main)] text-sm font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Typing editor (deploy.sh auto-typed) -->
          <div class="scroll-reveal" ref="terminalRef">
            <CodeEditor
              :filename="'deploy.sh'"
              :language="'sh'"
              :lines="typedLinesForEditor"
            />
            <!-- Terminal output -->
            <div v-if="typingComplete" class="mt-3 bg-[#010409] border border-[#30363d] rounded-lg p-4 font-mono text-xs space-y-1.5">
              <div v-for="(out, i) in terminalOut" :key="i"
                class="flex items-center gap-2 terminal-out-line"
                :class="out.type"
                :style="{ animationDelay: `${i * 0.3}s` }">
                <span class="text-orange-500 font-bold">$</span> {{ out.text }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 05. ABOUT -->
      <div id="apropos"><AboutSection /></div>

      <!-- 06. CTA -->
      <CtaSection />

      <!-- 07. CONTACT -->
      <div id="contact"><ContactSection /></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

import HeroSection      from '../components/sections/HeroSection.vue'
import ServicesSection  from '../components/sections/ServicesSection.vue'
import ProjectsSection  from '../components/sections/ProjectsSection.vue'
import CtaSection       from '../components/sections/CtaSection.vue'
import ContactSection   from '../components/sections/ContactSection.vue'
import AboutSection     from '../components/sections/AboutSection.vue'
import CodeEditor       from '../components/ui/CodeEditor.vue'
import { activeTechTab, techLogosData } from '../utils/techState'

const scrollPct  = ref(0)
const terminalRef = ref<HTMLElement | null>(null)
const isTyping    = ref(false)
const typingComplete = ref(false)
const typedLines  = ref<{ raw: string; html: string }[]>([])

const stackItems = [
  'Architecture modulaire et évolutive',
  'Tests automatisés pour zéro régression',
  'CI/CD — déploiement continu sans interruption',
  'Revue de code et documentation exhaustive',
]

const deploySource: { raw: string; html: string }[] = [
  { raw: '#!/bin/bash',                                  html: '<span class="tok-cm">#!/bin/bash</span>' },
  { raw: '# Déploiement sécurisé — BodyMacs Labs',       html: '<span class="tok-cm"># Déploiement sécurisé — BodyMacs Labs</span>' },
  { raw: '',                                              html: '' },
  { raw: 'echo "Démarrage de la mise en production..."', html: '<span class="tok-kw">echo</span> <span class="tok-str">"Démarrage de la mise en production..."</span>' },
  { raw: 'git pull origin main',                         html: '<span class="tok-fn">git</span> pull origin main' },
  { raw: 'npm install --production',                     html: '<span class="tok-fn">npm</span> install --production' },
  { raw: 'npm run build',                                html: '<span class="tok-fn">npm</span> run build' },
  { raw: 'pm2 reload app',                               html: '<span class="tok-fn">pm2</span> reload app' },
  { raw: 'echo "Application en ligne !"',                html: '<span class="tok-kw">echo</span> <span class="tok-str">"Application en ligne !"</span>' },
]

const terminalOut = [
  { text: 'Build terminé en 2.3s',            type: 'success' },
  { text: 'Fichiers optimisés — gzip: 42kb',  type: 'info' },
  { text: 'Serveur redémarré avec succès',     type: 'success' },
]

// Feed typed lines to CodeEditor
const typedLinesForEditor = computed(() => typedLines.value)

const typeCode = async () => {
  if (isTyping.value || typingComplete.value) return
  isTyping.value = true
  typedLines.value = []

  for (const entry of deploySource) {
    typedLines.value = [...typedLines.value, entry]
    await new Promise(r => setTimeout(r, 350 + Math.random() * 250))
  }

  isTyping.value = false
  typingComplete.value = true
}

const updateScroll = () => {
  const el = document.documentElement
  const scrolled = el.scrollTop || document.body.scrollTop
  const total = el.scrollHeight - el.clientHeight
  scrollPct.value = total > 0 ? Math.round((scrolled / total) * 100) : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })

  // Bidirectional scroll-reveal via IntersectionObserver
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible')
      } else {
        // Only hide if significantly scrolled past (avoid flicker on load)
        const rect = e.target.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          e.target.classList.remove('is-visible')
        }
      }
    })
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.scroll-reveal').forEach(el => io.observe(el))

  // Trigger typing when terminal section visible
  const termIo = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      typeCode()
      termIo.disconnect()
    }
  }, { threshold: 0.4 })
  if (terminalRef.value) termIo.observe(terminalRef.value)
})

onUnmounted(() => window.removeEventListener('scroll', updateScroll))
</script>

<style>
/* ── Scroll reveal (bidirectionnel) ── */
.scroll-reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1);
}
.scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }

/* ── Progress bar ── */
.progress-bar {
  background: linear-gradient(90deg, #f39200, #0a1b9e);
  box-shadow: 0 0 8px rgba(243,146,0,.5);
}

/* ── Twinkling line drops ── */
.twinkle-drop {
  height: 25vh;
  background: linear-gradient(to bottom, transparent, #f39200 40%, transparent);
  animation: fallDown linear infinite;
}
@keyframes fallDown {
  0%   { transform: translateY(-100%); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateY(500%); opacity: 0; }
}

/* ── Ambient orbs ── */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  animation: orbFloat ease-in-out infinite alternate;
}
.orb-1 {
  width: 450px; height: 450px;
  background: radial-gradient(circle, rgba(243,146,0,.07), transparent 70%);
  top: 5%; left: -10%;
  animation-duration: 12s;
}
.orb-2 {
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(10,27,158,.08), transparent 70%);
  top: 40%; right: -8%;
  animation-duration: 15s;
  animation-delay: 3s;
}
.orb-3 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(243,146,0,.05), transparent 70%);
  bottom: 10%; left: 30%;
  animation-duration: 10s;
  animation-delay: 6s;
}
@keyframes orbFloat {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(30px, -25px) scale(1.06); }
}

/* ── Terminal output ── */
.terminal-out-line { animation: fadeInUp .4s ease both; }
@keyframes fadeInUp { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:none; } }
.terminal-out-line.success { color: #28c840; }
.terminal-out-line.info    { color: #79c0ff; }
</style>
