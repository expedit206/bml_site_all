<template>
  <section ref="sectionRef" class="cta-section py-32 relative overflow-hidden">
    <!-- Animated gradient background -->
    <div class="cta-bg absolute inset-0 pointer-events-none"></div>
    <!-- Wave SVG -->
    <svg class="wave-top absolute top-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
      <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="var(--surface)" opacity="0.5"/>
    </svg>

    <div class="max-w-5xl mx-auto px-4 relative z-10 text-center">
      <p class="font-mono text-sm text-blue-600 mb-6 scroll-reveal">// 06. COLLABORATION</p>

      <h2 class="cta-title text-4xl md:text-7xl font-bold tracking-tight leading-tight mb-6 scroll-reveal">
        Prêt à transformer votre idée <br class="hidden md:block" />
        <span class="text-orange-500">en produit d'exception ?</span>
      </h2>

      <p class="cta-desc text-lg max-w-xl mx-auto mb-12 leading-relaxed text-[var(--text-muted)] scroll-reveal">
        Rejoignez nos <strong>30+ partenaires</strong>.<br/>
        Discutons de vos ambitions technologiques dès aujourd'hui.
      </p>

      <div class="cta-btns flex flex-col sm:flex-row gap-6 items-center justify-center scroll-reveal">
        <RouterLink to="/contact"
          class="cta-primary-btn px-10 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all">
          Planifier un appel <Phone :size="20"/>
        </RouterLink>
        <RouterLink to="/contact"
          class="cta-secondary-btn px-10 py-4 rounded-xl font-semibold flex items-center gap-3 border-2 transition-all">
          Nous écrire <Mail :size="20"/>
        </RouterLink>
      </div>

      <!-- Floating badges -->
      <div class="floating-badges mt-16 flex flex-wrap gap-4 justify-center scroll-reveal">
        <div v-for="b in badges" :key="b" class="badge-float">
          <span class="badge-inner px-4 py-2 rounded-full text-sm font-medium">{{ b }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Phone, Mail } from 'lucide-vue-next'

const badges = ['Devis gratuit', 'Réponse 24h', 'Sans engagement', 'Consultation offerte', 'Support continu']
</script>

<style scoped>
.cta-section { background: var(--background); }
.cta-bg {
  background: radial-gradient(ellipse at center, rgba(243,146,0,.07) 0%, transparent 70%),
              radial-gradient(ellipse at top right, rgba(10,27,158,.05) 0%, transparent 60%);
}

.cta-title { color: var(--text-main); }
.cta-desc { color: var(--text-muted); }

.cta-primary-btn {
  background: var(--primary); color: white;
  box-shadow: 0 8px 30px rgba(243,146,0,.4);
}
.cta-primary-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(243,146,0,.55); }

.cta-secondary-btn {
  border-color: var(--border); color: var(--text-main);
  background: var(--surface);
}
.cta-secondary-btn:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-3px); }

.badge-inner {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-muted);
  transition: all .3s;
}
.badge-float:hover .badge-inner {
  border-color: var(--primary);
  color: var(--primary);
  background: rgba(243,146,0,.08);
}
</style>
